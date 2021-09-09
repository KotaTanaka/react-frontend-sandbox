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
import { useGlobalState } from 'src/states/Context';

interface Props {
  loading: boolean;
  refetch: () => Promise<void>;
}

/** レビューリスト */
const ReviewList: React.FC<Props> = (props: Props) => {
  const { loading, refetch } = props;
  const classes = useStyles();
  const { reviewList } = useGlobalState('review');

  const {
    requestDeleteReview,
    isShowSuccessDeletedPopup,
    closeSuccessDeletedPopup,
  } = useDeleteReview();

  const [targetDeleteReviewId, setTargetDeleteReviewId] = useState<number>();
  // prettier-ignore
  const openDeleteDialog = useCallback((id: number) => setTargetDeleteReviewId(id), []);
  // prettier-ignore
  const closeDeleteDialog = useCallback(() => setTargetDeleteReviewId(undefined), []);

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
              <TableCell>店舗</TableCell>
              <TableCell>Wi-Fiサービス</TableCell>
              <TableCell>コメント</TableCell>
              <TableCell>評価</TableCell>
              <TableCell>ステータス</TableCell>
              <TableCell />
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
                <TableCell>
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
  button: {
    padding: 0,
  },
});
const Container = styled.div``;

export default ReviewList;
