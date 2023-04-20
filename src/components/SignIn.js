import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn(props) {
  return (
    <Box
      component="form"
      sx={{
        display: 'grid',
        maxWidth: 300,
        gap: '10px', 
        margin: '65px auto',
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="standard-basic" label="Email" variant="standard" type='email' required />
        <TextField id="standard-basic" label="Password" variant="standard" type='password' required />
        <Button variant='contained' onClick={() => props.setIsLoggedIn(true)}>Log In</Button>
    </Box>
  );
}