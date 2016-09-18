import React from 'react';
export default class Editors extends React.Component {
	componentDidMount() {
		// Replace the <textarea id="editor1"> with a CKEditor
        // instance, using default configuration.
        CKEDITOR.replace('editor1');
        //bootstrap WYSIHTML5 - text editor
        $(".textarea").wysihtml5();
	}
	render() {
		return(
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Text Editors
            <small>Advanced form element</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li className="active">Editors</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title">CK Editor <small>Advanced and full of features</small></h3>
                  {/* tools box */}
                  <div className="pull-right box-tools">
                    <button className="btn btn-info btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                  </div>{/* /. tools */}
                </div>{/* /.box-header */}
                <div className="box-body pad">
                  <form>
                    <textarea id="editor1" name="editor1" rows="10" cols="80">
                                            This is my textarea to be replaced with CKEditor.
                    </textarea>
                  </form>
                </div>
              </div>{/* /.box */}

              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Bootstrap WYSIHTML5 <small>Simple and fast</small></h3>
                  {/* tools box */}
                  <div className="pull-right box-tools">
                    <button className="btn btn-default btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-default btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                  </div>{/* /. tools */}
                </div>{/* /.box-header */}
                <div className="box-body pad">
                  <form>
                    <textarea className="textarea" placeholder="Place some text here" style={{width: '100%', height: 200, fontSize: 14, lineHeight: '18px', border: '1px solid #dddddd', padding: 10}}></textarea>
                  </form>
                </div>
              </div>
            </div>{/* /.col*/}
          </div>{/* ./row */}
        </section>
      </div>
    )
	}
}