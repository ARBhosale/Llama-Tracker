import { BusinessRule } from "@servicenow/sdk-core/app";
import { afterGrowth } from "./scripts/after-growth.mjs";

BusinessRule({
  id: 2,
  name: "Update Llama After Growth Logging",
  table: { name: "x_snc_llamatracker_growth_log" },
  when: "after",
  action: ["insert"],
  script: afterGrowth,
  order: 110,
  active: true,
  add_message: false,
  abort_action: false,
});
