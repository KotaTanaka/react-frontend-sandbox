import styled from '@emotion/styled';
import AreaList from 'src/components/pages/Area/AreaList';
import PageHeading from 'src/components/partials/PageHeading';
import { PAGES } from 'src/constants/page';
import useGetAreaMaster from 'src/hooks/useGetAreaMaster';
import { flexColumnCenter } from 'src/styles/mixin';

/** エリア一覧ページ */
const AreasPage: React.FC = () => {
  const { isAreaMasterLoading, fetchAreaMaster } = useGetAreaMaster();

  return (
    <Container>
      <PageHeading heading={PAGES.AREAS.name} />
      <AreaList loading={isAreaMasterLoading} refetch={fetchAreaMaster} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default AreasPage;
