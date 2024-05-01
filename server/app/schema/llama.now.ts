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
    blow_dried: BooleanColumn({ label: "Blow Dried", dropdown: "none" }),
    brushed: BooleanColumn({ label: "Brushed", dropdown: "none" }),
    washed: BooleanColumn({ label: "Washed", dropdown: "none" }),
    llama: ReferenceColumn({
      label: "Llama",
      dropdown: "none",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
      attributes: {
        encode_utf8: "true",
        false: "true",
        0: "4",
        true: "true",
        1: "true",
      },
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
    food_weight: IntegerColumn({ label: "Food Weight", dropdown: "none" }),
    llama: ReferenceColumn({
      label: "Llama",
      dropdown: "none",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
      attributes: {
        encode_utf8: "true",
        false: "true",
        0: "4",
        true: "true",
        1: "true",
      },
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
      dropdown: "none",
      max_length: 15,
    }),
    current_weight: DecimalColumn({
      label: "Current Weight",
      dropdown: "none",
      max_length: 15,
    }),
    llama: ReferenceColumn({
      label: "Llama",
      dropdown: "none",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
      attributes: {
        encode_utf8: "true",
        false: "true",
        0: "4",
        true: "true",
        1: "true",
      },
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
      dropdown: "none",
      attributes: {
        edge_encryption_enabled: "true",
        true: "true",
        0: "3",
        1: "true",
      },
    }),
    fur_color: StringColumn({
      label: "Fur Color",
      dropdown: "none",
      attributes: {
        edge_encryption_enabled: "true",
        true: "true",
        0: "3",
        1: "true",
      },
    }),
    fur_length: DecimalColumn({
      label: "Fur Length",
      dropdown: "none",
      max_length: 15,
    }),
    cleanliness: IntegerColumn({ label: "Cleanliness", dropdown: "none" }),
    weight: IntegerColumn({ label: "Weight", dropdown: "none" }),
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
    shear_length: IntegerColumn({ label: "Shear Length", dropdown: "none" }),
    shear_weight: IntegerColumn({ label: "Shear Weight", dropdown: "none" }),
    llama: ReferenceColumn({
      label: "Llama",
      dropdown: "none",
      referenceTable: { name: "x_snc_llamatracker_llama" },
      max_length: 32,
      attributes: {
        encode_utf8: "true",
        false: "true",
        0: "4",
        true: "true",
        1: "true",
      },
    }),
  },
  extensible: true,
  allow_web_service_access: false,
  index: [{ name: "index", element: "llama", unique: false }],
});
