import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    headerBgColor: string;
    headerTextColor: string;
    toolBarBgColor: string;
    toolBarTextColor: string;
    bgColor: string;
  }
}