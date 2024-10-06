import React, { useState } from 'react';
import { Typography, Button, TextField, Paper } from '@mui/material';
import { Upload } from 'lucide-react';

const DataUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleUpload = () => {
    // TODO: Implement file upload logic
    console.log('File to upload:', file);
    console.log('URL to process:', url);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Data Upload
      </Typography>
      <Paper className="p-4 mb-4">
        <Typography variant="h6" gutterBottom>
          Upload File
        </Typography>
        <input
          accept="*/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span" startIcon={<Upload />}>
            Choose File
          </Button>
        </label>
        {file && <Typography className="mt-2">{file.name}</Typography>}
      </Paper>
      <Paper className="p-4 mb-4">
        <Typography variant="h6" gutterBottom>
          Enter URL
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="https://example.com/data"
          value={url}
          onChange={handleUrlChange}
        />
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!file && !url}
      >
        Upload Data
      </Button>
    </div>
  );
};

export default DataUpload;