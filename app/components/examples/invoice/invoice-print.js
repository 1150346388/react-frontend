import React from 'react';
import PageContentPtint from './print-content';
import PrintButton from './print-button';
export default class PageInvoicePtint extends React.Component {
    getInitialState() {
        return;
    }

    componentDidMount() {}

    render() {
        var styles = {
            background: '#fff',
            border: '1px solid #f4f4f4', 
            padding: 20,
            margin: '10px 25px',
            marginTop: 0,
            borderTop: 0
        }
        return (
            <div>
    		<PageContentPtint/>
    		<div style={styles}>
    		   <PrintButton/>
    		</div>
    		</div>
        )

    }
}
