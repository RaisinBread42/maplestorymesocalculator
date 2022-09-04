import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid2 version 2
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Paper from '@mui/material/Paper';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import NumberFormat from 'react-number-format';
import Avatar from '@mui/material/Avatar';
import Bosses from '../bosses.json';

export default class RunningTotal extends React.Component {

    render() {
        return(
            <Paper elevation={3} sx={{ minWidth: "100%" }}>
            <Typography variant="h6" gutterBottom align="center">
              Running Total
            </Typography>
            <Typography variant="h3" gutterBottom align="center">
              <NumberFormat value={this.props.checked.reduce((accumulator, current) => accumulator + current.mesos, 0)} displayType={'text'} thousandSeparator={true}/> mesos
            </Typography>
          </Paper>
       );
    }
}