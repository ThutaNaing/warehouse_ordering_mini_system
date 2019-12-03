import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

function LeftMenuDrawer() {
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
        console.log('checking handleDrawerOpen :: '+open);
    };
    const handleDrawerClose = () => {
        setOpen(false);
        console.log('checking handleDrawerClose :: '+open);
    };
    
    return (
        <div>
            <IconButton onClick={handleDrawerOpen}>OPen</IconButton>
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
