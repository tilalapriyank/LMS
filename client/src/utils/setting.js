import {general} from "./settings/general";
import {course} from "./settings/course";
import {quiz} from "./settings/quiz";
import {payment} from "./settings/payment";
import {instructor} from "./settings/instructor";
import {email} from "./settings/email";

export const settingsTabs = [
  { name: "general", label: "General", settings: general },
  { name: "course", label: "Course", settings: course },
  { name: "quiz", label: "Quiz", settings: quiz },
  { name: "payment", label: "Payment", settings: payment },
  { name: "instructor", label: "Instructor", settings: instructor },
  { name: "email", label: "Email", settings: email },
];
