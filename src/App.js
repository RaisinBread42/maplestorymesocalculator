import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid2 version 2
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import NumberFormat from 'react-number-format';
import AppMenuBar from './AppMenuBar';
import BossChecklist from './components/bosschecklist';
import RunningTotal from './components/runningtotal';

/*main*/
export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      checked: []
    };
    this.setState = this.setState.bind(this);
  }

  render(){
    return(
    <div>
      <AppMenuBar />
      {/* page header */}
      <Grid2 container spacing={2}>
        <Grid2 xs={3}></Grid2>
        <Grid2 xs={6} display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h3" gutterBottom align="center">
            Bossing
          </Typography>
        </Grid2>
        <Grid2 xs={3}></Grid2>
      </Grid2>

      {/* main */}
      <Grid2 container spacing={2}>

        {/* boss list */}
        <Grid2 xs={6} display="flex" justifyContent="center" alignItems="center">
          <BossChecklist checked={this.state.checked} onUpdate={this.setState}/>
        </Grid2>

        {/* running total */}
        <Grid2 xs={6}>
          <RunningTotal checked={this.state.checked}/>
        </Grid2>

      </Grid2>
    </div>);
  }
}
