import React from 'react';

import AppButton from './appButton';
import SocialButton from './socialButton';
import HorizontalButton from './horizontalButton';


export default class Buttons extends React.Component {
    getInitialState() {
        return {
            rowOneOptions: [],
            rowTwoOptions: [],
            rowThreeOptions: []
        }
    };

    componentDidMount() {

    };

    render() {

        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Buttons
                            <small>Preview page</small>
                        </h1>
                        {/*<ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li className="active">Dashboard</li>
                        </ol>*/}
                    </section>

                    <section className="content">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="box box-primary">
                                    <div className="box-header">
                                        <i className="fa fa-edit"></i>

                                        <h3 className="box-title">Buttons</h3>
                                    </div>
                                    <div className="box-body pad table-responsive">
                                        <p>Various types of buttons. Using the base class <code>.btn</code></p>
                                        <table className="table table-bordered text-center">
                                            <tbody>
                                                <tr>
                                                    <th>Normal</th>
                                                    <th>Large <code>.btn-lg</code></th>
                                                    <th>Small <code>.btn-sm</code></th>
                                                    <th>X-Small <code>.btn-xs</code></th>
                                                    <th>Flat <code>.btn-flat</code></th>
                                                    <th>Disabled <code>.disabled</code></th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-default">Default</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-default btn-lg">Default</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-default btn-sm">Default</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-default btn-xs">Default</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-default btn-flat">Default</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-default disabled">Default</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-primary">Primary</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-primary btn-lg">Primary</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-primary btn-sm">Primary</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-primary btn-xs">Primary</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-primary btn-flat">Primary</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-primary disabled">Primary</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-success">Success</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-success btn-lg">Success</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-success btn-sm">Success</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-success btn-xs">Success</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-success btn-flat">Success</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-success disabled">Success</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-info">Info</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-info btn-lg">Info</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-info btn-sm">Info</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-info btn-xs">Info</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-info btn-flat">Info</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-info disabled">Info</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-danger">Danger</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-danger btn-lg">Danger</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-danger btn-sm">Danger</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-danger btn-xs">Danger</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-danger btn-flat">Danger</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-danger disabled">Danger</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-warning">Warning</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-warning btn-lg">Warning</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-warning btn-sm">Warning</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-warning btn-xs">Warning</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-warning btn-flat">Warning</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-block btn-warning disabled">Warning</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.box */}
                                </div>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* ./row */}
                        <div className="row">
                            <div className="col-md-6">
                                {/* Block buttons */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Block Buttons</h3>
                                    </div>
                                    <div className="box-body">
                                        <button type="button" className="btn btn-default btn-block">.btn-block</button>
                                        <button type="button" className="btn btn-default btn-block btn-flat">.btn-block .btn-flat</button>
                                        <button type="button" className="btn btn-default btn-block btn-sm">.btn-block .btn-sm</button>
                                    </div>
                                </div>
                                {/* /.box */}

                                {/* Horizontal grouping */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Horizontal Button Group</h3>
                                    </div>
                                    <div className="box-body table-responsive pad">
                                        <p>
                                            Horizontal button groups are easy to create with bootstrap. Just add your buttons inside <code>&lt;div className="btn-group"&gt;&lt;/div&gt;</code>
                                        </p>

                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th>Button</th>
                                                    <th>Icons</th>
                                                    <th>Flat</th>
                                                    <th>Dropdown</th>
                                                </tr>
                                                {/* Default */}
                                                <tr>
                                                    <td>
                                                        <HorizontalButton leftValue="Left" centerValue="Center" rightValue="Right" />
                                                    </td>
                                                    <td>
                                                        <HorizontalButton leftIcon="fa fa-align-left" centerIcon="fa fa-align-center" rightIcon="fa fa-align-right" />
                                                    </td>
                                                    <td>
                                                        <HorizontalButton btnStyle="btn-flat" leftIcon="fa fa-align-left" centerIcon="fa fa-align-center" rightIcon="fa fa-align-right" />
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-default">1</button>
                                                            <button type="button" className="btn btn-default">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* ./default */}
                                                {/* Info */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-info">Left</button>
                                                            <button type="button" className="btn btn-info">Middle</button>
                                                            <button type="button" className="btn btn-info">Right</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-info"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-info"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-info"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-info btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-info btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-info btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-info">1</button>
                                                            <button type="button" className="btn btn-info">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /. info */}
                                                {/* /.danger */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-danger">Left</button>
                                                            <button type="button" className="btn btn-danger">Middle</button>
                                                            <button type="button" className="btn btn-danger">Right</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-danger btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-danger btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-danger btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-danger">1</button>
                                                            <button type="button" className="btn btn-danger">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /.danger */}
                                                {/* warning */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-warning">Left</button>
                                                            <button type="button" className="btn btn-warning">Middle</button>
                                                            <button type="button" className="btn btn-warning">Right</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-warning btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-warning btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-warning btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-warning">1</button>
                                                            <button type="button" className="btn btn-warning">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /.warning */}
                                                {/* success */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-success">Left</button>
                                                            <button type="button" className="btn btn-success">Middle</button>
                                                            <button type="button" className="btn btn-success">Right</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-success"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-success"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-success"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-success btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-success btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-success btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-success">1</button>
                                                            <button type="button" className="btn btn-success">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /.success */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* /.box */}

                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Button Addon</h3>
                                    </div>
                                    <div className="box-body">
                                        <p>With dropdown</p>

                                        <div className="input-group margin">
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Action
                                                    <span className="fa fa-caret-down"></span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            {/* /btn-group */}
                                            <input type="text" className="form-control" />
                                        </div>
                                        {/* /input-group */}
                                        <p>Normal</p>

                                        <div className="input-group margin">
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-danger">Action</button>
                                            </div>
                                            {/* /btn-group */}
                                            <input type="text" className="form-control" />
                                        </div>
                                        {/* /input-group */}
                                        <p>Flat</p>

                                        <div className="input-group margin">
                                            <input type="text" className="form-control" />
                                            <span className="input-group-btn">
                                          <button type="button" className="btn btn-info btn-flat">Go!</button>
                                        </span>
                                        </div>
                                        {/* /input-group */}
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                                {/* split buttons box */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Split buttons</h3>
                                    </div>
                                    <div className="box-body">
                                        {/* Split button */}
                                        <p>Normal split buttons:</p>

                                        <div className="margin">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default">Action</button>
                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-info">Action</button>
                                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-danger">Action</button>
                                                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-success">Action</button>
                                                <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-warning">Action</button>
                                                <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* flat split buttons */}
                                        <p>Flat split buttons:</p>

                                        <div className="margin">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default btn-flat">Action</button>
                                                <button type="button" className="btn btn-default btn-flat dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-info btn-flat">Action</button>
                                                <button type="button" className="btn btn-info btn-flat dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-danger btn-flat">Action</button>
                                                <button type="button" className="btn btn-danger btn-flat dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-success btn-flat">Action</button>
                                                <button type="button" className="btn btn-success btn-flat dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-warning btn-flat">Action</button>
                                                <button type="button" className="btn btn-warning btn-flat dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* end split buttons box */}

                                {/* social buttons */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Social Buttons (By <a href="https://github.com/lipis/bootstrap-social">Lipis</a>)
                                  </h3>
                                    </div>
                                    <div className="box-body">
                                        <SocialButton signStyle="btn-block btn-social btn-bitbucket" iconStyle="fa fa-bitbucket" value="Sign in with Bitbucket"/>
                                        <SocialButton signStyle="btn-block btn-social btn-dropbox" iconStyle="fa fa-dropbox" value="Sign in with Dropbox"/>
                                        <SocialButton signStyle="btn-block btn-social btn-facebook" iconStyle="fa fa-facebook" value="Sign in with Facebook"/>
                                        <SocialButton signStyle="btn-block btn-social btn-flickr" iconStyle="fa fa-flickr" value="Sign in with Flickr"/>
                                        <SocialButton signStyle="btn-block btn-social btn-foursquare" iconStyle="fa fa-foursquare" value="Sign in with Foursquare"/>
                                        <SocialButton signStyle="btn-block btn-social btn-github" iconStyle="fa fa-github" value="Sign in with GitHub"/>
                                        <SocialButton signStyle="btn-block btn-social btn-google" iconStyle="fa fa-google" value="Sign in with Google"/>
                                        <SocialButton signStyle="btn-block btn-social btn-instagram" iconStyle="fa fa-instagram" value="Sign in with Instagram"/>
                                        <SocialButton signStyle="btn-block btn-social btn-linkedin" iconStyle="fa fa-linkedin" value="Sign in with LinkedIn"/>
                                        <SocialButton signStyle="btn-block btn-social btn-tumblr" iconStyle="fa fa-tumblr" value="Sign in with Tumblr"/>
                                        <SocialButton signStyle="btn-block btn-social btn-twitter" iconStyle="fa fa-twitter" value="Sign in with Twitter"/>
                                        <SocialButton signStyle="btn-block btn-social btn-vk" iconStyle="fa fa-vk" value="Sign in with VK"/>
                                        <br />

                                        <div className="text-center">
                                            <SocialButton signStyle="btn-social-icon btn-bitbucket" iconStyle="fa fa-bitbucket"/>
                                            <SocialButton signStyle="btn-social-icon btn-dropbox" iconStyle="fa fa-dropbox" />
                                            <SocialButton signStyle="btn-social-icon btn-facebook" iconStyle="fa fa-facebook" />
                                            <SocialButton signStyle="btn-social-icon btn-flickr" iconStyle="fa fa-flickr" />
                                            <SocialButton signStyle="btn-social-icon btn-foursquare" iconStyle="fa fa-foursquare" />
                                            <SocialButton signStyle="btn-social-icon btn-github" iconStyle="fa fa-github" />
                                            <SocialButton signStyle="btn-social-icon btn-google" iconStyle="fa fa-google" />
                                            <SocialButton signStyle="btn-social-icon btn-instagram" iconStyle="fa fa-instagram" />
                                            <SocialButton signStyle="btn-social-icon btn-linkedin" iconStyle="fa fa-linkedin" />
                                            <SocialButton signStyle="btn-social-icon btn-tumblr" iconStyle="fa fa-tumblr" />
                                            <SocialButton signStyle="btn-social-icon btn-twitter" iconStyle="fa fa-twitter"/>
                                            <SocialButton signStyle="btn-social-icon btn-vk" iconStyle="fa fa-vk"/>
                                        </div>
                                    </div>
                                </div>
                                {/* /.box */}

                            </div>
                            {/* /.col */}
                            <div className="col-md-6">
                                {/* Application buttons */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Application Buttons</h3>
                                    </div>
                                    <div className="box-body">
                                        <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a&gt;</code> tag to achieve the following:</p>
                                        <AppButton style={{fontSize:80}} iconStyle="fa fa-edit" value="Edit"></AppButton>
                                        <AppButton iconStyle="fa fa-play" value="Play"></AppButton>
                                        <AppButton iconStyle="fa fa-repeat" value="Repeat"></AppButton>
                                        <AppButton iconStyle="fa fa-pause" value="Pause"></AppButton>
                                        <AppButton iconStyle="fa fa-save" value="Save"></AppButton>
                                        <AppButton badgeStyle="bg-yellow" badgeValue='3' iconStyle="fa fa-bullhorn" value="Notifications"></AppButton>
                                        <AppButton badgeStyle="bg-green" badgeValue='300' iconStyle="fa fa-barcode" value="Products"></AppButton>
                                        <AppButton badgeStyle="bg-purple" badgeValue='891' iconStyle="fa fa-users" value="Users"></AppButton>
                                        <AppButton badgeStyle="bg-teal" badgeValue='67' iconStyle="fa fa-inbox" value="Orders"></AppButton>
                                        <AppButton badgeStyle="bg-aqua" badgeValue='12' iconStyle="fa fa-envelope" value="Inbox"></AppButton>
                                        <AppButton badgeStyle="bg-red" badgeValue='531' iconStyle="fa fa-heart-o" value="Likes"></AppButton>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                                {/* Various colors */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Different colors</h3>
                                    </div>
                                    <div className="box-body">
                                        <p>Mix and match with various background colors. Use base className <code>.btn</code> and add any available
                                            <code>.bg-*</code> className</p>
                                        {/* You may notice a .margin className added
                                  here but that's only to make the content
                                  display correctly without having to use a table*/}
                                        <p>
                                            <button type="button" className="btn bg-maroon btn-flat margin">.btn.bg-maroon.btn-flat</button>
                                            <button type="button" className="btn bg-purple btn-flat margin">.btn.bg-purple.btn-flat</button>
                                            <button type="button" className="btn bg-navy btn-flat margin">.btn.bg-navy.btn-flat</button>
                                            <button type="button" className="btn bg-orange btn-flat margin">.btn.bg-orange.btn-flat</button>
                                            <button type="button" className="btn bg-olive btn-flat margin">.btn.bg-olive.btn-flat</button>
                                        </p>

                                        <p>
                                            <button type="button" className="btn bg-maroon margin">.btn.bg-maroon</button>
                                            <button type="button" className="btn bg-purple margin">.btn.bg-purple</button>
                                            <button type="button" className="btn bg-navy margin">.btn.bg-navy</button>
                                            <button type="button" className="btn bg-orange margin">.btn.bg-orange</button>
                                            <button type="button" className="btn bg-olive margin">.btn.bg-olive</button>
                                        </p>
                                    </div>
                                </div>
                                {/* /.box */}

                                {/* Vertical grouping */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Vertical Button Group</h3>
                                    </div>
                                    <div className="box-body table-responsive pad">

                                        <p>
                                            Vertical button groups are easy to create with bootstrap. Just add your buttons inside <code>&lt;div className="btn-group-vertical"&gt;&lt;/div&gt;</code>
                                        </p>

                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th>Button</th>
                                                    <th>Icons</th>
                                                    <th>Flat</th>
                                                    <th>Dropdown</th>
                                                </tr>
                                                {/* Default */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-default">Top</button>
                                                            <button type="button" className="btn btn-default">Middle</button>
                                                            <button type="button" className="btn btn-default">Bottom</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-default"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-default"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-default"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-default btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-default btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-default btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-default">1</button>
                                                            <button type="button" className="btn btn-default">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* ./default */}
                                                {/* Info */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-info">Top</button>
                                                            <button type="button" className="btn btn-info">Middle</button>
                                                            <button type="button" className="btn btn-info">Bottom</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-info"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-info"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-info"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-info btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-info btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-info btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-info">1</button>
                                                            <button type="button" className="btn btn-info">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /. info */}
                                                {/* /.danger */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-danger">Top</button>
                                                            <button type="button" className="btn btn-danger">Middle</button>
                                                            <button type="button" className="btn btn-danger">Bottom</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-danger btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-danger btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-danger btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-danger">1</button>
                                                            <button type="button" className="btn btn-danger">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /.danger */}
                                                {/* warning */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-warning">Top</button>
                                                            <button type="button" className="btn btn-warning">Middle</button>
                                                            <button type="button" className="btn btn-warning">Bottom</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-warning btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-warning btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-warning btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-warning">1</button>
                                                            <button type="button" className="btn btn-warning">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /.warning */}
                                                {/* success */}
                                                <tr>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-success">Top</button>
                                                            <button type="button" className="btn btn-success">Middle</button>
                                                            <button type="button" className="btn btn-success">Bottom</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-success"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-success"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-success"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-success btn-flat"><i className="fa fa-align-left"></i></button>
                                                            <button type="button" className="btn btn-success btn-flat"><i className="fa fa-align-center"></i></button>
                                                            <button type="button" className="btn btn-success btn-flat"><i className="fa fa-align-right"></i></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical">
                                                            <button type="button" className="btn btn-success">1</button>
                                                            <button type="button" className="btn btn-success">2</button>

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown">
                                                                    <span className="caret"></span>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                    <li><a href="#">Dropdown link</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* /.success */}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /. row */}
                    </section>
                </div>
                {/*<ControlsMenu />*/}
            </div>
        )
    }
}