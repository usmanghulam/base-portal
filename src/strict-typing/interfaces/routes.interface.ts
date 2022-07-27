import React from "react";

export interface IRoutes {
  path: string;
  name: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  exact?: boolean | undefined;
}