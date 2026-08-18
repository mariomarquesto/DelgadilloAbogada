// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module '*.css' {
  const content: string
  export default content
}

declare module '*.scss' {
  const content: string
  export default content
}

declare module '*.sass' {
  const content: string
  export default content
}

declare module '*.less' {
  const content: string
  export default content
}

// ✅ Tipos para import.meta.env
interface ImportMetaEnv {
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}