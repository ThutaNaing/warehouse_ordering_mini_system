import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

function LeftMenuDrawer({ isClicked, openActionFired }) {
    console.log(isClicked);
    console.log()
    const [open, setOpen] = useState( useSelector(state => state.menuBarReducer.isClicked) );

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    //     console.log('checking handleDrawerOpen :: '+open);
    // };
    const handleDrawerClose = () => {
        setOpen(false);
        console.log('checking handleDrawerClose :: '+open);
    };
    
    return (
        <div>
            <Drawer
                open={open}
                variant="persistent" 
                anchor="left">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleDrawerClose}>
                        Close
                </Button>
            </Drawer>
        </div>
    );
}
export default LeftMenuDrawer;
