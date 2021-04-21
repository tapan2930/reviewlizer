import json
from fastapi import FastAPI

import uvicorn
import pickle
import nltk
from keyword_extractor import extract_keywords
from pydantic import BaseModel
from typing import List, final
nltk.download('stopwords')
app = FastAPI(debug=True)
import mxnet as mx
import json


#
#load model
loaded_model = pickle.load(open('sentiment_classification', 'rb'))

class data_format(BaseModel):
    reviews: List[str]
    
    
#cleaning text from reviews
#removing stop words and punctuations
#--------------------------------------------------------
stopwords = nltk.corpus.stopwords.words('english')
ps = nltk.PorterStemmer()
def clean(text):
    wn = nltk.WordNetLemmatizer()
    stopword = nltk.corpus.stopwords.words('english')
    tokens = nltk.word_tokenize(text)
    lower = [word.lower() for word in tokens]
    no_stopwords = [word for word in lower if word not in stopword]
    no_alpha = [word for word in no_stopwords if word.isalpha()]
    lemm_text = [wn.lemmatize(word) for word in no_alpha]
    
    clean_text = [wrd for wrd in lemm_text if len(wrd) <12]
    return clean_text
#-----------------------------------------------------------
#load tfidf 
tfidf_vect = pickle.load(open('new_tfidf','rb'))

@app.post('/api/classify')
async def classify_reviews(data: data_format):
    #getting reviews
    reviews = data.reviews
    
    #transforming into tfidf vectors
    reviews_tfidf = tfidf_vect.transform(reviews)
    
    #converting to array
    final_reviews = reviews_tfidf.toarray()
    
    #predicting values  
    pred = loaded_model.predict(final_reviews)
    
    # extracting keywords
    pos_kw,neg_kw = extract_keywords(reviews,pred)
    
    sentimentDetails = [ 
            {
                "id":"positive",
                "label":"Positive",
                "value":str(len([val for val in pred if val == 1]))
            },
            {
                "id":"negative",
                "label":"Negative",
                "value":str(len([val for val in pred if val == 0]))
            },
            
            {
            "positive": ','.join(txt for txt in pos_kw),
            "negative": ','.join(txt for txt in neg_kw) 
            }
            ]
            
    
            
    json_str = json.dumps({'sentimentDetails': sentimentDetails})
    #converting predicted values to json format
#    final_json = json.dumps()
    return json_str

if __name__ == "__main__":
    uvicorn.run(app,host="127.0.0.1",port="8000")
