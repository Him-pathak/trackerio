import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Flexbetween = styled(Box)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap:"10px",
  padding: "6.5px",
  margin:"5px 0",
  color:"#7b7c7c",
  borderRadius: "3px",
  '&:hover': {
    backgroundColor: '#105b72c2',
    color:"#fff",
    cursor: "pointer"
  }
});

export default Flexbetween;
