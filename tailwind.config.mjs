/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/home-bg.jpg')",
        "explore-beach": "url('/places/explore-beach.jpg')",
      },
      fontFamily: {
        sans: ["Montserrat", "Poppins"],
      },
      textColor: {
        body: "#B3B3B3",
      },
      color: {
        "light-shadow": "#0009",
        container: "#141414",
      },
      backgroundColor: {
        container: "#141414",
      },
    },
  },
  plugins: [],
};
