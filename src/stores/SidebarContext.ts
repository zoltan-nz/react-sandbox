import React, { Context } from 'react';

export interface ISidebarContext {
  show: boolean;
  toggle: () => void;
}

const SidebarContext: Context<ISidebarContext> = React.createContext<ISidebarContext>({
  show: false,
  toggle: () => {},
});

export default SidebarContext;
