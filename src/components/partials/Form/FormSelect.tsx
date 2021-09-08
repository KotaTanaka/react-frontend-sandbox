import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';
import { IFormSelectMenuItem } from 'src/interfaces/View';

interface Props {
  help: string;
  items: IFormSelectMenuItem[];
  value: string | number;
  onChange: (value: any) => void;
}

/** プルダウン選択フォーム */
const FormSelect: React.FC<Props> = (props: Props) => {
  const { help, items, value, onChange } = props;
  const classes = useStyles();

  // prettier-ignore
  const handleChange = useCallback((e: React.ChangeEvent<{ name?: string; value: unknown}>) => {
    onChange(e.target.value);
  }, [onChange]);

  /** プルダウンリスト要素 */
  const SelectMenuItem = (itemValue: IFormSelectMenuItem): JSX.Element => (
    <MenuItem key={itemValue.value} value={itemValue.value}>
      {itemValue.label}
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
