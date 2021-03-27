

export let APPS = [
  {
    name: "app1",
    path: "../src/app1/app1.client.tsx",
  },
  {
    name: "app2",
    path: "../src/app2/app2.client.tsx",
  },
];

export let ROUTES = {
  APP1: 'app1',
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

