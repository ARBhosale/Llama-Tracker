import { Application } from "@servicenow/sdk-core/app";

export const llamaApp = Application({
  name: "Llama Tracker",
  properties: {
    use_metric_system: {
      value: "true",
      type: "boolean",
      description: "Testing a change",
      isPrivate: false,
      ignoreCache: true,
      roles: {},
    },
  },
  appAdministration: false,
  canEditInStudio: true,
  jsMode: "ECMAScript 2021 (ES12)",
  runtimeTracking: "Tracking",
  restrictTableChoices: false,
  license: {
    subscriptionModel: "Not applicable",
    subscriptionRequirement: "Monitor",
    subscriptionCategory: "Not Applicable",
  },
});
