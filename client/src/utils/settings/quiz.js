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
    id: "questionLayout",
    title: "Question Layout",
    description: "Select the layout for displaying the quiz questions.",
    type: "select",
    options: [
      { label: "Single Column", value: "single" },
      { label: "Multi-Column", value: "multi-column" },
    ],
    value: "single",
  },
  {
    id: "quizFeedbackMode",
    title: "Quiz Feedback Mode",
    description: "Specify when feedback will be shown to the user.",
    type: "select",
    options: [
      { label: "Immediately", value: "immediately" },
      { label: "After Submit", value: "after-submit" },
      { label: "After Timeout", value: "after-timeout" },
    ],
    value: "after-submit",
  },
  {
    id: "hideQuizTime",
    title: "Hide Quiz Timer",
    description:
      "Decide whether the quiz timer should be visible during the quiz.",
    type: "switch",
    value: false,
  },
  {
    id: "hideQuestionNumber",
    title: "Hide Question Numbers",
    description: "Choose whether to display question numbers during the quiz.",
    type: "switch",
    value: false,
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
  {
    id: "finalGradeCalculation",
    title: "Final Grade Calculation",
    description: "Determine how the final grade will be calculated.",
    type: "select",
    options: [
      { label: "Percentage", value: "percentage" },
      { label: "Points", value: "points" },
      { label: "Custom", value: "custom" },
    ],
    value: "percentage",
  },
];
