import { Test } from "@servicenow/sdk-core/atf";
import { x_snc_llamatracker_feed_log } from "../schema/llama.now";
import { leroy } from "../../zz__demo_data__/llamas.now";

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
