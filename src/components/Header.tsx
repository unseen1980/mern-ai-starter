import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Database } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Database className="mr-2" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Data Prep App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/upload">
          Upload
        </Button>
        <Button color="inherit" component={Link} to="/flow-editor">
          Flow Editor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;