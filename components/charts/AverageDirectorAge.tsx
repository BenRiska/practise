import { useLayoutEffect, useEffect, useState } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from 'axios';
import { Ouroboro } from 'react-spinners-css';

const MostPoppingSICCodes = () => {

  const [data, setData] = useState(null)

  useEffect(() => {

    async function getCampaign() {
      const data = await axios.post(`/api/stats/average-director-age`);
      setData(data.data);
    }
    getCampaign();
  }, []);

  useLayoutEffect(() => {

    if (data) {
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      var container = root.container.children.push(
        am5.Container.new(root, {
          width: am5.p100,
          height: am5.p100,
          layout: root.horizontalLayout
        })
      );

      // Create main chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = container.children.push(
        am5percent.PieChart.new(root, {
          tooltip: am5.Tooltip.new(root, {})
        })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          alignLabels: false
        })
      );

      series.labels.template.setAll({
        textType: "circular",
        radius: 4
      });
      series.ticks.template.set("visible", false);
      series.slices.template.set("toggleKey", "none");

      // add events
      series.slices.template.events.on("click", function (e) {
        selectSlice(e.target);
      });

      // Create sub chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var subChart = container.children.push(
        am5percent.PieChart.new(root, {
          radius: am5.percent(50),
          tooltip: am5.Tooltip.new(root, {})
        })
      );

      // Create sub series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var subSeries = subChart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category"
        })
      );

      subSeries.data.setAll([
        { category: "A", value: 0 },
        { category: "B", value: 0 },
        { category: "C", value: 0 }
      ]);
      subSeries.slices.template.set("toggleKey", "none");

      var selectedSlice;

      series.on("startAngle", function () {
        updateLines();
      });

      container.events.on("boundschanged", function () {
        root.events.on("frameended", function () {
          updateLines();
        })
      })

      function updateLines() {
        if (selectedSlice) {
          var startAngle = selectedSlice.get("startAngle");
          var arc = selectedSlice.get("arc");
          var radius = selectedSlice.get("radius");

          var x00 = radius * am5.math.cos(startAngle);
          var y00 = radius * am5.math.sin(startAngle);

          var x10 = radius * am5.math.cos(startAngle + arc);
          var y10 = radius * am5.math.sin(startAngle + arc);

          var subRadius = subSeries.slices.getIndex(0).get("radius");
          var x01 = 0;
          var y01 = -subRadius;

          var x11 = 0;
          var y11 = subRadius;

          var point00 = series.toGlobal({ x: x00, y: y00 });
          var point10 = series.toGlobal({ x: x10, y: y10 });

          var point01 = subSeries.toGlobal({ x: x01, y: y01 });
          var point11 = subSeries.toGlobal({ x: x11, y: y11 });

          line0.set("points", [point00, point01]);
          line1.set("points", [point10, point11]);
        }
      }

      // lines
      var line0 = container.children.push(
        am5.Line.new(root, {
          position: "absolute",
          stroke: root.interfaceColors.get("text"),
          strokeDasharray: [2, 2]
        })
      );
      var line1 = container.children.push(
        am5.Line.new(root, {
          position: "absolute",
          stroke: root.interfaceColors.get("text"),
          strokeDasharray: [2, 2]
        })
      );

      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll(data);

      function selectSlice(slice) {
        selectedSlice = slice;
        var dataItem = slice?.dataItem;
        var dataContext = dataItem?.dataContext;

        if (dataContext) {
          var i = 0;
          subSeries.data.each(function (dataObject) {
            subSeries.data.setIndex(i, dataContext.subData[i]);
            i++;
          });
        }

        var middleAngle = slice?.get("startAngle") + slice?.get("arc") / 2;
        var firstAngle = series.dataItems[0].get("slice").get("startAngle");

        series.animate({
          key: "startAngle",
          to: firstAngle - middleAngle,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic)
        });
        series.animate({
          key: "endAngle",
          to: firstAngle - middleAngle + 360,
          duration: 1000,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }

      container.appear(1000, 10);

      series.events.on("datavalidated", function () {
        selectSlice(series.slices.getIndex(0));
      });



      return () => {
        root.dispose();
      };
    }
  }, [data]);

  if (!data) {
    return <div style={{ width: "100%", height: "60vh" }} className='flex items-center justify-center'><Ouroboro color='#F96277' /></div>
  }

  return <div id={"chartdiv"} style={{ width: "100%", height: "70vh", marginTop: 50 }}></div>
}

export default MostPoppingSICCodes;