import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "../lib/app/test";
import { propertyOptions } from "../lib/source/propertyOptions";
import { recordProperty } from "../lib/source/recordProperty";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/example-plugin/icon.jpg",
      apps: [
        {
          name: "random-number",
          displayName: "Random Number",
          options: [
            {
              key: "minValue",
              displayName: "Minimum Value",
              required: true,
              defaultValue: 0,
              description: "The lowest value for the random number",
            },
            {
              key: "maxValue",
              displayName: "Maximum Value",
              required: true,
              defaultValue: 100,
              description: "The highest value for the random number",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "random-number-import",
          displayName: "Random Number Import",
          direction: "import",
          description: "Generate a random number for this property",
          apps: ["random-number"],
          groupAggregations: [],
          options: [],
          methods: { recordProperty, propertyOptions },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}
