import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  cssVarsPrefix: "ck",
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      fonts: {
        heading: { value: "var(--font-bricolage)" },
        body: { value: "var(--font-bricolage)" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
    semanticTokens: {
      shadows: {
        custom: {
          value: {
            _dark:
              "0 0 8px rgba(255, 255, 255, 0.06), 0 0 24px rgba(255, 255, 255, 0.08)",
          },
        },
        right: {
          value: {
            _dark: "6px 0 12px rgba(255, 255, 255, 0.08)",
          }, 
        }
      },
    },
  },
});

export default createSystem(defaultConfig, config);
