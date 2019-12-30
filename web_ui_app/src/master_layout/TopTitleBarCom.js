import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from 'react-redux';

import { showMenu } from '../data_management/actions';
import AppContentCom from './AppContentCom';

function TopTitleAppBar() {
    const open = useSelector(state => state.menuBarReducer.isClicked);
    const [contentDivWidth, setContentDivWidth] = useState('');
    const dispatch = useDispatch();

    const showLeftMenu = function() {
        console.log('checking click showLeftMenu');
        console.log(contentDivWidth);
        dispatch(showMenu("Showed"));
    }

    useEffect(() => {
        console.log("Checkng open at useEffect");
        console.log(open);
        if(open) {
            setContentDivWidth('content-div-width');
        } else {
            setContentDivWidth('');
        }
    }, []);

    return (
        <div className={contentDivWidth}>
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
            <AppContentCom />
        </div>
    );
}
export default TopTitleAppBar;