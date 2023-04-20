import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value) {
  return `${value}°C`;
}




export default function MasterVolume(props) {

const handleChange = (event, newValue) => {
  props.setIsVolume(newValue);
};


  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Overrides all other sound settings in this application.
        </Typography>
      </CardContent>
      <CardActions>


      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Volume" value={props.isVolume} onChange={handleChange}
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
      
    </Box>





     
      </CardActions>
      {/* this was where the sys notifcation was added */}
    </Card>
  );
}