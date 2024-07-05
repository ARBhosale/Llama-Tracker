import "@servicenow/sdk-core/global";

declare global {
  namespace Now {
    namespace Internal {
      interface Keys extends KeysRegistry {
        explicit: {
          "1": {
            table: "sys_script";
            id: "9f80566833d445a6af38d4ceb3510ca6";
          };
          "2": {
            table: "sys_script";
            id: "a760e7f390d54624bb4df3f13bd829cb";
          };
          "3": {
            table: "sys_script";
            id: "8cf7ea07273e47bdad6636a73caacca4";
          };
          "12": {
            table: "sys_ws_operation";
            id: "c7d960d9c846443aadb925238d1326a4";
          };
          "11111": {
            table: "sys_ws_definition";
            id: "29332faad9514de0a19970f6abb2a36b";
          };
          "x_snc_llamatracker.use_metric_system": {
            table: "sys_properties";
            id: "fca3a53aea0840b78853b7192f58c3a9";
          };
        };
      }
    }
  }
}