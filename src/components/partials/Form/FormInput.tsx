import React, { useCallback } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  label: string;
  help: string;
  type?: string;
  value: string | number;
  onChange: (value: any) => void;
}

/** 入力フォーム */
const FormInput: React.FC<Props> = (props: Props) => {
  const { label, help, type, value, onChange } = props;
  const classes = useStyles();

  // prettier-ignore
  const handleChange = useCallback((e) => {
    const value = e.target.value as unknown;
    onChange(type === 'number' ? Number(value) : value);
  }, [type, onChange]);

  return (
    <TextField
      label={label}
      helperText={help}
      variant="outlined"
      type={type}
      className={classes.textField}
      value={value}
      onChange={handleChange}
    />
  );
};

// styles
const useStyles = makeStyles({
  textField: {
    width: 320,
    marginBottom: 16,
  },
});

export default FormInput;
