import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeleteOutline } from '@material-ui/icons';
import { IconButtonType } from 'src/constants/enums';

interface Props {
  type?: IconButtonType;
  onClick: () => void;
}

/** 削除ボタン */
const DeleteButton: React.FC<Props> = (props: Props) => {
  const { type, onClick } = props;
  const classes = useStyles();

  if (type === IconButtonType.ICON) {
    return (
      <IconButton onClick={onClick} className={classes.iconButton}>
        <DeleteOutline />
      </IconButton>
    );
  }

  return (
    <IconButton
      color="secondary"
      onClick={onClick}
      className={classes.badgeButton}
    >
      <DeleteOutline />
    </IconButton>
  );
};

// styles
const useStyles = makeStyles({
  iconButton: {
    padding: 4,
  },
  badgeButton: {
    padding: 8,
    boxShadow: '0 0 2px grey',
  },
});

DeleteButton.defaultProps = {
  type: IconButtonType.ICON,
};

export default DeleteButton;
