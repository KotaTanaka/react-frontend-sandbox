***react-frontend-sandbox***

## About

React (Create React App) + TypeScript + CSS in JS でのフロントエンド開発の素振り  
Wi-Fi検索システムの管理UI

*[Backend - echo-api-sandbox](https://github.com/KotaTanaka/echo-api-sandbox)*

## Technology

| Dependency | Purpose |
| --- | --- |
| [TypeScript](https://www.typescriptlang.org) | Language |
| [React](https://ja.reactjs.org) | Framework |
| react-scripts<br>([Create React App](https://create-react-app.dev/docs/getting-started)) | Framework |
| [React Router](https://reacttraining.com/react-router/web/guides/quick-start) | Page Routing |
| [Material UI](https://material-ui.com) | UI Components |
| [Emotion](https://emotion.sh) | Styling (CSS in JS) |

## Requirement

* Node `v15`
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
