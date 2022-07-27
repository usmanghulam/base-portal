interface IBadge {
  color: string;
  text: string;
}

export interface INav {
  component: JSX.Element,
  name: string,
  to: string,
  icon: JSX.Element,
  badge: IBadge
  items?: INav
}