import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// 検索バーのstyled component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: 3,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  height: '100%',
  width: '300px',
  marginLeft: 100
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  }
}))


export default function MenuBar() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      height: '40px',
      width: '100%',
      padding: 1,
      backgroundColor: '#131e40',
      borderBottom: 1,
    }}>
      <Typography variant="h6" sx={{ margin: "0 20px", fontSize: 20, fontWeight: 500, color: "white" }}>
        競馬データベース
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: 'white' }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          sx={{ color: 'white' }}
        />
      </Search>
    </Box>
  );
}