/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./layouts/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#2E2E2E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "bg-gray-900", "text-white", "text-xl", "container", "mx-auto",
    "grid", "gap-4", "px-4", "py-8", "max-w-7xl", "md:flex", "md:items-center",
    "rounded-lg", "shadow-lg", "hover:bg-gray-700", "transition"
  ]
};
