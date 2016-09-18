import React from 'react';
export default class Modals extends React.Component {
    getInitialState() {
        return;
    }

    componentDidMount() {

    }
    render() {
        var modal = {
            background:'#ecf0f5',
            position: 'relative',
            display: 'block',
        };
        return (
            <div className="content-wrapper">
        {/*<!-- Content Header (Page header) -->*/}
        <section className="content-header">
          <h1>
            Modals
            <small>new</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Modals</li>
          </ol>
        </section>

        {/*<!-- Main content -->*/}
        <section className="content" >
          <div className="example-modal">
            <div className="modal" style={modal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Modal Default</h4>
                  </div>
                  <div className="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>{/*<!-- /.modal-content -->*/}
              </div>{/*<!-- /.modal-dialog -->*/}
            </div>{/*<!-- /.modal -->*/}
          </div>{/*<!-- /.example-modal -->*/}

          <div className="example-modal">
            <div className="modal modal-primary" style={modal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Modal Primary</h4>
                  </div>
                  <div className="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline">Save changes</button>
                  </div>
                </div>{/*<!-- /.modal-content -->*/}
              </div>{/*<!-- /.modal-dialog -->*/}
            </div>{/*<!-- /.modal -->*/}
          </div>{/*<!-- /.example-modal -->*/}

          <div className="example-modal">
            <div className="modal modal-info" style={modal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Modal Info</h4>
                  </div>
                  <div className="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline">Save changes</button>
                  </div>
                </div>{/*<!-- /.modal-content -->*/}
              </div>{/*<!-- /.modal-dialog -->*/}
            </div>{/*<!-- /.modal -->*/}
          </div>{/*<!-- /.example-modal -->*/}

          <div className="example-modal">
            <div className="modal modal-warning" style={modal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Modal Warning</h4>
                  </div>
                  <div className="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline">Save changes</button>
                  </div>
                </div>{/*<!-- /.modal-content -->*/}
              </div>{/*<!-- /.modal-dialog -->*/}
            </div>{/*<!-- /.modal -->*/}
          </div>{/*<!-- /.example-modal -->*/}

          <div className="example-modal">
            <div className="modal modal-success" style={modal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Modal Success</h4>
                  </div>
                  <div className="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline">Save changes</button>
                  </div>
                </div>{/*<!-- /.modal-content -->*/}
              </div>{/*<!-- /.modal-dialog -->*/}
            </div>{/*<!-- /.modal -->*/}
          </div>{/*<!-- /.example-modal -->*/}

          <div className="example-modal">
            <div className="modal modal-danger" style={modal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Modal Danger</h4>
                  </div>
                  <div className="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline">Save changes</button>
                  </div>
                </div>{/*<!-- /.modal-content -->*/}
              </div>{/*<!-- /.modal-dialog -->*/}
            </div>{/*<!-- /.modal -->*/}
          </div>{/*<!-- /.example-modal -->*/}
        </section>{/*<!-- /.content -->*/}
      </div>
        )
    }
}
