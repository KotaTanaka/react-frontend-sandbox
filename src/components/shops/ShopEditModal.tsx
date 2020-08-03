import React from 'react';
import { Dialog } from '@material-ui/core';

// from app
import { FormType } from 'src/constants/enums';
import ShopForm from 'src/components/shops/ShopForm';
import { IUpdateShopBody } from 'src/interfaces/api/request/Shop';

interface Props {
  isOpen: boolean;
  params: IUpdateShopBody;
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
  onCancel: () => void;
}

/** 店舗編集フォームモーダル */
const ShopEditModal: React.FC<Props> = (props: Props) => {
  const {
    isOpen,
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
    onCancel,
  } = props;

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <ShopForm
        formType={FormType.UPDATE}
        params={params}
        ssid={ssid}
        onChangeServiceId={onChangeServiceId}
        onChangeShopName={onChangeShopName}
        onChangeArea={onChangeArea}
        onChangeDescription={onChangeDescription}
        onChangeAddress={onChangeAddress}
        onChangeAccess={onChangeAccess}
        onChangeSSID={onChangeSSID}
        onChangeShopType={onChangeShopType}
        onChangeOpeningHours={onChangeOpeningHours}
        onChangeSeatsNum={onChangeSeatsNum}
        onChangeHasPower={onChangeHasPower}
        onSave={onSave}
      />
    </Dialog>
  );
};

export default ShopEditModal;
