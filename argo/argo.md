# argo workflow 정리

## argo

컴퓨팅 자원을 띄우는 작업\n

docker hub, 테스트, argo cd 트리거** 등등 작업을 하는공간

## argo event

git 에서 훅으로 event를 전달 받음

event 리스너 역활 **

## argo CD

실제 헬름 차트와 서버를 싱크를 맞춰줌

기본적으로 10분마다 체크를 하지만 argo workflow 에서 트리거를 넣어준다.

트리거를 안넣으면 에러가 날듯. 하지만 그냥 무시해도됨.
