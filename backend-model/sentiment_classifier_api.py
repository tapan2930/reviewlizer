import json
from fastapi import FastAPI

import uvicorn
import pickle
import nltk

from pydantic import BaseModel
from typing import List, final
nltk.download('stopwords')
app = FastAPI(debug=True)

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
    #converting predicted values to json format
    pred = json.dumps(pred.tolist())
    return pred

if __name__ == "__main__":
    uvicorn.run(app,host="127.0.0.1",port="8000")