"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: t.nav.home, id: "home" },
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#skills", label: t.nav.skills, id: "skills" },
    { href: "#projects", label: t.nav.projects, id: "projects" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const ids = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const id of [...ids].reverse()) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
        >
          Erick<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-foreground hover:bg-surface-elevated"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-surface-elevated hover:border-accent/40 transition-all duration-200 text-xs font-semibold tracking-wider"
          >
            <span className={lang === "en" ? "text-accent" : "text-muted"}>EN</span>
            <span className="text-muted/40">/</span>
            <span className={lang === "pt" ? "text-accent" : "text-muted"}>PT</span>
          </button>
        </div>
      </div>
    </header>
  );
}
