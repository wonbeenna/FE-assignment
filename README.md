## 기업과제 레포

---

### 기본 3000 포트

### .env

```js
REACT_APP_API = `TEST API Host address`;
```

### .prettierrc

```js
{
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  proseWrap: 'never',
}
```

### 1. 헤더(메뉴)

- 서비스
- 로그인(토큰O) -> 마이페이지, 로그아웃
- 로그인(토큰X) -> 회원가입, 로그인

### 2. 서비스 URL : /

- 로그인(토큰O) -> 주문 성공 alert
- 로그인(토큰X) -> 로그인 요청 alert -> /sign-up 이동

### 3. 회원가입 URL : /sign-up

- API 예시

```json
request
{
  "email": "test@test.test",
  "password": "testtest",
  "mobile": "01000000000",
}

response
{
  "token": "123456789"
}
```

- 토큰 값은 전역 상태 관리
- 이메일 유효성 검사 -> 유효하지 않은 경우 -> focus, input 테두리 빨강, alert 발생 후, 필드로 cursor 이동

### 4. 로그인 URL : /login

- API 예시

```json
request
{
  "email": "test@test.test",
  "password": "testtest"
}

response
{
  "token": "123456789"
}
```

- 비밀번호 8자 미만일 시 401 응답 -> 비밀번호 확인 alert

### 5. 마이 페이지 URL : /mypage/order

- API 예시

```json
{
  "totalPages": 3,
  "currentPage": 0,
  "content": [
    {
      "id": 1,
      "itemName": "아이템1"
    },
    {
      "id": 2,
      "itemName": "아이템2"
    },
    {
      "id": 3,
      "itemName": "아이템3"
    },
    {
      "id": 4,
      "itemName": "아이템4"
    },
    {
      "id": 5,
      "itemName": "아이템5"
    },
    {
      "id": 6,
      "itemName": "아이템6"
    },
    {
      "id": 7,
      "itemName": "아이템7"
    },
    {
      "id": 8,
      "itemName": "아이템8"
    },
    {
      "id": 9,
      "itemName": "아이템9"
    },
    {
      "id": 10,
      "itemName": "아이템10"
    }
  ]
}
```

- 기본 10개씩 노출 -> 페이징

### 6. 마이 페이지 상세 URL /mypage/order/{id}

- API 예시

```json
{
  "id": 1,
  "itemName": "아이템1"
}
```

- id 값을 URL에 입력시, 해당 주문에 대한 상세 내용을 볼 수 있음
