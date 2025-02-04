import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
        customGray: "#969696",
        customBlue: "#2F618A",
        greyBlue:'#2F618A',
        inkblue:'#3B2B98',
        darkCustomBlue:'#274760',
        hashgrey:'#333333',
        coursalgrey: '#ECECEC',
        benefitsblue:'#0C4E8C',
        blue:'#307BC4',
        backgroundblue:'#D2EAEF80',
        newwhite:'#2F618A1A',
        liteblack:'#555555',
        newblue:'#307BC4',
        hashBlack:'#274760',
        skyblue: '#D2EAEF33',
        blueprinted:"#274760"




      },
      opacity: {
        66: '0.66',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"], 
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        'size-22': "22px",
        'size-20':"20px",
        'size-18':"18px",
        'size-16' : "16px",
        'size-12':"12px"
      },
      lineHeight: {
        'custom-30': "30px", 
        'custom-20' :"20px"
      },
      fontWeight: {
        'custom-500': "500",
        'custom-400': "400" 
      },
    },
  },
  plugins: [],
} satisfies Config;
