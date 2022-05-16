import  React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

/**
 * This function is used to create a modal that is displayed when an employee is created
 * @param props - The props that are passed to the component.
 * @returns The HTML code for the modal.
 */
function ModalCreateEmployee(props) {
    /* A React Hook that is used to set the state of the component. */
    const [open, setOpen] = React.useState(props.value);

    /* Returning the HTML code for the modal. */
    return (
        <Box sx={{ width: "20%" }}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                                setOpen(true);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Employee Created!
                </Alert>
            </Collapse>
        </Box>
    );
}

export default ModalCreateEmployee;
