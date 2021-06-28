/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { assign } from "xstate";
import { Machine as machine } from "xstate";

export type Context = {
  count: number;
};

export type Schema = {
  states: {
    active: {};
  };
};

export type Event = { type: "INCREMENT" } | { type: "RESET" };

export const Machine = machine<Context, Schema, Event>(
  {
    id: "counter",

    initial: "active",

    context: { count: 0 },

    states: { active: { on: {
      INCREMENT: { actions: ["increment"] },

      RESET: { actions: ["reset"] }
    } } }
  },
  { actions: {
    increment: assign({ count: ({ count }) => count + 1 }),

    reset: assign({ count: () => 0 })
  } }
);

export const code = `import { assign } from "xstate";
import { Machine as machine } from "xstate";

export type Context = {
  count: number;
};

export type Schema = {
  states: {
    active: {};
  };
};

export type Event = { type: "INCREMENT" } | { type: "RESET" };

export const Machine = machine<Context, Schema, Event>(
  {
    id: "counter",

    initial: "active",

    context: { count: 0 },

    states: { active: { on: {
      INCREMENT: { actions: ["increment"] },

      RESET: { actions: ["reset"] }
    } } }
  },
  { actions: {
    increment: assign({ count: ({ count }) => count + 1 }),

    reset: assign({ count: () => 0 })
  } }
);
`;
