### View 네비게이션 시스템 구현

React, TypeScript를 이용한 View 네비게이션 컴포넌트를 구현합니다. 스타일링 라이브러리는 자유롭게 이용하셔도 됩니다. 이 시스템은 모바일 환경에서 자주 볼 수 있습니다.

**필요한 기능**
- [o] 이벤트를 통한 페이지 이동이 가능하다. => 다음페이지 || <,> 클릭
- [o] 이전 페이지로 되돌아갈 수 있다. => 이전 : < 클릭, 이후 : > 클릭 
    - [o] 히스토리에 남은 페이지라면 어디든 되돌아가는 것이 가능하다. => path log 세션스토리지에 저장
- [o] 웹을 새로고침하더라도 페이지가 유지되어야 한다. => path log 세션스토리지에 저장
- [ ] 페이지 전환 트랜지션을 설정할 수 있다. 
    - [o] 트랜지션 애니메이션은 최소 2개 있어야 한다. => 좌/우 슬라이드

UI는 자유롭게 구현해도 상관없습니다. 단, 기본적으로 페이지 제목과 뒤로 가기 버튼은 반드시 존재해야 합니다.

⚠️ 참고로 router 등을 이용하여 URL이 변경되는 진짜 페이지 이동 구현은 아닙니다. 단순히 컴포넌트 내에서 로직으로서 동작되는 UI입니다.


<img width="500" alt="gif" src="https://github.com/prgrms-fe-devcourse/FEDC5-14_React/assets/44829481/7447fcbf-f03a-4a17-8f13-a463c9f6a658">

<img width="500" alt="gif" src="https://github.com/prgrms-fe-devcourse/FEDC5-14_React/assets/44829481/464b0ef9-f0cc-4764-8761-e888bae99087">

### Tooltip 컴포넌트 구현

React, TypeScript를 이용하여 Tooltip 컴포넌트를 구현합니다. 스타일링 라이브러리는 자유롭게 이용하셔도 됩니다.

**필요한 기능**
- [o]  특정 이벤트가 발생하면 Tooltip UI가 보여야 합니다.
- [o]  이벤트는 Hover, Click, Focus 세 종류를 지원해야 합니다.
- [o]  위치를 설정할 수 있어야 합니다.
- [ ]  옵션에 따라 화살표를 보여줄 수 있어야 합니다.
- [o]  스크롤에 영향을 받으면 안됩니다.
- [ ]  Transition이 있으면 좋습니다.

**예시**

<img width="116" alt="Untitled" src="https://github.com/prgrms-fe-devcourse/FEDC5-14_React/assets/44829481/8ae39665-1b7d-40b2-8f36-e030bc30b427">
