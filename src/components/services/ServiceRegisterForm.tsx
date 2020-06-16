import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// from app
import { IRegisterServiceBody } from 'src/interfaces/api/request/Service';

interface Props {
  params: IRegisterServiceBody;
  onChangeWifiName: (value: string) => void;
  onChangeLink: (value: string) => void;
  onSave: () => Promise<void>;
}

/** Wi-Fiサービスリスト */
const ServiceRegisterForm: React.FC<Props> = (props: Props) => {
  const { params, onChangeWifiName, onChangeLink, onSave } = props;
  const classes = useStyles();

  // prettier-ignore
  const handleChangeWifiName = useCallback((e) => {
    onChangeWifiName(e.target.value);
  }, [onChangeWifiName]);

  // prettier-ignore
  const handleChangeLink = useCallback((e) => {
    onChangeLink(e.target.value);
  }, [onChangeLink]);

  return (
    <Container>
      <FormControl className={classes.form}>
        <TextField
          label="サービス名"
          variant="outlined"
          className={classes.textField}
          helperText="Wi-Fiのサービス名称を入力"
          value={params.wifiName}
          onChange={handleChangeWifiName}
        />
        <TextField
          label="リンク"
          variant="outlined"
          className={classes.textField}
          helperText="公式サイトのURL等を入力"
          value={params.link}
          onChange={handleChangeLink}
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

export default ServiceRegisterForm;
