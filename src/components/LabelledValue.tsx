import React from 'react';
import {Typography} from '@material-ui/core';

interface Props {
    label: string;
    value: string;
}

export function LabelledValue(props: Props) {
    return (
        <div
            style={{
                textAlign: 'center',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Typography>{props.label}</Typography>
            <Typography variant='h6'>{props.value}</Typography>
        </div>
    );
}
