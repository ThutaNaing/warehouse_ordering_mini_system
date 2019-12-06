import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { showMenu, hideMenu } from '../data_management/actions'

function TopTitleAppBar({ isClicked, openActionFired }) {

    void function() {
        console.log('checking redux state isClicked!');
        console.log('check isClicked');
        console.log({isClicked});
        console.log('check isClickActionFired');
        console.log({openActionFired});
    }();

    const showLeftMenu = function() {
        console.log('checking click showLeftMenu');
        openActionFired();
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        onClick={showLeftMenu} 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default TopTitleAppBar;