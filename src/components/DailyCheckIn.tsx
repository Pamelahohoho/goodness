import React, {Component, Fragment} from 'react';
import {Typography, Button} from '@material-ui/core';
import {Navigate} from '../App';
import Checkbox from '@material-ui/core/Checkbox';
import x from "../download.jpg";

interface DailyCheckInProps {
    navigate: Navigate;
}

interface DailyCheckInState {
    page: number;
    water: number | null;
    exercise: number | null;
    feeling: number | null;
    protein: number | null;
    vegetables: number | null;
    grain: number | null;
}

export class DailyCheckIn extends Component<
    DailyCheckInProps,
    DailyCheckInState
> {
    constructor(props: DailyCheckInProps) {
        super(props);
        this.state = {
            page: 1,
            water: null,
            exercise: null,
            feeling: null,
            protein: null,
            vegetables: null,
            grain: null,
        };
    }

    render() {
        return (
            <div style={{
                padding: '12px',
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: `url(${x})`,
                backgroundSize: '180%'
            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '2ch',
                    }}
                >
                    <Button onClick={() => this.props.navigate('HomeScreen')}>
                        Home
                    </Button>
                    <Typography variant='h6'>Daily Check In</Typography>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {this.getContent()}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '2ch'
                    }}
                >
                    <Button
                        onClick={() =>
                            this.setState({page: this.state.page - 1})
                        }
                        disabled={this.state.page === 1}
                    >
                        Previous
                    </Button>
                    {this.getButton()}
                </div>
            </div>
        );
    }

    getButton() {
        if (this.state.page === 2) {
            return (
                <Button
                    onClick={() =>
                        this.props.navigate('HomeScreen')
                    }
                >
                    Finish
                </Button>
            )
        } else {
            return (
                <Button
                    onClick={() =>
                        this.setState({page: this.state.page + 1})
                    }
                >
                    Next
                </Button>
            );
        }
    }

    getContent() {
        if (this.state.page === 1) {
            return this.page1();
        } else if (this.state.page === 2) {
            return this.page2();
        }
    }

    page1() {
        return (
            <Fragment>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '2ch'
                    }}
                >
                    <Typography variant='h4'>Nutrition Wellness</Typography>
                    <Question
                        q='Water (glasses)'
                        array={['0-3', '4-7', '8+']}
                        selected={this.state.water}
                        select={water => this.setState({water})}
                    />
                    <Question
                        q='Fruits and Vegetables'
                        array={['0-4', '5-9', '10+']}
                        selected={this.state.vegetables}
                        select={vegetables => this.setState({vegetables})}
                    />
                    <Question
                        q='Grain'
                        array={['0-3', '4-7', '8+']}
                        selected={this.state.grain}
                        select={grain => this.setState({grain})}
                    />
                    <Question
                        q='Protein'
                        array={['0-1', '2', '3+']}
                        selected={this.state.protein}
                        select={protein => this.setState({protein})}
                    />
                </div>
            </Fragment>
        );
    }

    page2() {
        return (
            <Fragment>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '2ch'
                    }}
                >
                    <Typography variant='h4'>Physical Wellness</Typography>
                    <Question
                        q='How are you feeling today?'
                        array={['very bad', 'bad', 'neutral', 'good', 'excellent']}
                        selected={this.state.feeling}
                        select={feeling => this.setState({feeling})}
                    />
                    <Question
                        q='How many minutes did you exercise today?'
                        array={['0-9', '10-19', '20+']}
                        selected={this.state.exercise}
                        select={exercise => this.setState({exercise})}
                    />
                </div>
            </Fragment>
        );
    }
}

function Question(props: {q: string, array: string[], selected: number | null, select: (x: number) => void}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography variant='h6'>{props.q}</Typography>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}
            >
                {props.array.map((exercise, index) => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography style={{marginBottom: 0, paddingBottom: 0}}>{exercise}</Typography>
                        <Checkbox
                            defaultChecked
                            color='default'
                            checked={props.selected === index}
                            onChange={() => props.select(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
