import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import BookmarkIcon from '@mui/icons-material/Bookmark';

const data = [
  { dt: '生年月日', dd: '2016年3月6日' },
  { dt: '調教師', dd: '斉藤崇史' },
  { dt: '馬主', dd: 'サンデーレーシング' },
  { dt: '生産者', dd: 'ノーザンファーム' },
  { dt: '産地', dd: '安平町' }
]

export default function HorseInfo() {
  return (
    <Box sx={{ padding: 1 }}>
      <Box sx={{ display: "flex", alignItems: "end", paddingBottom: 2 }}>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <Typography component="h2" variant="h6" align="left" gutterBottom
          sx={{
            flexGrow: 1,
            fontFamily: 'Murecho',
          }}
        >
          クロノジェネシス <small>6歳 牝馬 芦毛</small>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>
            基本データ
          </Typography>
          <TableContainer component={Paper} elevation={0} >
            <Table>
              <TableBody size="small">
                {data.map((row) => (
                  <TableRow>
                    <TableCell>
                      {row.dt}
                    </TableCell>
                    <TableCell>
                      {row.dd}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4} >
          <Typography>
            血統
          </Typography>
          <TableContainer component={Paper} elevation={0} aling="center">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    馬データA
                  </TableCell>
                  <TableRow>
                    <TableCell align="center">馬データB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">馬データC</TableCell>
                  </TableRow>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    馬データA
                  </TableCell>
                  <TableRow>
                    <TableCell>馬データB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>馬データC</TableCell>
                  </TableRow>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            適正
          </Typography>
        </Grid>
      </Grid>
    </Box >

  )
}