


export let ROUTES = {
  APP1: 'app1',//filename
  APP2: 'app2'
};

export let APPSCONFIG = {
  [ROUTES.APP1]: {
    clientPath: "../src/app1/app1.client.tsx",
    routePath: "app1"
  },
  [ROUTES.APP2]: {
    clientPath: "../src/app2/app2.client.tsx",
    routePath: "app2"
  }

}

