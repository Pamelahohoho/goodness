interface Challenges {
    readonly physical: ChallengeLevels;
    readonly nutritional: ChallengeLevels;
    readonly events: ChallengeLevels;
}

interface ChallengeLevels {
    readonly easy: string[];
    readonly medium: string[];
    readonly hard: string[];
}

export const challenges: Challenges = {
    physical: {
        easy: ['1e', '2e', '3e'],
        medium: ['1m', '2m', '3m'],
        hard: ['1h', '2h', '3h']
    },
    nutritional: {
        easy: ['1e', '2e', '3e'],
        medium: ['1m', '2m', '3m'],
        hard: ['1h', '2h', '3h']
    },
    events: {
        easy: ['1e', '2e', '3e'],
        medium: ['1m', '2m', '3m'],
        hard: ['1h', '2h', '3h']
    }
};
