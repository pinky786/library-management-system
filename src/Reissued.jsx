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
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
const drawerWidth = 240;

export default function ClippedDrawer() {
  const userName = 'User'; // Change this to the actual user name or greeting
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const options1 = { weekday: 'long' };
  const formattedDay = currentDate.toLocaleDateString(undefined, options1);
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const formattedTime = currentDate.toLocaleTimeString();

  const handleSearch = () => {
    // Add your search logic here
    // This function will be called when the search button is clicked
    // You can access the search query from the TextField component
    // and perform the necessary search actions
    console.log('Search button clicked');
  };

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

        <Box sx={{ textAlign: 'left', py: 1 }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Reissued, Collect
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'left', fontSize: '1.2rem' }}>
          <Typography variant="h6" component="div" color="grey">
            Catalogues info
          </Typography>
        </Box>





<Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
  <TextField
    label="Search"
    variant="outlined"
    size="small"
    sx={{ width: '300px' }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon color="black" />
        </InputAdornment>
      ),
    }}
  />
  <Button variant="contained" color="primary" onClick={handleSearch} sx={{ ml: '1rem' }}>
    Search
  </Button>
</Box>


        <Box sx={{ mt: '2rem' }}>
          <div className="app-container">
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
  <tr>
    <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
    <th style={{ border: '1px solid black', padding: '8px' }}>Address</th>
    <th style={{ border: '1px solid black', padding: '8px' }}>Phone</th>
    <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
    <th style={{ border: '1px solid black', padding: '8px' }}>New Column</th> {/* Added column */}
  </tr>
</thead>
<tbody>
  <tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Pinky</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>Ujcvuea</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>469306</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>groot@gmail.com</td>
  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
    <button className="delete-button" style={{ backgroundColor: 'blue', color: 'white', width: 'auto' }}>Reissued</button> {/* First delete button */}
    <button className="delete-button" style={{ backgroundColor: 'green', color: 'white', width: 'auto' }}>Collect</button> {/* Second delete button */}
  </td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Pinky</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>Ujcvuea</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>469306</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>groot@gmail.com</td>
  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
    <button className="delete-button" style={{ backgroundColor: 'blue', color: 'white', width: 'auto' }}>Reissued</button> {/* First delete button */}
    <button className="delete-button" style={{ backgroundColor: 'green', color: 'white', width: 'auto' }}>Collect</button> {/* Second delete button */}
  </td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Pinky</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>Ujcvuea</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>469306</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>groot@gmail.com</td>
  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
    <button className="delete-button" style={{ backgroundColor: 'blue', color: 'white', width: 'auto' }}>Reissued</button> {/* First delete button */}
    <button className="delete-button" style={{ backgroundColor: 'green', color: 'white', width: 'auto' }}>Collect</button> {/* Second delete button */}
  </td>
</tr>
</tbody>


            </table>
          </div>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
