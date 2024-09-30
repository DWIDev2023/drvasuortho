/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "nav-highlight": "var(--nav-highlight-color)",
        highlight: "var(--highlight)",
        theme: "var(--theme)",
        "footer-highlight": "var(--footer-highlight)",
        banner: "var(--banner-bg)",
        header: "var(--header)",
        content: "var(--content)",
        content2: "var(--content2)",
        content3: "var(--content3)",
      },
      boxShadow: {
        "3xl": "1px 0px 5.3px 5px rgba(0, 0, 0, 0.07)",
        orthopedic: "0px 4px 4px 1px rgba(0, 0, 0, 0.05)",
        blog: "0px 0px 4.4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(90deg, #144D91 0%, #00B38D 100%)",
        "theme-gradient-hover":
          "linear-gradient(270deg, #144D91 0%, #00B38D 100%)",
        "theme-gradient2": "linear-gradient(90deg, #04072A 0%, #083192 100%)",
        "theme-gradient2-hover":
          "linear-gradient(270deg, #04072A 0%, #083192 100%)",
      },
      screens : {
        '3xl' : '1920px'
      }
    },
    container: {
      center: true,
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
