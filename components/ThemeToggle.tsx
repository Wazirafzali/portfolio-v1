"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const key = "appfolor-theme";
let preference: string | null = null;
function snapshot() {
  if (preference) return preference;
  try { return localStorage.getItem(key) === "light" ? "light" : "dark"; }
  catch { return "dark"; }
}
function subscribe(notify: () => void) {
  const sync = () => { preference = null; notify(); };
  window.addEventListener("storage", sync);
  window.addEventListener("appfolor-theme-change", notify);
  return () => {
    window.removeEventListener("storage", sync);
    window.removeEventListener("appfolor-theme-change", notify);
  };
}
export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, snapshot, () => "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#eaf1eb" : "#0a191f");
  }, [theme]);
  function toggle() {
    preference = theme === "dark" ? "light" : "dark";
    try { localStorage.setItem(key, preference); } catch { /* Still works without storage. */ }
    window.dispatchEvent(new Event("appfolor-theme-change"));
  }
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
    {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
  </button>;
}
