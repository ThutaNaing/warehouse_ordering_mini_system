import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

function CustomerEntryForm() {
    const customerEntryGrow = useSelector(state => state.menuListReducer.customerEntryFrmClicked);
    return (
        <Grow in={customerEntryGrow} {...(customerEntryGrow ? { timeout: 1000 } : {})}>
            <Paper elevation={3}>
                asdfadfasdfas
            </Paper>
        </Grow>
    );
}
export default CustomerEntryForm;