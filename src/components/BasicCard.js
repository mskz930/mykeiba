import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 300, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" align="left">
          Assets
        </Typography>
        <Typography sx={{ fontSize: "30px" }} align="left">
          100,000円
        </Typography>
        <Typography sx={{ color: 'error.main' }} align="left">
          -22.4% DOWN
        </Typography>
      </CardContent>
    </Card>
  );
}
