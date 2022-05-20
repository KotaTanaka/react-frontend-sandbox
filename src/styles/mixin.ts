import { css } from '@emotion/react';
import { muiBaseFont } from 'src/styles/muiStyles';

/** MaterialUI と Emotion で基本フォントを合わせる */
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

/** コンテナ(ドロップシャドウ) */
export const baseContainer = css`
  border-radius: 8px;
  box-shadow: 0 0 4px grey;
  padding: 48px;
`;
