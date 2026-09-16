import LogoMark from "@/components/LogoMark";
import { ArrowUpRight, Check, Play, Plus } from "lucide-react";

export default function ProductVisual({ variant = "studio" }: { variant?: "studio" | "mobile" | "video" | "dashboard" }) {
  if (variant === "mobile") return (
    <div className="product-visual visual-mobile" aria-hidden="true">
      <div className="mobile-orbit" />
      <div className="mini-phone phone-back"><div className="phone-notch" /><span className="phone-label">YOUR EVERYDAY, SIMPLIFIED</span><div className="phone-ring"><Check size={30} /></div><strong>All set.</strong><p>A little less effort.<br />A lot more possibility.</p><div className="phone-button">Back to your day <ArrowUpRight size={14} /></div></div>
      <div className="mini-phone phone-front"><div className="phone-notch" /><span className="phone-label">GOOD MORNING</span><strong>Make room<br />for what matters.</strong><div className="phone-feature"><span>Today, on your terms.</span><div className="abstract-sun" /></div><div className="phone-row"><span>Your next appointment</span><Plus size={16} /></div><div className="phone-button">Explore services <ArrowUpRight size={14} /></div></div>
      <span className="visual-caption">MOBILE INTERFACE CONCEPT</span>
    </div>
  );
  if (variant === "video") return (
    <div className="product-visual visual-video" aria-hidden="true"><div className="video-poster"><span>FRAME / 001</span><strong>Make<br />your<br /><em>move.</em></strong><div className="poster-orbit" /><div className="play-disc"><Play fill="currentColor" size={20} /></div></div><div className="edit-timeline"><span>00:00:12:08</span><div className="timeline-track"><i /><i /><i /><i /></div><div className="audio-track" /></div><span className="visual-caption">VIDEO DIRECTION CONCEPT</span></div>
  );
  if (variant === "dashboard") return (
    <div className="product-visual visual-dashboard" aria-hidden="true"><div className="dashboard-window"><div className="window-top"><span className="window-dots">● ● ●</span><span>Workspace overview</span><span>↗</span></div><div className="dashboard-body"><aside>Overview<br /><span>Activity</span><br /><span>Reports</span><br /><span>Settings</span></aside><div><span className="dash-kicker">YOUR WORK, IN FOCUS</span><strong>A clearer picture.</strong><div className="dash-stat-row"><i>Overview<b>24</b></i><i>In progress<b>08</b></i><i>Completed<b>16</b></i></div><div className="bar-chart">{[30,55,40,70,52,83,64,93,76,100,85,115].map((height,i)=><span key={i} style={{height}} />)}</div></div></div></div><span className="visual-caption">DASHBOARD INTERFACE CONCEPT · SAMPLE DATA</span></div>
  );
  return (
    <div className="product-visual visual-studio" aria-hidden="true"><div className="studio-orbit" /><div className="studio-window"><div className="window-top"><span className="window-dots">● ● ●</span><span>appfolor / digital studio</span><ArrowUpRight size={12} /></div><div className="studio-preview"><div className="preview-nav"><span><LogoMark size={20} />AppFolor</span><span>Work &nbsp; Studio &nbsp; Contact</span></div><span className="preview-eyebrow">SMALL DETAILS. BIG POSSIBILITIES.</span><strong>Made to work.<br /><em>Built to matter.</em></strong><div className="preview-bottom"><span className="preview-button">Explore the possibilities ↗</span><div className="preview-monogram"><LogoMark size={98} /></div></div><div className="preview-lines"><span>Web experiences</span><span>Mobile products</span><span>Visual stories</span></div></div></div><div className="floating-tag"><span /> Ideas, brought to life.</div><span className="visual-caption">APPFOLOR · BRAND EXPLORATION</span></div>
  );
}
