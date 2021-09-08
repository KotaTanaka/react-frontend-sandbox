import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

/** プライマリーボタン */
const ButtonPrimary: React.FC<Props> = (props: Props) => {
  const { label, icon, onClick } = props;
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={icon}
      className={classes.button}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

// styles
const useStyles = makeStyles({
  button: {
    width: 240,
  },
});

export default ButtonPrimary;
