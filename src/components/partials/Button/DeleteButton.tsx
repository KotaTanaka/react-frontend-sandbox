import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  onClick: () => void;
}

/** 削除ボタン */
const DeleteButton: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  const classes = useStyles();

  return (
    <IconButton onClick={onClick} className={classes.deleteButton}>
      <DeleteOutline />
    </IconButton>
  );
};

// styles
const useStyles = makeStyles({
  deleteButton: {
    padding: 4,
  },
});

export default DeleteButton;
