import React from 'react';
import logo from '../logo.svg';
import Grid from '@material-ui/core/Grid';

import LeftMenuDrawer from './LeftMenuCom';
import TopTitleBar from './TopTitleBarCom';
import AppContentCom from './AppContentCom';

function MainCom() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid 
                    item 
                    xs={12} 
                    sm={12} 
                    md={12} 
                    lg={12}>
                    <TopTitleBar />
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={3} 
                    lg={3}>
                    <LeftMenuDrawer />
                </Grid>
                <Grid 
                    container 
                    spacing={3}
                    direction="row"
                    justify="center">
                    <Grid 
                        item 
                        xs={11} 
                        sm={11} 
                        md={11} 
                        lg={11}>
                        <AppContentCom />
                    </Grid>
                </Grid>
                
            </Grid>
        </div>
    );
}
export default MainCom;
