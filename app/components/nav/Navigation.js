import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    hashHistory,
    Link
} from 'react-router';
import User160 from '../../images/user2-160x160.jpg';
export default React.createClass({
    render() {
        return (
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar" >
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={User160} className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                          </span>
                        </div>
                    </form>
                    {/* /.search form */}
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <Link to="/home">
                                <i className="fa fa-dashboard"></i> 
                                <span>
                                    Dashboard
                                </span> 
                                <i className="fa fa-angle-left pull-right"></i>
                            </Link>
                            <ul className="treeview-menu">
                                <li className="active"><Link to="/home"><i className="fa fa-circle-o"></i> Dashboard v1</Link></li>
                                <li><Link to="/home"><i className="fa fa-circle-o"></i> Dashboard v2</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options</span>
                                <span className="label label-primary pull-right">4</span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/widgets">
                                <i className="fa fa-th"></i>
                                <span>Widgets</span> 
                                <small className="label pull-right bg-green">new</small>
                            </Link>
                        </li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span>Charts</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/charts/chartjs"><i className="fa fa-circle-o"></i> ChartJS</Link></li>
                                <li><Link to="/charts/flot"><i className="fa fa-circle-o"></i> Flot</Link></li>
                                <li><Link to="/charts/morris"><i className="fa fa-circle-o"></i> Morris</Link></li>
                                <li><Link to="/charts/inline"><i className="fa fa-circle-o"></i> Inline charts</Link></li>
                            </ul>
                        </li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-laptop"></i>
                                <span>UI Elements</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/ui_elements/general"><i className="fa fa-circle-o"></i> General</Link></li>
                                <li><Link to="/ui_elements/icons"><i className="fa fa-circle-o"></i> Icons</Link></li>
                                <li><Link to="/ui_elements/buttons"><i className="fa fa-circle-o"></i> Buttons</Link></li>
                                <li><Link to="/ui_elements/sliders"><i className="fa fa-circle-o"></i> Sliders</Link></li>
                                <li><Link to="/ui_elements/timeline_page"><i className="fa fa-circle-o"></i> Timeline</Link></li>
                                <li><Link to="/ui_elements/modals"><i className="fa fa-circle-o"></i> Modals</Link></li>
                            </ul>
                        </li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-edit"></i> <span>Forms</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/forms/general"><i className="fa fa-circle-o"></i> General Elements</Link></li>
                                <li><Link to="/forms/advanced"><i className="fa fa-circle-o"></i> Advanced Elements</Link></li>
                                <li><Link to="/forms/editors"><i className="fa fa-circle-o"></i> Editors</Link></li>
                            </ul>
                        </li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-table"></i> <span>Tables</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/tables/data"><i className="fa fa-circle-o"></i> Data tables</Link></li>
                                <li><Link to="/tables/simple"><i className="fa fa-circle-o"></i> Simple tables</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/calendar">
                                <i className="fa fa-calendar"></i> <span>Calendar</span>
                                <small className="label pull-right bg-red">3</small>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mailbox/mailbox">
                                <i className="fa fa-envelope"></i> <span>Mailbox</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </Link>
                        </li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-folder"></i> <span>Examples</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/examples/invoice"><i className="fa fa-circle-o"></i> Invoice</Link></li>
                                <li><Link to="/examples/page404"><i className="fa fa-circle-o"></i> 404 Error</Link></li>
                                <li><Link to="/examples/profile"><i className="fa fa-circle-o"></i> Profile</Link></li>
                                <li><Link to="/examples/login"><i className="fa fa-circle-o"></i> Login</Link></li>
                                <li><Link to="/examples/register"><i className="fa fa-circle-o"></i> Register</Link></li>
                                <li><Link to="/examples/lockScreen"><i className="fa fa-circle-o"></i> Lockscreen</Link></li>
                                <li><Link to="/examples/500"><i className="fa fa-circle-o"></i> 500 Error</Link></li>
                                <li><Link to="/examples/blank"><i className="fa fa-circle-o"></i> Blank Page</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-share"></i> <span>Multilevel</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                <li>
                                    <a href="#"><i className="fa fa-circle-o"></i> Level One <i className="fa fa-angle-left pull-right"></i></a>
                                    <ul className="treeview-menu">
                                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                                        <li>
                                            <a href="#"><i className="fa fa-circle-o"></i> Level Two <i className="fa fa-angle-left pull-right"></i></a>
                                            <ul className="treeview-menu">
                                                <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                            </ul>
                        </li>
                        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                        <li className="header">LABELS</li>
                        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>
        )
    }
})