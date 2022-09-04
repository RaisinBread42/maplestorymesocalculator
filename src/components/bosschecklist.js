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

export default class BossChecklist extends React.Component {

    handleToggle = (value) => () => {
        const currentIndex = this.props.checked.indexOf(value);
        const newChecked = [...this.props.checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.props.onUpdate({ checked: newChecked });
    }

    render() {
        return(
        <Paper elevation={3} sx={{ minWidth: "100%" }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {Bosses.map((boss) => {
                    const labelId = `checkbox-list-label-${boss.name}-${boss.difficulty}`;
                    return (
                        <ListItem
                            key={`${boss.name}-${boss.difficulty}`}
                            secondaryAction={
                                <NumberFormat value={boss.mesos} displayType={'text'} thousandSeparator={true} />
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={this.handleToggle(boss)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={this.props.checked.indexOf(boss) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar alt={`${boss.name}.png`} src={require(`../images/${boss.image}`)} />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`${boss.name} (${boss.difficulty})`} />
                            </ListItemButton>

                        </ListItem>
                    );
                })}
            </List>
        </Paper>);
    }
}