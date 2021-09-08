import styled from '@emotion/styled';
import ReviewList from 'src/components/pages/Review/ReviewList';
import PageHeading from 'src/components/partials/PageHeading';
import { PAGES } from 'src/constants/page';
import useGetReviews from 'src/hooks/useGetReviews';
import { flexColumnCenter } from 'src/styles/mixin';

/** レビュー一覧ページ */
const ReviewsPage: React.FC = () => {
  const { isReviewsLoading, fetchReviewList } = useGetReviews();

  return (
    <Container>
      <PageHeading heading={PAGES.REVIEWS.name} />
      <ReviewList loading={isReviewsLoading} refetch={fetchReviewList} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ReviewsPage;
