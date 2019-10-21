import React, {Component} from 'react';
import './App.css';
import {DailyCheckIn} from './components/DailyCheckIn';
import {HomeScreen} from './components/HomeScreen';

export type Mode = 'HomeScreen' | 'DailyCheckIn';

export type Navigate = (mode: Mode) => void;

interface AppState {
    mode: Mode;
    challenges: string[];
}

export class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            mode: 'HomeScreen',
            challenges: this.getChallenges()
        };
    }

    render() {
        if (this.state.mode === 'HomeScreen') {
            return (
                <HomeScreen
                    navigate={this.navigate}
                    challenges={['123', '456', '789']}
                />
            );
        } else if (this.state.mode === 'DailyCheckIn') {
            return <DailyCheckIn navigate={this.navigate} />;
        }
    }

    navigate = (mode: Mode) => this.setState({mode});

    getChallenges() {
        return [];
    }
}
