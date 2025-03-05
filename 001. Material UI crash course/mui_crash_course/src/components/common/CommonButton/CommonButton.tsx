import { Button } from "@mui/material";

// interface CommonButton {
//   children: string;
//   color?: string;
//   variant?: string;
//   size?: string;
// }

const CommonButton = ({
  children,
  color = "success",
  variant = "contained",
  size = "medium",
  disabled = false,
  sx,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
