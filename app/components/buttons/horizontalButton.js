import React from 'react';

export default class HorizontalButton extends React.Component {
	render() {

        return (
        	<div className="btn-group">
                <button type="button" className={'btn btn-default ' + this.props.btnStyle}><i className={this.props.leftIcon}></i>{this.props.leftValue}</button>
                <button type="button" className={'btn btn-default ' + this.props.btnStyle}><i className={this.props.centerIcon}></i>{this.props.centerValue}</button>
                <button type="button" className={'btn btn-default ' + this.props.btnStyle}><i className={this.props.rightIcon}></i>{this.props.rightValue}</button>
            </div>
        )
    }
}