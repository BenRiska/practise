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
        const data = await axios.post(`/api/stats/director-age`, {
          campaign_id: campaign
        });

        setData(data.data);
      }
      getCampaign();
    }
  }, [campaign]);


  useLayoutEffect(() => {

    if (data) {

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
      // @ts-ignore
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Average Director Age",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category",
          fill: am5.color(0xF96277)
        })
      );
      // @ts-ignore
      series1.data.setAll(data);


      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));

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