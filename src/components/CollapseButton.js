import * as React from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '2rem',
  height: '2rem',
}

export default function CollapseButton() {

  return (
    <Box sx={style}>
      <ExpandMoreIcon />
    </Box>
  )
}