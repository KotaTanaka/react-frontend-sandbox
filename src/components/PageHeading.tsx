import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

interface Props {
  heading: string;
}

/**
 * ページタイトル
 * @author kotatanaka
 */
const PageHeading: React.FC<Props> = (props: Props) => {
  const { heading } = props;

  return (
    <Container>
      <Heading variant="h3">{heading}</Heading>
    </Container>
  );
};

const Container = styled.div`
  margin: 50px 0 50px 0;
`;
const Heading = styled(Typography)``;

export default PageHeading;
