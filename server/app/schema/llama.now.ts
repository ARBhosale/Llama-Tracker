import {
  Table,
  StringColumn,
  BooleanColumn,
  ReferenceColumn,
  IntegerColumn,
  DecimalColumn,
} from "@servicenow/sdk-core/db";

export const x_snc_llamatracker_cleaning_log = Table({
  actions: ["read", "update", "create"],
  name: "x_snc_llamatracker_cleaning_log",
  label: "Cleaning Log",
  caller_access: "None",
  schema: {
    blow_dried: BooleanColumn({ label: "Blow Dried" }),
    brushed: BooleanColumn({ label: "Brushed" }),
    washed: BooleanColumn({ label: "Washed" }),
    llama: ReferenceColumn({
      label: "Llama",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
    }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});

export const x_snc_llamatracker_feed_log = Table({
  actions: ["read", "update", "create"],
  name: "x_snc_llamatracker_feed_log",
  label: "Feed Log",
  caller_access: "None",
  schema: {
    food_weight: IntegerColumn({ label: "Food Weight" }),
    llama: ReferenceColumn({
      label: "Llama",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
    }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});

export const x_snc_llamatracker_growth_log = Table({
  actions: ["read", "update", "create"],
  name: "x_snc_llamatracker_growth_log",
  label: "Growth Log",
  caller_access: "None",
  schema: {
    current_fur_length: DecimalColumn({
      label: "Current Fur Length",
      max_length: 15,
    }),
    current_weight: DecimalColumn({
      label: "Current Weight",
      max_length: 15,
    }),
    llama: ReferenceColumn({
      label: "Llama",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
    }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});

export const x_snc_llamatracker_llama = Table({
  actions: ["read", "update", "create"],
  name: "x_snc_llamatracker_llama",
  label: "Llama",
  caller_access: "None",
  schema: {
    name: StringColumn({
      label: "Llama",
    }),
    fur_color: StringColumn({
      label: "Fur Color",
    }),
    fur_length: DecimalColumn({
      label: "Fur Length",
      max_length: 15,
    }),
    cleanliness: IntegerColumn({ label: "Cleanliness" }),
    weight: IntegerColumn({ label: "Weight" }),
  },
  extensible: true,
  allow_web_service_access: false,
});

export const x_snc_llamatracker_shearing_log = Table({
  actions: ["read", "update", "create"],
  name: "x_snc_llamatracker_shearing_log",
  label: "Llamatracker Shearing Log",
  caller_access: "None",
  schema: {
    shear_length: IntegerColumn({ label: "Shear Length" }),
    shear_weight: IntegerColumn({ label: "Shear Weight" }),
    llama: ReferenceColumn({
      label: "Llama",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
    }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});
