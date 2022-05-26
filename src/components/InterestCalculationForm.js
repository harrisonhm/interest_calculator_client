import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const InterestCalculationForm = ({handleSubmit}) => {
  const [values, setValues] = useState({
    total_amount: '',
    percentage_interest: ''
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Card sx={{ width: '75%', mx: 'auto', my: 2 }}>
      <CardContent sx={{ width: '97%', display: 'inline-flex', justifyContent: 'space-between' }}>
        <TextField
          id="form-amount"
          label="Total Amount"
          type="number"
          value={values.total_amount}
          onChange={handleChange('total_amount')}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (<InputAdornment position="start">£</InputAdornment>)
          }}
          inputProps={{
            step: "0.01"
          }}
        />
        <TextField
          id="form-percentage-interest"
          label="Percentage Interest"
          type="number"
          value={values.percentage_interest}
          onChange={handleChange('percentage_interest')}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (<InputAdornment position="end">%</InputAdornment>)
          }}
          inputProps={{
            step: "0.1"
          }}
        />
        <Button onClick={() => handleSubmit(values)} variant="contained" endIcon={<SendIcon />}>
          <Typography sx={{ display: { xs: 'none', md: 'flex' }}}>Calculate</Typography>
        </Button>
      </CardContent>
    </Card>
  )
}

export default InterestCalculationForm;