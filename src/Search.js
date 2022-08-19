import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const categories = ['馬名', 'レース名', '機種名']

const SelectMenu = () => {
  const [value, setValue] = React.useState('')
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel id="select-menu-label">Category</InputLabel>
        <Select
          labelId="select-menu-label"
          id="select-menu"
          value={value}
          label="Category"
          onChange={handleChange}
          sx={{ minWidth: 120 }}
        >
          {categories.map((item, index) => (
            <MenuItem value={index} key={index}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

const SearchBar = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: '500px',
      padding: 1 
    }}>
      <SelectMenu />
      
      <Box>
        <InputBase />
      </Box>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

const SearchOptions = () => {
  return (
    <Box>
      <Typography textAlign="left">競争種別</Typography>
      <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
        <FormControlLabel control={<Checkbox />} label="芝" />
        <FormControlLabel control={<Checkbox />} label="ダート" />
        <FormControlLabel control={<Checkbox />} label="障害物" />
      </FormGroup>
      <Typography textAlign="left">競馬場</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label" />
      </FormGroup>
      <Typography textAlign="left">馬場状態</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label" />
      </FormGroup>

      <Typography textAlign="left">馬年齢</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label" />
      </FormGroup>

      <Typography textAlign="left">レースクラス</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label" />
      </FormGroup>

      <Typography textAlign="left">距離</Typography>
      <Slider 
        value={[20,40]}
        step={10}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

const SearchBox = () => {
  return (
    <Box>
      <SearchBar />
      <ExpandMore />
      <SearchOptions />
    </Box>
  )
}

const ExpandMore = () => {
  return (
    <IconButton sx={{  }}>
      <ExpandMoreIcon />
    </IconButton>
  );
}

export default function Search() {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ marginTop: '100px' }}>
        <SearchBox />
      </Box>
    </Box>
  );
}