export const general = [
  {
    id: "pagination",
    title: "Pagination",
    description: "Enable pagination for table views.",
    type: "switch",
    value: true,
  },
  {
    id: "dateFormat",
    title: "Date Format",
    description: "Select the format for displaying dates.",
    type: "select",
    options: ["Y-m-d", "d-m-Y", "m/d/Y", "d/m/Y"],
    value: "Y-m-d",
  },
  {
    id: "currency",
    title: "Currency",
    description: "Choose the default currency.",
    type: "select",
    options: ["USD", "EUR", "INR", "GBP", "AUD"],
    value: "USD",
  },
  {
    id: "theme",
    title: "Theme",
    description: "Select the theme for the interface.",
    type: "select",
    options: ["light", "dark"],
    value: "light",
  },
  {
    id: "screenReaderCompatibility",
    title: "Screen Reader Compatibility",
    description: "Enable compatibility for screen readers.",
    type: "switch",
    value: true,
  },
  {
    id: "keyboardShortcuts",
    title: "Keyboard Shortcuts",
    description: "Enable or disable keyboard shortcuts.",
    type: "switch",
    value: true,
  }
];
