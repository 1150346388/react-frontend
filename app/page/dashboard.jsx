import React from 'react'
import { render } from 'react-dom'
import {
	browserHistory,
	Router,
	Route,
	IndexRoute,
	Link
} from 'react-router'
import NavigationMenu from '../components/nav/Navigation';
import HeaderBar from '../components/HeaderBar/header-bar';

import styles from "./dashboard.css";

export default class Dashboard extends React.Component {

	render() {
		return (
			<div className={styles.wrapper}>
				<HeaderBar />
				<NavigationMenu />
				
				{this.props.children}

                <footer className={styles.mainFooter + ' main-footer'}>
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 1.0.0
                    </div>
                    <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                </footer>
			</div>
		)
	}
}