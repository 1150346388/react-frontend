import React from 'react';
import {Link} from 'react-router';
export default class PrintButton extends React.Component {
    render() {
    	var styles={
    		marginRight:5
    	}
    	return(
         <div className="row no-print">
            <div className="col-xs-12">
              <Link to="/print" target="_blank" className="btn btn-default"><i className="fa fa-print"></i> Print</Link>
              <button className="btn btn-success pull-right"><i className="fa fa-credit-card"></i> Submit Payment</button>
              <button className="btn btn-primary pull-right" style={styles}><i className="fa fa-download"></i> Generate PDF</button>
            </div>
          </div>
    	)
    }
}