import { RestApi } from "@servicenow/sdk-core/rest";
import { script } from "@servicenow/sdk-core/util";

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
      script: script`const { getLlamasHandler } = require('./server/app/rest/get-llamas.js')\ngetLlamasHandler(request, response)`,
      consumes: "application/json",
      produces: "application/json,application/xml,text/xml",
    },
  ],
  enforce_acl: [],
});
