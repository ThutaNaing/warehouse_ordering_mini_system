import React from 'react';
import logo from '../logo.svg';
import Grid from '@material-ui/core/Grid';

// import LeftMenuDrawer from './LeftMenuCom';
// import TopTitleBar from './TopTitleBarCom';
import LeftMenuComBinder from '../data_management/redux_context_binders/LeftMenuComBinder';
import TopTitleBarComBinder from '../data_management/redux_context_binders/TopTitleBarComBinder';

function MainCom() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TopTitleBarComBinder />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <LeftMenuComBinder />
                </Grid>
            </Grid>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}
export default MainCom;
