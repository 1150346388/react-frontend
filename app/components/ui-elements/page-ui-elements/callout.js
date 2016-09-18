import React from 'react';
export default class Callout extends React.Component {
    render() {
        return (
            <div className={"callout "+this.props.theme} >
                <h4>{this.props.title}</h4>
                {this.props.content}
                {this.props.children}
            </div>
        )
    }
}
