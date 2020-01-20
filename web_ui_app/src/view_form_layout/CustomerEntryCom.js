import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { hideCustomerForm } from '../data_management/actions';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const style = {
    'background-color': '#d6205f'
};

function CustomerEntryForm() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const customerEntryGrow = useSelector(state => state.menuListReducer.customerEntryFrmClicked);
    const [custFrmName, setCustFrmName] = useState('');
    const [custFrmEmail, setCustFrmEmail] = useState('');
    const [custFrmPhNo, setCustFrmPhNo] = useState('');
    const [custFrmDescription, setCustFrmDescription] = useState('');
    const [custFrmAddress, setCustFrmAddress] = useState('');
    

    const handleCustEntryFrmClose = () => {
        dispatch(hideCustomerForm("hide"));
    };

    const handleCustSaveBtn = () => {
        axios.post('/api/v1/customer/add',{
            name: custFrmName,
            email: custFrmEmail,
            ph_no: custFrmPhNo,
            description: custFrmDescription,
            address: custFrmAddress
        }).then(function (response) {
            console.log('return from /api/v1/customer/add');
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <Grow in={customerEntryGrow} {...(customerEntryGrow ? { timeout: 1000 } : {})}>
            <Paper elevation={3}>
                
                <Grid 
                    container 
                    spacing={2}
                    direction="row">

                        <Grid 
                            container
                            justify="flex-end"
                            direction="row">
                                
                                <div className={classes.root}>
                                    <AppBar position="static"
                                        style={style}>
                                        <Toolbar>
                                            <Typography variant="h6" className={classes.title}>
                                                Customer Entry Form
                                            </Typography>
                                            <IconButton edge="start" className={classes.menuButton} 
                                                color="inherit" aria-label="menu" onClick={handleCustEntryFrmClose}>
                                                <CancelRoundedIcon />
                                            </IconButton>
                                        </Toolbar>
                                    </AppBar>
                                </div>

                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Name</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <TextField id="outlined-basic" 
                                label="name" 
                                variant="outlined" 
                                value={custFrmName} 
                                onChange={e => setCustFrmName(e.target.value)} />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Email</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <TextField required 
                                label="email" 
                                variant="filled"
                                value={custFrmEmail}
                                onChange={e => setCustFrmEmail(e.target.value)} />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Ph No</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <TextField 
                                label="ph no" 
                                variant="outlined" 
                                value={custFrmPhNo}
                                onChange={e => setCustFrmPhNo(e.target.value)} />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Description</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <TextField 
                                label="description" 
                                variant="outlined"
                                value={custFrmDescription}
                                onChange={e => setCustFrmDescription(e.target.value)} />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Address</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>

                            <Grid item>
                                <TextField 
                                    label="address" 
                                    variant="outlined"
                                    multiline rows={5}
                                    value={custFrmAddress}
                                    onChange={e => setCustFrmAddress(e.target.value)}/>
                            </Grid>
                            <Grid 
                                container 
                                spacing={2}
                                direction="row">
                                
                                <Grid item xs={5} sm={5} md={4} lg={6}>
                                    <Button size="large" variant="outlined" 
                                        color="primary" onClick={handleCustSaveBtn}>
                                            Save
                                    </Button>
                                </Grid>
                                <Grid item xs={5} sm={5} md={4} lg={5}>
                                    <Button size="large" variant="outlined" color="primary">Clear</Button>
                                </Grid>
                            </Grid>
                            
                        </Grid>

                </Grid>

            </Paper>
        </Grow>
    );
}
export default CustomerEntryForm;