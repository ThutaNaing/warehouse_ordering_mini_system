import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function AppContentCom() {
    const checked = useSelector(state => state.menuListReducer.isClicked);

    useEffect(() => {
        console.log(checked);
    }, []);

    return (
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Paper elevation={3}>
                <Grid 
                    container 
                    spacing={2}
                    direction="row">
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
                        <TextField label="Outlined" variant="outlined"
                            multiline rows={5}/>
                    </Grid>
                </Grid>
            </Paper>
        </Grow>
    );
}
export default AppContentCom;