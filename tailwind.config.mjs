/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        customPrimary: "rgb(99, 102, 241)",
        customSecondary: "rgb(161, 163, 247)",
        customDarkBg1: "rgb(31, 32, 35)",
        customDarkBg2: "rgb(38, 39, 43)",
        customDarkBg3: "rgb(48, 49, 54)",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "#4a46bc",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
        
        customYellowBg: "#FFF8ED",

        primary: {
          '50': '#f0f4fd',
          '100': '#e3eafc',
          '200': '#ccd7f9',
          '300': '#adbcf4',
          '400': '#8c99ed',
          '500': '#7178e3',
          '600': '#6563d9',
          '700': '#4a46bc',
          '800': '#3d3b98',
          '900': '#363779',
          },
      secondary: {
          '50': '#fff8ed',
          '100': '#fff0d4',
          '200': '#ffdda9',
          '300': '#ffbb5c',
          '400': '#fea039',
          '500': '#fc8313',
          '600': '#ed6709',
          '700': '#c54e09',
          '800': '#9c3d10',
          '900': '#7e3410',
          },
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
	plugins: [],
}
