import {general} from "./settings/general";
import {course} from "./settings/course";
import {quiz} from "./settings/quiz";
import {design} from "./settings/design";
import {payment} from "./settings/payment";
import {instructor} from "./settings/instructor";
import {security} from "./settings/security";
import {email} from "./settings/email";
import {notification} from "./settings/notification";

export const settingsTabs = [
  { name: "general", label: "General", settings: general },
  { name: "course", label: "Course", settings: course },
  { name: "quiz", label: "Quiz", settings: quiz },
  { name: "design", label: "Design", settings: design },
  { name: "payment", label: "Payment", settings: payment },
  { name: "instructor", label: "Instructor", settings: instructor },
  { name: "security", label: "Security", settings: security },
  { name: "email", label: "Email", settings: email },
  { name: "notification", label: "Notification", settings: notification },
];
