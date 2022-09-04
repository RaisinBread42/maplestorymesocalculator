import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

/*main*/
function AppMenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Maplestory Meso Calculator (Reboot)
        </Typography>
        <Button color="inherit">Bossing</Button>
        <Button color="inherit">Farming (coming soon)</Button>
      </Toolbar>
    </AppBar>
  </Box>

  );
}

export default AppMenuBar;
