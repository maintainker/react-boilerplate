# react-boilerplate
나중을 위해 기본세팅을 다 해놓고 예제코드도 몇가지 넣어놓은 boilerplate

## 사용 라이브러리
```
  in package.json
  "dependencies": {
    "@craco/craco": "^6.4.3",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^17.0.20",
    "@types/react-dom": "^17.0.9",
    "axios": "^0.24.0",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^8.6.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-query": "^3.34.7",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
  },
  "devDependencies": {
    "craco-alias": "^3.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "^2.5.1"
  },
```
- cra 
- craco -> alias 설정을 위해
- typescript
- react-router-dom
- react-query -> 상태관리
- eslint,prettier

## 폴더 구조
```
- public - 정적파일
- src
  - apis 
    - index.ts - instance container
    - tmp - 컨테이너 사용예제
  - context 
    - index.tsx - 초기에 세팅해야되는 데이터 query로 가져오는 곳, 주석으로 예제코드
  - shared
    - config.tsx - 설정파일 env 초기 변수도 여기 넣어놓는..
    - sitemap.tsx - 전체적인 사이트맵 라우팅 관리를 위한 파일
  - pages - routing, page, 각페이지별 components들을 관리하기 위한 폴더
  
```

## 수정이 되어야 되거나 수정해야되는 사항들은 알려주시면 고민해서 수정해보겠습니다.
