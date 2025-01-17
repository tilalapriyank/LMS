export const course = [
  {
    id: "courseVisibility",
    title: "Course Visibility",
    description: "Students must be logged in to view the course.",
    type: "switch",
    value: false,
  },
  {
    id: "courseContentAccess",
    title: "Course Content Access",
    description:
      "Allow instructors and admins to view the course content without enrolling.",
    type: "switch",
    value: false,
  },
  {
    id: "autoStart",
    title: "Auto Start",
    description:
      "Students will get started on courses immediately after successfully purchasing them.",
    type: "switch",
    value: false,
  },
  {
    id: "courseRetake",
    title: "Course Retake",
    description: "Allow students to retake the course after completion.",
    type: "switch",
    value: true,
  },
  {
    id: "reTakeCourse",
    title: "Re-Take Course",
    description: "The number of times a user can retake this course.",
    type: "number",
    value: 5,
  },
  {
    id: "passingGrade",
    title: "Passing Grade (%)",
    description:
      "Set the passing grade percentage required to complete the course.",
    type: "number",
    value: 70,
  },
  {
    id: "autoLoadNextItem",
    title: "Automatically Load Next Item",
    description:
      "Automatically load the next item when the current one is completed.",
    type: "switch",
    value: true,
  },
  {
    id: "courseTranslations",
    title: "Course Translations",
    description:
      "Enable or disable course translations for multiple languages.",
    type: "switch",
    value: true,
  },
];
