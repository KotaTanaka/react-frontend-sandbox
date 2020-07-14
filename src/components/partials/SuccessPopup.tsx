import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface Props {
  open: boolean;
  onClose: () => void;
  message: string;
}

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

/** 成功時ポップアップ(スナックバー) */
const SuccessPopup: React.FC<Props> = (props: Props) => {
  const { open, onClose, message } = props;

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessPopup;
