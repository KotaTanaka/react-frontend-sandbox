***react-frontend-sandbox***

## About

React (Create React App) + TypeScript + CSS in JS でのフロントエンド開発の実験場  
Wi-Fi検索システム管理UI

*[Backend - echo-api-sandbox](https://github.com/KotaTanaka/echo-api-sandbox)*

## Technology

| Dependency | Version |
| --- | --- |
| [TypeScript](https://www.typescriptlang.org) | `3.8.x` |
| [React](https://ja.reactjs.org) | `16.13.x` |
| react-scripts<br>([Create React App](https://create-react-app.dev/docs/getting-started)) | `3.4.x` |
| [React Router](https://reacttraining.com/react-router/web/guides/quick-start) | `5.1.x` |
| [Material UI](https://material-ui.com) | `4.9.x` |
| [Styled Components](https://styled-components.com) | `5.1.x` |

## Requirement

* Node `v12`
* Yarn

## Getting Started

#### Install

```bash
$ yarn
```

#### Run

```bash
$ yarn start
```

→ Serve at http://localhost:3010

#### Build

```bash
$ yarn build
```

→ Generate to `build` directory.

#### Custom API Host

*Change `.env` and restart.*

```diff
- REACT_APP_API_HOST=http://localhost:1323
+ REACT_APP_API_HOST=https://hogehoge.com
```
