/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/checkout/checkout.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF3811",
          secondary: "#c3ea69",
          accent: "#4163db",
          neutral: "#2A1D2F",
          "base-100": "#F5F5F5",
          info: "#7895ED",
          success: "#0E5D47",
          warning: "#F0AB0A",
          error: "#FF3811",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
