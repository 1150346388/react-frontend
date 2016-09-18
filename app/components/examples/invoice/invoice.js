import React from 'react';
import PageInvoicePtint from './invoice-print';
export default class PageInvoice extends React.Component {
    getInitialState() {
        return;
    }

    componentDidMount() {}

    render() {
    	var styles={
    		distance:{
    			marginBottom:'0 !important'
    		},
    		height:{
    			minHeight:1096
    		},
    		padistance:{
    			padding:'10px 10px 0px'
    		}
    	}
    	return(
          <div className="content-wrapper" style={styles.height}>

            <section className="content-header">
              <h1>
                Invoice
                <small>#007612</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#">Examples</a></li>
                <li className="active">Invoice</li>
              </ol>
            </section>

            <div className="pad margin no-print" style={styles.padistance}>
              <div className="callout callout-info" style={styles.distance}>
                <h4><i className="fa fa-info"></i> Note:</h4>
                This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
              </div>
            </div>
            <PageInvoicePtint/>
            </div>
    		)
    }
}