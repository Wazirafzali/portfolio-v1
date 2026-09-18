"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const fragments = [
  ["experience.tsx", "const idea = imagine();", "export function Experience() {", "  return <SomethingGreat />;", "}"],
  ["interface.swift", "struct Experience: View {", "  var body: some View {", "    Design.thatFeelsRight()", "  }", "}"],
  ["app.kt", "@Composable", "fun NextChapter() {", "  Ideas.intoExperiences()", "}"],
];

export default function CodeAtmosphere() {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(element);
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <div ref={root} className="code-atmosphere" data-paused={paused || !visible}>
    <div className="code-scenery" aria-hidden="true">
      <div className="code-halo" />
      <div className="code-grid" />
      {fragments.map(([title, ...lines], index) => <div key={title} className={`code-fragment code-fragment-${index}`}>
        <span className="code-filename"><i />{title}</span>
        <pre>{lines.map((line, number) => <span key={number}><b>{String(number + 1).padStart(2, "0")}</b>{line}{number === 2 && <i className="code-cursor" />}</span>)}</pre>
      </div>)}
      <div className="code-signal signal-one" /><div className="code-signal signal-two" />
    </div>
    <button type="button" className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)} aria-label={paused ? "Resume background animation" : "Pause background animation"}>
      {paused ? <Play size={12} /> : <Pause size={12} />}<span>{paused ? "Motion paused" : "Pause motion"}</span>
    </button>
  </div>;
}
