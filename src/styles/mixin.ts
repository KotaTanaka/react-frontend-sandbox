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

/** 垂直方向中央配置 */
export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
