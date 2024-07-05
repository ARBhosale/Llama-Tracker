// import { Test } from "@servicenow/sdk-core/atf";

// Test("Feed Leroy Test", (atf) => {
//   atf.openNewForm({
//     table: "x_snc_llamatracker_feed_log",
//     formUI: "standard_ui",
//     view: "default",
//   });
//   atf.setFieldValues({
//     table: "x_snc_llamatracker_feed_log",
//     formUI: "standard_ui",
//     fieldValues: {
//       llama: leroy,
//       food_weight: 5,
//     },
//   });
//   atf.fieldValueValidation({
//     table: "x_snc_llamatracker_feed_log",
//     formUI: "standard_ui",
//     conditions: {
//       food_weight: {
//         comparison: "is",
//         value: 5,
//       },
//     },
//   });
//   atf.submitForm({
//     assertType: "Form submitted to server",
//     formUI: "standard_ui",
//   });
// });
