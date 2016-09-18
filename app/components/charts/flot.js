import React from 'react';
import { render } from 'react-dom';
import styles from "./flot.css";

export default class Flot extends React.Component {

  componentDidMount() {
    


    // var data = [], totalPoints = 100;
    // function getRandomData() {

    //   if (data.length > 0)
    //     data = data.slice(1);

    //   // Do a random walk
    //   while (data.length < totalPoints) {

    //     var prev = data.length > 0 ? data[data.length - 1] : 50,
    //             y = prev + Math.random() * 10 - 5;

    //     if (y < 0) {
    //       y = 0;
    //     } else if (y > 100) {
    //       y = 100;
    //     }

    //     data.push(y);
    //   }

    //   // Zip the generated y values with the x values
    //   var res = [];
    //   for (var i = 0; i < data.length; ++i) {
    //     res.push([i, data[i]]);
    //   }

    //   return res;
    // }

    // var interactive_plot = $.plot("#interactive", [getRandomData()], {
    //   grid: {
    //     borderColor: "#f3f3f3",
    //     borderWidth: 1,
    //     tickColor: "#f3f3f3"
    //   },
    //   series: {
    //     shadowSize: 0, // Drawing is faster without shadows
    //     color: "#3c8dbc"
    //   },
    //   lines: {
    //     fill: true, //Converts the line chart to area chart
    //     color: "#3c8dbc"
    //   },
    //   yaxis: {
    //     min: 0,
    //     max: 100,
    //     show: true
    //   },
    //   xaxis: {
    //     show: true
    //   }
    // });

    // var updateInterval = 500; //Fetch data ever x milliseconds
    // var realtime = "on"; //If == to on then fetch data every x seconds. else stop fetching
    // function update() {

    //   interactive_plot.setData([getRandomData()]);

    //   // Since the axes don't change, we don't need to call plot.setupGrid()
    //   interactive_plot.draw();
    //   if (realtime === "on")
    //     setTimeout(update, updateInterval);
    // }

    // //INITIALIZE REALTIME DATA FETCHING
    // if (realtime === "on") {
    //   update();
    // }
    // //REALTIME TOGGLE
    // $("#realtime .btn").click(function () {
    //   if ($(this).data("toggle") === "on") {
    //     realtime = "on";
    //   }
    //   else {
    //     realtime = "off";
    //   }
    //   update();
    // });
    // /*
    //  * END INTERACTIVE CHART
    //  */


    // /*
    //  * LINE CHART
    //  * ----------
    //  */
    // //LINE randomly generated data

    // var sin = [], cos = [];
    // for (var i = 0; i < 14; i += 0.5) {
    //   sin.push([i, Math.sin(i)]);
    //   cos.push([i, Math.cos(i)]);
    // }
    // var line_data1 = {
    //   data: sin,
    //   color: "#3c8dbc"
    // };
    // var line_data2 = {
    //   data: cos,
    //   color: "#00c0ef"
    // };
    // $.plot("#line-chart", [line_data1, line_data2], {
    //   grid: {
    //     hoverable: true,
    //     borderColor: "#f3f3f3",
    //     borderWidth: 1,
    //     tickColor: "#f3f3f3"
    //   },
    //   series: {
    //     shadowSize: 0,
    //     lines: {
    //       show: true
    //     },
    //     points: {
    //       show: true
    //     }
    //   },
    //   lines: {
    //     fill: false,
    //     color: ["#3c8dbc", "#f56954"]
    //   },
    //   yaxis: {
    //     show: true,
    //   },
    //   xaxis: {
    //     show: true
    //   }
    // });
    // //Initialize tooltip on hover
    // $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
    //   position: "absolute",
    //   display: "none",
    //   opacity: 0.8
    // }).appendTo("body");
    // $("#line-chart").bind("plothover", function (event, pos, item) {

    //   if (item) {
    //     var x = item.datapoint[0].toFixed(2),
    //             y = item.datapoint[1].toFixed(2);

    //     $("#line-chart-tooltip").html(item.series.label + " of " + x + " = " + y)
    //             .css({top: item.pageY + 5, left: item.pageX + 5})
    //             .fadeIn(200);
    //   } else {
    //     $("#line-chart-tooltip").hide();
    //   }

    // });
    // /* END LINE CHART */

    // /*
    //  * FULL WIDTH STATIC AREA CHART
    //  * -----------------
    //  */
    // var areaData = [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6],
    //   [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9],
    //   [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]];
    // $.plot("#area-chart", [areaData], {
    //   grid: {
    //     borderWidth: 0
    //   },
    //   series: {
    //     shadowSize: 0, // Drawing is faster without shadows
    //     color: "#00c0ef"
    //   },
    //   lines: {
    //     fill: true //Converts the line chart to area chart
    //   },
    //   yaxis: {
    //     show: false
    //   },
    //   xaxis: {
    //     show: false
    //   }
    // });

    // /* END AREA CHART */

    // /*
    //  * BAR CHART
    //  * ---------
    //  */

    // var bar_data = {
    //   data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]],
    //   color: "#3c8dbc"
    // };
    // $.plot("#bar-chart", [bar_data], {
    //   grid: {
    //     borderWidth: 1,
    //     borderColor: "#f3f3f3",
    //     tickColor: "#f3f3f3"
    //   },
    //   series: {
    //     bars: {
    //       show: true,
    //       barWidth: 0.5,
    //       align: "center"
    //     }
    //   },
    //   xaxis: {
    //     mode: "categories",
    //     tickLength: 0
    //   }
    // });
    // /* END BAR CHART */

    // /*
    //  * DONUT CHART
    //  * -----------
    //  */

    // var donutData = [
    //   {label: "Series2", data: 30, color: "#3c8dbc"},
    //   {label: "Series3", data: 20, color: "#0073b7"},
    //   {label: "Series4", data: 50, color: "#00c0ef"}
    // ];
    // $.plot("#donut-chart", donutData, {
    //   series: {
    //     pie: {
    //       show: true,
    //       radius: 1,
    //       innerRadius: 0.5,
    //       label: {
    //         show: true,
    //         radius: 2 / 3,
    //         formatter: this.labelFormatter,
    //         threshold: 0.1
    //       }

    //     }
    //   },
    //   legend: {
    //     show: false
    //   }
    // });
    /*
     * END DONUT CHART
     */
    



    // Example Data

    //var data = [
    //  { label: "Series1",  data: 10},
    //  { label: "Series2",  data: 30},
    //  { label: "Series3",  data: 90},
    //  { label: "Series4",  data: 70},
    //  { label: "Series5",  data: 80},
    //  { label: "Series6",  data: 110}
    //];

    //var data = [
    //  { label: "Series1",  data: [[1,10]]},
    //  { label: "Series2",  data: [[1,30]]},
    //  { label: "Series3",  data: [[1,90]]},
    //  { label: "Series4",  data: [[1,70]]},
    //  { label: "Series5",  data: [[1,80]]},
    //  { label: "Series6",  data: [[1,0]]}
    //];

    //var data = [
    //  { label: "Series A",  data: 0.2063},
    //  { label: "Series B",  data: 38888}
    //];

    // Randomly Generated Data

    var data = [],
      series = Math.floor(Math.random() * 6) + 3;

    for (var i = 0; i < series; i++) {
      data[i] = {
        label: "Series" + (i + 1),
        data: Math.floor(Math.random() * 100) + 1
      }
    }

    var placeholder = $("#placeholder");

    $("#example-1").click(function() {

      placeholder.unbind();

      $("#title").text("Default pie chart");
      $("#description").text("The default pie chart with no options set.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true
          }
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true",
        "        }",
        "    }",
        "});"
      ]);
    });

    $("#example-2").click(function() {

      placeholder.unbind();

      $("#title").text("Default without legend");
      $("#description").text("The default pie chart when the legend is disabled. Since the labels would normally be outside the container, the chart is resized to fit.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-3").click(function() {

      placeholder.unbind();

      $("#title").text("Custom Label Formatter");
      $("#description").text("Added a semi-transparent background to the labels and a custom labelFormatter function.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 1,
              formatter: this.labelFormatter,
              background: {
                opacity: 0.8
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true,",
        "            radius: 1,",
        "            label: {",
        "                show: true,",
        "                radius: 1,",
        "                formatter: labelFormatter,",
        "                background: {",
        "                    opacity: 0.8",
        "                }",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-4").click(function() {

      placeholder.unbind();

      $("#title").text("Label Radius");
      $("#description").text("Slightly more transparent label backgrounds and adjusted the radius values to place them within the pie.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 3/4,
              formatter: labelFormatter,
              background: {
                opacity: 0.5
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true,",
        "            radius: 1,",
        "            label: {",
        "                show: true,",
        "                radius: 3/4,",
        "                formatter: labelFormatter,",
        "                background: {",
        "                    opacity: 0.5",
        "                }",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-5").click(function() {

      placeholder.unbind();

      $("#title").text("Label Styles #1");
      $("#description").text("Semi-transparent, black-colored label background.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 3/4,
              formatter: labelFormatter,
              background: { 
                opacity: 0.5,
                color: "#000"
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: { ",
        "            show: true,",
        "            radius: 1,",
        "            label: {",
        "                show: true,",
        "                radius: 3/4,",
        "                formatter: labelFormatter,",
        "                background: { ",
        "                    opacity: 0.5,",
        "                    color: '#000'",
        "                }",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-6").click(function() {

      placeholder.unbind();

      $("#title").text("Label Styles #2");
      $("#description").text("Semi-transparent, black-colored label background placed at pie edge.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            radius: 3/4,
            label: {
              show: true,
              radius: 3/4,
              formatter: labelFormatter,
              background: { 
                opacity: 0.5,
                color: "#000"
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true,",
        "            radius: 3/4,",
        "            label: {",
        "                show: true,",
        "                radius: 3/4,",
        "                formatter: labelFormatter,",
        "                background: {",
        "                    opacity: 0.5,",
        "                    color: '#000'",
        "                }",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-7").click(function() {

      placeholder.unbind();

      $("#title").text("Hidden Labels");
      $("#description").text("Labels can be hidden if the slice is less than a given percentage of the pie (10% in this case).");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 2/3,
              formatter: labelFormatter,
              threshold: 0.1
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true,",
        "            radius: 1,",
        "            label: {",
        "                show: true,",
        "                radius: 2/3,",
        "                formatter: labelFormatter,",
        "                threshold: 0.1",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-8").click(function() {

      placeholder.unbind();

      $("#title").text("Combined Slice");
      $("#description").text("Multiple slices less than a given percentage (5% in this case) of the pie can be combined into a single, larger slice.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            combine: {
              color: "#999",
              threshold: 0.05
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true,",
        "            combine: {",
        "                color: '#999',",
        "                threshold: 0.1",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-9").click(function() {

      placeholder.unbind();

      $("#title").text("Rectangular Pie");
      $("#description").text("The radius can also be set to a specific size (even larger than the container itself).");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            radius: 500,
            label: {
              show: true,
              formatter: labelFormatter,
              threshold: 0.1
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true,",
        "            radius: 500,",
        "            label: {",
        "                show: true,",
        "                formatter: labelFormatter,",
        "                threshold: 0.1",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});"
      ]);
    });

    $("#example-10").click(function() {

      placeholder.unbind();

      $("#title").text("Tilted Pie");
      $("#description").text("The pie can be tilted at an angle.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true,
            radius: 1,
            tilt: 0.5,
            label: {
              show: true,
              radius: 1,
              formatter: labelFormatter,
              background: {
                opacity: 0.8
              }
            },
            combine: {
              color: "#999",
              threshold: 0.1
            }
          }
        },
        legend: {
          show: false
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true,",
        "            radius: 1,",
        "            tilt: 0.5,",
        "            label: {",
        "                show: true,",
        "                radius: 1,",
        "                formatter: labelFormatter,",
        "                background: {",
        "                    opacity: 0.8",
        "                }",
        "            },",
        "            combine: {",
        "                color: '#999',",
        "                threshold: 0.1",
        "            }",
        "        }",
        "    },",
        "    legend: {",
        "        show: false",
        "    }",
        "});",
      ]);
    });

    $("#example-11").click(function() {

      placeholder.unbind();

      $("#title").text("Donut Hole");
      $("#description").text("A donut hole can be added.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            innerRadius: 0.5,
            show: true
          }
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            innerRadius: 0.5,",
        "            show: true",
        "        }",
        "    }",
        "});"
      ]);
    });

    $("#example-12").click(function() {

      placeholder.unbind();

      $("#title").text("Interactivity");
      $("#description").text("The pie can be made interactive with hover and click events.");

      $.plot(placeholder, data, {
        series: {
          pie: { 
            show: true
          }
        },
        grid: {
          hoverable: true,
          clickable: true
        }
      });

      setCode([
        "$.plot('#placeholder', data, {",
        "    series: {",
        "        pie: {",
        "            show: true",
        "        }",
        "    },",
        "    grid: {",
        "        hoverable: true,",
        "        clickable: true",
        "    }",
        "});"
      ]);

      placeholder.bind("plothover", function(event, pos, obj) {

        if (!obj) {
          return;
        }

        var percent = parseFloat(obj.series.percent).toFixed(2);
        $("#hover").html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " (" + percent + "%)</span>");
      });

      placeholder.bind("plotclick", function(event, pos, obj) {

        if (!obj) {
          return;
        }

        percent = parseFloat(obj.series.percent).toFixed(2);
        alert(""  + obj.series.label + ": " + percent + "%");
      });
    });

    // Show the initial default chart

    $("#example-1").click();

    // Add the Flot version string to the footer

    //$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

    

  };

  /*
   * Custom Label formatter
   * ----------------------
   */
  // function labelFormatter(label, series) {
  //   return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
  // }

  //

  // function setCode(lines) {
  //   $("#code").text(lines.join("\n"));
  // }


  labelFormatter(label, series) {
    return '<div className={styles.labelFormat}>'
            + this.label
            + '<br/>'
            + Math.round(this.series.percent) + '%</div>';
  }

  render() {

    return (
      <div className="content-wrapper">
        {/*<!-- Content Header (Page header) -->*/}
        <section className="content-header">
          <h1>
            Flot Charts
            <small>preview sample</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Charts</a></li>
            <li className="active">Flot</li>
          </ol>
        </section>

        {/*<!-- Main content -->*/}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              {/*<!-- interactive chart -->*/}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o"></i>
                  <h3 className="box-title">Interactive Area Chart</h3>
                  <div className="box-tools pull-right">
                    Real time
                    <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                      <button type="button" className="btn btn-default btn-xs active" data-toggle="on">On</button>
                      <button type="button" className="btn btn-default btn-xs" data-toggle="off">Off</button>
                    </div>
                  </div>
                </div>
                <div className={styles.interactive} >
                  <div id="interactive" ></div>
                </div>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/*<!-- Line chart -->*/}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o"></i>
                  <h3 className="box-title">Line Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="line-chart" className={styles.lineChart}></div>
                </div>
              </div>

              {/*<!-- Area chart -->*/}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o"></i>
                  <h3 className="box-title">Full Width Area Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="area-chart" className={styles.areaChart}></div>
                </div>
              </div>

            </div>

            <div className="col-md-6">
              {/*<!-- Bar chart -->*/}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o"></i>
                  <h3 className="box-title">Bar Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="bar-chart" className={styles.barChart} ></div>
                </div>
              </div>

              {/*<!-- Donut chart -->*/}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o"></i>
                  <h3 className="box-title">Donut Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="placeholder" className={styles.donutChart}></div>
                  <div id="menu">
                    <button id="example-1">Default Options</button>
                    <button id="example-2">Without Legend</button>
                    <button id="example-3">Label Formatter</button>
                    <button id="example-4">Label Radius</button>
                    <button id="example-5">Label Styles #1</button>
                    <button id="example-6">Label Styles #2</button>
                    <button id="example-7">Hidden Labels</button>
                    <button id="example-8">Combined Slice</button>
                    <button id="example-9">Rectangular Pie</button>
                    <button id="example-10">Tilted Pie</button>
                    <button id="example-11">Donut Hole</button>
                    <button id="example-12">Interactivity</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>     
    )
  }
}