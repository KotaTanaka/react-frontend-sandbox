import styled from '@emotion/styled';
import { FormLabel, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  label: string;
  on: boolean;
  onChange: () => void;
}

/** スイッチボタン */
const FormSwitch: React.FC<Props> = (props: Props) => {
  const { label, on, onChange } = props;
  const classes = useStyles();

  return (
    <Container>
      <FormLabel className={classes.label}>{label}</FormLabel>
      <Switch checked={on} onChange={onChange} color="primary" />
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  label: {
    fontSize: 14,
    paddingLeft: 14,
  },
});
const Container = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export default FormSwitch;
