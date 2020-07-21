import React from 'react';
import styled from 'styled-components';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// from app
import FormInput from 'src/components/partials/Form/FormInput';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
import { IRegisterAreaBody } from 'src/interfaces/api/request/Area';

interface Props {
  params: IRegisterAreaBody;
  onChangeAreaKey: (value: string) => void;
  onChangeAreaName: (value: string) => void;
  onSave: () => Promise<void>;
}

/** エリア登録フォーム */
const AreaRegisterForm: React.FC<Props> = (props: Props) => {
  const { params, onChangeAreaKey, onChangeAreaName, onSave } = props;
  const classes = useStyles();

  return (
    <Container>
      <FormControl className={classes.form}>
        <FormInput
          label="エリアキー"
          help="エリアキーを入力"
          value={params.areaKey}
          onChange={onChangeAreaKey}
        />
        <FormInput
          label="エリア名"
          help="エリア名称を入力"
          value={params.areaName}
          onChange={onChangeAreaName}
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

export default AreaRegisterForm;
