export const payment = [
  {
    id: "paymentGateways",
    title: "Payment Gateways",
    description: "Select the payment gateways available for transactions.",
    type: "multiselect",
    options: [
      { label: "PayPal", value: "PayPal" },
      { label: "Stripe", value: "Stripe" },
      { label: "Razorpay", value: "Razorpay" },
      { label: "Bank Transfer", value: "Bank Transfer" },
      { label: "Other", value: "Other" }
    ],
    value: "PayPal",
  },
];
