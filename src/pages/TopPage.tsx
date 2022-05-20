import styled from '@emotion/styled';
import PageHeading from 'src/components/partials/PageHeading';
import usePageTransition from 'src/hooks/usePageTransition';
import { flexCentering, flexColumnCenter } from 'src/styles/mixin';

/** 管理画面トップページ */
const TopPage: React.FC = () => {
  const {
    moveToAreaList,
    moveToRegisterArea,
    moveToServiceList,
    moveToRegisterService,
    moveToShopList,
    moveToRegisterShop,
    moveToReviewList,
  } = usePageTransition();

  return (
    <Container>
      <PageHeading heading="Find Wi-Fi 管理コンソール" />
      <MenuContainer>
        <MenuHeading>Area</MenuHeading>
        <MenuCardList>
          <MenuCard onClick={moveToAreaList}>一覧</MenuCard>
          <MenuCard onClick={moveToRegisterArea}>新規登録</MenuCard>
        </MenuCardList>
      </MenuContainer>
      <MenuContainer>
        <MenuHeading>Service</MenuHeading>
        <MenuCardList>
          <MenuCard onClick={moveToServiceList}>一覧</MenuCard>
          <MenuCard onClick={moveToRegisterService}>新規登録</MenuCard>
        </MenuCardList>
      </MenuContainer>
      <MenuContainer>
        <MenuHeading>Shop</MenuHeading>
        <MenuCardList>
          <MenuCard onClick={moveToShopList}>一覧</MenuCard>
          <MenuCard onClick={moveToRegisterShop}>新規登録</MenuCard>
        </MenuCardList>
      </MenuContainer>
      <MenuContainer>
        <MenuHeading>Review</MenuHeading>
        <MenuCardList>
          <MenuCard onClick={moveToReviewList}>一覧</MenuCard>
        </MenuCardList>
      </MenuContainer>
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;
const MenuContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const MenuHeading = styled.h2`
  ${flexCentering};
  width: 496px;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #3f51b5;
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-top: thin solid #aaa;
  }
  &::before {
    margin-right: 16px;
  }
  &::after {
    margin-left: 16px;
  }
`;
const MenuCardList = styled.div`
  display: flex;
`;
const MenuCard = styled.a`
  ${flexCentering};
  cursor: pointer;
  width: 240px;
  height: 80px;
  border-radius: 4px;
  box-shadow: 1px 1px 4px #aaa;
  font-size: 16px;
  &:not(:first-child) {
    margin-left: 16px;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export default TopPage;
