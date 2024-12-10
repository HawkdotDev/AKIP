/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.25rem",
              fontWeight: "800",
              color: "#1F2937", // Dark Gray
              marginBottom: "1rem",
            },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "700",
              color: "#374151", // Medium Gray
              marginBottom: "0.75rem",
            },
            h3: {
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#4B5563", // Lighter Gray
              marginBottom: "0.5rem",
            },
            p: {
              marginTop: "0.5rem",
              marginBottom: "1rem",
              lineHeight: "1.75",
              color: "#6B7280", // Text Gray
            },
            img: {
              borderRadius: "0.5rem",
              border: "1px solid #E5E7EB", // Light Gray Border
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle Shadow
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            },
            blockquote: {
              fontStyle: "italic",
              borderLeftWidth: "4px",
              borderLeftColor: "#4F46E5", // Indigo Border
              color: "#374151",
              paddingLeft: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            a: {
              color: "#2563EB", // Blue for Links
              textDecoration: "underline",
              "&:hover": {
                color: "#1E40AF", // Darker Blue on Hover
              },
            },
          },
        },
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'xxl': "1920px",

    },
  },
  plugins: [typography],
};
