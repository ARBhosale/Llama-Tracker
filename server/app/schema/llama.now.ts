import { Table, StringColumn } from "@servicenow/sdk-core/db";

export const x_snc_llamatracker_cleaning_log = Table({
  name: "x_snc_llamatracker_cleaning_log",
  label: "Cleaning Log",
  caller_access: "none",
  schema: {
    brushed: StringColumn({ label: "Brushed" }),
    washed: StringColumn({ label: "Washed" }),
    llama: StringColumn({ label: "Llama" }),
    blow_dried: StringColumn({ label: "Blow Dried" }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});

export const x_snc_llamatracker_feed_log = Table({
  name: "x_snc_llamatracker_feed_log",
  label: "Feed Log",
  caller_access: "none",
  schema: {
    food_weight: StringColumn({ label: "Food Weight" }),
    llama: StringColumn({ label: "Llama" }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});

export const x_snc_llamatracker_growth_log = Table({
  name: "x_snc_llamatracker_growth_log",
  label: "Growth Log",
  caller_access: "none",
  schema: {
    current_fur_length: StringColumn({ label: "Current Fur Length" }),
    current_weight: StringColumn({ label: "Current Weight" }),
    llama: StringColumn({ label: "Llama" }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});

export const x_snc_llamatracker_llama = Table({
  name: "x_snc_llamatracker_llama",
  label: "Llama",
  caller_access: "none",
  schema: {
    fur_color: StringColumn({ label: "Fur Color" }),
    fur_length: StringColumn({ label: "Fur Length" }),
    name: StringColumn({ label: "Llama" }),
    cleanliness: StringColumn({ label: "Cleanliness" }),
    weight: StringColumn({ label: "Weight" }),
  },
  extensible: true,
  allow_web_service_access: false,
});

export const x_snc_llamatracker_shearing_log = Table({
  name: "x_snc_llamatracker_shearing_log",
  label: "Llamatracker Shearing Log",
  caller_access: "none",
  schema: {
    shear_length: StringColumn({ label: "Shear Length" }),
    shear_weight: StringColumn({ label: "Shear Weight" }),
    llama: StringColumn({ label: "Llama" }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});
