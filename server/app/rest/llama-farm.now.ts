import { RestApi } from "@servicenow/sdk-core/rest";
import { getLlamasHandler } from "./get-llamas";
RestApi({
  $id: "11111",
  name: "Get Farm",
  consumes: "application/json",
  service_id: "custom_id",
  routes: [
    {
      name: "Get Llamas",
      method: "GET",
      path: "/farm",
      $id: "12",
      enforce_acl: [],
      script: getLlamasHandler,
      consumes: "application/json",
      produces: "application/json,application/xml,text/xml",
    },
  ],
  enforce_acl: [],
});
