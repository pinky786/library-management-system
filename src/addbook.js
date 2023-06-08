import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
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

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" color="black" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <PersonIcon sx={{ marginRight: '8px' }} />
           Groot
          </Typography>
          <Typography variant="h6" noWrap component="div" color="black" sx={{ display: 'flex', alignItems: 'center' }}>
            Dashboard
            <DashboardIcon sx={{ marginLeft: '8px' }} />
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
            backgroundColor: 'lightgrey',
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
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" component="div">
            Hello, {userName}!
          </Typography>
        </Box>
        <hr style={{ margin: '0 auto', maxWidth: '80%' }} />

        {/* Your code goes here */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Card sx={{ maxWidth: 300, marginRight: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
               Total No. of Book
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some text for Card 1
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, marginRight: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Books in Circlulation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some text for Card 2
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, marginRight: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Book issued
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some text for Card 3
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Book re-issued
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some text for Card 4
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
