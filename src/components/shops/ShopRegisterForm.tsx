import React from 'react';
import styled from 'styled-components';
import { Button, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

/** 店舗登録フォーム */
const ShopRegisterForm: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Container>
      <FormControl className={classes.form}>
        <TextField
          label="サービスID"
          variant="outlined"
          className={classes.textField}
          helperText="Wi-FiのサービスIDを入力"
        />
        <TextField
          label="SSID"
          variant="outlined"
          className={classes.textField}
          helperText="SSIDを入力"
        />
        <TextField
          label="住所"
          variant="outlined"
          className={classes.textField}
          helperText="店舗住所を入力"
        />
        <TextField
          label="アクセス"
          variant="outlined"
          className={classes.textField}
          helperText="店舗へのアクセスを入力"
        />
        <TextField
          label="店舗種別"
          variant="outlined"
          className={classes.textField}
          helperText="店舗種別を入力"
        />
        <TextField
          label="営業時間"
          variant="outlined"
          className={classes.textField}
          helperText="営業時間を入力"
        />
        <TextField
          label="座席数"
          variant="outlined"
          className={classes.textField}
          helperText="座席数を入力"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Save />}
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
