import React from 'react';
import { render } from 'react-dom';
import Plist from './components/plist';
import intern from './i18n/intern';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

import Utils from './utils';

import Dashboard from './page/dashboard';
import Home from './components/home/home';
import Chartjs from './components/charts/chartjs';
import Flot from './components/charts/flot';
import Buttons from './components/buttons/buttonsPage';
import Icons from './components/ui-elements/icons';
import Modals from './components/modals/modals';
import Sliders from './components/sliders/sliders';
import Widgets from './components/widgets-page/widgets';
import UIElementGeneral from './components/ui-elements/ui-elements';
import TimelinePage from './components/timeline-page/timeline-page';
import Page500 from './components/examples/500';
import PageBlank from './components/examples/blank';
import PageInvoice from './components/examples/invoice/invoice';
import Print from './components/examples/invoice/print';
import Page404 from './components/examples/page404';
import FormAdvanced from './components/forms/advanced';
import FormGeneral from './components/forms/general';
import DataTables from './components/tables/data-tables';
import Profile from './components/examples/profile';
import Login from './components/examples/login';
import Register from './components/examples/register';
import LockScreen from './components/examples/lockScreen';
import Editors from './components/forms/editors';
import Simple from './components/tables/simple';
import Mailbox from './components/mailbox/mailbox';
import Compose from './components/mailbox/compose';
import ReadMail from './components/mailbox/read-mail';
import Inline from './components/charts/inline';
import Morriss from './components/charts/morris';
import Calendars from './components/calendar/calendar';


import ValidationDemo from './validatorDemo/demo';
import TimelineDemo from './timelineDemo/demo';

import ModalContent from './modalDemo/demo';

class App extends React.Component {
	
    constructor(props) {
		super(props);
		this.state = {
		    'keyword': 'tom'
		};
		this.refreshKeyword = this.refreshKeyword.bind(this);
		intern.changeLang().then(() => {
			this.setState({langMsg: new Date()});
		});
	}

	componentDidMount() {

	}

	refreshKeyword(name) {
		this.setState({'keyword': name});
	}
	changeZH() {
		if(i18n.lang === 'zh') {
			return false;
		}
		intern.changeLang('zh').then(() => {
			this.setState({langMsg: new Date()});
		});
	}
	changeEN() {
		if(i18n.lang === 'en') {
			return false;
		}
		intern.changeLang('en').then(() => {
			this.setState({langMsg: new Date()});
		});
	}  
	printPage(){
		window.print();
	}

	render() {
		return (	
			<Router history={browserHistory}>
			    <Route path="/" component={Dashboard} onEnter={Utils.onEnter}>
			      	<IndexRoute component={Home}/>
			      	<Route path="/home" component={Home}/>
			      	<Route path="/widgets" component={Widgets}/>
			      	<Route path="/charts">
			      		<Route path="/charts/chartjs" component={Chartjs}/>
			      		<Route path="/charts/flot" component={Flot}/>
			      		<Route path="/charts/inline" component={Inline}/>
			      		<Route path="/charts/morris" component={Morriss}/>

			      	</Route>
			      	<Route path="/ui_elements">
			      		<Route path="/ui_elements/general" component={UIElementGeneral}/>
			      		<Route path="/ui_elements/icons" component={Icons}/>
			      		<Route path="/ui_elements/buttons" component={Buttons}/>
			      		<Route path="/ui_elements/sliders" component={Sliders}/>
			      		<Route path="/ui_elements/timeline_page" component={TimelinePage}/>
			      		<Route path="/ui_elements/modals" component={Modals}/>
			      	</Route>
			      	<Route path="/examples">
			      		<Route path="/examples/page404" component={Page404}/>
                        <Route path="/examples/500" component={Page500}/>
                        <Route path="/examples/blank" component={PageBlank}/>
                        <Route path="/examples/invoice" component={PageInvoice}/>
                        <Route path="/examples/profile" component={Profile}/>
                        <Route path="/examples/login" component={Login}/>
                        <Route path="/examples/register" component={Register}/>
                        <Route path="/examples/lockScreen" component={LockScreen}/>
                    </Route>
			      	<Route path="/forms">
			      		<Route path="/forms/advanced" component={FormAdvanced}/>
			      		<Route path="/forms/general" component={FormGeneral}/>
			      		<Route path="/forms/editors" component={Editors}/>
			      	</Route>
			      	<Route path="/tables">
			      	    <Route path="/tables/simple" component={Simple}/>
			      		<Route path="/tables/data" component={DataTables}/>
			      	</Route>
			    	<Route path="/mailbox">
			      	    <Route path="/mailbox/mailbox" component={Mailbox}/>
			      	    <Route path="/mailbox/compose" component={Compose}/>
			      	    <Route path="/mailbox/readMail" component={ReadMail}/>
			      	</Route>
			      	<Route path="/calendar" component={Calendars}/>
			    </Route>
			    <Route path="/validationDemo" component={ValidationDemo} />
			    <Route path="/timelineDemo" component={TimelineDemo} /> 
			    <Route path="/modal" component={ModalContent}/>
			    <Route path="print" component={Print} onEnter={this.printPage}/>
			</Router>
		)
	}	
}

render(<App />, document.getElementById('dashboard-container'));