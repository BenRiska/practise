import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useLayoutEffect, useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Axios from 'axios'

const Home: NextPage = () => {



  useLayoutEffect(() => {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    const root = am5.Root.new("chartdiv");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);


    // Add series
    // https://www.amcharts.com/docs/v5/charts/word-cloud/
    const series = root.container.children.push(am5wc.WordCloud.new(root, {
      categoryField: "tag",
      valueField: "weight",
      maxFontSize: am5.percent(15)
    }));

    // Configure labels
    series.labels.template.setAll({
      fontFamily: "Courier New"
    });


    setInterval(function () {
      am5.array.each(series.dataItems, function (dataItem: any) {
        let value = Math.random() * 65;
        value = value - Math.random() * value;
        dataItem.set("value", value);
        dataItem.set("valueWorking", value);
      })
    }, 8000)

    // Data from:
    // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
    series.data.setAll([
      { tag: "Super", weight: 100 },
      { tag: "Secret", weight: 100 },
      { tag: "Growth", weight: 100 },
      { tag: "Machine", weight: 100 },
      { tag: "Santiago", weight: 35.35 },
      { tag: "Sierra", weight: 33.91 },
      { tag: "Garcia", weight: 30.19 },
      { tag: "Monterrez", weight: 27.86 },
      { tag: "Ember", weight: 27.13 },
      { tag: "Tax", weight: 24.31 },
      { tag: "Automate", weight: 21.98 },
      { tag: "Finance", weight: 21.01 },
      { tag: "Campaign", weight: 10.75 },
      { tag: "Data", weight: 9.55 },
      { tag: "Company", weight: 8.32 },
      { tag: "Director", weight: 7.03 },
      { tag: "Data", weight: 6.75 },
      { tag: "Solution", weight: 6.02 },
      { tag: "Efficacy", weight: 5.61 },
      { tag: "Platform", weight: 5.1 },
      { tag: "Target", weight: 5.07 },
      { tag: "Market", weight: 4.66 },
      { tag: "SEO", weight: 4.66 },
      { tag: "Analyse", weight: 3.01 },
      { tag: "Mobile", weight: 2.8 },
      { tag: "Web", weight: 2.6 },
      { tag: "Progression", weight: 2.46 },
      { tag: "User", weight: 2.12 },
      { tag: "Track", weight: 2.1 },
      { tag: "Sale", weight: 1.88 },
      { tag: "Linkedin", weight: 1.74 },
      { tag: "Mail", weight: 1.33 },
      { tag: "Promotion", weight: 1.29 },
      { tag: "Market", weight: 0.97 },
      { tag: "Q1", weight: 0.79 },
      { tag: "SSGM", weight: 0.65 },
      { tag: "Q2", weight: 0.56 },
      { tag: "Q3", weight: 0.53 },
      { tag: "Q4", weight: 0.63 },
      { tag: "Funnel", weight: 0.36 },
      { tag: "Strategy", weight: 0.52 },
      { tag: "Identity", weight: 0.43 },
      { tag: "Viral", weight: 0.48 },
      { tag: "Share", weight: 0.21 },
      { tag: "Scale", weight: 0.36 },
      { tag: "Persona", weight: 0.62 },
    ]);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Head>
        <title>Ember | SSGM</title>
        <meta name="description" content="Much secret, very super" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={"chartdiv"} style={{ width: "100%", height: "80vh" }}></div>
    </div>
  )
}

export default Home
