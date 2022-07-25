const colors = {
  primary_blue: "#111827",
  secondary_blue: "#1f2937",
  primary_grey: "#929aa6",
  light: "#fcfcfc",
  body: "#fafafa",
  // body: '#e5e5e5'
};

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Nunito"', "sans-serif"],
      },
      colors: {
        ...colors,
      },
    },
    // screens: {
    //     'sm': {'min': '640px', 'max': '767px'},
    //     // => @media (min-width: 640px and max-width: 767px) { ... }
    //
    //     'md': {'min': '768px', 'max': '1023px'},
    //     // => @media (min-width: 768px and max-width: 1023px) { ... }
    //
    //     'lg': {'min': '1024px', 'max': '1279px'},
    //     // => @media (min-width: 1024px and max-width: 1279px) { ... }
    //
    //     'xl': {'min': '1280px', 'max': '1535px'},
    //     // => @media (min-width: 1280px and max-width: 1535px) { ... }
    //
    //     '2xl': {'min': '1536px'},
    //     // => @media (min-width: 1536px) { ... }
    // },
  },
  plugins: [],
};
