import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';
import DeleteButton from 'src/components/partials/Button/DeleteButton';
import EditButton from 'src/components/partials/Button/EditButton';
import InformationGrid from 'src/components/partials/InformationGrid';
import { IconButtonType } from 'src/constants/enums';
import { IInformationGridItem } from 'src/interfaces/View';
import { useStore } from 'src/states/Context';
import { baseContainer, flexColumnCenter } from 'src/styles/mixin';

interface Props {
  loading: boolean;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

/** Wi-Fiサービス詳細 */
const ServiceDetail: React.FC<Props> = (props: Props) => {
  const { loading, onClickEdit, onClickDelete } = props;
  const classes = useStyles();

  const { serviceDetail } = useStore('service');

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
      <Buttons>
        <EditButton type={IconButtonType.BADGE} onClick={onClickEdit} />
        <DeleteButton type={IconButtonType.BADGE} onClick={onClickDelete} />
      </Buttons>
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
const Container = styled.div`
  ${flexColumnCenter};
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96px;
  margin-top: 24px;
`;
const InformationContainer = styled.div`
  ${baseContainer};
`;

export default ServiceDetail;
