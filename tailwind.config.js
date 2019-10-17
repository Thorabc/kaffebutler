module.exports = {
  theme: {
    extend: {
      width: {
        '5/8': '62.5%',
      },
      letterSpacing: {
        'widest': '0.078em'
      },
      boxShadow: {
        inset: 'inset 0 -1px 0 0 #0f0f0f, inset 0 -3px 0 0 #d74e46',
      },
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px"
    },
    spacing: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.4375rem", // 7
      "3": "0.75rem",
      "4": "0.9375rem", // 15
      "5": "1.25rem",
      "6": "1.875rem", // 30
      "8": "2rem",
      "10": "2.8125rem", //45
      "12": "3rem",
      "16": "3.75rem", //60
      "20": "5rem",
      "24": "5.625rem", // 90
      "30": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "80": "20rem",
      "100": "25rem",
      "120": "30rem",
      "140": "35rem"
    },
    fontFamily: {
      apercu: ["apercu", "sans-serif"],
      "apercu-mono": ["apercu-mono", "sans-serif"]
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700
    },
    fontSize: {
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.0625rem", // 17px
      xl: "1.1875rem", // 19px
      xxl: "1.4375rem", // 23px
      "2xl": "1.5625rem", //25px
      "3xl": "2.125rem", // 34px
      "4xl": "3rem", // 48px
      "5xl": "3.75rem", // 60px
      "6xl": "5.625rem", // 90px
    },
    colors: {
      transparent: "transparent",

      black: "#0F0F0F",
      white: "#fff",

      grey: {
        400: "rgba(255,255,255,0.6)",
        500: "#cccccc",
        600: "#797979",
        800: "#232323"
      },
      green: {
        400: "#4BA171"
      },
      orange: {
        400: "#D74E46"
      },
      red: {
        400: "#F1554C",
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px"
    }
  },
  variants: {
    borderWidth: ["responsive", "hover"]
  },
  plugins: []
};