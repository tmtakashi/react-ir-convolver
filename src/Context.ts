import React from "react";

interface state {
  ir: {
    uri: string;
    setUri: (uri: string) => void;
  },
  source: {
    uri: string;
    setUri: (uri: string) => void
  },
}

export const Context = React.createContext<state>({
  ir: {
    uri: '',
    setUri: () => {},
  },
  source: {
    uri: '',
    setUri: () => {},
  },
});