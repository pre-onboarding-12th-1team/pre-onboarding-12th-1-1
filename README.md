
[원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12) 사전과제의 Best Practice 선정

[배포링크](http://pre-onboarding-12th-1-1.s3-website.ap-northeast-2.amazonaws.com/)

## 목차
1. [팀원 소개](#팀원-소개)
2. [실행 방법](#실행방법)
4. [협업 규칙](#협업을-위한-규칙)
5. [폴더 구조](#폴더-구조)
6. [Best practice 선정을 위한 논의점들](#best-practice-선정을-위한-논의점들)

## 팀원 소개

| 팀1 | [🐸김보현](https://github.com/BHyeonKim) | [🐶방충림](https://github.com/HWAHAEBANG) | [🐹김수진](https://github.com/notusing11) | [🐨이지은](https://github.com/jieeeun2) |
| --- | --- | --- | --- | --- |
| 개인과제 | [김보현의 개인과제](https://github.com/pre-onboarding-12th-1team/bohyeon) | [방춤림의 개인과제](https://github.com/pre-onboarding-12th-1team/choonglim) | [김수진의 개인과제](https://github.com/pre-onboarding-12th-1team/sujin) | [이지은의 개인과제](https://github.com/pre-onboarding-12th-1team/jieun) |

```
npm install && npm start
```

---

## **기술 스택 및 사용한 라이브러리**

- Language
  - Typescript
- Library
  - React
  - Axios
  - React Router
  - Tailwind
- Linting & Formatting
  - Prettier
  - Eslint **_with tons of plugins and configs_**
- Automation
  - Husky
  - Commitlint
  - Lint Staged

---

## 협업을 위한 규칙


- 커밋메세지 컨벤션
> 컨벤셔널 커밋에 기반하였습니다.

| chore | feat | style | fix | docs | refactor | build | 
| --- | --- | --- | --- | --- | --- | --- |
| 코드 또는 로직 변경없이 프로젝트 운영 관련 업데이트 | 새로운 기능 추가 | 들여쓰기, 공백, 포매팅등 | 버그 및 오류 수정 | 문서 작업 | 코드 구조 및 로직 개선 | 빌드 |

- 깃 브랜치 전략
> git-flow 전략과 github-flow 전략을 조합하였습니다.

| main | develop | feat/{기능이름} | hotfixes |
| :---: | :---: | :---: | :---: |
| 메인 브랜치 | 개발브랜치 | 기능 브랜치   | 버그 수정 |

## 폴더 구조

```
    📦src
    ┣ 📂apis        # api호출 함수를 모아둔 폴더
    ┣ 📂components  # 컴포넌트 폴더
    ┃ ┣ 📂common      # 공통 컴포넌트
    ┃ ┗ 📂todo        # Todo 리스트에서만 사용되는 컴포넌트
    ┣ 📂configs     # axios 인스턴스등 설정 폴더
    ┣ 📂contexts    # 컨텍스트 폴더
    ┣ 📂hooks
    ┣ 📂pages       # 페이지 폴더
    ┃ ┣ 📂HomePage
    ┃ ┣ 📂NotFoundPage
    ┃ ┣ 📂SignInPage
    ┃ ┣ 📂SignUpPage
    ┃ ┗ 📂TodoListPage
    ┣ 📂routes      # 세부 route 폴더
    ┣ 📂types       # 타입 폴더
    ┣ 📂utils       # 훅을 제외한 일반 유틸함수 폴더
    ┣ 📜App.tsx
    ┣ 📜index.css
    ┣ 📜index.tsx
    ┗ 📜react-app-env.d.ts
```

---
<br/>
<br/>
<br/>
<br/>


## Best Practice 선정을 위한 논의점들
  
### 로그인 회원가입 두 페이지의 컴포넌트 분리 여부 

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | 다른 컴포넌트로 분리 | 👑 |
| 2 | 한 컴포넌트에서 경로에 따라 분리 |   |

#### 선정 근거
- 한 컴포넌트로 사용시 컴포넌트 재사용성을 높일 수 있으나, 내부에서 조건문을 다수 사용하게 되므로 컴포넌트 로직의 복잡성이 증가함.
- 가독성 및 유지보수성을, 추후 컴포넌트의 확장성을 높이기 위해 컴포넌트를 분리하여 사용.

<br/>
<br/>

### 유효성 검사
| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | 이메일 `includes(’@’)` 사용 |  |
| 2 | 이메일 `/@/.test(email)` 사용  | 👑 |
| 3 | 비밀번호 `length ≥8` 사용  | 👑 |
| 4 | `useEffect`와 `useState`로 버튼 `disabled` 속성값 변경  |  |
| 5 | 입력값을 인자로 받는 함수를 따로 정의해서 반환값으로 버튼 `disabled` 속성값 결정 | 👑 |

#### 선정 근거
- 현재는 요구사항이 단순히 '@'문자를 포함하는 것으로 되있지만 복잡한 패턴 검색이 필요할 경우 test를 사용하는게 더 효과적
- 유효성검사 조건과 메세지를 함수로 정의해서 모듈화시켜 한 곳에 모여 있어야 관리 및 유지보수할 때 더 효과적
- state로 유효성 여부는 state의 파생변수로 별도의 state로 두지 않는게 좋음

<br/>
<br/>

### 페이지 이동
| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | `window.location.href` 변경 |  |
| 2 | `useNavigate` 사용 | 👑 |

#### 선정 근거
- 브라우저에 직접 접근한 새로고침 방식은 ReactDom을 재구성하기 때문에 비효율적
- 리액트 라우팅 라이브러리의 장점을 활용하는 방법이 적절

<br/>
<br/>

### 로그인 성공시 토큰 저장 방식

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | `localStorage.setItem` 호출 |  |
| 2 | localStorage 로직을 수행하는 함수 `setToken` 호출 | 👑 |
| 3 | `context`로 관리 |  |

#### 선정 근거
- 토큰으로 인한 UI 업데이트가 없는 데도 재랜더링을 유발할 가능성이 있음
- 반복되는 부분을 유틸 함수로 정의, 재사용하면 개발 속도가 높아질 것

<br/>
<br/>

### 토큰 유뮤를 참조하는 시점
| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | 앱 전체 렌더링시 `context`에 저장 후 활용|  |
| 2 | 페이지 진입 시 마다 `useEffect`를 통해 토큰 참조 |  |
| 3 | `ProtectedRoute` 진입 시에만 토큰 참조 | 👑 |

#### 선정 근거
- 각각 페이지에서 토큰 유무를 검사하지 않고 중앙화된 검사를 하여 dry principle 적용

<br/>
<br/>

### 리다이렉트

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | `ProtectedRoute`를 사용한 경로 보호  | 👑 |
| 2 | `useEffect`를 활용해 페이지 접근시 토큰 여부에 따라 리다이렉트 |  |
| 3 | `ProtectedRoute` 1개만 사용, 내부에서 토큰 확인 |  |
| 4 | `ProtectedRoute` 2개로 분리 | 👑 |


#### 선정 근거
- `useEffect` 방식 사용시, 토큰이 확인되기 전 UI가 먼저 렌더링 되므로 일시적으로 컴포넌트가 보였다가 사라지는 현상 발생 => 사용자 경험에 악영향을 줄 수 있음
- `ProtectedRoute`컴포넌트를 경우에 따라 2가지로 분리 사용함으로써, 내부 코드의 복잡성을 감소시키고, 코드의 가독성을 높여 향후 유지보수에 유용할 것으로 판단함

<br/>
<br/>


### 네트워크 요청 방식 

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | 필요할 때마다 `fetch` API 호출 |  |
| 2 | axios 라이브러리 활용 | 👑 |

#### 선정 근거
- axios의 경우 직렬화 작업이 필요하지 않고 관련 헤더도 자동으로 들어감
- fetch를 여러곳에서 활용하면 base url이 localhost 등으로 바뀔 경우 여러 곳에서 수정해야 함
- axios 인스턴스에 interceptor 설정으로 모든 네트워크 요청에 대한 일괄 처리가 가능

<br/>
<br/>

### 투두 리스트 목록과 체크박스
| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | 데이터를 캐싱하는 로직을 구현하여 활용하는 방식 |  |
| 2 | `context`를 활용하는 방식| 👑 |
| 3 | `reducer` 함수를 따로 정의해서 관리하는 방식|  |


#### 선정 근거
- context를 활용해서 불필요한 props driling을 방지하고, 효율적인 모듈화가 가능하도록 구현

<br/>
<br/>

### 투두 리스트 추가
| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | input과 button을 `<form>`으로 감싸는 방식 | 👑 |
| 2 | input과 button을 `<div>`로 감싸는 방식 |   |
| 3 | input과 button을 `<div>`로 감싸면서 `onKeyup`이벤트 구현 |   |

#### 선정 근거
- form 태그의 이벤트를 사용하여 양식을 전송하는 것이 좋다고 생각됨
- form 태그를 사용하면 리스너를 따로 등록할 필요없이 엔터키로 전송이 가능함

<br/>
<br/>







