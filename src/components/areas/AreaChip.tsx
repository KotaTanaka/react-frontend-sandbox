import React from 'react';
import styled from 'styled-components';
import { Chip, IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// from app
import { IArea } from 'src/interfaces/api/response/Area';

interface Props {
  area: IArea;
  onClickDelete: () => void;
}

/** エリアリスト要素 */
const AreaChip: React.FC<Props> = (props: Props) => {
  const { area, onClickDelete } = props;
  const classes = useStyles();

  return (
    <Container>
      <AreaContent>
        <Chip label={area.areaName} className={classes.chip} />
        <AreaInfo>
          <AreaKeyText>{area.areaKey}</AreaKeyText>
          <ShopCountText>店舗数: {area.shopCount}</ShopCountText>
        </AreaInfo>
        <IconButton onClick={onClickDelete} className={classes.deleteButton}>
          <DeleteOutline />
        </IconButton>
      </AreaContent>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  chip: {
    width: 120,
  },
  deleteButton: {
    padding: 0,
    marginLeft: 8,
  },
});
const Container = styled.div`
  margin: 8px;
`;
const AreaContent = styled.div`
  display: flex;
  align-items: center;
`;
const AreaInfo = styled.div`
  margin-left: 8px;
`;
const AreaKeyText = styled.p`
  font-size: 8px;
  margin: 0;
`;
const ShopCountText = styled.p`
  font-size: 8px;
  margin: 0;
  color: #aaa;
`;

export default AreaChip;
