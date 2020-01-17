import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

function SaleItemEntryForm() {
    const classes = useStyles();
    const itemEntryGrow = useSelector(state => state.menuListReducer.itemEntryFrmClicked);

    return (
        <Grow in={itemEntryGrow} {...(itemEntryGrow ? { timeout: 1000 } : {})}>
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
                                            Sale Item Entry Form
                                        </Typography>
                                        <IconButton edge="start" className={classes.menuButton} 
                                            color="inherit" aria-label="menu">
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
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <Typography>Serial No</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" 
                            type="number" InputLabelProps={{ shrink: true, }} />
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <Typography>Balance</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <TextField label="Outlined" variant="outlined" defaultValue="0"
                            InputProps={{ readOnly: true, }}/>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <Typography>Description</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={2}>

                        <Grid item>
                            <TextField label="Outlined" variant="outlined"
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
export default SaleItemEntryForm;