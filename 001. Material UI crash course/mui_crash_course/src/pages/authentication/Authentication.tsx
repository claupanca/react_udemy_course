import { Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import { blue } from "@mui/material/colors";

const Authentication = () => {
  const buttonStyles = {
    fontSize: 15,
    fontWeight: 500,
    backgroundColor: "cyan",
    // we target only the variant="contined" buttons
    "&.MuiButton-contained": {
      backgroundColor: "red",
    },
    "&:MuiButton-outlined": {
      fontWeight: 500,
    },
    "&:hover": { backgroundColor: "yellow" },
  };

  return (
    <div>
      <Typography variant="h2">Authentication</Typography>
      <CommonButton variant="contained" size="small" sx={buttonStyles}>
        The contained button
      </CommonButton>
      <CommonButton variant="outlined" size="small" sx={buttonStyles}>
        The outlined button
      </CommonButton>
    </div>
  );
};

export default Authentication;
