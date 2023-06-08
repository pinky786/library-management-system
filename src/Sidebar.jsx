import * as React from "react";
// import datetime from "./Datetime";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StorageIcon from "@mui/icons-material/Storage";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const drawerWidth = 240;


export default function ClippedDrawer() {

  const currentDate = new Date();
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const options1 = {weekday: 'long'}
  const formatteDay = currentDate.toLocaleDateString(undefined,options1)
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const formattedTime = currentDate.toLocaleTimeString();

  const userName = "User"; // Change this to the actual user name or greeting

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ display: "flex", alignItems: "center", flexGrow: 13 }}
          >
            {/* <PersonIcon sx={{ marginRight: '8px' }} /> */}
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
            sx={{ display: "flex", alignItems: "center" }}
            fontSize={"15px"}
          >
            {/* <DashboardIcon sx={{ marginLeft: '8px' }} /> */}
            <PersonIcon sx={{ marginRight: "8px", height: "50px" }} />
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "lightgrey",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { text: "Generate Reports", icon: <AssignmentIcon /> },
              { text: "Master Tab", icon: <StorageIcon /> },
              { text: "Logout", icon: <ExitToAppIcon /> },
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
        <Box sx={{ textAlign: "left", mb: 2, ml: 5 }}>
          <Typography variant="h4" component="div"  sx={{display:"flex",justifyContent: "flex-right",}}>
            Hello, {userName}!
            
            <Typography variant="subtitle1" component="div" sx={{ display: 'flex', justifyContent: 'flex-end', ml: 70}}>
            {formattedDate}<br/>
            {formatteDay}<br/>
            {formattedTime}
          </Typography>
          </Typography>
        </Box>
        <hr style={{ margin: "0 auto", maxWidth: "95%" }} />

        {/* Your code goes here */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
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