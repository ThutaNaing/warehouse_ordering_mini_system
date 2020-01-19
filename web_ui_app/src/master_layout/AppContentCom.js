import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
        <Grid 
            container 
            spacing={3}
            direction="row"
            justify="center">
            {itemEntryGrow ? (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <SaleItemEntryForm></SaleItemEntryForm>
                </Grid>):("")}
            {customerEntryGrow ? (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomerEntryForm></CustomerEntryForm>
                </Grid>
                ):("")}
        </Grid>
    );
}
export default AppContentCom;