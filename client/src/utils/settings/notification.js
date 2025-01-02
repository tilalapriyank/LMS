export const notification = [
    {
      id: "pushNotifications",
      title: "Push Notifications",
      description: "Enable or disable push notifications for important events (e.g., new messages, course updates).",
      type: "switch",
      value: true,
    },
    {
      id: "smsNotifications",
      title: "SMS Notifications",
      description: "Enable or disable SMS notifications for events such as course enrollment and reminders.",
      type: "switch",
      value: false, 
    },
    {
      id: "emailDigest",
      title: "Email Digest",
      description: "Send a weekly or monthly digest of activity to users (e.g., new courses, updates).",
      type: "select",
      options: ["None", "Weekly", "Monthly"],
      value: "Weekly",
    },
    {
      id: "notificationSound",
      title: "Notification Sound",
      description: "Enable or disable notification sound alerts for new notifications.",
      type: "switch",
      value: true, 
    },
    {
      id: "notificationVibration",
      title: "Notification Vibration",
      description: "Enable or disable vibration alerts for notifications on mobile devices.",
      type: "switch",
      value: true,
    },
    {
      id: "importantNotificationOnly",
      title: "Important Notification Only",
      description: "Send notifications only for important events (e.g., course deadlines, messages).",
      type: "switch",
      value: false, 
    },
  ];
  