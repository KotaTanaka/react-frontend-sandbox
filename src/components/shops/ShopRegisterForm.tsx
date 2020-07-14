import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// from app
import { IRegisterShopBody } from 'src/interfaces/api/request/Shop';

interface Props {
  params: IRegisterShopBody;
  onChangeServiceId: (value: number) => void;
  onChangeShopName: (value: string) => void;
  onChangeArea: (value: string) => void;
  onChangeDescription: (value: string) => void;
  onChangeAddress: (value: string) => void;
  onChangeAccess: (value: string) => void;
  onChangeSSID: (value: string) => void;
  onChangeShopType: (value: string) => void;
  onChangeOpeningHours: (value: string) => void;
  onChangeSeatsNum: (value: number) => void;
  onChangeHasPower: (value: boolean) => void;
  onSave: () => Promise<void>;
}

/** 店舗登録フォーム */
const ShopRegisterForm: React.FC<Props> = (props: Props) => {
  const {
    params,
    onChangeServiceId,
    onChangeShopName,
    onChangeArea,
    onChangeDescription,
    onChangeAddress,
    onChangeAccess,
    onChangeSSID,
    onChangeShopType,
    onChangeOpeningHours,
    onChangeSeatsNum,
    onChangeHasPower,
    onSave,
  } = props;
  const classes = useStyles();

  // prettier-ignore
  const handleChangeServiceId = useCallback((e) => {
    onChangeServiceId(e.target.valueAsNumber);
  }, [onChangeServiceId]);

  // prettier-ignore
  const handleChangeShopName = useCallback((e) => {
    onChangeShopName(e.target.value);
  }, [onChangeShopName]);

  // prettier-ignore
  const handleChangeArea = useCallback((e) => {
    onChangeArea(e.target.value);
  }, [onChangeArea]);

  // prettier-ignore
  const handleChangeDescription = useCallback((e) => {
    onChangeDescription(e.target.value);
  }, [onChangeDescription]);

  // prettier-ignore
  const handleChangeAddress = useCallback((e) => {
    onChangeAddress(e.target.value);
  }, [onChangeAddress]);

  // prettier-ignore
  const handleChangeAccess = useCallback((e) => {
    onChangeAccess(e.target.value);
  }, [onChangeAccess]);

  // prettier-ignore
  const handleChangeSSID = useCallback((e) => {
    onChangeSSID(e.target.value);
  }, [onChangeSSID]);

  // prettier-ignore
  const handleChangeShopType = useCallback((e) => {
    onChangeShopType(e.target.value);
  }, [onChangeShopType]);

  // prettier-ignore
  const handleChangeOpeningHours = useCallback((e) => {
    onChangeOpeningHours(e.target.value);
  }, [onChangeOpeningHours]);

  // prettier-ignore
  const handleChangeSeatsNum = useCallback((e) => {
    onChangeSeatsNum(e.target.valueAsNumber);
  }, [onChangeSeatsNum]);

  // prettier-ignore
  const handleChangeHasPower = useCallback((e) => {
    onChangeHasPower (e.target.valueAsBoolean);
  }, [onChangeHasPower]);

  return (
    <Container>
      <FormControl className={classes.form}>
        {/** TODO Picker */}
        <TextField
          label="サービスID"
          variant="outlined"
          className={classes.textField}
          helperText="Wi-Fiサービスを選択"
          type="number"
          value={params.serviceId}
          onChange={handleChangeServiceId}
        />
        <TextField
          label="店舗名"
          variant="outlined"
          className={classes.textField}
          helperText="店舗名称を入力"
          value={params.shopName}
          onChange={handleChangeShopName}
        />
        {/** TODO Picker */}
        <TextField
          label="地域"
          variant="outlined"
          className={classes.textField}
          helperText="地域を選択"
          value={params.area}
          onChange={handleChangeArea}
        />
        <TextField
          label="店舗説明"
          variant="outlined"
          className={classes.textField}
          helperText="店舗の説明を入力"
          value={params.description}
          onChange={handleChangeDescription}
        />
        <TextField
          label="住所"
          variant="outlined"
          className={classes.textField}
          helperText="店舗住所を入力"
          value={params.address}
          onChange={handleChangeAddress}
        />
        <TextField
          label="アクセス"
          variant="outlined"
          className={classes.textField}
          helperText="店舗アクセスを入力"
          value={params.access}
          onChange={handleChangeAccess}
        />
        <TextField
          label="SSID"
          variant="outlined"
          className={classes.textField}
          helperText="SSIDを入力"
          value={params.ssid}
          onChange={handleChangeSSID}
        />
        <TextField
          label="店舗種別"
          variant="outlined"
          className={classes.textField}
          helperText="店舗種別を入力"
          value={params.shopType}
          onChange={handleChangeShopType}
        />
        <TextField
          label="営業時間"
          variant="outlined"
          className={classes.textField}
          helperText="営業時間を入力"
          value={params.openingHours}
          onChange={handleChangeOpeningHours}
        />
        <TextField
          label="座席数"
          variant="outlined"
          className={classes.textField}
          helperText="座席数を入力"
          type="number"
          value={params.seatsNum}
          onChange={handleChangeSeatsNum}
        />
        {/** TODO Radio */}
        <TextField
          label="電源有無"
          variant="outlined"
          className={classes.textField}
          helperText="電源の有無を選択"
          type="boolean"
          value={params.hasPower}
          onChange={handleChangeHasPower}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Save />}
          className={classes.button}
          onClick={onSave}
        >
          登録する
        </Button>
      </FormControl>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  form: {
    alignItems: 'center',
  },
  textField: {
    width: 320,
    marginBottom: 16,
  },
  button: {
    width: 240,
    marginTop: 64,
  },
});
const Container = styled.div``;

export default ShopRegisterForm;
