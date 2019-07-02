export const reduceState = rules =>
    (rules.length === 0)
        ? 'DONE'
        : rules.reduce((acc, cur) => {
            if (acc === 'MANUAL' || cur === 'MANUAL')
                return 'MANUAL';

            if (acc === 'PROGRESS' || cur === 'PROGRESS')
                return 'PROGRESS';

            return 'DONE';
        }, 'PROGRESS');
