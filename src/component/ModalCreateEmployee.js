import  React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function ModalCreateEmployee(props) {
    const [open, setOpen] = React.useState(props.value);

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
