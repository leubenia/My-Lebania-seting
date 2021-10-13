# MYSQL
오늘은  SQL쿼리문에 대해 공부를 하고있다.
간단한 SQL쿼리문 정리
### 테이블 생성
```
CREATE table 테이블;
```

### 구조
```
DESC 테이블/ EXPLAIN 테이블
```
### 이름변경
```
rename table 테이블A to 테이블B
```

### 테이블 삭제
```
drop table 테이블
```

### 레코드 삽입
```
INSERT into 테이블 values(v1, v2)
INSERT into 테이블(c1, c2) values(v1 ,v2)
```
### 조회
```
SELECT * FROM 테이블
```

### 정렬
```
SELECT * FROM 테이블 
ORDER BY 컬럼 ASC
```
ASC 오름차순 정렬
DESC 내림차순

### 수정
```
UPDATE 테이블 SET c1 = C1 WHERE 조건
```
### 삭제
```
DELETE FROM 테이블 WHERE 조건
```

### 컬럼 추가
```
ALTER TABLE 테이블 ADD C4 varchar(255) not null
```

### 컬럼 삭제
```
ALTER TABLE 테이블 drop c2
```

### 컬럼 수정
```
ALTER TABLE 테이블 MODIFY c3 char(50) not null
```
