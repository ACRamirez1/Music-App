import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Online Mode' } };




export default function OnlineMode(props) { //we weren't passing the isOnline prop to the Switch component.
    // const [isOnline, setIsOnline] = useState(false);/ state of Switch was set here.
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
      <Switch {...label} onChange={() => props.setIsOnline(!props.isOnline)} />
      </CardActions>
      {/* this was where the sys notifcation was added */}
    </Card>
  );
}