import * as React from 'react';
// mui components
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Paper from '@mui/material/Paper';
import BasicCard from './components/BasicCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchAppBar from './components/SearchAppBar';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SearchInput from './components/SearchInput';
import Container from '@mui/material/Container';
import SimpleAccordion from './components/SimpleAccordion';
import CollapseButton from './components/CollapseButton';
import PersistentDrawer from './components/PersistentDrawer';
import HorseInfo from './components/HorseInfo';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// components
import DataTable from './components/DataTable';
import SideBar from './components/SideBar';

const DataCard = ({title, content}) => {
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="body2" align="left">
        {title}
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        {content}
      </Typography>
    </Paper>
  );
}

const cards = [
  {title: '成績', content: '5勝6敗'},
  {title: '直近のレース', content: '2着'},
  {title: '勝数', content: '5'},
  {title: '最速ハロンタイム', content: '30.0'},
];

export default function Contents() {
  return (
    <Box sx={{ boxSizing: 'border-box', height: '100%' }} >
      <Box display="flex" >
        <Box paddingX={5} height='100%' sx={{ flex: 1, backgroundColor: '#f3f4f9', paddingTop: 2, paddingBottom: 5 }}>

          <Breadcrumbs separator=">">
            <Link>
              Home
            </Link>
            <Link>
              検索結果
            </Link>
            <Link>
              クロノジェネシス
            </Link>
          </Breadcrumbs>

          <Box marginTop={3} marginBottom={3}>
            <Grid container spacing={3} direction="row" alignItems="stretch" >
              <Grid item xs={12} justify="center">
                <Card sx={{ height: '100%' }}>
                  <HorseInfo />
                </Card>
              </Grid>
              <Grid item xs={12} >
                <Grid container spacing={3} >
                  {cards.map((item, index) => (
                    <Grid item xs={3} key={index}>
                      <DataCard title={item.title} content={item.content} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} >
                <Paper sx={{ p : 2 }}>
                  <Typography textAlign="left" variant="h6">戦績</Typography>
                  <DataTable/>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}