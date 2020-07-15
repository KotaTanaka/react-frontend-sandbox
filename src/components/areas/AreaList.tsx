import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import EmptyContent from 'src/components/partials/EmptyContent';
import AreaChip from 'src/components/areas/AreaChip';
import { IAreaMaster } from 'src/interfaces/api/response/Area';

interface Props {
  areas: IAreaMaster;
  loading: boolean;
}

/** エリアリスト */
const AreaList: React.FC<Props> = (props: Props) => {
  const { areas, loading } = props;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (areas.areaList.length === 0) {
    return <EmptyContent link={PAGES.AREAS_REGISTER.path} />;
  }

  return (
    <Container>
      {areas.areaList.map((area) => (
        <AreaChip key={area.areaKey} area={area} />
      ))}
    </Container>
  );
};

// styles
const Container = styled.div``;

export default AreaList;
