import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

const eslintConfig = [
  {
    ignores: [".next/**", ".next-build*/**", "out/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
]

export default eslintConfig
