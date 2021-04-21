import bs4
import requests
import lxml
import math
import re
import numpy as np
from concurrent.futures import ThreadPoolExecutor, as_completed


# Constants  Variables 
MAX_REVIEWS = 2000
REVIEWS_PER_PAGE = 10

# Helper Functions

def check_url(url: str):
    if url == None:
        return None
    return 1    

def process_url(url: str):
    """
    Function to validate url for scraping
    input=>output: url(string) => url(string)
    """
    url = re.search(r".+(\/dp\/).+(\/)", url)
    status = check_url(url)
    if status == None:
        print("Please enter the proper Url or try again later")
        print("Exiting the application....")
        exit()
    url = url.group(0)
    url = re.sub(r"(\/dp\/)","/product-reviews/", url)
    return url


def get_request(path:str):
    """
    Get the request from the url passed in path -> str
    Function requests GET for the input provided and output response
    input => output : url(string) => res (request.response)
    """
    try:
        res = requests.get(path)
        while(res.status_code != 200):
            res = requests.get(path)
        return res
    except:
        print("Error in gettng request")    
    return None


def get_data(soup:bs4.BeautifulSoup):
    """
    Getting reviews for the soup provided
    output: list of reviews
    """
    rows = soup
    reviews_list = []

    for row in rows:
        reviews = row.find('span', {'class':'a-size-base review-text review-text-content'}).text
        # star = row.find("span", {"class": "a-icon-alt"}).text
        # date = row.find("span", {"class": "a-size-base a-color-secondary review-date"}).text
        # data = {"Reviews":reviews,
        #          "Date":date[21::],
        #          "Rating":star[0]
        #          } 
        reviews_list.append(reviews.strip())          

    return reviews_list   


def get_reviews_information(url:str):
    
    """
    Getting detials(total reviews, total rating, total pages for product url)
    input=> output: url(string) => list   
    """
    res = get_request(url)
    soup = bs4.BeautifulSoup(res.text,"lxml")
    review_details = soup.find("div",{"class":"a-row a-spacing-base a-size-base"}).text
    review_details = review_details.strip().split()
    total_reviews = int("".join(review_details[4].split(",")))
    total_rating = int("".join(review_details[0].split(",")))
    total_threads = math.ceil(total_reviews/REVIEWS_PER_PAGE)
    return [total_reviews,total_rating,total_threads]


def scrape(url:str):
    """
    Scrapes the reviews from the resuests object
    """
    res = get_request(url)
    soup = bs4.BeautifulSoup(res.text,"lxml")
    rows = soup.find_all("div",{"class":"a-section celwidget"})
    data = get_data(rows)
    return data


def URL_GEN(url:str):

    """
    Function for url Generation needed for scraping of data
    input => output : url(string) => urls(list of urls)
    """

    adder = "ref=cm_cr_getr_d_paging_btm_next_2?ie=UTF8&reviewerType=avp_only_reviews&pageNumber={1}"
    final_url = url+adder
    review_details = get_reviews_information(final_url)
    total_reviews = review_details[0]
    total_pages = None

    if total_reviews > MAX_REVIEWS:
        total_pages = math.ceil(MAX_REVIEWS/10)
    else:
        total_pages = review_details[2]

    urls = [url+f"ref=cm_cr_getr_d_paging_btm_next_2?ie=UTF8&reviewerType=avp_only_reviews&pageNumber={page+1}" for page in range(total_pages) ]
    return urls


def get_reviews_from_url(url:str):
    """
    The starting function for scraping. This is a multi-threaded function.
    Input => output: (url)string  => list of reviews
    """
    url = process_url(url)
    urls = URL_GEN(url)
    
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(scrape, url) for url in urls ]
        results = []
        for result in as_completed(futures):
            results.append(result.result())

    shape = len(results) * 10
    arr = np.array(results)
    arr = arr.reshape(shape)    

    return arr.tolist()

r = main("https://www.amazon.in/OnePlus-Mirror-Black-128GB-Storage/dp/B085J1CPD1/ref=sr_1_2?crid=4BG07GLT6YW8&dchild=1&keywords=oneplus+nord&qid=1606831284&sprefix=oneplus%2Caps%2C281&sr=8-2")   
print(r)
