/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#18181b",
          "200": "#09090b",
          "300": "rgba(24, 24, 27, 0.5)",
          "400": "rgba(255, 255, 255, 0)",
          "500": "rgba(255, 255, 255, 0.1)",
        },
        dimgray: "#71717a",
        darkgray: {
          "100": "#a1a1aa",
          "200": "rgba(161, 161, 170, 0.8)",
        },
        gainsboro: "#e4e4e7",
        darkturquoise: "rgba(34, 211, 238, 0.1)",
        steelblue: "#0891b2",
        lightgray: "#d4d4d8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      "sm-1": "13.1px",
      "smi-9": "12.9px",
      "sm-9": "13.9px",
      "mid-9": "17.9px",
      "12xl-9": "31.9px",
      "7xl": "26px",
      lgi: "19px",
      "29xl-2": "48.2px",
      "20xl": "39px",
      "10xl": "29px",
      "lgi-8": "19.8px",
      "52xl-9": "71.9px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
