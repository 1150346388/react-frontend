import React from 'react';
import { render } from 'react-dom'

export default class FormAdvanced extends React.Component {
    getInitialState() {

    }

    componentDidMount() {

        //Initialize Select2 Elements
        $(".select2").select2();

        //Datemask dd/mm/yyyy
        $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
        //Datemask2 mm/dd/yyyy
        $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
        //Money Euro
        $("[data-mask]").inputmask();

        //Date range picker
        $('#reservation').daterangepicker();
        //Date range picker with time picker
        $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
        //Date range as a button
        $('#daterange-btn').daterangepicker(
            {
              ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
              },
              startDate: moment().subtract(29, 'days'),
              endDate: moment()
            },
        function (start, end) {
          $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        );

        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
          checkboxclassName: 'icheckbox_minimal-blue',
          radioclassName: 'iradio_minimal-blue'
        });
        //Red color scheme for iCheck
        $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
          checkboxclassName: 'icheckbox_minimal-red',
          radioclassName: 'iradio_minimal-red'
        });
        //Flat red color scheme for iCheck
        $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
          checkboxclassName: 'icheckbox_flat-green',
          radioclassName: 'iradio_flat-green'
        });

        //Colorpicker
        $(".my-colorpicker1").colorpicker();
        //color picker with addon
        $(".my-colorpicker2").colorpicker();

        //Timepicker
        $(".timepicker").timepicker({
          showInputs: false
        });
    }

    render() {
        return (
          <div className="content-wrapper">
            {/*<!-- Content Header (Page header) -->*/}
            <section className="content-header">
              <h1>
                Advanced Form Elements
                <small>Preview</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#">Forms</a></li>
                <li className="active">Advanced Elements</li>
              </ol>
            </section>

            {/*<!-- Main content -->*/}
            <section className="content">

              <div className="box box-default">
                <div className="box-header with-border">
                  <h3 className="box-title">Select2</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Minimal</label>
                        <select className="form-control select2">
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Disabled</label>
                        <select className="form-control select2" disabled="disabled">
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Multiple</label>
                        <select className="form-control select2" multiple="multiple" data-placeholder="Select a State">
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Disabled Result</label>
                        <select className="form-control select2">
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option disabled="disabled">California (disabled)</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about the plugin.
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">

                  <div className="box box-danger">
                    <div className="box-header">
                      <h3 className="box-title">Input masks</h3>
                    </div>
                    <div className="box-body">
                      <div className="form-group">
                        <label>Date masks:</label>
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <input type="text" className="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <input type="text" className="form-control" data-inputmask="'alias': 'mm/dd/yyyy'" data-mask />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>US phone mask:</label>
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-phone"></i>
                          </div>
                          <input type="text" className="form-control" data-inputmask='"mask": "(999) 999-9999"' data-mask />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Intl US phone mask:</label>
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-phone"></i>
                          </div>
                          <input type="text" className="form-control" data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>IP mask:</label>
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-laptop"></i>
                          </div>
                          <input type="text" className="form-control" data-inputmask="'alias': 'ip'" data-mask />
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="box box-info">
                    <div className="box-header">
                      <h3 className="box-title">Color & Time Picker</h3>
                    </div>
                    <div className="box-body">

                      <div className="form-group">
                        <label>Color picker:</label>
                        <input type="text" className="form-control my-colorpicker1"/>
                      </div>
                      <div className="form-group">
                        <label>Color picker with addon:</label>
                        <div className="input-group my-colorpicker2">
                          <input type="text" className="form-control"/>
                          <div className="input-group-addon">
                            <i></i>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-timepicker">
                        <div className="form-group">
                          <label>Time picker:</label>
                          <div className="input-group">
                            <input type="text" className="form-control timepicker"/>
                            <div className="input-group-addon">
                              <i className="fa fa-clock-o"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box box-primary">
                    <div className="box-header">
                      <h3 className="box-title">Date picker</h3>
                    </div>
                    <div className="box-body">

                      <div className="form-group">
                        <label>Date range:</label>
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <input type="text" className="form-control pull-right" id="reservation"/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Date and time range:</label>
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-clock-o"></i>
                          </div>
                          <input type="text" className="form-control pull-right" id="reservationtime"/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Date range button:</label>
                        <div className="input-group">
                          <button className="btn btn-default pull-right" id="daterange-btn">
                            <i className="fa fa-calendar"></i> Date range picker
                            <i className="fa fa-caret-down"></i>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="box box-success">
                    <div className="box-header">
                      <h3 className="box-title">iCheck - Checkbox &amp; Radio Inputs</h3>
                    </div>
                    <div className="box-body">

                      <div className="form-group">
                        <label>
                          <input type="checkbox" className="minimal" checked/>
                        </label>
                        <label>
                          <input type="checkbox" className="minimal"/>
                        </label>
                        <label>
                          <input type="checkbox" className="minimal" disabled/>
                          Minimal skin checkbox
                        </label>
                      </div>

                      {/*<!-- radio -->*/}
                      <div className="form-group">
                        <label>
                          <input type="radio" name="r1" className="minimal" checked/>
                        </label>
                        <label>
                          <input type="radio" name="r1" className="minimal"/>
                        </label>
                        <label>
                          <input type="radio" name="r1" className="minimal" disabled/>
                          Minimal skin radio
                        </label>
                      </div>


                      {/*<!-- checkbox -->*/}
                      <div className="form-group">
                        <label>
                          <input type="checkbox" className="minimal-red" checked/>
                        </label>
                        <label>
                          <input type="checkbox" className="minimal-red"/>
                        </label>
                        <label>
                          <input type="checkbox" className="minimal-red" disabled/>
                          Minimal red skin checkbox
                        </label>
                      </div>

                      {/*<!-- radio -->*/}
                      <div className="form-group">
                        <label>
                          <input type="radio" name="r2" className="minimal-red" checked/>
                        </label>
                        <label>
                          <input type="radio" name="r2" className="minimal-red"/>
                        </label>
                        <label>
                          <input type="radio" name="r2" className="minimal-red" disabled/>
                          Minimal red skin radio
                        </label>
                      </div>

                      {/*<!-- Minimal red style -->*/}

                      {/*<!-- checkbox -->*/}
                      <div className="form-group">
                        <label>
                          <input type="checkbox" className="flat-red" checked/>
                        </label>
                        <label>
                          <input type="checkbox" className="flat-red"/>
                        </label>
                        <label>
                          <input type="checkbox" className="flat-red" disabled/>
                          Flat green skin checkbox
                        </label>
                      </div>

                      {/*<!-- radio -->*/}
                      <div className="form-group">
                        <label>
                          <input type="radio" name="r3" className="flat-red" checked/>
                        </label>
                        <label>
                          <input type="radio" name="r3" className="flat-red"/>
                        </label>
                        <label>
                          <input type="radio" name="r3" className="flat-red" disabled/>
                          Flat green skin radio
                        </label>
                      </div>

                    </div>
                    <div className="box-footer">
                      Many more skins available. <a href="http://fronteed.com/iCheck/">Documentation</a>
                    </div>
                  </div>
                     
                </div>
              </div>

            </section>
            
          </div>
        )
    }
}
