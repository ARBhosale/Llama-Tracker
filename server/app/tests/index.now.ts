import { Test } from "@servicenow/sdk-core/atf";
import { Record } from "@servicenow/sdk-core/db";
import {
  x_snc_llamatracker_feed_log,
} from "../schema/llama.now";

const leroy = Record({
  table: { name: "x_snc_llamatracker_llama" },
  id: 1,
  data: {
    sys_id: "0b86311743917110771b58ad4bb8f263",
    name: "Leroy",
  },
});

Test("Feed Leroy Test", (atf) => {
  atf.openNewForm({
    table: x_snc_llamatracker_feed_log,
    formUI: "Standard UI",
    view: "default",
  });
  atf.setFieldValues({
    table: x_snc_llamatracker_feed_log,
    formUI: "Standard UI",
    fieldValues: {
      llama: leroy,
      food_weight: 5,
    },
  });
  atf.fieldValueValidation({
    table: x_snc_llamatracker_feed_log,
    formUI: "Standard UI",
    conditions: {
      food_weight: {
        comparison: "is",
        value: 5,
      },
    },
  });
  atf.submitForm({
    assertType: "Form submitted to server",
    formUI: "Standard UI",
  });
});
