/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Windows often uses uppercase extensions; Vite/client only declares *.png lowercase.
declare module '*.PNG' {
  const src: string;
  export default src;
}
