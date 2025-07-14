import requests
from bs4 import BeautifulSoup

def scrape_headlines():
    url = "https://news.ycombinator.com"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    headlines = soup.select('.titleline > a')
    return [{"title": h.get_text(), "link": h['href']} for h in headlines]
