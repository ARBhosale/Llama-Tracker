import { BusinessRule, TableName } from "@servicenow/sdk/core";
import { afterFeeding } from "./scripts/after-feeding.js";

BusinessRule({
  $id: 3,
  name: "Update Llama After Feeding",
  table: "x_snc_llamatracker_feed_log" as TableName,
  when: "after",
  action: ["insert"],
  script: afterFeeding,
  order: 110,
  active: true,
  add_message: false,
  abort_action: false,
});
