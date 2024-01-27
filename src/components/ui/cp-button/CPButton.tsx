import {
  Button,
  ButtonProps,
  CircularProgress,
  dividerClasses,
} from "@mui/material";

interface CPButtonProps extends ButtonProps {
  variant: "outlined" | "contained" | "text";
  type: "submit" | "button";
  text: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  isLoading?: boolean;
  disable?: boolean;
}

const CPButton = ({
  type,
  variant,
  text,
  endIcon,
  startIcon,
  isLoading,
  disable,
  ...props
}: CPButtonProps) => {
  return (
    <Button
      className="cp-button"
      variant={variant}
      type={type}
      endIcon={
        !isLoading ? endIcon : <CircularProgress className="text-white p-2" />
      }
      startIcon={startIcon}
      {...props}
      disabled={disable}
    >
      {`${text}`}
    </Button>
  );
};
export default CPButton;
