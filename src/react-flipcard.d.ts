declare module "react-flipcard" {
  import { FC } from "react";
  interface FlipCardProps {
    type?: "horizontal" | "vertical";
    className?: string;
    [key: string]: any;
  }
  const FlipCard: FC<FlipCardProps>;
  export default FlipCard;
}
