import  { useLayoutEffect, useEffect, useState } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from 'axios';

const EmberGradeBreakdowm = () => {

  const [data, setData] = useState([])

  useEffect(() => {
  
    async function getCampaign() {
      const data = await axios.post(`/api/stats/company-formation-breakdown`);
      setData(data.data);
    }
    getCampaign();
  }, []);

  useLayoutEffect(() => {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


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
  wheelX: "none",
  wheelY: "none",
  layout: root.verticalLayout
}));

// Populate data
for (var i = 0; i < (data.length - 1); i++) {
  // @ts-ignore
  data[i].valueNext = data[i + 1].value;
}


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "year",
  renderer: am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.1,
    cellEndLocation: 0.9,
    minGridDistance: 30,
    
  }),
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  renderer: am5xy.AxisRendererY.new(root, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Column series
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  categoryXField: "year"
}));

series.columns.template.setAll({
  tooltipText: "{categoryX}: {valueY}",
  width: am5.percent(90),
  tooltipY: 0
});

series.data.setAll(data);

// Variance indicator series
var series2 = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "valueNext",
  openValueYField: "value",
  categoryXField: "year",
  fill: am5.color(0x555555),
  stroke: am5.color(0x555555)
}));

series2.columns.template.setAll({
  width: 1
});

series2.data.setAll(data);

series2.bullets.push(function () {
  var label = am5.Label.new(root, {
    text: "{valueY}",
    fontWeight: "500",
    fill: am5.color(0x00cc00),
    centerY: am5.p100,
    centerX: am5.p50,
    populateText: true
  });
  
  // Modify text of the bullet with percent
  label.adapters.add("text", function(text, target) {
    // @ts-ignore
    var percent = getVariancePercent(target.dataItem);
    return percent ? percent + "%" : text;
  });
  
  // Set dynamic color of the bullet
  label.adapters.add("centerY", function(center, target) {
    // @ts-ignore
    return getVariancePercent(target.dataItem) < 0 ? 0 : center;
  });
  
  // Set dynamic color of the bullet
  label.adapters.add("fill", function(fill, target) {
    // @ts-ignore
    return getVariancePercent(target.dataItem) < 0 ? am5.color(0xcc0000) : fill;
  });
  
  return am5.Bullet.new(root, {
    locationY: 1,
    sprite: label
  });
});

series2.bullets.push(function() {
  var arrow = am5.Graphics.new(root, {
    rotation: -90,
    centerX: am5.p50,
    centerY: am5.p50,
    dy: 3,
    fill: am5.color(0x555555),
    stroke: am5.color(0x555555),
    draw: function (display) {
      display.moveTo(0, -3);
      display.lineTo(8, 0);
      display.lineTo(0, 3);
      display.lineTo(0, -3);
    }
  });
  
  arrow.adapters.add("rotation", function(rotation, target) {
    // @ts-ignore
    return getVariancePercent(target.dataItem) < 0 ? 90 : rotation;
  });
  
  arrow.adapters.add("dy", function(dy, target) {
    // @ts-ignore
    return getVariancePercent(target.dataItem) < 0 ? -3 : dy;
  });
  
  return am5.Bullet.new(root, {
    locationY: 1,
    sprite: arrow
  })
})


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear();
chart.appear(1000, 100);


function getVariancePercent(dataItem: any) {
  if (dataItem) {
    var value = dataItem.get("valueY");
    var openValue = dataItem.get("openValueY");
    var change = value - openValue;
    return Math.round(change / openValue * 100);
  }
  return 0;
}

     
     
         return () => {
           root.dispose();
         };
       }, [data]);

  return  <div id={"chartdiv"} style={{ width: "100%", height: "70vh", marginTop: 50 }}></div>
}

export default EmberGradeBreakdowm;