1.웹프로그래밍 기초단계
=============
   1.몽고 db를 이용한 간단한 예시이다.
 
  ```py
  db = client.dbsparta
  db.testname.insert_one(data)
  ```
  제일 처음 db에 데이터베이스를 설정해준다음
  db안의 testname의 안에 data하나를 입력해주는 방식이다.
  
 2. 지니뮤직의 사이트 크롤링
  >BeautifulSoup을 이용한 크롤링
  ```py
  import requests
  from bs4 import BeautifulSoup

  headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
  data = requests.get('https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1',headers=headers)
  ```
  > >간단한 설정완료
  
  > 순위 크롤링
  > >순위를 크롤링하다보면
  > >```py
  > >ranks = tr.find(class_='number').get_text()
  > >```
  > >여기를 크롤링한다면...
  > >```
  > >1
  > >
  > >      1상승
> >
> >
  > >      2
> >
> >
> >        2상승
> >
> >
  > >      3
> >
> >
 > >       유지
> >
> >
> >        4
> >
> >
> >       new
> >```
> >로 나오는것을 알수있을것이다.
> >이유를 살펴 본다면 지니뮤직의 순위쪽 부분이다.
> >
> >![image](https://user-images.githubusercontent.com/86656581/124425299-50cdbb80-dda3-11eb-9997-d40f547bcc23.png)
> > 
> > 우리는 랭크의 제일 처음 데이터만 가져오고싶은데 밑의 하위 태그의 데이터까지 가져온다.
> > 해당 코드의 해결방법은 
> > ```py
> > get_text('\n', strip=True)
> > ```
> > 으로 해당 택스트를 \n기준으로 나누어 받는다.
> > ```
> > 1
> >1
> >상승
> >2
> >2
> >상승
> >3
> >유지
> >4
> >new
> >```
> >다음 해당 텍스트를 \n기준으로 리스트로 받아온다.
> >```py
> >rank = ranks.split('\n')
> >['1', '1', '상승']
> >['2', '2', '상승']
> >['3', '유지']
> >['4', 'new']
> > ```
> > 그리고 우리에게 필요한 리스트의 가장 첫번째 순위를 가져와서 썻다.
> > 
> > 

  

  
