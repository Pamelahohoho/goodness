import React, {Component} from 'react';
import {Navigate} from '../App';
import {
    Divider,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    LinearProgress,
    ListItemIcon
} from '@material-ui/core';
import logo from '../goodness.png';
import x from "../download.jpg";
import running from '../running.png';
import healthy from '../healthy.png';
import calendar from '../calendar.png';

import {LabelledValue} from './LabelledValue';

interface HomeScreenProps {
    navigate: Navigate;
    challenges: string[];
}

interface HomeScreenState {
    c1: boolean
    c2: boolean
    c3: boolean
}

export class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
    constructor(props: HomeScreenProps) {
        super(props);
        this.state = {
            c1: false,
            c2: false,
            c3: false,
        };
    }

    render() {
        return (
            <div
                style={{
                    padding: '12px',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundImage: `url(${x})`,
                    backgroundSize: '180%'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '2ch'
                    }}
                >
                    <img src={logo} style={{width: '20ch'}} alt='logo' />
                    <Button
                        onClick={() => this.props.navigate('DailyCheckIn')}
                        variant='outlined'
                    >
                        Check In
                    </Button>
                </div>
                <Typography variant='h5'>Points: 100pts</Typography>
                <Typography variant='h4'>Today's Challenges</Typography>
                <List>
                    <ListItem button style={{borderRadius: '4px'}} onClick={() => this.setState({c1: !this.state.c1})}>
                        <ListItemIcon>
                            <img src={running} style={{width: '4ch'}} />
                        </ListItemIcon>
                        <ListItemText style={{textDecoration: this.state.c1 ? 'line-through' : undefined}}>Walk 30 minutes</ListItemText>
                    </ListItem>
                    <ListItem button style={{borderRadius: '4px'}} onClick={() => this.setState({c2: !this.state.c2})}>
                        <ListItemIcon>
                            <img src={healthy} style={{width: '4ch'}} />
                        </ListItemIcon>
                        <ListItemText style={{textDecoration: this.state.c2 ? 'line-through' : undefined}}>Drink 7 cups of water</ListItemText>
                    </ListItem>
                    <ListItem button style={{borderRadius: '4px'}} onClick={() => this.setState({c3: !this.state.c3})}>
                        <ListItemIcon>
                            <img src={calendar} style={{width: '4ch'}} />
                        </ListItemIcon>
                        <ListItemText style={{textDecoration: this.state.c3 ? 'line-through' : undefined}}>Meet someone new today</ListItemText>
                    </ListItem>
                </List>
                <Typography variant='h6' style={{fontWeight: 'bold'}}>Upcoming Events:</Typography>
                <Typography variant='h6'style={{color: 'black', fontSize: '1rem'}}>Color Run 5k, Toronto </Typography>
                <Divider />
                <Typography variant='h4'>Progress Overview</Typography>
                <Typography variant='h6'>Challenge Completion: 50% </Typography>
                <LinearProgress
                    variant='determinate'
                    value={50}
                    style={{height: '0.5em'}}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <LabelledValue label='Diet' value='75%' />
                    <LabelledValue label='Exercise' value='50%' />
                    <LabelledValue label='Social' value='40%' />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <LabelledValue label='Social' value='75%' />
                    <LabelledValue label='Career' value='50%' />
                    <LabelledValue label='Challenges' value='18/30' />
                </div>
            </div>
        );
    }
}
