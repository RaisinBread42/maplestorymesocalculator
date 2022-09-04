import * as React from 'react';
import './App.css';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid2 version 2
import Typography from '@mui/material/Typography';
import AppMenuBar from './AppMenuBar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';

//data
import Bosses from './bosses.json';

// components
import BossChecklist from './components/bosschecklist';
import RunningTotal from './components/runningtotal';

/*main*/
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      checkLists: []
    };
    this.setState = this.setState.bind(this);
  }
  
  componentDidMount(){
    this.AddNewChecklist(1);
  }

  AddNewChecklist = (index) => {
    this.setState({checkLists:[...this.state.checkLists, { key: index, bosses: [...Bosses]}]});
  }

  render() {
    return (
      <div className='app-background'>
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
        <Grid2 container spacing={2} minHeight={'100%'}>

          {/* boss list */}
          <Grid2 xs={6} display="flex" justifyContent="center" alignItems="flex-start">
            <Accordion sx={{ width: '90%' }} expanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="checklist-content"
                id="checklist-header"
                sx={{ alignItems: 'center' }}
              >
                <Typography>Boss Checklist</Typography> 
                <IconButton aria-label="delete" size="small" onClick={() => this.AddNewChecklist(this.state.checkLists.length+1)}>
                  <Add fontSize="inherit" />
                </IconButton>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: '500px', overflow: 'auto' }}>
                <BossChecklist checkLists={this.state.checkLists} onUpdate={this.setState} />
              </AccordionDetails>
            </Accordion>
          </Grid2>

          {/* running total */}
          <Grid2 xs={6} display="flex" justifyContent="center" alignItems="flex-start">
            <Accordion sx={{ width: '90%' }} expanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="total-content"
                id="totals-header"
              >
                <Typography>Totals</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RunningTotal checkLists={this.state.checkLists} />
              </AccordionDetails>
            </Accordion>
          </Grid2>

        </Grid2>
      </div>);
  }
}