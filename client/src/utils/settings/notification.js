export const notification = [
  {
    id: "pushNotifications",
    title: "Push Notifications",
    description:
      "Enable or disable push notifications for important events such as new messages, course updates, etc.",
    type: "switch",
    value: true,
  },
  {
    id: "smsNotifications",
    title: "SMS Notifications",
    description:
      "Enable or disable SMS notifications for events like course enrollment and reminders.",
    type: "switch",
    value: false,
  },
  {
    id: "emailDigest",
    title: "Email Digest",
    description:
      "Send a weekly or monthly digest of activities to users, such as new courses and updates.",
    type: "select",
    options: [
      { label: "None", value: "None" },
      { label: "Weekly", value: "Weekly" },
      { label: "Monthly", value: "Monthly" },
    ],
    value: "Weekly",
  },
  {
    id: "notificationSound",
    title: "Notification Sound",
    description:
      "Enable or disable notification sound alerts for new notifications.",
    type: "switch",
    value: true,
  },
  {
    id: "notificationVibration",
    title: "Notification Vibration",
    description:
      "Enable or disable vibration alerts for notifications on mobile devices.",
    type: "switch",
    value: true,
  },
  {
    id: "importantNotificationOnly",
    title: "Important Notifications Only",
    description:
      "Send notifications only for important events, such as course deadlines and messages.",
    type: "switch",
    value: false,
  },
];
