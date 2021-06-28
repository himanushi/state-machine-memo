/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Machine as machine } from "xstate";

export type Schema = {
  states: {
    green: {};
    yellow: {};
    red: {};
  };
};

export const Machine = machine<{}, Schema>({
  id: "traffic-light",

  initial: "green",

  states: {
    green: { after: { 3000: "yellow" } },
    yellow: { after: { 2000: "red" } },
    red: { after: { 3000: "green" } }
  }
});

export const code = `import { Machine as machine } from "xstate";

export type Schema = {
  states: {
    green: {};
    yellow: {};
    red: {};
  };
};

export const Machine = machine<{}, Schema>({
  id: "traffic-light",

  initial: "green",

  states: {
    green: { after: { 3000: "yellow" } },
    yellow: { after: { 2000: "red" } },
    red: { after: { 3000: "green" } }
  }
});
`;
