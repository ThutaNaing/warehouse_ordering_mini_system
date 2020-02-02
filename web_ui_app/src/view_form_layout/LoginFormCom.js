import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import { hideLoginForm } from '../data_management/actions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import IconButton from '@material-ui/core/IconButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
});

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
    showCutTblBtn: {
        marginLeft: theme.spacing(15),
    },
}));

function LoginFormCom(props) {
    const dispatch = useDispatch();
    const loginFormBtnClicked = useSelector(state => state.menuBarReducer.loginFormBtnClicked);

    const handleLoginDialogueCloseBtn = () => {
        dispatch(hideLoginForm("Closed"));
    };

    return (
        <Dialog
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="customized-dialog-title" 
            open={loginFormBtnClicked}
            onClose={handleLoginDialogueCloseBtn}>
            <DialogTitle id="customized-dialog-title">
                <Typography variant="h6">
                    Login Form
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                <Grid 
                    container 
                    spacing={2}
                    direction="row">
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Typography>Email</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField id="username"
                            label="email"
                            variant="outlined" />
                            {/* value={custFrmName} */}
                            {/* onChange={e => setCustFrmName(e.target.value)} /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Typography>Password</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField id="username"
                            label="email"
                            variant="outlined" />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="secondary">Login ...</Button>
                <Button 
                    variant="outlined" 
                    color="inherit"
                    onClick={handleLoginDialogueCloseBtn}>Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export default LoginFormCom;