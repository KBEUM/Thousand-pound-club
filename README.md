# Thousand-pound-club

React를 사용하여 만든 3대운동 기록하는 웹사이트입니다.  
https://thousand-pound-club-91656.web.app  
![bomflixWeb](/public/image/thousand-login.png)

## 주요기능

- Firebase Authentication API를 이용하여 Google & Anonymous 인증 기능
- FIrebase Realtime Database API를 이용하여 운동기록 동기화
- 3대운동 Bench, Dead, Squat 운동 기록 추가, 삭제 및 로그기록 확인

## Service 파일 및 Component 간략설명

Service

- auth_service.js : Login & Logout 함수와 사용자 변경감지 함수 구현
- database.js : 운동기록 database에서 생성 삭제 및 동기화 함수 구현

Components

- AddWorkout : 운동 중량 및 횟수 state lifting up
- AddWorkoutDate : 운동 Date state lifting up
- Chart : google-chart lib 이용하여 중량 및 볼륨 기록 (_Data 전달에 난항을 겪고 잇음. 추후 업데이트_)
- Home : HomePage 화면 표시
- Log : 운동 Log 표시
- LoginHome : Login 화면에서 react-router와 firebase auth를 사용하여 Login user 감지시 화면 이동
- Logout : Login user가 있는 경우 클릭 시 Logout 기능 구현
- Menu : 운동화면 좌측에 메뉴 UI
- WorkoutInfo : AddWorkout에서 props로 보내준 운동기록 표시
- WorkoutLog : Home에서 받아온 운동기록 props를 WorkoutInfo에 전달하여 LOG화면에 표시
- WorkoutMain : 각각의 Components에서 가져온 운동 state들을 전부 관리하여 각각의 Components에 전달
