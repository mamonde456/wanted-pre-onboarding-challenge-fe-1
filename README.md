# wanted-pre-onboarding-challenge-fe-1

원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 목차

1. [메인홈](#메인홈)
2. [작동 화면](#작동-화면)
3. [실행](#실행)
4. [진행 기간](#진행-기간)
5. [사용한 기술 스택](#사용한-기술-스택)
6. [폴더 구조](#폴더-구조)
7. [구현 기능](#구현-기능)
8. [목표](#목표)
9. [개선 사항](#개선-사항)
10. [과제 진행 시 주안점 작성](#과제-진행-시-주안점-작성)
11. [한계점](#한계점)
12. [프리온보딩 회고](#프리온보딩-회고)

## 메인홈

<img src="https://user-images.githubusercontent.com/81732659/213428613-aa383acb-a7aa-420c-90d5-96d6c12fcce6.png">

## 작동 화면

### 로그인/회원가입

<img src="https://user-images.githubusercontent.com/81732659/213429039-52df5118-12ae-47c9-bd8d-5072a2d71c0b.gif">

### 할 일 작성하기/할 일 수정/할 일 삭제

<img src="https://user-images.githubusercontent.com/81732659/213429049-d5d320fb-ea46-41d1-8c72-b23a00239044.gif">

## 실행 방법

### front

`git clone` 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.

```
cd client && npm start
//http://localhost:3000
```

### back

`git clone` 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.<br>(사전 과제 레포로 제공됨.)

```
cd server && npm start
//http://localhost:8080
```

## 진행 기간

- 사전 과제 기능 구현: 2023.1.5. ~ 2023.1.6
- css style: 2023.1.9

- 기능 개선: 2023.1.11 ~ 2023.1.20

### signIn/signUp

[사전과제: 로그인/회원가입 블로그 기록 보러가기](https://velog.io/@mamonde456/원티드-프리온보딩-프론트엔드-챌린지-사전-과제-로그인회원가입)
<br>

### todo list

[사전과제: 할 일 생성 블로그 기록 보러가기](https://velog.io/@mamonde456/원티드-프리온보딩-프론트엔드-챌린지-사전-과제-todo-list)
<br>

## 사용한 기술 스택

- react
- typescript
- react-query
- recoil
- styled-components

### 사용한 라이브러리 설명

> **react-query**
>
> > 리액트 쿼리가 데이터를 불러오는 방식이 편하여 사용했습니다. 이미 캐싱된 데이터가 있다면 해당 데이터를 사용하고, 데이터를 갱신할 때는 query key를 변경하거나 query key의 유효성을 없애주는 방식이 좋았습니다.

> **recoil**
>
> > 상태 관리 툴로는 recoil을 사용했습니다. redux도 있었으나, 둘 다 사용해본 경험으로는 코드의 작성법은 recoil이 더 편리하고 손에 익숙하여 선택했습니다. 또한, redux를 recoil처럼 간편하게 작성하려면 react-recoil이라는 별도의 라이브러리를 설치해야 하는 번거로움 때문도 있습니다.

> **styled-components**
>
> > 한 파일 내에서 스타일을 다룰 수 있는 점과 props를 이용하여 데이터를 전달하는 방식이 좋고, 손에 익숙하여 선택했습니다.

## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜auth.ts
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📜createTodo.ts
 ┃ ┃ ┣ 📜deleteTodo.ts
 ┃ ┃ ┣ 📜getTodoById.ts
 ┃ ┃ ┣ 📜getTodos.ts
 ┃ ┃ ┗ 📜updateTodo.ts
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂views
 ┃ ┃ ┃ ┣ 📜SignInView.tsx
 ┃ ┃ ┃ ┗ 📜SignUpView.tsx
 ┃ ┃ ┣ 📜SignIn.tsx
 ┃ ┃ ┗ 📜SignUp.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂view
 ┃ ┃ ┃ ┣ 📜HeaderView.tsx
 ┃ ┃ ┃ ┣ 📜ModalView.tsx
 ┃ ┃ ┃ ┗ 📜NoticeView.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┗ 📜Notice.tsx
 ┃ ┗ 📂toDo
 ┃ ┃ ┣ 📂views
 ┃ ┃ ┃ ┣ 📜ChangeTodoView.tsx
 ┃ ┃ ┃ ┣ 📜CreateTodoView.tsx
 ┃ ┃ ┃ ┗ 📜GetTodosView.tsx
 ┃ ┃ ┣ 📜ChangeTodos.tsx
 ┃ ┃ ┣ 📜CreateTodo.tsx
 ┃ ┃ ┗ 📜GetTodos.tsx
 ┣ 📂hook
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜useAuth.tsx
 ┃ ┣ 📂mutation
 ┃ ┃ ┣ 📜useCreate.tsx
 ┃ ┃ ┣ 📜useDelete.tsx
 ┃ ┃ ┗ 📜useUpdate.tsx
 ┃ ┗ 📂query
 ┃ ┃ ┗ 📜useGetTodoById.tsx
 ┣ 📂screen
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂types
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜auth.ts
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜header.ts
 ┃ ┃ ┣ 📜modal.ts
 ┃ ┃ ┗ 📜notice.ts
 ┃ ┗ 📂toDo
 ┃ ┃ ┗ 📜todo.ts
 ┣ 📜Root.tsx
 ┣ 📜Router.tsx
 ┣ 📜atom.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜setupProxy.js
 ┣ 📜setupTests.ts
 ┗ 📜until.ts
```

코드의 하는 일을 생각하며 작게 분리했습니다.
`api`, `components`, `hook`, `screen`,`types`로 분리하였고, 해당 폴더 안에서도 로그인(auth) 부분과 todo 부분을 폴더로 한 단계 더 분리했습니다. 모달창과 같은 공통적인 일을 하는 컴포넌트들은 `common` 폴더 안에 넣었고, 하는 일에 따라 `hook` 내부에서도 `auth`, `mutation`, `query`로 나누었습니다.

## 구현 기능

### 구현 요구 사항 목록

#### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 @, . 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

#### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요

  [X] 목록 / 상세 영역으로 나누어 구현해주세요
  [X] Todo 목록을 볼 수 있습니다.
  [X] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  [X] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  [X] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

  [X] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  [X] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  [X] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

### 경로

#### auth

```
/auth
// 로그인

/auth/sign-up
// 회원가입
```

#### todo list

```
/
// todo list

/:id
// 개별 todo 상세
```

## 목표

간단한 `todo list`를 클린한 코드를 목표로 하여 꾸준히 리팩토링을 진행한다. 관심사를 염두에 두어 하나의 함수가 여러 일을 하고 있지는 않은지 생각해본다.

## 개선 사항

### 1차

#### [블로그](https://velog.io/@mamonde456/123-csa8twvd)

1. 모달 기능 구현 ✅
   (todo 삭제/변경 시에 모달로 안내)

2. 로그인(+실패)/ 계정 생성(+실패) 메세지 안내 기능 구현 ✅

3. sign in/up 리팩토링 => 컴포넌트 분리 ✅

4. ChangeTodos.tsx 리팩토링 => 함수로 분리 ✅
   (조금 더 리팩토링 할 수 있는지 생각해보기.)

### 2-1차

1. 컴포넌트 분리 및 리팩토링 후 모달창 로직 수정 ✅

2. 커스텀 훅을 최대한 이용하여 코드 리팩토링 ✅

3. 변경된 값이 없을 시 안내 메세지 띄우기 ✅

4. 폴더 구조 변경 ✅

### 2-2차

1. 값을 변경했을 때, 변경된 값을 바로 적용시키는 것 ✅<br>
   ~~(이미 손을 봐두었는데, 컴포넌트를 분리하면서 오류가 나는 것 같다.)~~<br>
   (if문 때문에 걸려서 빈 값으로 설정되고 있었다.)

2. url로 접근 시에 token 확인 ✅
   (로그아웃 후에도 접근해서 삭제가 가능한 것을 확인했다.)

3. 변경된 값이 없을 시 안내 메세지 로직 수정 ✅

4. 추가적인 리팩토링 및 파일 구조 ✅

5. sign up api 요청 시 useMutation 이용 🆗<br>
   (불필요하다고 판단했다. useMutation을 이용할 수도 있지만, 이미 커스텀 훅을 통해 sign in, sign up을 메서드로 묶어놓았기 때문에 이걸 또 해체할 필요는 없어보인다.)

6. 로그인 상태로 토큰을 삭제하여 할 일 상세 목록을 클릭했을 때 로그인 페이지로 리다이렉트 시키기 ✅

7. 회원가입 비밀번호 유효성 검사 로직 추가 ✅

8. 404 페이지 추가 ✅

## 과제 진행 시 주안점 작성

코드의 관심사를 고민했습니다. 함수가 여러가지의 일을 하고 있지는 않은지 생각하며 컴포넌트를 분리했고, 분리하고 나서도 구현 기능이 제대로 돌아갈 수 있게 했습니다. 또한 폴더 구조를 고민하는 것은 처음이라 다른 분의 폴더 구조를 참고하며 분리했습니다.

## 한계점

회원가입 페이지에서 비밀번호와 확인용 비밀번호가 동일한지, 유효성을 검사하는 로직이 아쉽다고 생각합니다. onChange로 타이핑을 할 때마다 유효성 검사를 하고 싶은데 생각하는 대로 동작하지 않았습니다. 추후, 회원가입에 대한 유효성 검사를 공부하여 해당 로직을 완성해보고 싶습니다.

## 프리온보딩 회고

추후 블로그로 작성
