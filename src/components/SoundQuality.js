import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





export default function SoundQuality(props) {

    
  const handleChange = (event) => {
    props.setMusicQuality(event.target.value);}
    
  return (
    <Card sx={{ maxWidth: 300}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Sound Quality
        </Typography>
        <Typography variant="body7" sx={{ marginTop: 1 }}>
          Manually control the music quality in event of poor connection
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.musicQuality}
          label="Quality"
          onChange={handleChange}
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </CardActions>
    </Card>
  );
}