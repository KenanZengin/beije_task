import React from 'react'
import { Alert } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import { SnackbarProps } from '@/types';

const SnackbarComponent: React.FC<SnackbarProps> = ({ snackbarStatu, closeSnackbar, snackbarMess, snackbarMode }) => {
    return (
    <Snackbar 
        open={snackbarStatu} 
        autoHideDuration={4000} 
        onClose={closeSnackbar}
        anchorOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        key={"top-center"}
    >
        <Alert
            onClose={closeSnackbar}
            severity={snackbarMode}
            variant="filled"
            sx={{ width: '100%' }}
            style={{fontSize:".825rem"}}
        >
            {snackbarMess}
        </Alert>
    </Snackbar>
  )
}

export default SnackbarComponent