import React from 'react';
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

    const handleCustEntryFrmClose = () => {
        dispatch(hideCustomerForm("hide"));
    };

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
                            <TextField id="outlined-basic" label="name" variant="outlined" />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Email</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <TextField required id="outlined-basic" label="email" variant="filled" />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Ph No</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <TextField id="outlined-basic" label="ph no" variant="outlined" />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Description</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <TextField id="outlined-basic" label="description" variant="outlined" />
                        </Grid>

                        <Grid item xs={6} sm={6} md={3} lg={2}>
                            <Typography>Address</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2}>

                            <Grid item>
                                <TextField label="address" variant="outlined"
                                    multiline rows={5}/>
                            </Grid>
                            <Grid 
                                container 
                                spacing={2}
                                direction="row">
                                
                                <Grid item xs={5} sm={5} md={4} lg={6}>
                                    <Button size="large" variant="outlined" color="primary">Save</Button>
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