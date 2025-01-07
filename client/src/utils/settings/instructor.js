export const instructor = [
  {
    id: "instructorRoleCustomization",
    title: "Instructor Role Customization",
    description:
      "Allow customization of the instructor's role and permissions within the system.",
    type: "switch",
    value: true,
  },
  {
    id: "payoutMethod",
    title: "Payout Method",
    description: "Select the payout method for instructors.",
    type: "select",
    options: [
      { label: "PayPal", value: "PayPal" },
      { label: "Bank Transfer", value: "Bank Transfer" },
      { label: "Other", value: "Other" },
    ],
    value: "PayPal",
  },
  {
    id: "minimumPayoutAmount",
    title: "Minimum Payout Amount",
    description: "Set the minimum payout amount for instructors.",
    type: "number",
    value: 50,
  },
  {
    id: "allowInstructorsPublishCourses",
    title: "Allow Instructors to Publish Courses",
    description:
      "Allow instructors to publish their courses directly without admin approval.",
    type: "switch",
    value: false,
  },
  {
    id: "instructorPerPage",
    title: "Instructors Per Page",
    description:
      "Set the number of instructors displayed per page in the instructor directory.",
    type: "number",
    value: 10,
  },
  {
    id: "becomeInstructorButton",
    title: "Become an Instructor Button",
    description:
      "Enable or disable the 'Become an Instructor' button on the website.",
    type: "switch",
    value: true,
  },
  {
    id: "instructorApproval",
    title: "Instructor Approval",
    description:
      "Set whether new instructors require admin approval before they can publish courses.",
    type: "switch",
    value: true,
  },
];
