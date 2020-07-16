import React from 'react';
import styled from 'styled-components';

// from app
import { useGlobalState } from 'src/Context';

interface Props {
  loading: boolean;
}

/** 店舗詳細 */
const ShopDetail: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const { shopDetail } = useGlobalState('shop');

  if (loading) {
    return <p>Loading...</p>;
  }

  // TODO 色付け
  console.log(shopDetail);
  return <Container />;
};

// styles
const Container = styled.div``;

export default ShopDetail;
