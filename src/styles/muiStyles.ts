import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/** 共通基本フォント */
export const muiBaseFont = { fontSize: 12, letterSpacing: '0.1rem' };

/** 共通スタイル */
const useCommonStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: muiBaseFont,
  }),
);
