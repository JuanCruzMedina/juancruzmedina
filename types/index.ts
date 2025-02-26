import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  privacy: string;
  link?: string;
  sourceLink?: string;
  image: string;
  date: string;
}