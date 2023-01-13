# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 실행

- client
  / 루트 경로에서 npm start

- server
  / server 경로에서 npm start
  (사전 과제 레포로 제공됨. 따라서 깃헙에 업로드 x)

## 진행 기간

기능 구현: 2023.1.5. ~ 2023.1.6
2023.1.9(css style)
<br>
사전 과제 진행 블로그 기록:
signIn/signUp: https://velog.io/@mamonde456/원티드-프리온보딩-프론트엔드-챌린지-사전-과제-로그인회원가입
<br>
todo list: https://velog.io/@mamonde456/원티드-프리온보딩-프론트엔드-챌린지-사전-과제-todo-list
<br>
기능 개선: 2023.1.11 ~

## 사용한 기술 스택

- react
- typescript
- recoil
- styled-components

## 구현 기능

### /auth: login/signUp

### /:id todo list

- 로그인/회원가입 기능
  (로컬 스토리지에 저장)

- todo 생성/수정/삭제 실시간 반영

### 개선 사항

#### 블로그 기록

블로그 : https://velog.io/@mamonde456/123-csa8twvd
<br>

- 모달 기능 구현 ✅
  (todo 삭제/변경 시에 모달로 안내)

- 로그인(+실패)/ 계정 생성(+실패) 메세지 안내 기능 구현 ✅

- sign in/up 리팩토링 => 컴포넌트 분리 ✅

- ChangeTodos.tsx 리팩토링 => 함수로 분리 ✅
  (조금 더 리팩토링 할 수 있는지 생각해보기.)
