import { Box, Grid } from '@mui/material';
import './App.css';
import Left from './Sections/Left';
import Middle from './Sections/Middle';
import Right from './Sections/Right';

function App() {
  return (
    <Box sx={{ flexGrow: 1 , height: "100vh"}}>
    <Grid container>
      <Grid item xs={3}>
        <Left/>
      </Grid>
      <Grid item xs={6}>
        <Middle/>
      </Grid>
      <Grid item xs={3}>
        <Right/>
      </Grid>
    </Grid>
  </Box>
  );
}

export default App;
