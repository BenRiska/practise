import  { useState, useLayoutEffect, useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from 'axios';

const BarChart = () => {

  const [data, setData] = useState([])

  
  useEffect(() => {
    async function getCampaign() {
      const data = await axios.post(`/api/status`);
      console.log(data.data)
      setData(data.data);
    }
    getCampaign();
  }, []);
  

  useLayoutEffect(() => {

   // Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");
root.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX", "openValueX"]
});


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}))

let chartData = data?.map((item: any) => ({...item, columnSettings: {fill: am5.Color.fromCSS("rgb(249, 98, 119)")}}))

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yAxis = chart.yAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "category",
    renderer: am5xy.AxisRendererY.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  })
);

yAxis.data.setAll([
  { category: "Stannp" },
  { category: "Dux Soup" },
  { category: "Companies House" },
  { category: "Lemlist" },
  { category: "Phantom Buster" }
]);

var xAxis = chart.xAxes.push(
  am5xy.DateAxis.new(root, {
    baseInterval: { timeUnit: "minute", count: 1 },
    renderer: am5xy.AxisRendererX.new(root, {})
  })
);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  openValueXField: "start",
  valueXField: "end",
  categoryYField: "category",
  sequencedInterpolation: true
}));

series.columns.template.setAll({
  templateField: "columnSettings",
  strokeOpacity: 0,
  tooltipText: "{task}:\n[bold]{openValueX}[/] - [bold]{valueX}[/]"
});

series.data.setAll(chartData);

// Add scrollbars
chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));


    return () => {
      root.dispose();
    };
  }, [data]);

  return (
  <div className='flex w-full space-y-4 flex-col items-start'>
    <div id={"chartdiv"} style={{ width: "100%", height: "70vh" }}></div>
  </div>)
}

export default BarChart