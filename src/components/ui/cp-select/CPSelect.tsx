"use client";

import { SelectListType, SelectType } from "@/type/common";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { error } from "console";
import { useState } from "react";

type CPSelectProps = {
  selectList: SelectListType;
  name: string;
  label: string;
  value?: string;
  onchange?: (name: string, value: string) => void;
  error?: boolean;
  helperText?: string;
};

const CPSelect = ({
  selectList,
  name,
  label,
  value,
  onchange,
  error,
  helperText,
}: CPSelectProps) => {
  const renderedList = (list: SelectListType) => {
    return list.map((item: SelectType) => {
      return (
        <MenuItem key={item.id} value={item.value}>
          <div className="flex gap-2">
            <item.icon />
            <span>{item.label}</span>
          </div>
        </MenuItem>
      );
    });
  };

  return (
    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label={label}
        onChange={(e) => onchange?.(name, e.target.value)}
      >
        {renderedList(selectList)}
      </Select>
      <FormHelperText>{error && helperText}</FormHelperText>
    </FormControl>
  );
};
export default CPSelect;
