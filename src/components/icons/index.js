import React from "react";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

export const AgentIcon = () => (
  <SupportAgentOutlinedIcon style={{ fontSize: 28, color: "D41B20" }} />
);

export const ClientIcon = () => (
  <FaceOutlinedIcon style={{ fontSize: 28, color: "D41B20" }} />
);

export const OpenedMenu = () => (
  <MenuOutlinedIcon style={{ fontSize: 38, color: "000345" }} />
);
export const ClosedMenu = () => (
  <CloseOutlinedIcon style={{ fontSize: 38, color: "000345" }} />
);

export const BookingIcon = () => (
  <CheckCircleOutlinedIcon style={{ fontSize: 20 }} />
);

export const DropDownIcon = () => (
  <ArrowDropDownOutlinedIcon style={{ fontSize: 20 }} />
);

export const DropUpIcon = () => (
  <ArrowDropUpOutlinedIcon style={{ fontSize: 20 }} />
);
