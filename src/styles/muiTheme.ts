import { createMuiTheme } from '@material-ui/core/styles';

/** MaterialUIのデフォルトテーマ */
export const theme = createMuiTheme({
  /** テーマカラー */
  palette: {
    primary: {
      // light:
      // main:
      // dark:
      // contrastText:
    },
    secondary: {
      // light:
      // main:
      // dark:
      // contrastText:
    },
  },
  /** 共通フォント */
  typography: {
    fontSize: 12,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none',
      letterSpacing: '0.1rem',
    },
  },
  /** コンポーネントのカスタマイズ */
  overrides: {},
});
