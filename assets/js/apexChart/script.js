// Bar Chart
function d2c_barChart() {
    var options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        series: [{
            name: 'Income',
            data: [80, 85, 105, 100, 92, 80, 120, 102, 98, 45, 92, 82],
        }, ],
        colors: ['#6F6AF8'],
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            lines: true
        },
        xaxis: {
            categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        plotOptions: {
            bar: {
                borderRadius: 20
            }
        }
    }

    var chart = new ApexCharts(document.querySelector("#bar-Chart"), options);
    chart.render();
}
d2c_barChart();

// Line Chart
function d2c_lineChart() {
    var options = {
        series: [{
            data: [28, 29, 33, 36, 32, 32, 33]
        }],
        chart: {
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#16DB65'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#F3F3F3',
        },
        markers: {
            size: 5,
        },
        xaxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        },
        legend: {
            show: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#line-Chart"), options);
    chart.render();
}
d2c_lineChart();

// Area Chart
function d2c_areaChart() {
    var options = {
        series: [{
                name: 'South',
                data: [30, 80, 82, 56, 58, 130, 80, 90, 64, 27, 94, 100],
            },
            {
                name: 'North',
                data: [100, 20, 45, 15, 60, 5, 85, 95, 5, 34, 80, 105],
            }
        ],
        chart: {
            type: 'area',
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        colors: ['rgba(111, 106, 248, 0.6)', 'rgba(111, 106, 248, 0.8)'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 1,
            }
        },
        legend: {
            show: false
        },
        xaxis: {
            type: 'Month',
            categories: ["Jan", "Feb", "Marc", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
    };

    var chart = new ApexCharts(document.querySelector("#area-Chart"), options);
    chart.render();
}
d2c_areaChart();

// Scatter Chart
function d2c_scatterChart() {
    var options = {
        series: [{
            name: "SAMPLE A",
            data: [
                [16.4, 5.4],
                [21.7, 2],
                [25.4, 3],
                [19, 2],
                [10.9, 1],
                [13.6, 3.2],
                [10.9, 7.4],
                [10.9, 0],
                [10.9, 8.2],
                [16.4, 0],
                [16.4, 1.8],
                [13.6, 0.3],
                [13.6, 0],
                [29.9, 0],
                [27.1, 2.3],
                [16.4, 0],
                [13.6, 3.7],
                [10.9, 5.2],
                [16.4, 6.5],
                [10.9, 0],
                [24.5, 7.1],
                [10.9, 0],
                [8.1, 4.7],
                [19, 0],
                [21.7, 1.8],
                [27.1, 0],
                [24.5, 0],
                [27.1, 0],
                [29.9, 1.5],
                [27.1, 0.8],
                [22.1, 2]
            ]
        }, {
            name: "SAMPLE B",
            data: [
                [36.4, 13.4],
                [1.7, 11],
                [5.4, 8],
                [9, 17],
                [1.9, 4],
                [3.6, 12.2],
                [1.9, 14.4],
                [1.9, 9],
                [1.9, 13.2],
                [1.4, 7],
                [6.4, 8.8],
                [3.6, 4.3],
                [1.6, 10],
                [9.9, 2],
                [7.1, 15],
                [1.4, 0],
                [3.6, 13.7],
                [1.9, 15.2],
                [6.4, 16.5],
                [0.9, 10],
                [4.5, 17.1],
                [10.9, 10],
                [0.1, 14.7],
                [9, 10],
                [12.7, 11.8],
                [2.1, 10],
                [2.5, 10],
                [27.1, 10],
                [2.9, 11.5],
                [7.1, 10.8],
                [2.1, 12]
            ]
        }, {
            name: "SAMPLE C",
            data: [
                [21.7, 3],
                [23.6, 3.5],
                [24.6, 3],
                [29.9, 3],
                [21.7, 20],
                [23, 2],
                [10.9, 3],
                [28, 4],
                [27.1, 0.3],
                [16.4, 4],
                [13.6, 0],
                [19, 5],
                [22.4, 3],
                [24.5, 3],
                [32.6, 3],
                [27.1, 4],
                [29.6, 6],
                [31.6, 8],
                [21.6, 5],
                [20.9, 4],
                [22.4, 0],
                [32.6, 10.3],
                [29.7, 20.8],
                [24.5, 0.8],
                [21.4, 0],
                [21.7, 6.9],
                [28.6, 7.7],
                [15.4, 0],
                [18.1, 0],
                [33.4, 0],
                [16.4, 0]
            ]
        }],
        chart: {
            type: 'scatter',
            toolbar: {
                show: false
            }
        },
        colors: ['#16DB65', '#FFC107', '#EF233C'],
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function (val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yaxis: {
            tickAmount: 7
        },
        legend: {
            show: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#scatter-Chart"), options);
    chart.render();
}
d2c_scatterChart();

// Doughnut Chart
function d2c_doughnutChart() {
    var options = {
        series: [80, 20],
        chart: {
            type: 'donut',
        },
        colors: ['#16DB65', '#686699'],
        dataLabels: {
            enabled: false,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
            }
        }],
        legend: {
            position: 'top',
            horizontalAlign: 'left',
        }
    };

    var chart = new ApexCharts(document.querySelector("#doughnut-Chart"), options);
    chart.render();
}
d2c_doughnutChart();

// Polar Chart
function d2c_polarChart() {
    var options = {
        series: [50, 35, 15],
        chart: {
            type: 'polarArea',
        },
        colors: ['#1C1955', '#EF233C', '#686699'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: false
        },
        fill: {
            opacity: 0.8
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#polar-Chart"), options);
    chart.render();
}
d2c_polarChart();

// Radial Chart
function d2c_radialChart() {
    var options = {
        series: [44, 55, 67, 83],
        chart: {
            type: 'radialBar',
        },
        colors: ['#6F6AF8', '#1C1955', '#FFC107', '#16DB65'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: false,
                        label: 'Total',
                        formatter: function (w) {
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    var chart = new ApexCharts(document.querySelector("#radial-Chart"), options);
    chart.render();
}
d2c_radialChart();

// Doughnut Chart 2
function d2c_doughnutChart_2() {
    var options = {
        series: [15, 25, 35, 25],
        chart: {
            type: 'donut',
        },
        colors: ['#6F6AF8', '#16DB65', '#EF233C', '#FFC107'],
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#doughnut-Chart-2"), options);
    chart.render();
}
d2c_doughnutChart_2();