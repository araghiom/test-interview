import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type SelectListType = SelectType[];

export type SelectType = {
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  label: string;
  value: string;
};

export type SocialIconListType = SocialIconType[];
export type SocialIconType = {
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  label: string;
};
