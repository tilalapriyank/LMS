export const quiz = [
  {
    id: "questionOrder",
    title: "Question Order",
    description: "Choose the order in which quiz questions will appear.",
    type: "select",
    options: [
      { label: "Random", value: "random" },
      { label: "Sequential", value: "sequential" },
    ],
    value: "random",
  },
  {
    id: "whenTimeExpires",
    title: "Action When Time Expires",
    description: "Select the action when the quiz time expires.",
    type: "select",
    options: [
      { label: "Submit Automatically", value: "submit-automatically" },
      { label: "Show Warning", value: "show-warning" },
      { label: "Pause Quiz", value: "pause" },
    ],
    value: "submit-automatically",
  },
];
