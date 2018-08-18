const fs = require("fs");
const output = require("d3node-output");
const d3 = require("d3-node")().d3;
const d3nLine = require("d3node-linechart");

const parseTime = d3.timeParse("%y");
const tsv = fs.readFileSync("647_Global_Temperature_Data_File.txt").toString();
const data = d3.tsvParse(tsv, d => {
  return {
    key: d.year,
    value: +d.annual
  };
});

output('output', d3nLine({ data: data }));
