import { BusinessRule, TableName } from "@servicenow/sdk/core";
import { afterGrowth } from "./scripts/after-growth.js";

BusinessRule({
  $id: 2,
  name: "Update Llama After Growth Logging",
  table: "x_snc_llamatracker_growth_log" as TableName,
  when: "after",
  action: ["insert"],
  script: afterGrowth,
  order: 110,
  active: true,
  add_message: false,
  abort_action: false,
});
