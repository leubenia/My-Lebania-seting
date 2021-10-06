# jwt 간단 암호화

```js
const token = jwt.sign({test:true},'testkey');
```
간단하게 암호화 하는방법...!

### 복호화
```js
const decodel = jwt.verify(token,"testkey");
```
당연히 토큰과 시크릿키가 안맞으면 틀립니다..

### 간단 디코딩
```js
const decodel2 = jwt.decode(token)
```
그냥 이렇게하면 값은 잘나온다. 하지만 검증은 안된다.