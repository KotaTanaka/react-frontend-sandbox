import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Button, FormControl, TextField } from '@material-ui/core';
import { Save } from '@material-ui/icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

/** Wi-Fiサービスリスト */
const ServiceRegisterForm: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Container>
      <FormControl className={classes.form}>
        <TextField
          label="サービス名"
          variant="outlined"
          className={classes.textField}
          helperText="Wi-Fiのサービス名称を入力"
        />
        <TextField
          label="リンク"
          variant="outlined"
          className={classes.textField}
          helperText="公式サイトのURL等を入力"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Save />}
          className={classes.button}
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
