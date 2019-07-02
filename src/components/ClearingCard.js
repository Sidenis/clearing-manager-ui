import React from 'react';

export default ({ card }) => (
    <div className='container'>
        <h2>Clearing card: {card.id}</h2>
        <div className="row">
            <div className="column">{card.lob}</div>
        </div>
        <div className="row">
            <div className="column">
                {card.rules
                    .map(rule =>
                        <div
                            className={'row status-' + rule.status.lowerCase()}
                        >{rule.rule}</div>)
                }
            </div>
        </div>
    </div>
)
