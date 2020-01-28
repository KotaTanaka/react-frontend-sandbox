import { css } from 'styled-components';

// from app
import { muiBaseFont } from 'src/styles/muiStyles';

/** MaterialUI と styled-components で基本フォントを合わせる */
export const baseFont = css(muiBaseFont);

/** 上下左右中央寄せ */
export const flexCentering = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
