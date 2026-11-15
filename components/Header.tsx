"use client";

import Link from "next/link";
import { Menu, Sprout, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [["Home", "/"], ["Shop", "/shop"], ["Our Story", "/our-story"], ["Custom Orders", "/custom-orders"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const menu = document.getElementById("mobile-menu");
      const focusable = menu?.querySelectorAll<HTMLElement>('button, a[href]');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; document.querySelector<HTMLElement>(".menu-button")?.focus(); };
  }, [open]);
  return <header className="site-header">
    <Link href="/" className="wordmark" aria-label="Generational Gems home"><Sprout aria-hidden="true"/><span>Generational <em>Gems</em></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-menu"><Menu aria-hidden="true" /></button>
    {open && <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site navigation">
      <button ref={closeRef} className="menu-close" onClick={() => setOpen(false)} aria-label="Close navigation"><X aria-hidden="true"/></button>
      <div className="mobile-menu-brand">Generational <em>Gems</em></div>
      <nav aria-label="Mobile navigation">{links.map(([label, href], i) => <Link style={{ "--i": i } as React.CSSProperties} key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
      <p>A little creativity, a lot of love.</p>
    </div>}
  </header>
}
