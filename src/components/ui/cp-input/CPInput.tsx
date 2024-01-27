"use client";

import { TextField } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler } from "react";

type CPInputProps = {
  variant: "outlined" | "filled" | "standard";
  label: string;
  name: string;
  value?: string;
  onchange?: (name: string, value: string) => void;
  onblur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error?: boolean;
  helperText?: string;
  disable?: boolean;
};

const CPInput = ({
  variant,
  label,
  name,
  value,
  onchange,
  onblur,
  error,
  helperText,
  disable,
}: CPInputProps) => {
  return (
    <TextField
      className="cp-input"
      variant={variant}
      name={name}
      label={label}
      value={value}
      onChange={(e) => onchange?.(name, e.target.value)}
      onBlur={onblur}
      error={error}
      helperText={error && helperText}
      disabled={disable}
    />
  );
};
export default CPInput;
