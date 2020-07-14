import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
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
import { PAGES } from 'src/constants/page';
import usePageTransition from 'src/hooks/usePageTransition';
import EmptyContent from 'src/components/partials/EmptyContent';
import { IServiceList } from 'src/interfaces/api/response/Service';

interface Props {
  data: IServiceList;
  loading: boolean;
}

/** Wi-Fiサービスリスト */
const ServiceList: React.FC<Props> = (props: Props) => {
  const { data, loading } = props;
  const classes = useStyles();

  const { moveToServiceDetail } = usePageTransition();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (data.serviceList.length === 0) {
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
            {data.serviceList.map((service) => (
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
