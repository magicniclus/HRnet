import React from 'react';
import Modal from "react-modal";
import ClearIcon from '@mui/icons-material/Clear';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ModalCreateEmployee(props) {
    const { isOpen, onRequestClose, onClick } = props;

<<<<<<< Updated upstream
    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
=======
  return (
    <Box sx={{ width: "20%"}}>
      <Collapse in={open} >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
                setOpen(true)
              }}
            >
              <CloseIcon
              color="primary"
              />
            </IconButton >
          }
          sx={{ mb: 2 }}
>>>>>>> Stashed changes
        >
            <button onClick={onClick}>X</button>
            <h2 className="modal">Employee Created!</h2>
        </Modal>
    )
}

export default ModalCreateEmployee;
