import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { showMenu, hideMenu } from '../data_management/actions'

function TopTitleAppBar(isClickedLeftMenu) {

    void function() {
        console.log('checking redux state isClicked!');
        console.log({isClickedLeftMenu});
    }();

    const showLeftMenu = function() {
        if(this.props.toggleStatus == 'F') {
            this.props.hideMenu("Clicked!");
        } else {
            this.props.showMenu("Clicked!");
        }
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