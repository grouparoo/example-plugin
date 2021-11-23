import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async () => {
  // Here you would test the connection, like trying to `SELECT NOW()` form a database
  return { success: true };
};
