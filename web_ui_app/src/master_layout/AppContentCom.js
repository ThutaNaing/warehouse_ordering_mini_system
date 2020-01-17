import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import SaleItemEntryForm from '../view_form_layout/SaleItemEntryCom';
import CustomerEntryForm from '../view_form_layout/CustomerEntryCom';


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

function AppContentCom() {
    const classes = useStyles();
    const itemEntryGrow = useSelector(state => state.menuListReducer.itemEntryFrmClicked);
    const customerEntryGrow = useSelector(state => state.menuListReducer.customerEntryFrmClicked);

    useEffect(() => {
        console.log(itemEntryGrow);
    }, []);

    return (
        <div>
            {itemEntryGrow ? (<SaleItemEntryForm></SaleItemEntryForm>):(<div></div>)}
            <br/>
            <br/>
            {customerEntryGrow ? (<CustomerEntryForm></CustomerEntryForm>):(<div></div>)}
        </div>
    );
}
export default AppContentCom;