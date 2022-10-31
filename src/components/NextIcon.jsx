import React from "react";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import ChevronRight from "@material-ui/icons/ChevronRight";

export default function NextIcon({ variant = "ios", ...props }) {
  return variant === "ios" ? (
    <ArrowForwardIos {...props} />
  ) : (
    <ChevronRight {...props} />
  );
}
