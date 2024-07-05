import { Application } from "@servicenow/sdk-core/app";

export const llamaApp = Application({
  name: "Llama Tracker",
  properties: {
    use_metric_system: {
      value: true,
      type: "boolean",
      description: "Testing a change",
      isPrivate: false,
      ignoreCache: true,
      roles: {},
    },
  },
  appAdministration: false,
  canEditInStudio: true,
  jsMode: "es_latest",
  runtimeTracking: "permissive",
  restrictTableChoices: false,
  license: {
    subscriptionModel: "none",
    subscriptionRequirement: "log",
    subscriptionCategory: "none",
  },
});
