export const general = [
  {
    id: "currency",
    title: "Currency",
    description: "Choose the default currency.",
    type: "select",
    options: [
      { label: "USD", value: "USD" },
      { label: "EUR", value: "EUR" },
      { label: "INR", value: "INR" },
      { label: "GBP", value: "GBP" },
      { label: "AUD", value: "AUD" },
    ],
    value: "USD",
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
  },
];
