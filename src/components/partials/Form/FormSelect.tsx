import React, { useCallback } from 'react';
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  help: string;
  items: any[]; // string[] or number[]
  value: string | number;
  onChange: (value: any) => void;
}

/** プルダウン選択フォーム */
const FormSelect: React.FC<Props> = (props: Props) => {
  const { help, items, value, onChange } = props;
  const classes = useStyles();

  // prettier-ignore
  const handleChange = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange]);

  /** プルダウンリスト要素 */
  const SelectMenuItem = (itemValue: any): JSX.Element => (
    <MenuItem key={itemValue} value={itemValue}>
      {itemValue}
    </MenuItem>
  );

  return (
    <FormControl className={classes.form}>
      <Select
        variant="outlined"
        value={value}
        onChange={handleChange}
        className={classes.select}
      >
        {items.map((item) => SelectMenuItem(item))}
      </Select>
      <FormHelperText className={classes.help}>{help}</FormHelperText>
    </FormControl>
  );
};

// styles
const useStyles = makeStyles({
  form: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    paddingLeft: 14,
  },
  select: {
    width: 320,
  },
  help: {
    marginLeft: 14,
  },
});

export default FormSelect;
