import { Feature } from "../App";

export const getVal = (obj: object) => {
  const feat = obj as Feature;
  return feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
};
