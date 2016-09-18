import React from 'react';

export default class Simple extends React.Component {
	componentDidMount() {
	
	}
	render() {
		return(
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Simple Tables
            <small>preview of simple tables</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Tables</a></li>
            <li className="active">Simple</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Bordered Table</h3>
                </div>{/* /.box-header */}
                <div className="box-body">
                  <table className="table table-bordered">
                    <tr>
                      <th style={{padding:8,width:10}}>#</th>
                      <th style={{padding:8}}>Task</th>
                      <th style={{padding:8}}>Progress</th>
                      <th style={{padding:8,width:40}}>Label</th>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>1.</td>
                      <td style={{padding:8}}>Update software</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>2.</td>
                      <td style={{padding:8}}>Clean database</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-yellow" style={{width: '70%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>3.</td>
                      <td style={{padding:8}}>Cron job running</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-primary" style={{width: '30%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>4.</td>
                      <td style={{padding:8}}>Fix and squish bugs</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-success" style={{width: '90%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-green">90%</span></td>
                    </tr>
                  </table>
                </div>{/* /.box-body */}
                <div className="box-footer clearfix">
                  <ul className="pagination pagination-sm no-margin pull-right">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">&raquo;</a></li>
                  </ul>
                </div>
              </div>{/* /.box */}

              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Condensed Full Width Table</h3>
                </div>{/* /.box-header */}
                <div className="box-body no-padding">
                  <table className="table table-condensed">
                    <tr>
                      <th style={{padding:8,width:10}}>#</th>
                      <th style={{padding:8}}>Task</th>
                      <th style={{padding:8}}>Progress</th>
                      <th style={{padding:8,width:40}}>Label</th>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>1.</td>
                      <td style={{padding:8}}>Update software</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>2.</td>
                      <td style={{padding:8}}>Clean database</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-yellow" style={{width: '70%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>3.</td>
                      <td style={{padding:8}}>Cron job running</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-primary" style={{width: '30%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>4.</td>
                      <td style={{padding:8}}>Fix and squish bugs</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-success" style={{width: '90%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-green">90%</span></td>
                    </tr>
                  </table>
                </div>{/* /.box-body */}
              </div>{/* /.box */}
            </div>{/* /.col */}
            <div className="col-md-6">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Simple Full Width Table</h3>
                  <div className="box-tools">
                    <ul className="pagination pagination-sm no-margin pull-right">
                      <li><a href="#">&laquo;</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>{/* /.box-header */}
                <div className="box-body no-padding">
                  <table className="table">
                    <tr>
                      <th style={{padding:8,width:10}}>#</th>
                      <th style={{padding:8}}>Task</th>
                      <th style={{padding:8}}>Progress</th>
                      <th style={{padding:8,width:40}}>Label</th>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>1.</td>
                      <td style={{padding:8}}>Update software</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>2.</td>
                      <td style={{padding:8}}>Clean database</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-yellow" style={{width: '70%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>3.</td>
                      <td style={{padding:8}}>Cron job running</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-primary" style={{width: '30%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>4.</td>
                      <td style={{padding:8}}>Fix and squish bugs</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-success" style={{width: '90%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-green">90%</span></td>
                    </tr>
                  </table>
                </div>{/* /.box-body */}
              </div>{/* /.box */}

              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Striped Full Width Table</h3>
                </div>{/* /.box-header */}
                <div className="box-body no-padding">
                  <table className="table table-striped">
                    <tr>
                      <th style={{padding:8,width:10}}>#</th>
                      <th style={{padding:8}}>Task</th>
                      <th style={{padding:8}}>Progress</th>
                      <th style={{padding:8,width:40}}>Label</th>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>1.</td>
                      <td style={{padding:8}}>Update software</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>2.</td>
                      <td style={{padding:8}}>Clean database</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-yellow" style={{width: '70%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>3.</td>
                      <td style={{padding:8}}>Cron job running</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-primary" style={{width: '30%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>4.</td>
                      <td style={{padding:8}}>Fix and squish bugs</td>
                      <td style={{padding:8}}>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar progress-bar-success" style={{width: '90%'}}></div>
                        </div>
                      </td>
                      <td style={{padding:8}}><span className="badge bg-green">90%</span></td>
                    </tr>
                  </table>
                </div>{/* /.box-body */}
              </div>{/* /.box */}
            </div>{/* /.col */}
          </div>{/* /.row */}
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Responsive Hover Table</h3>
                  <div className="box-tools">
                    <div className="input-group" style={{width: 150}}>
                      <input type="text" name="table_search" className="form-control input-sm pull-right" placeholder="Search"/>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-default"><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </div>{/* /.box-header */}
                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <tr>
                      <th style={{padding:8}}>ID</th>
                      <th style={{padding:8}}>User</th>
                      <th style={{padding:8}}>Date</th>
                      <th style={{padding:8}}>Status</th>
                      <th style={{padding:8}}>Reason</th>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>183</td>
                      <td style={{padding:8}}>John Doe</td>
                      <td style={{padding:8}}>11-7-2014</td>
                      <td style={{padding:8}}><span className="label label-success">Approved</span></td>
                      <td style={{padding:8}}>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>219</td>
                      <td style={{padding:8}}>Alexander Pierce</td>
                      <td style={{padding:8}}>11-7-2014</td>
                      <td style={{padding:8}}><span className="label label-warning">Pending</span></td>
                      <td style={{padding:8}}>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>657</td>
                      <td style={{padding:8}}>Bob Doe</td>
                      <td style={{padding:8}}>11-7-2014</td>
                      <td style={{padding:8}}><span className="label label-primary">Approved</span></td>
                      <td style={{padding:8}}>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td style={{padding:8}}>175</td>
                      <td style={{padding:8}}>Mike Doe</td>
                      <td style={{padding:8}}>11-7-2014</td>
                      <td style={{padding:8}}><span className="label label-danger">Denied</span></td>
                      <td style={{padding:8}}>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                  </table>
                </div>{/* /.box-body */}
              </div>{/* /.box */}
            </div>
          </div>
        </section>
      </div>

			)
	}
}