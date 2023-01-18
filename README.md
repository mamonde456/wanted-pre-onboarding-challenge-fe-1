# wanted-pre-onboarding-challenge-fe-1

원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 작동 화면

최종 완성 후 작성

## 실행

- client(/client)
  `git clone` 한 후, client 경로에서 아래 명령어를 실행합니다.

  `npm start`

- server(/server)
  `git clone` 한 후, server 경로에서 아래 명령어를 실행합니다.<br>(사전 과제 레포로 제공됨.)

  `npm start`

## 진행 기간

사전 과제 기능 구현: 2023.1.5. ~ 2023.1.6
2023.1.9(css style)
<br>
사전 과제 진행 블로그 기록:
signIn/signUp: https://velog.io/@mamonde456/원티드-프리온보딩-프론트엔드-챌린지-사전-과제-로그인회원가입
<br>
todo list: https://velog.io/@mamonde456/원티드-프리온보딩-프론트엔드-챌린지-사전-과제-todo-list
<br>
기능 개선: 2023.1.11 ~ 2023.1.20

## 사용한 기술 스택

- react
- typescript
- react-query
- recoil
- styled-components

## 구현 기능

### /auth: login/signUp

로그인/회원가입 기능<br>
(로컬 스토리지에 저장)

### /:id todo list

todo 생성/수정/삭제 실시간 반영

## 목표

간단한 `todo list`를 클린한 코드를 목표로 하여 꾸준히 리팩토링을 진행한다. 관심사를 염두에 두어 하나의 함수가 여러 일을 하고 있지는 않은지 생각해본다.

## 개선 사항

### 1차

#### 블로그 기록

블로그 : https://velog.io/@mamonde456/123-csa8twvd
<br>

1. 모달 기능 구현 ✅
   (todo 삭제/변경 시에 모달로 안내)

2. 로그인(+실패)/ 계정 생성(+실패) 메세지 안내 기능 구현 ✅

3. sign in/up 리팩토링 => 컴포넌트 분리 ✅

4. ChangeTodos.tsx 리팩토링 => 함수로 분리 ✅
   (조금 더 리팩토링 할 수 있는지 생각해보기.)

## 개선 사항

### 2-1차

1. 컴포넌트 분리 및 리팩토링 후 모달창 로직 수정

2. 커스텀 훅을 최대한 이용하여 코드 리팩토링

3. 변경된 값이 없을 시 안내 메세지 띄우기

4. 폴더 구조 변경

## 개선 사항

### 2-2차

개선 후 작성

## 프리온보딩 회고

추후 블로그로 작성
