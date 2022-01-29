import  { useState, useLayoutEffect, useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from 'axios';

const BarChart = ({idName, campaign}: any) => {

  const [data, setData] = useState("")

  
  useEffect(() => {
    if(campaign){
      // @ts-ignore
    async function getCampaign() {
      const data = await axios.post(`/api/stats/campaign-cost`, {
        campaign_id: campaign
      });
      setData(data.data);
    }
    getCampaign();
  }
  }, [campaign]);
  

  useLayoutEffect(() => {

    // Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new(idName);

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create wrapper container
var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: am5.percent(100),
    layout: root.verticalLayout
  })
);

// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
var series = container.children.push(
  am5hierarchy.Treemap.new(root, {
    singleBranchOnly: false,
    downDepth: 1,
    upDepth: -1,
    initialDepth: 2,
    valueField: "value",
    categoryField: "name",
    childDataField: "children",
    nodePaddingOuter: 0,
    nodePaddingInner: 0
  })
);

series.rectangles.template.setAll({
  strokeWidth: 2
});

// Generate and set data
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
var maxLevels = 2;
var maxNodes = 10;
var maxValue = 100;


series.data.setAll([data]);
series.set("selectedDataItem", series.dataItems[0]);

// Make stuff animate on load
series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]);

  return (
  <div className='flex w-full space-y-4 flex-col items-start'>
    <div id={idName} style={{ width: "100%", height: "70vh" }}></div>
  </div>)
}

export default BarChart