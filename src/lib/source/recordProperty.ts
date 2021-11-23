import { RecordPropertyPluginMethod } from "@grouparoo/core";

export const recordProperty: RecordPropertyPluginMethod = async (args) => {
  const min = parseInt(args.appOptions.minValue as string);
  const max = parseInt(args.appOptions.maxValue as string);
  const recordPropertyValue = Math.random() * (max - min) + min;
  return [recordPropertyValue];
};
