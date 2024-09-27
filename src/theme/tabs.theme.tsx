export const TabsTheme = {
  variants: {
    sidebar: {
      tab: {
        flex: 1,
        opacity: 0.2,
        borderBottom: {base: "1px solid #000", md: "unset"},
        _active: {
          bgColor: "transparent",
        },
        _selected: {
          opacity: 1,
        },
      },
    },
  },
};
