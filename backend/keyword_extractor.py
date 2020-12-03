import numpy as np 
import yake

# print('-'*10)
custom_kwextractor = yake.KeywordExtractor(lan="en", n=4, dedupLim=0.9, windowsSize=4, top=15)
# custom_kwextractor_neg = yake.KeywordExtractor(lan="en", n=4, dedupLim=0.8, windowsSize=3, top=10)

    
def extract_keywords(reviews:list,labels:list):
    '''
    Input: Reviews in list, list of labels of reviews negative:0, positive:1
    return: keywords of positive reviews, keywords of negative reviews
    '''
    positive_reviews = ""
    negative_reviews = ""
    for rev,lbl in zip(reviews,labels):
        if lbl == 0:
            negative_reviews  = negative_reviews + " " + rev
        else:
            positive_reviews = positive_reviews + " " + rev
        
    
    positive_keywords = np.array(custom_kwextractor.extract_keywords(positive_reviews))
    negative_keywords = np.array(custom_kwextractor.extract_keywords(negative_reviews))
    return positive_keywords[:,1],negative_keywords[:,1]
    
