import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

// from app
import { useGlobalState } from 'src/Context';
import EmptyContent from 'src/components/partials/EmptyContent';

interface Props {
  loading: boolean;
}

/** レビューリスト */
const ReviewList: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const classes = useStyles();
  const { reviewList } = useGlobalState('review');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (reviewList.length === 0) {
    return <EmptyContent />;
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>店舗</TableCell>
              <TableCell>Wi-Fiサービス</TableCell>
              <TableCell>コメント</TableCell>
              <TableCell>評価</TableCell>
              <TableCell>ステータス</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewList.map((review) => (
              <TableRow key={review.reviewId}>
                <TableCell>{review.shopName}</TableCell>
                <TableCell>{review.wifiName}</TableCell>
                <TableCell>{review.comment}</TableCell>
                <TableCell>{review.evaluation}</TableCell>
                <TableCell>{review.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  table: {
    minWidth: 640,
  },
  button: {
    padding: 0,
  },
});
const Container = styled.div``;

export default ReviewList;
