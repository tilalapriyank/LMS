export const payment = [
  {
    id: "paymentGateways",
    title: "Payment Gateways",
    description: "Select the payment gateways available for transactions.",
    type: "select",
    options: [
      { label: "PayPal", value: "PayPal" },
      { label: "Stripe", value: "Stripe" },
      { label: "Razorpay", value: "Razorpay" },
      { label: "Bank Transfer", value: "Bank Transfer" },
      { label: "Other", value: "Other" }
    ],
    value: "PayPal",
  },
  {
    id: "paymentConfirmationEmail",
    title: "Payment Confirmation Email",
    description:
      "Enable or disable email notifications after a successful payment.",
    type: "switch",
    value: true,
  },
  {
    id: "taxSettings",
    title: "Tax Settings",
    description: "Configure tax rates for different regions.",
    type: "text",
    value: "GST 18%",
  },
  {
    id: "currency",
    title: "Currency",
    description: "Select the default currency for transactions.",
    type: "select",
    options: [
      { label: "USD", value: "USD" },
      { label: "EUR", value: "EUR" },
      { label: "INR", value: "INR" },
      { label: "GBP", value: "GBP" },
      { label: "AUD", value: "AUD" }
    ],
    value: "USD",
  },
  {
    id: "paymentReceipt",
    title: "Payment Receipt",
    description: "Allow the system to generate and send payment receipts.",
    type: "switch",
    value: true,
  },
  {
    id: "paymentRedirectURL",
    title: "Payment Redirect URL",
    description: "Set the URL to redirect users after successful payment.",
    type: "text",
    value: "https://example.com/thank-you",
  },
  {
    id: "enableSubscription",
    title: "Enable Subscription Payments",
    description: "Enable recurring subscription-based payments.",
    type: "switch",
    value: false,
  },
  {
    id: "refundPolicy",
    title: "Refund Policy",
    description: "Define the conditions for refunding payments.",
    type: "textarea",
    value: "Refunds are processed within 30 days of payment.",
  },
  {
    id: "paymentSecurity",
    title: "Payment Security",
    description:
      "Enable advanced security features like 3D Secure for payments.",
    type: "switch",
    value: true,
  },
];
