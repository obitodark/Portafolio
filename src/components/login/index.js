import { Box, CardActions, Typography, CardContent, Button, TextField } from '@mui/material';
import { useState } from 'react';

import { singIn } from '../../services/auth.services';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate();
    const Alert = () => {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credentials is incorrect!'
            // footer: '<a href="">Why do I have this issue?</a>'
        });
    };

    const [credential, setCredential] = useState({});
    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setCredential({
            ...credential,
            [name]: value
        });
        console.log(credential);
    };
    const handleSend = async () => {
        const { data, status } = await singIn(credential);
        if (status !== 200) return Alert();
        await localStorage.setItem('token', data.access_token);
        history('/panel-admin/projects');
        // console.log('token', data);
    };
    return (
        <Box>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    Login
                </Typography>
                <Box p={3}>
                    <Box mb={2}>
                        <TextField
                            name="username"
                            id="outlined-basic"
                            fullWidth
                            label="Username"
                            variant="outlined"
                            onChange={handelInputChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            name="password"
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={handelInputChange}
                        />
                    </Box>
                </Box>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleSend}>
                    Ingresar
                </Button>
            </CardActions>
        </Box>
    );
};
export default Login;
