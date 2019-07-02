export const reduceState = rules =>
    (rules.length === 0)
        ? 'DONE'
        : rules.reduce((acc, cur) => {
            if (acc === 'MANUAL' || cur.status === 'MANUAL')
                return 'MANUAL';

            if (acc === 'PROGRESS' || cur.status === 'PROGRESS')
                return 'PROGRESS';

            return 'DONE';
        }, 'PROGRESS');
