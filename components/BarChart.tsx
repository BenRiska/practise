import  { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const BarChart = ({idName}: any) => {

  useLayoutEffect(() => {
    
    let root = am5.Root.new(idName);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push( 
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      }) 
    );

    // Define data
    let data = [{
      category: "16+",
      value1: 60
    }, {
      category: "20+",
      value1: 240
    }, {
      category: "30+",
      value1: 250
    }, {
      category: "40+",
      value1: 145
    }, {
      category: "50+",
      value1: 102
    }, {
      category: "60+",
      value1: 25
    }, {
      category: "70+",
      value1: 3
    }];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Age",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category"
      })
    );
    series1.data.setAll(data);


    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
  <div className='flex w-full space-y-4 flex-col items-start'>
    <div id={idName} style={{ width: "100%", height: "300px" }}></div>
  </div>)
}

export default BarChart