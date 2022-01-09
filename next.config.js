/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withTM = require("next-transpile-modules")([
  "@amcharts/amcharts5",
  "@amcharts/amcharts5-fonts",
  "@amcharts/amcharts5-geodata"
  ]); // pass the modules you would like to see transpiled
  
  module.exports = withTM();