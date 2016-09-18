import React from 'react';
import { render } from 'react-dom';

export default class Chartjs extends React.Component {
  getInitialState() {
    return {
      infoTileOptions: [],
    }
  };

  componentDidMount() {
    /* ChartJS
         * -------
         * Here we will create a few charts using ChartJS
         */

        //--------------
        //- AREA CHART -
        //--------------

        // Get context with jQuery - using jQuery's .get() method.
        var areaChartCanvas = $("#areaChart").get(0).getContext("2d");

        var areaChartData = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Electronics",
              fillColor: "rgba(210, 214, 222, 1)",
              strokeColor: "rgba(210, 214, 222, 1)",
              pointColor: "rgba(210, 214, 222, 1)",
              pointStrokeColor: "#c1c7d1",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: "Digital Goods",
              fillColor: "rgba(60,141,188,0.9)",
              strokeColor: "rgba(60,141,188,0.8)",
              pointColor: "#3b8bba",
              pointStrokeColor: "rgba(60,141,188,1)",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(60,141,188,1)",
              data: [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        };

        // var areaChartData = {
        //     datasets: [{
        //         data: [
        //             11,
        //             16,
        //             7,
        //             3,
        //             14
        //         ],
        //         backgroundColor: [
        //             "#FF6384",
        //             "#4BC0C0",
        //             "#FFCE56",
        //             "#E7E9ED",
        //             "#36A2EB"
        //         ],
        //         label: 'My dataset' // for legend
        //     }],
        //     labels: [
        //         "Red",
        //         "Green",
        //         "Yellow",
        //         "Grey",
        //         "Blue"
        //     ]
        // };

        var areaChartOptions = {
          //Boolean - If we should show the scale at all
          showScale: true,
          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines: false,
          //String - Colour of the grid lines
          scaleGridLineColor: "rgba(0,0,0,.05)",
          //Number - Width of the grid lines
          scaleGridLineWidth: 1,
          //Boolean - Whether to show horizontal lines (except X axis)
          scaleShowHorizontalLines: true,
          //Boolean - Whether to show vertical lines (except Y axis)
          scaleShowVerticalLines: true,
          //Boolean - Whether the line is curved between points
          bezierCurve: true,
          //Number - Tension of the bezier curve between points
          bezierCurveTension: 0.3,
          //Boolean - Whether to show a dot for each point
          pointDot: false,
          //Number - Radius of each point dot in pixels
          pointDotRadius: 4,
          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth: 1,
          //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
          pointHitDetectionRadius: 20,
          //Boolean - Whether to show a stroke for datasets
          datasetStroke: true,
          //Number - Pixel width of dataset stroke
          datasetStrokeWidth: 2,
          //Boolean - Whether to fill the dataset with a color
          datasetFill: true,
          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
          //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
          maintainAspectRatio: true,
          //Boolean - whether to make the chart responsive to window resizing
          responsive: true
        };

        new Chart(areaChartCanvas, {
            data: areaChartData,
            type: "polarArea",
            options: areaChartOptions
        });

        //Create the line chart
        //areaChart.Line(areaChartData, areaChartOptions);

        //-------------
        //- LINE CHART -
        //--------------
        var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
        var lineChartOptions = areaChartOptions;
        var lineChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        };
        var myLineChart = Chart.Line(lineChartCanvas, {
            data: lineChartData,
            options: lineChartOptions
        });
        //-------------
        //- PIE CHART -
        //-------------
        // Get context with jQuery - using jQuery's .get() method.
        var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
        // var pieChart = new Chart(pieChartCanvas);
        // var PieData = [
        //   {
        //     value: 700,
        //     color: "#f56954",
        //     highlight: "#f56954",
        //     label: "Chrome"
        //   },
        //   {
        //     value: 500,
        //     color: "#00a65a",
        //     highlight: "#00a65a",
        //     label: "IE"
        //   },
        //   {
        //     value: 400,
        //     color: "#f39c12",
        //     highlight: "#f39c12",
        //     label: "FireFox"
        //   },
        //   {
        //     value: 600,
        //     color: "#00c0ef",
        //     highlight: "#00c0ef",
        //     label: "Safari"
        //   },
        //   {
        //     value: 300,
        //     color: "#3c8dbc",
        //     highlight: "#3c8dbc",
        //     label: "Opera"
        //   },
        //   {
        //     value: 100,
        //     color: "#d2d6de",
        //     highlight: "#d2d6de",
        //     label: "Navigator"
        //   }
        // ];

        var PieData = {
            labels: [
                "Red",
                "Blue",
                "Yellow"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
        var pieOptions = {
          //Boolean - Whether we should show a stroke on each segment
          segmentShowStroke: true,
          //String - The colour of each segment stroke
          segmentStrokeColor: "#fff",
          //Number - The width of each segment stroke
          segmentStrokeWidth: 2,
          //Number - The percentage of the chart that we cut out of the middle
          percentageInnerCutout: 50, // This is 0 for Pie charts
          //Number - Amount of animation steps
          animationSteps: 100,
          //String - Animation easing effect
          animationEasing: "easeOutBounce",
          //Boolean - Whether we animate the rotation of the Doughnut
          animateRotate: true,
          //Boolean - Whether we animate scaling the Doughnut from the centre
          animateScale: false,
          //Boolean - whether to make the chart responsive to window resizing
          responsive: true,
          // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
          maintainAspectRatio: true,
          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        };
        // For a pie chart
        var myPieChart = new Chart(pieChartCanvas,{
            type: 'pie',
            data: PieData,
            options: pieOptions
        });
        // And for a doughnut chart
        var myDoughnutChart = new Chart(pieChartCanvas, {
            type: 'doughnut',
            data: PieData,
            options: pieOptions
        });


        //-------------
        //- BAR CHART -
        //-------------
        var barChartCanvas = $("#barChart").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas);
        var barChartData = areaChartData;
        barChartData.datasets[1].fillColor = "#00a65a";
        barChartData.datasets[1].strokeColor = "#00a65a";
        barChartData.datasets[1].pointColor = "#00a65a";
        var barChartOptions = {
          //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
          scaleBeginAtZero: true,
          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines: true,
          //String - Colour of the grid lines
          scaleGridLineColor: "rgba(0,0,0,.05)",
          //Number - Width of the grid lines
          scaleGridLineWidth: 1,
          //Boolean - Whether to show horizontal lines (except X axis)
          scaleShowHorizontalLines: true,
          //Boolean - Whether to show vertical lines (except Y axis)
          scaleShowVerticalLines: true,
          //Boolean - If there is a stroke on each bar
          barShowStroke: true,
          //Number - Pixel width of the bar stroke
          barStrokeWidth: 2,
          //Number - Spacing between each of the X value sets
          barValueSpacing: 5,
          //Number - Spacing between data sets within X values
          barDatasetSpacing: 1,
          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
          //Boolean - whether to make the chart responsive
          responsive: true,
          maintainAspectRatio: true
        };

        barChartOptions.datasetFill = false;
        var myBarChart = Chart.Bar(barChartCanvas, {
            data: barChartData,
            options: barChartOptions
        });
        //barChart.Bar(barChartData, barChartOptions);
  };

  render() {

    return (
                        
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            ChartJS
            <small>Preview sample</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Charts</a></li>
            <li className="active">ChartJS</li>
          </ol>
        </section>

        {/*<!-- Main content -->*/}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              {/*<!-- AREA CHART -->*/}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Area Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div className="chart">
                    <canvas id="areaChart"></canvas>
                  </div>
                </div>
              </div>

              {/*<!-- DONUT CHART -->*/}
              <div className="box box-danger">
                <div className="box-header with-border">
                  <h3 className="box-title">Donut Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                    <canvas id="pieChart"></canvas>
                </div>
              </div>

            </div>
            <div className="col-md-6">
              {/*<!-- LINE CHART -->*/}
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Line Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div className="chart">
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>

              {/*<!-- BAR CHART -->*/}
              <div className="box box-success">
                <div className="box-header with-border">
                  <h3 className="box-title">Bar Chart</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <div className="chart">
                    <canvas id="barChart"></canvas>
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