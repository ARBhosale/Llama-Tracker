import { BusinessRule } from "@servicenow/sdk-core/app";
import { afterGrowth } from "./scripts/after-growth.mjs";

BusinessRule({
  id: 2,
  name: "Update Llama After Growth Logging",
  table: "x_snc_llamatracker_growth_log" as any /*Generated*/,
  when: "after",
  action: ["insert"],
  script: afterGrowth,
  order: 110,
  active: true,
  add_message: false,
  abort_action: false,
});
