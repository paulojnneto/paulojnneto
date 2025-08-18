import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif" },
        body: { value: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }
      },
      colors: {
        brand: {
          50: { value: "#e8f1ff" },
          100: { value: "#c6d8ff" },
          200: { value: "#a2bfff" },
          300: { value: "#7ea6ff" },
          400: { value: "#5b8dff" },
          500: { value: "#4174e6" },
          600: { value: "#325ab4" },
          700: { value: "#244182" },
          800: { value: "#162851" },
          900: { value: "#091020" },
          950: { value: "#060a14" }
        }
      }
    },
    // necessário para usar colorPalette="brand"
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.50}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" }
        }
      }
    }
  }
})
