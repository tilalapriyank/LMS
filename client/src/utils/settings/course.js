export const course = [
  {
    id: "courseVisibility",
    title: "Course Visibility",
    description: "Students must be logged in to view course",
    type: "switch",
    value: false,
  },
  {
    id: "courseContentAccess",
    title: "Course Content Access",
    description:
      "Allow instructors and admins to view the course content without enrolling",
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
    description: "The number of times a user can learn again from this course.",
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
    id: "sectionsPerPage",
    title: "Sections per Page",
    description: "Set the number of sections to display per page.",
    type: "number",
    value: 5,
  },
  {
    id: "fileType",
    title: "Allowed File Type",
    description: "Specify the allowed file types for course uploads.",
    type: "multiple_select",
    options: ["pdf", "docx", "pptx"],
    value: "pdf, docx, pptx",
  },
  {
    id: "uploadFiles",
    title: "Upload Files",
    description: "Number files the user can upload.",
    type: "number",
    value: 2,
  },
  {
    id: "fileSizeLimit",
    title: "File Size Limit",
    description: "Set Maximum Attachment size for upload (MB)",
    type: "number",
    value: 50,
  },
  {
    id: "filesPerPage",
    title: "Files Per Page",
    description: "Set the number of files displayed per page in the course.",
    type: "number",
    value: 2,
  },
  {
    id: "urlNofollow",
    title: "URL Nofollow",
    description:
      "Set whether external links should have a 'nofollow' attribute.",
    type: "switch",
    value: false,
  },
  {
    id: "preferredVideoSource",
    title: "Preferred Video Source",
    description: "Choose the preferred video source for course videos.",
    type: "checkbox",
    options: ["YouTube", "Vimeo", "Self-hosted"],
    value: "YouTube",
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
