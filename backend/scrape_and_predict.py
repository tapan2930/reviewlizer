from scrape import get_reviews_from_url
from keyword_extractor import extract_keywords
import json
import requests
reviews = get_reviews_from_url("https://www.amazon.in/OnePlus-Mirror-Black-128GB-Storage/dp/B085J1CPD1/ref=sr_1_2?crid=4BG07GLT6YW8&dchild=1&keywords=oneplus+nord&qid=1606831284&sprefix=oneplus%2Caps%2C281&sr=8-2")   
print('Done Scraping...')

print('Predicting Values...')
data_json = json.dumps(reviews)
payload = json.dumps({'reviews': reviews})
response= requests.post("http://127.0.0.1:8000/api/classify", data=payload)
labels = json.loads(response.json())
# print(labels)
pos_kw,neg_kw = extract_keywords(reviews,labels)
print(f"Positive keyword: {pos_kw}\n Negative Keywords: {neg_kw}")
