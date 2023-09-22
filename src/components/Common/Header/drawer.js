import React,{useState} from 'react';
import "./style.css";
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
    
  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}>
            <SettingsOutlinedIcon className='iconlink'/>
            </IconButton>
          <Drawer anchor={"left"} open={open} onClose={()=>setOpen(false)}>
            {/* <h1>h111</h1> */}
          <div className='drawer-div'>
          <Link to="/">
          <p className="linkin">Home</p>
          </Link>
           <Link to="/compare">
          <p className="linkin">Compare</p>
          </Link>
          <Link to="/watchlist">
          <p className="linkin">WatchList</p>
          </Link>
          <Link to="/dashboard">
          <p className="linkin">Dashboard</p>
          </Link>
      </div>
          </Drawer>
    </div>
  );
}