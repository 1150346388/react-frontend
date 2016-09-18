import React from 'react';

export default class SocialButton extends React.Component {
	render() {

        return (
        	<a className={'btn ' + this.props.signStyle}>
                <i className={this.props.iconStyle}></i> {this.props.value}
            </a>
        )
    }
}