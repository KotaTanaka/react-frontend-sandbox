import styled from '@emotion/styled';
import {
  Button,
  Link,
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

/** Wi-Fiサービスリスト */
const ServiceList: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const classes = useStyles();
  const { serviceList } = useStore('service');
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
              <TableCell className={classes.cell}>サービス名</TableCell>
              <TableCell className={classes.cell}>リンク</TableCell>
              <TableCell className={classes.cell}>店舗数</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceList.map((service) => (
              <TableRow key={service.serviceId}>
                <TableCell className={classes.cell}>
                  {service.wifiName}
                </TableCell>
                <TableCell className={classes.cell}>
                  <Link href={service.link} target="_blank">
                    {service.link}
                  </Link>
                </TableCell>
                <TableCell className={classes.cell}>
                  {service.shopCount}
                </TableCell>
                <TableCell className={classes.cell}>
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
  cell: {
    fontSize: 12,
  },
  button: {
    padding: 0,
    fontSize: 12,
  },
});
const Container = styled.div``;

export default ServiceList;
