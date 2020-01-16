import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { hideMenu, showCustomerForm } from '../data_management/actions';

function LeftMenuDrawer() {
    const open = useSelector(state => state.menuBarReducer.isClicked);
    const [menuDivWidth, setMenuDivWidth] = useState('');
    const dispatch = useDispatch();

    const handleDrawerClose = () => {
        dispatch(hideMenu("hide"));
    };

    const handleCustomerForm = () => {
        console.log("showCustomerForm");
        dispatch(showCustomerForm("showCustomer"));
    }

    // useEffect(() => {
    //     console.log("Checkng open at useEffect");
    //     console.log(open);
    //     if(open) {
    //         setMenuDivWidth('left-menu-width');
    //     } else {
    //         setMenuDivWidth('');
    //     }
    // }, []);
    
    return (
        <div className={menuDivWidth}>
            <Drawer
                open={open}
                anchor="left">

                <List>
                    <ListItem>
                        <ListItemText primary="Mini Order" />
                        <IconButton 
                            aria-label="close"
                            onClick={handleDrawerClose}>
                                <ArrowBackIcon />
                        </IconButton>
                    </ListItem>

                    <Divider />

                    <ListItem button>
                        <ListItemText primary="Customer" onClick={handleCustomerForm} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Manufacturer" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Order Form" />
                    </ListItem>
                </List>

                
            </Drawer>
        </div>
    );
}
export default LeftMenuDrawer;
