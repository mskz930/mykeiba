import logo from './logo.svg';
import './App.css';
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
import BasicTable from './components/BasicTable';
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Box sx={{ boxSizing: 'border-box', height: '100%' }} >
        <MenuBar />
        <Box display="flex" >
          <SideBar />
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
                    <Grid item xs={3}>
                      <Paper sx={{ p: 1 }}>
                        <Typography variant="body2" align="left">
                          通算成績
                        </Typography>
                        <Typography variant="h4">
                          9戦6勝
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={3} sx={{}}>
                      <Paper sx={{ p: 1 }}>
                        <Typography variant="body2" align="left">
                          直近のレース結果
                        </Typography>
                        <Typography variant="h4">
                          3着 <Typography display="inline">(有馬記念 G1 芝2500m)</Typography>
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={3} sx={{}}>
                      <Paper sx={{ p: 1 }}>
                        <Typography variant="body2" align="left">
                          最速タイム
                        </Typography>
                        <Typography variant="h4">
                          35.6 <Typography display="inline">秒</Typography>
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={3} sx={{}}>
                      <Paper sx={{ p: 1 }}>
                        <Typography variant="body2" align="left">
                          獲得賞金
                        </Typography>
                        <Typography variant="h4">
                          1,000,000
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} >
                  <BasicTable />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

      </Box>

    </div >
  );
}

export default App;
