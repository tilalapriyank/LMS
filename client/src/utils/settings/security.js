export const security = [
  {
    id: "minPasswordLength",
    title: "Minimum Password Length",
    description: "Set the minimum length for passwords.",
    type: "number",
    value: 8,
  },
  {
    id: "requireSpecialCharacters",
    title: "Require Special Characters",
    description: "Require passwords to include at least one special character.",
    type: "switch",
    value: true,
  },
  {
    id: "requireNumbers",
    title: "Require Numbers",
    description: "Require passwords to include at least one number.",
    type: "switch",
    value: true,
  },
  {
    id: "requireUppercase",
    title: "Require Uppercase Letters",
    description: "Require passwords to include at least one uppercase letter.",
    type: "switch",
    value: true,
  },
  {
    id: "twoFactorAuthentication",
    title: "Two-Factor Authentication (2FA)",
    description: "Enable or disable Two-Factor Authentication for user logins.",
    type: "switch",
    value: true,
  },
  {
    id: "loginAttempts",
    title: "Login Attempts",
    description:
      "Set the maximum number of failed login attempts before locking the account.",
    type: "number",
    value: 5,
  },
  {
    id: "sessionTimeout",
    title: "Session Timeout",
    description: "Set the session timeout duration (in minutes).",
    type: "number",
    value: 30,
  },
  {
    id: "accountLockoutDuration",
    title: "Account Lockout Duration",
    description:
      "Set the duration (in minutes) for account lockout after exceeding the allowed number of login attempts.",
    type: "number",
    value: 15,
  },
  {
    id: "passwordExpiry",
    title: "Password Expiry",
    description:
      "Set the period (in days) after which users must change their password.",
    type: "number",
    value: 90,
  },
  {
    id: "passwordHistory",
    title: "Password History",
    description:
      "Enable or disable password history tracking to prevent users from reusing old passwords.",
    type: "switch",
    value: true,
  },
  {
    id: "sslEncryption",
    title: "SSL Encryption",
    description:
      "Enable or disable SSL encryption for all sensitive data transmissions.",
    type: "switch",
    value: true,
  },
  {
    id: "bruteForceProtection",
    title: "Brute Force Protection",
    description: "Enable or disable brute force attack protection.",
    type: "switch",
    value: true,
  },
];
