import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

function AppContentCom() {
    const checked = useSelector(state => state.menuListReducer.isClicked);

    useEffect(() => {
        console.log(checked);
    }, []);

    return (
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Paper elevation={3} >
                asdfasd
            </Paper>
        </Grow>
    );
}
export default AppContentCom;