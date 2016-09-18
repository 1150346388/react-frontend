import React from 'react';

export default class AppButton extends React.Component {
	getDefaultProps() {
	    return {
	      	badgeStyle: 'bg-red',
	      	badgeValue: '0'
	    };
	};

	render() {

        return (
        	<a className="btn btn-app">
        		<span className={'badge ' + this.props.badgeStyle}>{this.props.badgeValue}</span>
                <i className={this.props.iconStyle}></i> {this.props.value}
            </a>
        )
    }
}