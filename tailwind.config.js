/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      spacing: {
        default: "24px",
        layout: "var(--page-padding)"
      },
      colors: {
        "dark-color": "var(--color-dark)",
        "white-color": "var(--color-white)",
        "primary-color": "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "secondary-color": "var(--color-secondary)",
        "network-50": "var(--color-network-50)",
        "network-100": "var(--color-network-100)",
        "network-300": "var(--color-network-300)",
        "error-400": "var(--color-error-400)",
        "error-400_40": "var(--color-error-400_40)",
        "error-500": "var(--color-error-500)",
        "green-50": "var(--color-green-50)",
        "green-100": "var(--color-green-100)",
        "green-400": "var(--color-green-400)",
        "green-400_40": "var(--color-green-400_40)",
        "green-500": "var(--color-green-500)",
        "color-grey-30": "var(--color-grey-30)",
        "color-grey-40": "var(--color-grey-40)",
        "color-grey-50": "var(--color-grey-50)",
        "color-grey-70": "var(--color-grey-70)",
        "color-grey-100": "var(--color-grey-100)",
        "color-grey-200": "var(--color-grey-200)",
        "color-grey-300": "var(--color-grey-300)",
        "color-grey-500": "var(--color-grey-500)",
        "color-grey-600": "var(--color-grey-600)",
        "cyan-50": "var(--color-cyan-50)",
        "cyan-100": "var(--color-cyan-100)",
        "cyan-100_50": "var(--color-cyan-100_50)",
        "cyan-500": "var(--color-cyan-500)",
        "cyan-700": "var(--color-cyan-700)",
        "warning-color": "var(--color-warning)",
        "warning-color_50": "var(--color-warning_50)",
        "main-icon": "var(--main-icon)"
      },
      fontSize: {
        "table-default": "var(--ag-font-size)"
      },
      borderRadius: {
        default: "8px"
      }
    }
  },
  plugins: []
}
