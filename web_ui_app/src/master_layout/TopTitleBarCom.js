import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';

import { showMenu, showLoginForm } from '../data_management/actions';


function TopTitleAppBar() {
    const open = useSelector(state => state.menuBarReducer.isClicked);
    const dispatch = useDispatch();

    const showLeftMenu = function() {
        console.log('checking click showLeftMenu');
        dispatch(showMenu("Showed"));
    }

    const handleLoginBtn = function() {
        dispatch(showLoginForm("Showed"));
    }

    // useEffect(() => {
    //     console.log("Checkng open at useEffect");
    //     console.log(open);
    //     if(open) {
    //         setContentDivWidth('content-div-width');
    //     } else {
    //         setContentDivWidth('');
    //     }
    // }, []);

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

                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Mini Warehouse System
                    </Typography>
                    <Button onClick={handleLoginBtn} color="inherit">Login</Button>
                </Toolbar>
                
            </AppBar>
        </div>
    );
}
export default TopTitleAppBar;