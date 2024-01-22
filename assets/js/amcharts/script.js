am5.ready(function() {
    if (document.getElementById("chartdiv")) {
        var root = am5.Root.new("chartdiv");
        
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        
        // First Chart
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true
        }));
        
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);
        
        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });
        
        xRenderer.grid.template.setAll({
            location: 1
        });
        
        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "country",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));
        
        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));
        
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "country",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));
        
        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function(fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        series.columns.template.adapters.add("stroke", function(stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        // Set data for the first chart
        var data = [
            { country: "USA", value: 2025 },
            { country: "China", value: 1882 },
            { country: "Japan", value: 1809 }, 
            { country: "Germany", value: 1322 },
            { country: "UK", value: 1122 },
            { country: "France", value: 1114 },
            { country: "India", value: 984 },
            { country: "Spain", value: 711 },
            { country: "Netherlands", value: 665 }, 
            { country: "Russia", value: 580 },
            { country: "Canada", value: 441 }
        ];
        
        xAxis.data.setAll(data);
        series.data.setAll(data);
        
        series.appear(1000);
        chart.appear(1000, 100);
    }
    
    // Chart 2
    if (document.getElementById("chartdiv2")) {
        var root2 = am5.Root.new("chartdiv2");
        
        // Set themes for the second chart
        root2.setThemes([
            am5themes_Animated.new(root2)
        ]);
        
        // Create the second chart
        var chart2 = root2.container.children.push(am5xy.XYChart.new(root2, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true
        }));
        
        var cursor2 = chart2.set("cursor", am5xy.XYCursor.new(root2, {}));
        cursor2.lineX.set("forceHidden", true);
        cursor2.lineY.set("forceHidden", true);
        
        // Generate random data for the second chart
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        
        var value = 20;
        function generateData() {
            value = am5.math.round(Math.random() * 10 - 4.8 + value, 1);
            if (value < 0) {
                value = Math.random() * 10;
            }
        
            if (value > 100) {
                value = 100 - Math.random() * 10;
            }
            am5.time.add(date, "day", 1);
            return {
                date: date.getTime(),
                value: value
            };
        }
        
        function generateDatas(count) {
            var data = [];
            for (var i = 0; i < count; ++i) {
                data.push(generateData());
            }
            return data;
        }
        
        // Create axes for the second chart
        var xAxis2 = chart2.xAxes.push(am5xy.DateAxis.new(root2, {
            baseInterval: {
                timeUnit: "day",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root2, {})
        }));
        
        var yAxis2 = chart2.yAxes.push(am5xy.ValueAxis.new(root2, {
            renderer: am5xy.AxisRendererY.new(root2, {})
        }));
        
        // Add series for the second chart
        var series2 = chart2.series.push(am5xy.LineSeries.new(root2, {
            name: "Series",
            xAxis: xAxis2,
            yAxis: yAxis2,
            valueYField: "value",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root2, {
                labelText: "{valueY}"
            })
        }));
        
        series2.fills.template.setAll({
            fillOpacity: 0.2,
            visible: true
        });
        
        // Set data for the second chart
        var data2 = generateDatas(300);
        series2.data.setAll(data2);
        
        var rangeDate = new Date();
        am5.time.add(rangeDate, "day", Math.round(series2.dataItems.length / 2));
        var rangeTime = rangeDate.getTime();
        
        // Add series range for the second chart
        var seriesRangeDataItem = yAxis2.makeDataItem({ value: 40, endValue: 0 });
        var seriesRange = series2.createAxisRange(seriesRangeDataItem);
        seriesRange.fills.template.setAll({
            visible: true,
            opacity: 0.3
        });
        
        seriesRange.fills.template.set("fill", am5.color(0x000000));
        seriesRange.strokes.template.set("stroke", am5.color(0x000000));
        
        seriesRangeDataItem.get("grid").setAll({
            strokeOpacity: 1,
            visible: true,
            stroke: am5.color(0x000000),
            strokeDasharray: [2, 2]
        });
        
        seriesRangeDataItem.get("label").setAll({
            location:0,
            visible:true,
            text:"Target",
            inside:true,
            centerX:0,
            centerY:am5.p100,
            fontWeight:"bold"
        });
        
        series2.appear(1000);
        chart2.appear(1000, 100);
    }

    // Chart 3
    if (document.getElementById("chartdiv3")) {
        var root3 = am5.Root.new("chartdiv3");
        
        // Set themes for the third chart
        root3.setThemes([
            am5themes_Animated.new(root3)
        ]);
        
        // Third Chart
        var chart3 = root3.container.children.push(
            am5percent.PieChart.new(root3, {
                endAngle: 270
            })
        );
        
        // Create series for the third chart
        var series3 = chart3.series.push(
            am5percent.PieSeries.new(root3, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );
        
        series3.states.create("hidden", {
            endAngle: -90
        });

        var data3 = [
            { category: "Lithuania", value: 501.9 },
            { category: "Czechia", value: 301.9 },
            { category: "Ireland", value: 201.1 },
            { category: "Germany", value: 165.8 },
            { category: "Australia", value: 139.9 },
            { category: "Austria", value: 128.3 },
            { category: "UK", value: 99 }
        ];
        
        series3.data.setAll(data3);
        series3.appear(1000, 100);
    }

    // Chart 4
    if (document.getElementById("chartdiv4")) {
        var root4 = am5.Root.new("chartdiv4");

        root4.setThemes([
            am5themes_Animated.new(root4)
        ]);

        // Create a new chart (chart4)
        var chart4 = root4.container.children.push(
            am5xy.XYChart.new(root4, {
                focusable: true,
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX"
            })
        );

        // Create axes for chart4
        var xAxis4 = chart4.xAxes.push(
            am5xy.DateAxis.new(root4, {
                groupData: true,
                maxDeviation: 0.5,
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: am5xy.AxisRendererX.new(root4, { pan: "zoom" }),
                tooltip: am5.Tooltip.new(root4, {})
            })
        );

        var yAxis4 = chart4.yAxes.push(
            am5xy.ValueAxis.new(root4, {
                maxDeviation: 1,
                renderer: am5xy.AxisRendererY.new(root4, { pan: "zoom" })
            })
        );

        var color4 = root4.interfaceColors.get("background");

        // Add series for chart4
        var series4 = chart4.series.push(
            am5xy.CandlestickSeries.new(root4, {
                fill: color4,
                calculateAggregates: true,
                stroke: color4,
                name: "MDXI",
                xAxis: xAxis4,
                yAxis: yAxis4,
                valueYField: "value",
                openValueYField: "open",
                lowValueYField: "low",
                highValueYField: "high",
                valueXField: "date",
                lowValueYGrouped: "low",
                highValueYGrouped: "high",
                openValueYGrouped: "open",
                valueYGrouped: "close",
                legendValueText:
                    "open: {openValueY} low: {lowValueY} high: {highValueY} close: {valueY}",
                legendRangeValueText: "{valueYClose}",
                tooltip: am5.Tooltip.new(root4, {
                    pointerOrientation: "horizontal",
                    labelText: "open: {openValueY}\nlow: {lowValueY}\nhigh: {highValueY}\nclose: {valueY}"
                })
            })
        );

        // Add cursor for chart4
        var cursor4 = chart4.set(
            "cursor",
            am5xy.XYCursor.new(root4, {
                xAxis: xAxis4
            })
        );
        cursor4.lineY.set("visible", false);

        // Stack axes vertically for chart4
        chart4.leftAxesContainer.set("layout", root4.verticalLayout);

        // Add scrollbar for chart4
        var scrollbar4 = am5xy.XYChartScrollbar.new(root4, {
            orientation: "horizontal",
            height: 50
        });
        chart4.set("scrollbarX", scrollbar4);

        var sbxAxis4 = scrollbar4.chart.xAxes.push(
            am5xy.DateAxis.new(root4, {
                groupData: true,
                groupIntervals: [{ timeUnit: "week", count: 1 }],
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: am5xy.AxisRendererX.new(root4, {
                    opposite: false,
                    strokeOpacity: 0
                })
            })
        );

        var sbyAxis4 = scrollbar4.chart.yAxes.push(
            am5xy.ValueAxis.new(root4, {
                renderer: am5xy.AxisRendererY.new(root4, {})
            })
        );

        var sbseries4 = scrollbar4.chart.series.push(
            am5xy.LineSeries.new(root4, {
                xAxis: sbxAxis4,
                yAxis: sbyAxis4,
                valueYField: "value",
                valueXField: "date"
            })
        );

        // Function to generate chart data
        function generateChartData() {
            var chartData = [];
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 1000);
            firstDate.setHours(0, 0, 0, 0);
            var value = 1200;
            for (var i = 0; i < 5000; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                var open = value + Math.round(Math.random() * 16 - 8);
                var low = Math.min(value, open) - Math.round(Math.random() * 5);
                var high = Math.max(value, open) + Math.round(Math.random() * 5);

                chartData.push({
                    date: newDate.getTime(),
                    value: value,
                    open: open,
                    low: low,
                    high: high
                });
            }
            return chartData;
        }

        // Add legend for chart4
        var legend4 = yAxis4.axisHeader.children.push(am5.Legend.new(root4, {}));

        legend4.data.push(series4);

        legend4.markers.template.setAll({
            width: 10
        });

        legend4.markerRectangles.template.setAll({
            cornerRadiusTR: 0,
            cornerRadiusBR: 0,
            cornerRadiusTL: 0,
            cornerRadiusBL: 0
        });

        // Set data and make chart4 elements appear
        var data4 = generateChartData();
        series4.data.setAll(data4);
        sbseries4.data.setAll(data4);
        series4.appear(1000);
        chart4.appear(1000, 100);
    };

    // Chart 5
    if (document.getElementById("chartdiv5")) {
        var root5 = am5.Root.new("chartdiv5");

        // Set themes for the fifth chart
        root5.setThemes([
            am5themes_Animated.new(root5)
        ]);

        // Create the fifth chart
        var chart5 = root5.container.children.push(
            am5radar.RadarChart.new(root5, {
                panX: false,
                panY: false,
                startAngle: 160,
                endAngle: 380
            })
        );

        // Create axis and its renderer
        var axisRenderer5 = am5radar.AxisRendererCircular.new(root5, {
            innerRadius: -40
        });

        axisRenderer5.grid.template.setAll({
            stroke: root5.interfaceColors.get("background"),
            visible: true,
            strokeOpacity: 0.8
        });

        var xAxis5 = chart5.xAxes.push(am5xy.ValueAxis.new(root5, {
            maxDeviation: 0,
            min: -40,
            max: 100,
            strictMinMax: true,
            renderer: axisRenderer5
        }));

        // Add clock hand
        var axisDataItem5 = xAxis5.makeDataItem({});

        var clockHand5 = am5radar.ClockHand.new(root5, {
            pinRadius: am5.percent(20),
            radius: am5.percent(100),
            bottomWidth: 40
        });

        var bullet5 = axisDataItem5.set("bullet", am5xy.AxisBullet.new(root5, {
            sprite: clockHand5
        }));

        xAxis5.createAxisRange(axisDataItem5);

        var label5 = chart5.radarContainer.children.push(am5.Label.new(root5, {
            fill: am5.color(0xffffff),
            centerX: am5.percent(50),
            textAlign: "center",
            centerY: am5.percent(50),
            fontSize: "3em"
        }));

        axisDataItem5.set("value", 50);
        bullet5.get("sprite").on("rotation", function () {
            var value = axisDataItem5.get("value");
            var text = Math.round(axisDataItem5.get("value")).toString();
            var fill = am5.color(0x000000);
            xAxis5.axisRanges.each(function (axisRange) {
                if (value >= axisRange.get("value") && value <= axisRange.get("endValue")) {
                    fill = axisRange.get("axisFill").get("fill");
                }
            })

            label5.set("text", Math.round(value).toString());

            clockHand5.pin.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) });
            clockHand5.hand.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) });
        });

        setInterval(function () {
            axisDataItem5.animate({
                key: "value",
                to: Math.round(Math.random() * 140 - 40),
                duration: 500,
                easing: am5.ease.out(am5.ease.cubic)
            });
        }, 2000);

        chart5.bulletsContainer.set("mask", undefined);

        // Create axis ranges bands
        var bandsData5 = [{
            title: "Unsustainable",
            color: "#ee1f25",
            lowScore: -40,
            highScore: -20
        }, {
            title: "Volatile",
            color: "#f04922",
            lowScore: -20,
            highScore: 0
        }, {
            title: "Foundational",
            color: "#fdae19",
            lowScore: 0,
            highScore: 20
        }, {
            title: "Developing",
            color: "#f3eb0c",
            lowScore: 20,
            highScore: 40
        }, {
            title: "Maturing",
            color: "#b0d136",
            lowScore: 40,
            highScore: 60
        }, {
            title: "Sustainable",
            color: "#54b947",
            lowScore: 60,
            highScore: 80
        }, {
            title: "High Performing",
            color: "#0f9747",
            lowScore: 80,
            highScore: 100
        }];

        am5.array.each(bandsData5, function (data) {
            var axisRange5 = xAxis5.createAxisRange(xAxis5.makeDataItem({}));

            axisRange5.setAll({
                value: data.lowScore,
                endValue: data.highScore
            });

            axisRange5.get("axisFill").setAll({
                visible: true,
                fill: am5.color(data.color),
                fillOpacity: 0.8
            });

            axisRange5.get("label").setAll({
                text: data.title,
                inside: true,
                radius: 15,
                fontSize: "0.9em",
                fill: root5.interfaceColors.get("background")
            });
        });

        // Make stuff animate on load
        chart5.appear(1000, 100);
    }

    // Chart 6
    if (document.getElementById("chartdiv6")) {

        // Create root element
        var root6 = am5.Root.new("chartdiv6");

        // Set themes
        root6.setThemes([
        am5themes_Animated.new(root6)
        ]);

        // Generate and set data
        var cat = -1;
        var value = 10;

        function generateData6() {
        value = Math.round(Math.random() * 10);
        cat++;
        return {
            category: "cat" + cat,
            value: value
        };
        }

        function generateDatas6(count) {
        cat = -1;
        var data = [];
        for (var i = 0; i < count; ++i) {
            data.push(generateData6());
        }
        return data;
        }

        // Create chart
        var chart6 = root6.container.children.push(am5radar.RadarChart.new(root6, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX"
        }));

        // Add cursor
        var cursor6 = chart6.set("cursor", am5radar.RadarCursor.new(root6, {
        behavior: "zoomX"
        }));

        cursor6.lineY.set("visible", false);

        // Create axes and their renderers
        var xRenderer6 = am5radar.AxisRendererCircular.new(root6, {});
        xRenderer6.labels.template.setAll({
        radius: 10
        });

        var xAxis6 = chart6.xAxes.push(am5xy.CategoryAxis.new(root6, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer6,
        tooltip: am5.Tooltip.new(root6, {})
        }));

        var yAxis6 = chart6.yAxes.push(am5xy.ValueAxis.new(root6, {
        renderer: am5radar.AxisRendererRadial.new(root6, {})
        }));

        // Create series
        for (var i = 0; i < 5; i++) {
        var series6 = chart6.series.push(am5radar.RadarColumnSeries.new(root6, {
            stacked: true,
            name: "Series " + i,
            xAxis: xAxis6,
            yAxis: yAxis6,
            valueYField: "value",
            categoryXField: "category"
        }));

        series6.set("stroke", root6.interfaceColors.get("background"));
        series6.columns.template.setAll({
            width: am5.p100,
            strokeOpacity: 0.1,
            tooltipText: "{name}: {valueY}"
        });

        series6.data.setAll(generateDatas6(12));
        series6.appear(1000);
        }

        // Add scrollbars
        chart6.set("scrollbarX", am5.Scrollbar.new(root6, { orientation: "horizontal", exportable: false }));
        chart6.set("scrollbarY", am5.Scrollbar.new(root6, { orientation: "vertical", exportable: false }));

        var data6 = generateDatas6(12);
        xAxis6.data.setAll(data6);

        // Animate chart
        chart6.appear(1000, 100);
    }

});