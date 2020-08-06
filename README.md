***find-wifi-console-ui***

## About

Find Wi-Fi 管理コンソール

*[Backend - find-wifi-backend](https://github.com/KotaTanaka/find-wifi-backend)*

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
$ git clone git@github.com:KotaTanaka/find-wifi-console-ui.git
$ cd find-wifi-console-ui
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
