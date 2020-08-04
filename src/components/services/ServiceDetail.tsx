import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// from app
import { useGlobalState } from 'src/Context';
import InformationGrid from 'src/components/partials/InformationGrid';
import { IInformationGridItem } from 'src/interfaces/View';
import { baseContainer } from 'src/styles/mixin';

interface Props {
  loading: boolean;
}

/** Wi-Fiサービス詳細 */
const ServiceDetail: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const classes = useStyles();

  const { serviceDetail } = useGlobalState('service');

  /** 詳細データ */
  const informationGridItems = useMemo((): IInformationGridItem[] => {
    const { serviceId, link, shopCount, createdAt, updatedAt } = serviceDetail;

    return [
      { title: 'Wi-FiサービスID', value: serviceId },
      { title: '公式サイト', value: link },
      { title: '店舗数', value: shopCount },
      { title: '登録日時', value: createdAt },
      { title: '更新日時', value: updatedAt },
    ];
  }, [serviceDetail]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant="h6" className={classes.wifiName}>
        {serviceDetail.wifiName}
      </Typography>
      <InformationContainer>
        <InformationGrid items={informationGridItems} />
      </InformationContainer>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  wifiName: {
    textAlign: 'center',
    padding: '16px 0',
  },
});
const Container = styled.div``;
const InformationContainer = styled.div`
  ${baseContainer};
`;

export default ServiceDetail;
