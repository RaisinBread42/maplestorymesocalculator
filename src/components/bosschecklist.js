import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

import NumberFormat from 'react-number-format';

import Avatar from '@mui/material/Avatar';
import Bosses from '../bosses.json';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default class BossChecklist extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 0
        };
        this.setState = this.setState.bind(this);
    }


    handleToggle = (value) => () => {
        // TODO: correct logic to update checked list
        const currentIndex = this.props.checkLists.indexOf(value);
        const newChecked = [...this.props.checkLists];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.props.onUpdate({ checkLists: newChecked });
    }

    a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    handleChange = (event, newValue) => {
        this.setState({ selectedTab: newValue });
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs
                        value={this.state.selectedTab}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        {
                            this.props.checkLists.map((list) => {
                                return (<Tab label={`Char ${list.key}`} {...this.a11yProps(0)} />);
                            })
                        }
                    </Tabs>
                </AppBar>
                {
                    this.props.checkLists.map((list,i) => {
                        return (
                            <TabPanel value={this.state.selectedTab} index={i}>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {Bosses.map((boss) => {
                                        const labelId = `checkbox-list-label-${boss.name}-${boss.difficulty}`;
                                        return (
                                            <div>
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
                                                                checked={this.props.checkLists.indexOf(boss) !== -1}
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
                                            </div>
                                        );
                                    })}
                                </List >
                            </TabPanel>
                        )
                    })
                }
            </div>);
    }
}