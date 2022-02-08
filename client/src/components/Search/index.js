import * as React from 'react';
import {Button, Stack,TextField} from '@mui/material';
import {SimpleSearch} from "../../utils/API/coinGecko"
import { Box } from '@mui/system';

export  function Search() {
  const [formState, setFormState] = React.useState("");

  const handleChange = (event) => {
    const {  value } = event.target;
    setFormState(value.trim());
  };
const Simp=async(e)=>{
 e.preventDefault();
try{
  const {data}=await SimpleSearch(formState);
  console.log(data);
  
}catch(err){
  alert(err.message)
}

}
  
  return (
    <Stack
    id="search"
      component="form"
      sx={{
        width: '40ch',
        flexDirection:"row"

      }}
      noValidate
      onSubmit={Simp}
       autoComplete="Search"
    >
      <TextField
        // hiddenLabel
        fullWidth
        name="input"
        label="input"
        type="input"
        onChange={handleChange}
        value={formState.input}
         placeholder="Search"
        // variant="filled"
        sx={{ backgroundColor:"white"}}
      />
      <Button
      type="submit"
      variant="contained"
      sx={{color:"rgb(28,188,156)"}}
  >
        Search
      </Button>
    </Stack>
  );
}
