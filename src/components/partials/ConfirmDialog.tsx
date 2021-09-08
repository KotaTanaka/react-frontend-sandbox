import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

interface Props {
  isOpen: boolean;
  message: string;
  onSubmit: () => void;
  onCancel: () => void;
}

/** 確認ダイアログ */
const ConfirmDialog: React.FC<Props> = (props: Props) => {
  const { isOpen, message, onSubmit, onCancel } = props;

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} color="primary">
          OK
        </Button>
        <Button onClick={onCancel} color="primary" autoFocus>
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
