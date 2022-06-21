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
import EmptyContent from 'src/components/partials/EmptyContent';
import { PAGES } from 'src/constants/page';
import usePageTransition from 'src/hooks/usePageTransition';
import { useStore } from 'src/store/Context';

interface Props {
  loading: boolean;
}

/** 店舗リスト */
const ShopList: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const classes = useStyles();
  const { shopList } = useStore('shop');
  const { moveToShopDetail } = usePageTransition();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (shopList.length === 0) {
    return <EmptyContent link={PAGES.SHOPS_REGISTER.path} />;
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>店舗名</TableCell>
              <TableCell className={classes.cell}>サービス名</TableCell>
              <TableCell className={classes.cell}>エリア</TableCell>
              <TableCell className={classes.cell}>住所</TableCell>
              <TableCell className={classes.cell}>レビュー数</TableCell>
              <TableCell className={classes.cell}>評価</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {shopList.map((shop) => (
              <TableRow key={shop.shopId}>
                <TableCell className={classes.cell}>{shop.shopName}</TableCell>
                <TableCell className={classes.cell}>{shop.wifiName}</TableCell>
                <TableCell className={classes.cell}>{shop.area}</TableCell>
                <TableCell className={classes.cell}>{shop.address}</TableCell>
                <TableCell className={classes.cell}>
                  {shop.reviewCount}
                </TableCell>
                <TableCell className={classes.cell}>{shop.average}</TableCell>
                <TableCell className={classes.cell}>
                  <Button
                    color="primary"
                    className={classes.button}
                    onClick={() => moveToShopDetail(shop.shopId)}
                  >
                    詳細
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default ShopList;
