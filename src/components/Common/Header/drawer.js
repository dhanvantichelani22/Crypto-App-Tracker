import React,{useState} from 'react';
import "./style.css";
// import DarkMode from '../DarkMode';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HeaderCoin from '../HeaderCoin';

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
            <HeaderCoin/>
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
          {/* <DarkMode/> */}
      </div>
          </Drawer>
    </div>
  );
}