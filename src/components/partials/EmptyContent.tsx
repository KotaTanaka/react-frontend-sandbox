import { useCallback } from 'react';
import styled from '@emotion/styled';
import { Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// from app
import usePageTransition from 'src/hooks/usePageTransition';
import { flexColumnCenter } from 'src/styles/mixin';

interface Props {
  link?: string;
}

/** 項目なし(リスト空)の表示 */
const EmptyContent: React.FC<Props> = (props: Props) => {
  const { link } = props;
  const classes = useStyles();
  const { moveTo } = usePageTransition();

  /** リンク押下時の処理 */
  const handleClickLink = useCallback(() => {
    if (link) moveTo(link);
  }, [moveTo, link]);

  return (
    <Container>
      <TextWrapper>
        <Typography variant="h6" className={classes.text}>
          項目がありません
        </Typography>
      </TextWrapper>
      {link && (
        <Link onClick={handleClickLink} className={classes.link}>
          作成する
        </Link>
      )}
    </Container>
  );
};

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: '#666',
    },
    link: {
      cursor: 'pointer',
    },
  }),
);
const Container = styled.div`
  ${flexColumnCenter};
  margin: 50px 0;
`;
const TextWrapper = styled.div`
  background: #eee;
  width: 640px;
  padding: 24px 0;
  border-radius: 8px;
  margin-bottom: 24px;
  text-align: center;
`;

export default EmptyContent;
