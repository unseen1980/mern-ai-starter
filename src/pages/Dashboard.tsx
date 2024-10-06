import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import { FileText, Image, Link as LinkIcon, Workflow } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="p-4 flex flex-col items-center">
            <FileText size={48} className="mb-2" />
            <Typography variant="h6">Text Files</Typography>
            <Typography variant="body2">5 files</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="p-4 flex flex-col items-center">
            <Image size={48} className="mb-2" />
            <Typography variant="h6">Images</Typography>
            <Typography variant="body2">12 files</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="p-4 flex flex-col items-center">
            <LinkIcon size={48} className="mb-2" />
            <Typography variant="h6">Links</Typography>
            <Typography variant="body2">8 links</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="p-4 flex flex-col items-center">
            <Workflow size={48} className="mb-2" />
            <Typography variant="h6">Workflows</Typography>
            <Typography variant="body2">3 workflows</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;