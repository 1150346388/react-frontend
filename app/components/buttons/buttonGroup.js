import React from 'react';

export default class ButtonGroup extends React.Component {
	render() {

        return (
        	<div className="btn-group">
                <button type="button" className="btn btn-default">Left</button>
                <button type="button" className="btn btn-default">Middle</button>
                <button type="button" className="btn btn-default">Right</button>
            </div>
        )
    }
}