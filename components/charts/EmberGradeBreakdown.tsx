import { useLayoutEffect, useEffect, useState } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from 'axios';
import { Ouroboro } from 'react-spinners-css';

const EmberGradeBreakdowm = () => {

  const [data, setData] = useState(null)

  useEffect(() => {

    async function getCampaign() {
      const data = await axios.post(`/api/stats/ember-grade-breakdown`);
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
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          endAngle: 270
        })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          endAngle: 270
        })
      );

      series.states.create("hidden", {
        endAngle: -90
      });

      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll(data);

      series.appear(1000, 100);



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

export default EmberGradeBreakdowm;