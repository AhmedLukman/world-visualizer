import { useMemo } from "react";
import * as d3 from "d3";
import { getVal } from "../lib/utils";
import { countriesData } from "../countries";

export const useColorScale = () => {
  // GDP per capita (avoiding countries with small pop)
  const maxVal = useMemo(
    () => Math.max(...countriesData.features.map(getVal)),
    []
  );
  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
  colorScale.domain([0, maxVal]);
  d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
  return colorScale;
}