import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  heading: string;
}

/** ページタイトル */
const PageHeading: React.FC<Props> = (props: Props) => {
  const { heading } = props;
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3" className={classes.heading}>
        {heading}
      </Typography>
    </Container>
  );
};

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: '0 8px',
      fontSize: 24,
      letterSpacing: 1,
      background: 'linear-gradient(transparent 75%, #b0e0e6 75%)',
    },
  }),
);
const Container = styled.div`
  margin: 50px 0;
`;

export default PageHeading;
