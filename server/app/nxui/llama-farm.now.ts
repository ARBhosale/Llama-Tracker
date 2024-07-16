import { Experience, Routes } from "@servicenow/sdk-core/experience";

const myExperience = Experience({
  name: "Llama Farm",
  description: "A tracker for our Llama Farm",
  baseUrlPath: "llama-farm",
  landingPath: "home",
  $id: Now.ID['exp1']
});

export const routes = Routes({
  experience: myExperience,
  routes: {
    home: {
      $id: Now.ID['route1'],
      component: {
        tagName: "llama-dashboard",
      },
      name: "Llama Dashboard",
      description: "Dashboard for our Llama Farm",
    },
  },
});
