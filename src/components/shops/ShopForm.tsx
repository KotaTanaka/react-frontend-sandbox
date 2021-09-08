import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Save } from '@material-ui/icons';

// from app
import { useGlobalState } from 'src/Context';
import { FormType } from 'src/constants/enums';
import FormInput from 'src/components/partials/Form/FormInput';
import FormSelect from 'src/components/partials/Form/FormSelect';
import FormSwitch from 'src/components/partials/Form/FormSwitch';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
import {
  IRegisterShopBody,
  IUpdateShopBody,
} from 'src/interfaces/api/request/Shop';
import { IFormSelectMenuItem } from 'src/interfaces/View';
import { baseContainer, flexColumnCenter } from 'src/styles/mixin';

interface Props {
  formType: FormType;
  params: IRegisterShopBody | IUpdateShopBody;
  ssid: string;
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
const ShopForm: React.FC<Props> = (props: Props) => {
  const {
    formType,
    params,
    ssid,
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

  const { serviceList } = useGlobalState('service');
  const { areaList } = useGlobalState('area');

  /** サービスプルダウンリスト */
  const serviceMenuList = useMemo((): IFormSelectMenuItem[] => {
    return serviceList.map(({ serviceId, wifiName }) => {
      return { label: wifiName, value: serviceId } as IFormSelectMenuItem;
    });
  }, [serviceList]);

  /** エリアプルダウンリスト */
  const areaMenuList = useMemo((): IFormSelectMenuItem[] => {
    return areaList.map(({ areaKey }) => {
      return { label: areaKey, value: areaKey } as IFormSelectMenuItem;
    });
  }, [areaList]);

  /** ボタンラベル */
  const buttonLabel = useMemo(() => {
    switch (formType) {
      case FormType.REGISTER:
        return '登録する';
      case FormType.UPDATE:
        return '更新する';
      default:
        return '送信する';
    }
  }, [formType]);

  return (
    <Container>
      <FormSelect
        help="サービスを選択"
        items={serviceMenuList}
        value={params.serviceId || ''}
        onChange={onChangeServiceId}
      />
      <FormInput
        label="店舗名"
        help="店舗名称を入力"
        value={params.shopName || ''}
        onChange={onChangeShopName}
      />
      <FormSelect
        help="エリアを選択"
        items={areaMenuList}
        value={params.area || ''}
        onChange={onChangeArea}
      />
      <FormInput
        label="店舗説明"
        help="店舗の説明を入力"
        value={params.description || ''}
        onChange={onChangeDescription}
      />
      <FormInput
        label="住所"
        help="店舗住所を入力"
        value={params.address || ''}
        onChange={onChangeAddress}
      />
      <FormInput
        label="アクセス"
        help="店舗アクセスを入力"
        value={params.access || ''}
        onChange={onChangeAccess}
      />
      <FormInput
        label="SSID"
        help="SSIDを入力（複数登録する場合はカンマ区切り）"
        value={ssid}
        onChange={onChangeSSID}
      />
      <FormInput
        label="店舗種別"
        help="店舗種別を入力"
        value={params.shopType || ''}
        onChange={onChangeShopType}
      />
      <FormInput
        label="営業時間"
        help="営業時間を入力"
        value={params.openingHours || ''}
        onChange={onChangeOpeningHours}
      />
      <FormInput
        label="座席数"
        help="座席数を入力"
        number
        value={params.seatsNum || 0}
        onChange={onChangeSeatsNum}
      />
      <FormSwitch
        label="電源の有無"
        on={params.hasPower || false}
        onChange={onChangeHasPower}
      />
      <ButtonPrimary label={buttonLabel} icon={<Save />} onClick={onSave} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
  ${baseContainer};
`;

export default ShopForm;
