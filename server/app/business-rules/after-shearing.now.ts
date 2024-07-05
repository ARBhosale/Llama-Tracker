import { BusinessRule } from "@servicenow/sdk-core/app";
import { afterShearing } from "./scripts/after-shearing.mjs";
import { TableName } from '@servicenow/sdk-core/db'

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
