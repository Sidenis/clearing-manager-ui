export const reduceState = rules =>
    rules.reduce((acc, cur) => {
        if (acc === 'MANUAL' || cur === 'MANUAL')
            return 'MANUAL';

        if (acc === 'PROGRESS' || cur === 'PROGRESS')
            return 'PROGRESS';

        return 'DONE';
    }, 'PROGRESS');
