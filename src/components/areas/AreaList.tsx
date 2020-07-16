import React from 'react';
import styled from 'styled-components';

// from app
import { useGlobalState } from 'src/Context';
import { PAGES } from 'src/constants/page';
import EmptyContent from 'src/components/partials/EmptyContent';
import AreaChip from 'src/components/areas/AreaChip';

interface Props {
  loading: boolean;
}

/** エリアリスト */
const AreaList: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const { areaList } = useGlobalState('area');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (areaList.length === 0) {
    return <EmptyContent link={PAGES.AREAS_REGISTER.path} />;
  }

  return (
    <Container>
      {areaList.map((area) => (
        <AreaChip key={area.areaKey} area={area} />
      ))}
    </Container>
  );
};

// styles
const Container = styled.div``;

export default AreaList;
