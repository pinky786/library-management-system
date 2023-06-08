import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorageIcon from '@mui/icons-material/Storage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const userName = 'User'; // Change this to the actual user name or greeting
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const options1 = { weekday: 'long' };
  const formattedDay = currentDate.toLocaleDateString(undefined, options1);
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const formattedTime = currentDate.toLocaleTimeString();

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ display: 'flex', alignItems: 'center', flexGrow: 13 }}
          >
            <Box
              component="img"
              sx={{
                height: 35,
                width: 35,
                maxHeight: { xs: 100, md: 100 },
                maxWidth: { xs: 100, md: 100 },
              }}
              alt="Logo"
              src="./logo1.png"
            />
            AcadeMate
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ display: 'flex', alignItems: 'center' }}
            fontSize={'15px'}
          >
            <PersonIcon sx={{ marginRight: '8px', height: '50px' }} />
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#f2f2f2',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              { text: 'Generate Reports', icon: <AssignmentIcon /> },
              { text: 'Master Tab', icon: <StorageIcon /> },
              { text: 'Logout', icon: <ExitToAppIcon /> },
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ textAlign: 'left', mb: 2, ml: 5 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ display: 'flex', justifyContent: 'flex-right' }}
          >
            Hello, {userName}!

            <Typography
              variant="subtitle1"
              component="div"
              sx={{ display: 'flex', justifyContent: 'flex-end', ml: 70 }}
            >
              {formattedDate}
              <br />
              {formattedDay}
              <br />
              {formattedTime}
            </Typography>
          </Typography>
        </Box>
        <hr style={{ margin: '0 auto', maxWidth: '100%' }} />

        <Box sx={{ textAlign: 'left', py: 1 , mt:2}}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
           Generate Reports
          </Typography>
        </Box>
        

        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
  <InputLabel id="dropdown-label" sx={{ marginRight: '2rem',color: 'black' , fontSize: '1.2rem' }}>
    Select Report
  </InputLabel>
  <Select
    labelId="dropdown-label"
    variant="outlined"
    size="small"
    sx={{ marginRight: '1rem', backgroundColor: 'white', borderRadius: '5%', width: '400px' }}
  >
    <MenuItem value={1}>Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    <MenuItem value={3}>Option 3</MenuItem>
  </Select>
</Box>


       <Box sx={{ display: 'flex', justifyContent: 'flex-start',mt:4}}>
  <Button variant="contained" color="primary">
   Generate Report
  </Button>
</Box>


      </Box>
    </Box>
  );
}
