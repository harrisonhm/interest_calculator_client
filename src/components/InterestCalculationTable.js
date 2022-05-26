import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const InterestCalculationTable = ({rows}) => (
  <div style={{ height: 400, width: '100%' }}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time Calculated</TableCell>
            <TableCell align="right">Total Amount (£)</TableCell>
            <TableCell align="right">Percentage(%)</TableCell>
            <TableCell align="right">Interest (£)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.time_calculated.toString()}
              </TableCell>
              <TableCell align="right">{row.total_amount}</TableCell>
              <TableCell align="right">{row.percentage_interest}</TableCell>
              <TableCell align="right">{row.interest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)

export default InterestCalculationTable;