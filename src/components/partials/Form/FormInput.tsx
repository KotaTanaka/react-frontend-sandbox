import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';

interface Props {
  label: string;
  help: string;
  number?: boolean;
  value: string | number;
  onChange: (value: any) => void;
}

/** 入力フォーム */
const FormInput: React.FC<Props> = (props: Props) => {
  const { label, help, number, value, onChange } = props;
  const classes = useStyles();

  // prettier-ignore
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChange(number ? Number(value) : value);
  }, [number, onChange]);

  return (
    <TextField
      label={label}
      helperText={help}
      variant="outlined"
      type={number ? 'number' : undefined}
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
