import styled from '@emotion/styled';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useState } from 'react';
import ConfirmDialog from 'src/components/partials/ConfirmDialog';
import EmptyContent from 'src/components/partials/EmptyContent';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import useDeleteReview from 'src/hooks/useDeleteReview';
import { useStore } from 'src/store/Context';

interface Props {
  loading: boolean;
  refetch: () => Promise<void>;
}

/** レビューリスト */
const ReviewList: React.FC<Props> = (props: Props) => {
  const { loading, refetch } = props;
  const classes = useStyles();
  const { reviewList } = useStore('review');

  const {
    requestDeleteReview,
    isShowSuccessDeletedPopup,
    closeSuccessDeletedPopup,
  } = useDeleteReview();

  const [targetDeleteReviewId, setTargetDeleteReviewId] = useState<number>();
  const openDeleteDialog = (id: number) => setTargetDeleteReviewId(id);
  const closeDeleteDialog = () => setTargetDeleteReviewId(undefined);

  /** レビュー削除 */
  const deleteReview = useCallback(async () => {
    if (targetDeleteReviewId === undefined) return;
    await requestDeleteReview(targetDeleteReviewId);
    await refetch();
    closeDeleteDialog();
  }, [targetDeleteReviewId, requestDeleteReview, refetch, closeDeleteDialog]);

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
              <TableCell className={classes.cell}>店舗</TableCell>
              <TableCell className={classes.cell}>Wi-Fiサービス</TableCell>
              <TableCell className={classes.cell}>コメント</TableCell>
              <TableCell className={classes.cell}>評価</TableCell>
              <TableCell className={classes.cell}>ステータス</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewList.map((review) => (
              <TableRow key={review.reviewId}>
                <TableCell className={classes.cell}>
                  {review.shopName}
                </TableCell>
                <TableCell className={classes.cell}>
                  {review.wifiName}
                </TableCell>
                <TableCell className={classes.cell}>{review.comment}</TableCell>
                <TableCell className={classes.cell}>
                  {review.evaluation}
                </TableCell>
                <TableCell className={classes.cell}>{review.status}</TableCell>
                <TableCell className={classes.cell}>
                  <Button
                    color="primary"
                    className={classes.button}
                    onClick={() => openDeleteDialog(review.reviewId)}
                  >
                    削除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmDialog
        isOpen={targetDeleteReviewId !== undefined}
        message="削除しますか？"
        onSubmit={deleteReview}
        onCancel={closeDeleteDialog}
      />
      <SuccessPopup
        open={isShowSuccessDeletedPopup}
        onClose={closeSuccessDeletedPopup}
        message="レビューを削除しました。"
      />
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  table: {
    minWidth: 640,
  },
  cell: {
    fontSize: 12,
  },
  button: {
    padding: 0,
    fontSize: 12,
  },
});
const Container = styled.div``;

export default ReviewList;
