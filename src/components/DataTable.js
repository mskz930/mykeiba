import * as React from 'react';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const records = [
  { date: '2021/12/26', place: '中山', weather: '晴', raceTitle: "有馬記念", frameNumber: 4, horseNumber: 7, odds: 2.9, popularity: 2, ranking: 3, fieldType: "芝", distance: 2500, time: "2:32.2" },
  { date: '2021/12/26', place: '中山', weather: '晴', raceTitle: "有馬記念", frameNumber: 4, horseNumber: 7, odds: 2.9, popularity: 2, ranking: 3, fieldType: "芝", distance: 2500, time: "2:32.2" },
  { date: '2021/12/26', place: '中山', weather: '晴', raceTitle: "有馬記念", frameNumber: 4, horseNumber: 7, odds: 2.9, popularity: 2, ranking: 3, fieldType: "芝", distance: 2500, time: "2:32.2" },
  { date: '2021/12/26', place: '中山', weather: '晴', raceTitle: "有馬記念", frameNumber: 4, horseNumber: 7, odds: 2.9, popularity: 2, ranking: 3, fieldType: "芝", distance: 2500, time: "2:32.2" },
  { date: '2021/12/26', place: '中山', weather: '晴', raceTitle: "有馬記念", frameNumber: 4, horseNumber: 7, odds: 2.9, popularity: 2, ranking: 3, fieldType: "芝", distance: 2500, time: "2:32.2" },
  { date: '2021/12/26', place: '中山', weather: '晴', raceTitle: "有馬記念", frameNumber: 4, horseNumber: 7, odds: 2.9, popularity: 2, ranking: 3, fieldType: "芝", distance: 2500, time: "2:32.2" },
]

export default function DataTable(props) {
  return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>日付</TableCell>
              <TableCell>場所</TableCell>
              <TableCell>天気</TableCell>
              <TableCell>レース</TableCell>
              <TableCell>フィールド</TableCell>
              <TableCell>距離</TableCell>
              <TableCell>枠番</TableCell>
              <TableCell>馬番</TableCell>
              <TableCell>人気</TableCell>
              <TableCell>順位</TableCell>
              <TableCell>オッズ</TableCell>
              <TableCell>タイム</TableCell>
              <TableCell>上がり3F</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map(record => (
              <TableRow>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.place}</TableCell>
                <TableCell>{record.weather}</TableCell>
                <TableCell>
                    <Box sx={{ 
                        display: 'inline-block', 
                        backgroundColor: 'error.main', 
                        color: "white",
                        borderRadius: 3, 
                        width: "2em", 
                        textAlign: "center" 
                    }}>
                      G1
                    </Box>
                    <Box sx={{ display: 'inline-block', paddingLeft: '10px' }}>
                      {record.raceTitle}
                    </Box>
                </TableCell>
                <TableCell>{record.fieldType}</TableCell>
                <TableCell>{record.distance}</TableCell>
                <TableCell>{record.frameNumber}</TableCell>
                <TableCell>{record.horseNumber}</TableCell>
                <TableCell>{record.popularity}</TableCell>
                <TableCell>{record.ranking}</TableCell>
                <TableCell>{record.odds}</TableCell>
                <TableCell>{record.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}