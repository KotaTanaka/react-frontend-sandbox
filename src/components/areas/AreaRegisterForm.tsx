import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// from app
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

  // prettier-ignore
  const handleChangeAreaKey = useCallback((e) => {
    onChangeAreaKey(e.target.value);
  }, [onChangeAreaKey]);

  // prettier-ignore
  const handleChangeAreaName = useCallback((e) => {
    onChangeAreaName(e.target.value);
  }, [onChangeAreaName]);

  return (
    <Container>
      <FormControl className={classes.form}>
        <TextField
          label="エリアキー"
          variant="outlined"
          className={classes.textField}
          helperText="エリアキーを入力"
          value={params.areaKey}
          onChange={handleChangeAreaKey}
        />
        <TextField
          label="エリア名"
          variant="outlined"
          className={classes.textField}
          helperText="エリア名称を入力"
          value={params.areaName}
          onChange={handleChangeAreaName}
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

export default AreaRegisterForm;
