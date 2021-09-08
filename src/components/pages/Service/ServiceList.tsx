import { makeStyles } from '@material-ui/core/styles';
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

// from app
import { useGlobalState } from 'src/Context';
import { PAGES } from 'src/constants/page';
import usePageTransition from 'src/hooks/usePageTransition';
import EmptyContent from 'src/components/partials/EmptyContent';

interface Props {
  loading: boolean;
}

/** Wi-Fiサービスリスト */
const ServiceList: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const classes = useStyles();
  const { serviceList } = useGlobalState('service');
  const { moveToServiceDetail } = usePageTransition();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (serviceList.length === 0) {
    return <EmptyContent link={PAGES.SERVICES_REGISTER.path} />;
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>サービス名</TableCell>
              <TableCell>リンク</TableCell>
              <TableCell>店舗数</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceList.map((service) => (
              <TableRow key={service.serviceId}>
                <TableCell>{service.wifiName}</TableCell>
                <TableCell>{service.link}</TableCell>
                <TableCell>{service.shopCount}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    className={classes.button}
                    onClick={() => moveToServiceDetail(service.serviceId)}
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
  button: {
    padding: 0,
  },
});
const Container = styled.div``;

export default ServiceList;
