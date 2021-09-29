import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')
def cring():
    trs = soup.select('#body-content > div.newest-list > div > table > tbody > tr')
    docs = []
    for tr in trs:
        ## tr 이 비어있지 않다면.
        if tr is not None:
            ##class값이 number이면 안에있는 텍스트를 가져온다.
            ranks = tr.find(class_='number').get_text('\n', strip=True)
            ##각 텍스트를 리스트로 나눈다.
            rank = ranks.split('\n')
            title = tr.select_one('td.info > a.title.ellipsis').text.strip()
            name = tr.select_one('td.info > a.artist.ellipsis').text
            doc = {
                    "rank" : rank[0],
                    "title" : title,
                    'name' : name
                }
            docs.append(doc)
    return docs
a = cring()
for b in a:
    print(b)
