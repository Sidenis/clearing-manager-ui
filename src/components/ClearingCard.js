import React from 'react';

export default ({ card }) => (
    <div className='container'>
        <h2>Clearing card</h2>
        <div className="row">
            <div className="column"><strong>LOB:</strong></div>
            <div className="column">{card.lob}</div>
            <div className="column"><strong>PERIL:</strong></div>
            <div className="column">{card.peril}</div>
        </div>
        <div className="row">
            <div className="column"><strong>INSURED COMPANY:</strong></div>
            <div className="column">{card.insuredCompany}</div>
            <div className="column"><strong>BROKER:</strong></div>
            <div className="column">{card.broker}</div>
        </div>
        <div className="row">
            <div className="column"><strong>COUNTRY</strong></div>
            <div className="column">{card.country}</div>
            <div className="column"><strong>ADDRESS:</strong></div>
            <div className="column">{card.address}</div>
        </div>
        <div className="row">
            <div className="column">
                <strong>RULES:</strong>
            </div>
            <div className="column">
                {card.rules
                    .map(rule =>
                        <div
                            className={'row status-' + rule.status.toLowerCase()}
                        >{rule.rule}</div>)
                }
            </div>
        </div>
    </div>
)
