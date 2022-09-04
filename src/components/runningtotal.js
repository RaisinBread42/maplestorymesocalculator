import * as React from 'react';
import Typography from '@mui/material/Typography';
import NumberFormat from 'react-number-format';

export default class RunningTotal extends React.Component {

    render() {
        return(
            <div>
            <Typography variant="h6" gutterBottom align="center">
              Running Total
            </Typography>
            <Typography variant="h3" gutterBottom align="center">
              <NumberFormat value={this.props.checked.reduce((accumulator, current) => accumulator + current.mesos, 0)} displayType={'text'} thousandSeparator={true}/> mesos
            </Typography>
          </div>
       );
    }
}