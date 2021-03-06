import { useState, useLayoutEffect, useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from 'axios';
import { Ouroboro } from 'react-spinners-css';

const BarChart = ({ idName, campaign }: any) => {

  const [data, setData] = useState(null)


  useEffect(() => {
    if (campaign) {
      // @ts-ignore
      async function getCampaign() {
        const data = await axios.post(`/api/stats/company-location`, {
          campaign_id: campaign
        });

        setData(data.data);
      }
      getCampaign();
    }
  }, [campaign]);


  useLayoutEffect(() => {
    if (data) {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new(idName);


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
        wheelY: "none"
      }));

      // We don't want zoom-out button to appear while animating, so we hide it
      chart.zoomOutButton.set("forceHidden", true);


      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var yRenderer = am5xy.AxisRendererY.new(root, {
        minGridDistance: 30
      });

      var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "network",
        renderer: yRenderer,
        tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] })
      }));

      var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        extraMax: 0.1,
        renderer: am5xy.AxisRendererX.new(root, {})
      }));


      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "network",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "left",
          labelText: "{valueX}"
        })
      }));


      // Rounded corners for columns
      series.columns.template.setAll({
        cornerRadiusTR: 5,
        cornerRadiusBR: 5
      });

      // Make each column to be of a different color
      series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });


      yAxis.data.setAll(data);
      series.data.setAll(data);
      sortCategoryAxis();

      // Get series item by category
      function getSeriesItem(category) {
        for (var i = 0; i < series.dataItems.length; i++) {
          var dataItem = series.dataItems[i];
          if (dataItem.get("categoryY") == category) {
            return dataItem;
          }
        }
      }

      chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
        yAxis: yAxis
      }));


      // Axis sorting
      function sortCategoryAxis() {

        // Sort by value
        series.dataItems.sort(function (x, y) {
          return x.get("valueX") - y.get("valueX"); // descending
          //return y.get("valueY") - x.get("valueX"); // ascending
        })

        // Go through each axis item
        am5.array.each(yAxis.dataItems, function (dataItem) {
          // get corresponding series item
          var seriesDataItem = getSeriesItem(dataItem.get("category"));

          if (seriesDataItem) {
            // get index of series data item
            var index = series.dataItems.indexOf(seriesDataItem);
            // calculate delta position
            var deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
            // set index to be the same as series data item index
            dataItem.set("index", index);
            // set deltaPosition instanlty
            dataItem.set("deltaPosition", -deltaPosition);
            // animate delta position to 0
            dataItem.animate({
              key: "deltaPosition",
              to: 0,
              duration: 1000,
              easing: am5.ease.out(am5.ease.cubic)
            })
          }
        });

        // Sort axis items by index.
        // This changes the order instantly, but as deltaPosition is set,
        // they keep in the same places and then animate to true positions.
        yAxis.dataItems.sort(function (x, y) {
          return x.get("index") - y.get("index");
        });
      }


      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);

      return () => {
        root.dispose();
      };
    }
  }, [data]);

  if (!data) {
    return <div style={{ width: "100%", height: "60vh" }} className='flex items-center justify-center'><Ouroboro color='#F96277' /></div>
  }

  return (
    <div className='flex w-full space-y-4 flex-col items-start'>
      <div id={idName} style={{ width: "100%", height: "60vh" }}></div>
    </div>)
}

export default BarChart