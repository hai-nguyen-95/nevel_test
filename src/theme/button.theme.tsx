export const ButtonTheme = {
  variants: {
    primary: {
      boxSizing: "border-box",
      backgroundColor: "transparent",
      height: "unset",
      lineHeight: "normal",
      fontSize: "16px",
      color: "#000",
      fontWeight: "normal",
      borderRadius: "2px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      _hover: {
        opacity: 0.5,
      },
    },
  },

  defaultProps: {
    variant: "primary",
  },
};
