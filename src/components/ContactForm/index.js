import { Grid, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import useData from '../../hooks/useData';
import { sendMail } from '../../services/email.services';

const ContactForm = () => {
    const [dataContact, setDataContact] = useState({});
    const [res, setMail] = useData(sendMail);
    const [status, setStatus] = useState(false);
    // const emailRegex=^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };
    const handelOnChangeInput = (e) => {
        const { name, value } = e.target;
        setDataContact({ ...dataContact, [name]: value });
        console.log(dataContact);
    };

    // https://wa.me/51977980622?text=Hola,%20quiero%20contactar%20contigo
    const handleSendMail = () => {
        // if (validateEmail(dataContact.email)) {
        //     setStatus(true);
        // } else {
        //     setStatus(false);
        // }
        setMail(dataContact);
    };
    return (
        <>
            <Grid xs={12} container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">CONTACTO</Typography>
                </Grid>
                <Grid container xs={12} item spacing={2}>
                    <Grid item xs={6}>
                        <TextField fullWidth name="name" onChange={handelOnChangeInput} size="small" label="Nombres" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth name="last_name" onChange={handelOnChangeInput} size="small" label="Apellidos" />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={status}
                        helperText="email incorrect"
                        fullWidth
                        name="email"
                        onChange={handelOnChangeInput}
                        size="small"
                        label="Email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth name="message" onChange={handelOnChangeInput} multiline rows={5} size="small" label="Message" />
                </Grid>
                <Grid item>
                    <Button
                        onClick={handleSendMail}
                        // variant="obito"
                        variant="contained"
                        // size="large"
                        // sx={{ borderRadius: '10px', textTransform: 'capitalize', padding: '10px 20px' }}
                    >
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default ContactForm;
