/* eslint-disable react/prop-types */
import {
      Button,
      Dialog,
      DialogActions,
      DialogContent,
      DialogContentText,
      DialogTitle,
} from "@mui/material";

const GenericDialog = ({
      open,
      onClose,
      title,
      content,
      onConfirm,
      confirmText = "Confirm",
      cancelText = "Cancel",
}) => {
      return (
            <Dialog
                  open={open}
                  onClose={onClose}
                  aria-labelledby="dialog-title"
                  aria-describedby="dialog-description"
            >
                  <DialogTitle className="font-bold text-stone-700" id="dialog-title">
                        {title}
                  </DialogTitle>
                  <DialogContent>
                        <DialogContentText id="dialog-description">{content}</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                        <Button onClick={onClose} color="">
                              {cancelText}
                        </Button>
                        <Button onClick={onConfirm} color="error" autoFocus>
                              {confirmText}
                        </Button>
                  </DialogActions>
            </Dialog>
      );
};

export default GenericDialog;
