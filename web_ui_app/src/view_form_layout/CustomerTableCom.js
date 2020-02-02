import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: '#000000',
//         width: '100%',
//     },
//     heading: {
//         fontSize: theme.typography.pxToRem(15),
//         fontWeight: theme.typography.fontWeightRegular,
//     },
// }));

function CustomerTableCom() {
    const customerTableGrow = useSelector(state => state.customerReducer.custTablePanelClicked);
    // const custTblDataArryHappened = useSelector(state => state.customerReducer.custTblDataArryHappened);
    const custReducer = useSelector(state => state.customerReducer);

    useEffect(function() {
        console.log(custReducer);
    });

    return (
        <Grow in={customerTableGrow} {...(customerTableGrow ? { timeout: 1000 } : {} )}>
            <Paper elevation={3}>
                <Grid
                    container
                    spacing={2}
                    direction="row">

                    <Divider></Divider>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell align="right">abac</TableCell>
                                        <TableCell align="right">ds</TableCell>
                                        <TableCell align="right">we</TableCell>
                                        <TableCell align="right">gg</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(custReducer.custTblDataArryHappened) ? custReducer.custTblDataArry.map( function(row) {
                                        if(row) {
                                            return (<TableRow>
                                                        <TableCell>{row.name}</TableCell>
                                                        <TableCell align="right">{row.email}</TableCell>
                                                        <TableCell align="right">{row.description}</TableCell>
                                                        <TableCell align="right">{row.ph_no}</TableCell>
                                                        <TableCell align="right">{row.address}</TableCell>
                                                    </TableRow>);
                                        }
                                        return ('');
                                    }) : ('')}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
            </Paper>
        </Grow>
    );
}
export default CustomerTableCom;
