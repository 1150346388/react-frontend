import React from 'react';
export default class PageBlank extends React.Component {
    getInitialState() {
        return;
    }

    componentDidMount() {}

    render() {
        var styles = {
            minHeight: 1096
        }
        return (
              <div className="content-wrapper" style={styles}>
                <section className="content-header">
                  <h1>
                     Blank page
                  <small>it all starts here</small>
                  </h1>
                  <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Examples</a></li>
                    <li className="active">Blank page</li>
                  </ol>
                </section>
                <section className="content">
                    <div className="box">
                        <div className="box-header with-border">
                          <h3 className="box-title">Title</h3>
                          <div className="box-tools pull-right">
                            <button className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                            <button className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                        </div>
                      </div>
                      <div className="box-body">
                        Start creating your amazing application!
                      </div>
                      <div className="box-footer">
                          Footer
                      </div>
                    </div>
                </section>
              </div>
        )
    }
}
