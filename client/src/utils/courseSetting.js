export const courseSettings = [
  {
    id: "maxStudents",
    title: "Maximum Students",
    description: "Number of students that can enroll in this course.",
    type: "number",
    value: 10,
  },
  {
    id: "courseDuration",
    title: "Course Duration",
    description: '(e.g., "4 weeks 3 days")',
    type: "text",
    value: "4 weeks 3 days",
  },
  {
    id: "courseLevel",
    title: "Difficulty Level",
    description: "Course difficulty level",
    type: "select",
    options: [
      { label: "All Levels", value: "all" },
      { label: "Beginner", value: "beginner" },
      { label: "Intermediate", value: "intermediate" },
      { label: "Expert", value: "expert" },
    ],
    value: "beginner",
  },
  {
    id: "courseRegularPrice",
    title: "Regular price",
    description: "Set a regular price. Leave it blank for Free.",
    type: "number",
    value: 0,
  },
  {
    id: "courseSalePrice",
    title: "Sale price",
    description: "",
    type: "number",
    value: 0,
  },
];
