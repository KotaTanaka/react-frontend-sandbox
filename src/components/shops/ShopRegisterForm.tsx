import React from 'react';
import styled from 'styled-components';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// from app
import FormInput from 'src/components/partials/Form/FormInput';
import FormSwitch from 'src/components/partials/Form/FormSwitch';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
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
  onChangeHasPower: () => void;
  onSave: () => Promise<void>;
}

/** 店舗登録フォーム */
const ShopRegisterForm: React.FC<Props> = (props: Props) => {
  const {
    params,
    // onChangeServiceId,
    onChangeShopName,
    onChangeArea,
    onChangeDescription,
    onChangeAddress,
    onChangeAccess,
    // onChangeSSID,
    onChangeShopType,
    onChangeOpeningHours,
    onChangeSeatsNum,
    onChangeHasPower,
    onSave,
  } = props;
  const classes = useStyles();

  return (
    <Container>
      <FormControl className={classes.form}>
        {/** TODO サービスID Picker */}
        <FormInput
          label="店舗名"
          help="店舗名称を入力"
          value={params.shopName}
          onChange={onChangeShopName}
        />
        {/** TODO Area Picker */}
        <FormInput
          label="地域"
          help="地域を選択"
          value={params.area}
          onChange={onChangeArea}
        />
        <FormInput
          label="店舗説明"
          help="店舗の説明を入力"
          value={params.description}
          onChange={onChangeDescription}
        />
        <FormInput
          label="住所"
          help="店舗住所を入力"
          value={params.address}
          onChange={onChangeAddress}
        />
        <FormInput
          label="アクセス"
          help="店舗アクセスを入力"
          value={params.access}
          onChange={onChangeAccess}
        />
        {/** TODO SSID 複数入力 */}
        <FormInput
          label="店舗種別"
          help="店舗種別を入力"
          value={params.shopType}
          onChange={onChangeShopType}
        />
        <FormInput
          label="営業時間"
          help="営業時間を入力"
          value={params.openingHours}
          onChange={onChangeOpeningHours}
        />
        <FormInput
          label="座席数"
          help="座席数を入力"
          type="number"
          value={params.seatsNum}
          onChange={onChangeSeatsNum}
        />
        <FormSwitch
          label="電源の有無"
          on={params.hasPower}
          onChange={onChangeHasPower}
        />
        <ButtonPrimary label="登録する" icon={<Save />} onClick={onSave} />
      </FormControl>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  form: {
    alignItems: 'center',
  },
});
const Container = styled.div``;

export default ShopRegisterForm;
