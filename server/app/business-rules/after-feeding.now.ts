import { BusinessRule } from "@servicenow/sdk-core/app";
import { afterFeeding } from "./scripts/after-feeding.mjs";

BusinessRule({
  id: 3,
  name: "Update Llama After Feeding",
  table: { name: "x_snc_llamatracker_feed_log" },
  when: "after",
  action: ["insert"],
  script: afterFeeding,
  order: 110,
  active: true,
  add_message: false,
  abort_action: false,
});
