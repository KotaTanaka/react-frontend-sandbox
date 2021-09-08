import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Edit } from '@material-ui/icons';
import { IconButtonType } from 'src/constants/enums';

interface Props {
  type?: IconButtonType;
  onClick: () => void;
}

/** 編集ボタン */
const EditButton: React.FC<Props> = (props: Props) => {
  const { type, onClick } = props;
  const classes = useStyles();

  if (type === IconButtonType.ICON) {
    return (
      <IconButton onClick={onClick} className={classes.iconButton}>
        <Edit />
      </IconButton>
    );
  }

  return (
    <IconButton
      color="primary"
      onClick={onClick}
      className={classes.badgeButton}
    >
      <Edit />
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

EditButton.defaultProps = {
  type: IconButtonType.ICON,
};

export default EditButton;
