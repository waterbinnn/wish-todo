# 소원을 들어주는 올라프
### 서비스 URL
<p>https://wish-me-8fb71.web.app/</p>

###  개발 기간 
<p>2022.04.11-14(캐릭터 CSS) <br>
2022.09.03-05 (UI, 기능구현)
</p>

![올라프목업뉴](https://user-images.githubusercontent.com/96714788/191526502-0155c636-8d1b-44d5-94a8-d76d3cc7ea63.png)


<br>
<div align="center">
<h1>프로젝트 설명</h1>  
</div>

‘소원을 들어주는 올라프'는 나만의 위시리스트를 적을 수 있는 공간의 필요성을 느끼고 만들게 된 토이프로젝트입니다.  
좋아하는 캐릭터인 올라프를 소원을 들어주는 신비한 느낌의 캐릭터로 변형하여 만들었고, 
채팅을 통해 소원을 말하는 UI 로 부담없고 재미있게 소원을 작성하고 삭제할 수 있도록 구성하였습니다.

### 🥕 포인트

CSS로 올라프를 구현하고 애니메이션으로 시각적인 재미도 추가하였습니다.
파이어베이스를 사용한 프로젝트입니다. 파이어베이스의 다양한 내장 함수와 데이터베이스를 사용하여 기능을 구현하였습니다.

### 🥕 사용스택 
- React
- Firebase

</br>

<div align="center">
<h1>⚙️ 구현 기능</h1>
</div>


- 회원가입, 로그인, 로그아웃 구현

    - 파이어베이스 제공함수인 `signInWithEmailAndPassword`, `createUserWithEmailAndPassword`, 
`signOut` 함수 사용하여 커스텀 훅 생성

    - 유저 정보를 Context 로 관리, useReducer 사용

- 소원 작성, 삭제 기능 구현
    - Firestore 로 데이터 관리
    - useReducer 함수로 객체 데이터 관리
    - addDoc, deleteDoc, collection 으로 데이터 저장, 삭제
    - timestamp, orderBy 함수로 시간순 정렬 구현
    - Firestore Queries로 로그인 한 사용자의 아이디와 일치하는 데이터만 불러올 수 있도록 구현

</br>

<div align="center">
<h1>☃️ 구현 UI</h1>
</div>

|                            0. 로그인 전 메인화면                           |                           1. 회원가입                            |
| :-------------------------------------------------------------: | :--------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96714788/191526758-ae6977c4-4924-4845-9199-4f5d13d4e044.gif"/> | <img src="https://user-images.githubusercontent.com/96714788/191526614-a861b6f6-3be1-474d-b2a3-0b9d3ffe5bdd.gif" /> |

|                           2. 로그인                           |                          3. 소원작성/삭제                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96714788/191527166-3b3183f2-bc89-4b2d-913d-202f56031e14.gif"/> | <img src="https://user-images.githubusercontent.com/96714788/191527365-51ab31e5-e8ba-4a68-8fef-de4fc57cfb21.gif"/> |
