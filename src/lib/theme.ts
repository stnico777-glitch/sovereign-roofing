export const THEME_STORAGE_KEY = "sovereign-theme";

export type ResolvedTheme = "light" | "dark";

/** Inline in `<head>` so preference applies before paint (avoids flash). */
export function getThemeBootstrapScript(): string {
  const key = JSON.stringify(THEME_STORAGE_KEY);
  return `(()=>{try{var k=${key};var t=localStorage.getItem(k);if(t==="dark")document.documentElement.classList.add("dark");else{document.documentElement.classList.remove("dark");}}catch(e){}})();`;
}
