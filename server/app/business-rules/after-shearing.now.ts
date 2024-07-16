import { BusinessRule, TableName } from "@servicenow/sdk/core";
import { afterShearing } from "./scripts/after-shearing.js";

BusinessRule({
  $id: 1,
  name: "Update Llama After Shearing",
  table: "x_snc_llamatracker_shearing_log" as TableName,
  when: "after",
  action: ["insert"],
  script: afterShearing,
  order: 100,
  active: true,
  add_message: false,
  abort_action: false,
});
