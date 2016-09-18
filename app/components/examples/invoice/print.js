import React from 'react';
import PageContentPtint from './print-content';
import {render} from 'react-dom';
export default class Print extends React.Component {
    render() {
    	return(
    		<div>
           <PageContentPtint />
           </div>
    	)
    }
}
// render(<Print />, document.getElementById('dashboard-container'));