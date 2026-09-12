"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"links" | "projects" | "contact">("links");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cheerCount, setCheerCount] = useState<number>(42);
  const [isCheered, setIsCheered] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleCopyProfile = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      showToast("🔗 프로필 링크가 클립보드에 복사되었습니다!");
    }
  };

  const handleCopyEmail = (email: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(email);
      showToast("✉️ 이메일 주소가 복사되었습니다: " + email);
    }
  };

  const handleCheer = () => {
    setCheerCount((prev) => prev + 1);
    setIsCheered(true);
    setTimeout(() => setIsCheered(false), 400);
    showToast("🔥 소중한 응원 감사합니다! (+1)");
  };

  const profileLinks = [
    {
      title: "GitHub 코드 저장소",
      url: "https://github.com",
      icon: "👾",
      category: "CODE REPO",
      desc: "오픈소스 기여, 실험적 프로토타입 및 프로젝트 소스",
      accent: "hover:bg-amber-100",
      tagColor: "bg-amber-300",
    },
    {
      title: "기술 블로그 (DevLog)",
      url: "https://velog.io",
      icon: "✍️",
      category: "ARTICLES",
      desc: "프론트엔드 성능 최적화와 인터랙션 엔지니어링 기록",
      accent: "hover:bg-emerald-100",
      tagColor: "bg-emerald-300",
    },
    {
      title: "인터랙티브 포트폴리오",
      url: "#portfolio",
      icon: "🚀",
      category: "PORTFOLIO",
      desc: "선별된 주요 프로젝트 상세 케이스 스터디 및 시연",
      accent: "hover:bg-purple-100",
      tagColor: "bg-purple-300",
    },
    {
      title: "이력서 & 경력 기술서",
      url: "#resume",
      icon: "📄",
      category: "RESUME",
      desc: "업무 이력, 사용 기술 스택 및 프로덕트 성과 지표",
      accent: "hover:bg-sky-100",
      tagColor: "bg-sky-300",
    },
  ];

  const projects = [
    {
      title: "MyLink Neo (현재 프로젝트)",
      badge: "✦ ACTIVE",
      badgeColor: "bg-yellow-300",
      desc: "네오브루탈리즘 특유의 고대비와 레트로 인터랙션을 적용한 차세대 올인원 링크 허브 플랫폼",
      tech: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript"],
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      title: "PulseFlow AI Dashboard",
      badge: "🚀 V2.0",
      badgeColor: "bg-lime-300",
      desc: "개발팀의 워크플로우와 커밋 데이터를 실시간 시각화하고 인사이트를 도출하는 AI 대시보드",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      title: "BrutalUI Design System",
      badge: "📦 OSS",
      badgeColor: "bg-pink-300",
      desc: "선명한 외곽선과 햅틱 인터랙션을 지원하는 경량 리액트 브루탈리즘 UI 컴포넌트 키트",
      tech: ["React", "Tailwind CSS", "NPM Package"],
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
  ];

  const skills = [
    { name: "React / Next.js", color: "bg-sky-200" },
    { name: "TypeScript", color: "bg-amber-200" },
    { name: "Tailwind CSS", color: "bg-emerald-200" },
    { name: "UI/UX Engineering", color: "bg-purple-200" },
    { name: "Full-Stack Proto", color: "bg-rose-200" },
  ];

  return (
    <div className="relative min-h-screen py-6 sm:py-10 md:py-14 px-3 sm:px-6 md:px-8 flex flex-col items-center overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 sm:top-6 z-50 animate-bounce max-w-[90vw]">
          <div className="neo-border-thick bg-yellow-300 text-black px-4 sm:px-5 py-2 sm:py-2.5 font-black text-xs sm:text-sm neo-shadow-lg flex items-center gap-2">
            <span>✦</span>
            <span className="truncate">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Container - scales adaptively from mobile to desktop */}
      <div className="w-full max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Top Floating Utility Bar */}
        <header className="w-full flex items-center justify-between">
          <div className="neo-border bg-black text-white px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-black tracking-widest uppercase neo-shadow-sm">
            ⚡ MYLINK.HY
          </div>
          <button
            onClick={handleCopyProfile}
            type="button"
            className="neo-border bg-white hover:bg-yellow-200 text-black px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-black neo-shadow-sm neo-press flex items-center gap-1.5 cursor-pointer"
          >
            <span>🔗</span>
            <span>프로필 공유</span>
          </button>
        </header>

        {/* Profile Hero Card - Responsive layout: stacked on mobile, dual column on tablet/desktop */}
        <section className="relative w-full bg-white neo-border-thick neo-shadow-xl p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-10">
          {/* Decorative Corner Badges */}
          <div className="absolute -top-3 right-2 sm:-right-3 neo-border bg-yellow-400 px-2.5 sm:px-3 py-0.5 text-[10px] sm:text-[11px] font-black uppercase rotate-3 shadow-[2px_2px_0px_#000]">
            ★ VERIFIED DEV
          </div>
          <div className="absolute -top-3 left-2 sm:-left-2 neo-border bg-pink-400 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-black -rotate-6 shadow-[2px_2px_0px_#000]">
            2026 VER.
          </div>

          {/* Left Column (Avatar + Stats) */}
          <div className="flex flex-col items-center shrink-0 mb-5 md:mb-0 md:w-56 lg:w-64">
            <div className="relative mb-3 sm:mb-4 mt-2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 neo-border-thick bg-gradient-to-tr from-amber-300 to-yellow-200 neo-shadow-lg flex items-center justify-center text-5xl md:text-6xl select-none">
                🕶️
              </div>
              {/* Quirky floating sticker */}
              <span className="absolute -bottom-2 -right-2 sm:-right-3 neo-border bg-lime-400 text-black text-[10px] sm:text-[11px] font-black px-2 py-0.5 rotate-6 shadow-[2px_2px_0px_#000]">
                LV.99 🚀
              </span>
            </div>

            {/* Quick Metrics Bar (Stacked underneath avatar on desktop) */}
            <div className="w-full grid grid-cols-3 gap-1.5 sm:gap-2 mt-2">
              <div className="bg-violet-100 neo-border p-2 sm:p-2.5 text-center neo-shadow-sm">
                <div className="text-base sm:text-lg md:text-xl font-black text-black">5+</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase">Years</div>
              </div>
              <div className="bg-lime-100 neo-border p-2 sm:p-2.5 text-center neo-shadow-sm">
                <div className="text-base sm:text-lg md:text-xl font-black text-black">24+</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase">Projects</div>
              </div>
              <div className="bg-amber-100 neo-border p-2 sm:p-2.5 text-center neo-shadow-sm">
                <div className="text-base sm:text-lg md:text-xl font-black text-black">1.2k+</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase">Commits</div>
              </div>
            </div>
          </div>

          {/* Right Column (Info, Bio, Skills) */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-200 neo-border text-xs font-black text-black neo-shadow-sm mb-3 -rotate-1">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full border border-black animate-ping" />
              <span>OPEN FOR OPPORTUNITIES</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-1.5">
              홍길동
            </h1>
            <div className="inline-block bg-neutral-100 neo-border px-3 py-0.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider mb-3.5">
              Frontend Engineer · UI/UX Maker
            </div>

            {/* Bio Description */}
            <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-medium max-w-xl break-keep mb-5">
              사용자 경험(UX)과 기술적 완성도에 집착하는 엔지니어입니다.
              거친 아이디어를{" "}
              <span className="bg-yellow-200 px-1 border-b-2 border-black font-bold">
                견고하고 직관적인 프로덕트
              </span>
              로 구현하는 것을 즐깁니다.
            </p>

            {/* Skills Stickers */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`${skill.color} neo-border px-2.5 py-1 text-xs font-black text-black shadow-[2px_2px_0px_#000] hover:-translate-y-0.5 transition-transform`}
                >
                  ✦ {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Navigation - Responsive buttons */}
        <nav className="w-full grid grid-cols-3 gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab("links")}
            type="button"
            className={`py-2.5 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-black neo-border transition-all cursor-pointer ${
              activeTab === "links"
                ? "bg-black text-white neo-shadow translate-x-[-1px] translate-y-[-1px]"
                : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000]"
            }`}
          >
            🔗 주요 링크
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            type="button"
            className={`py-2.5 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-black neo-border transition-all cursor-pointer ${
              activeTab === "projects"
                ? "bg-black text-white neo-shadow translate-x-[-1px] translate-y-[-1px]"
                : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000]"
            }`}
          >
            💻 프로젝트
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            type="button"
            className={`py-2.5 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-black neo-border transition-all cursor-pointer ${
              activeTab === "contact"
                ? "bg-black text-white neo-shadow translate-x-[-1px] translate-y-[-1px]"
                : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000]"
            }`}
          >
            📬 커피챗/연락
          </button>
        </nav>

        {/* Tab 1: 주요 링크 (Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop) */}
        {activeTab === "links" && (
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {profileLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group w-full bg-white neo-border neo-shadow neo-press p-3.5 sm:p-4 flex items-center justify-between text-black transition-all ${item.accent}`}
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-neutral-100 neo-border flex items-center justify-center text-xl sm:text-2xl group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap">
                      <span className="text-sm sm:text-base font-black text-black truncate">
                        {item.title}
                      </span>
                      <span
                        className={`${item.tagColor} text-[9px] sm:text-[10px] font-black px-1.5 py-0.2 neo-border shrink-0`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 font-medium truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black text-white neo-border flex items-center justify-center font-black text-xs sm:text-sm group-hover:bg-yellow-400 group-hover:text-black transition-colors shrink-0 ml-2">
                  ↗
                </div>
              </a>
            ))}
          </section>
        )}

        {/* Tab 2: 프로젝트 쇼케이스 (Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop) */}
        {activeTab === "projects" && (
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="w-full bg-white neo-border neo-shadow p-4 sm:p-5 flex flex-col justify-between gap-3 text-left"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-base sm:text-lg font-black text-black">
                      {proj.title}
                    </h3>
                    <span
                      className={`${proj.badgeColor} neo-border px-2 py-0.5 text-[10px] sm:text-xs font-black shadow-[2px_2px_0px_#000]`}
                    >
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-neutral-100 border border-black text-[10px] sm:text-[11px] font-bold px-2 py-0.5 text-neutral-800"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-dashed border-black">
                    <a
                      href={proj.demoUrl}
                      className="flex-1 text-center bg-yellow-300 hover:bg-yellow-400 neo-border py-1.5 text-xs font-black text-black neo-shadow-sm neo-press"
                    >
                      라이브 시연 ↗
                    </a>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-white hover:bg-neutral-100 neo-border py-1.5 text-xs font-black text-black neo-shadow-sm neo-press"
                    >
                      GitHub 소스 ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Tab 3: 커피챗 & 연락 (Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop) */}
        {activeTab === "contact" && (
          <section className="w-full flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Direct Email Card */}
              <div className="w-full bg-cyan-100 neo-border-thick neo-shadow p-4 sm:p-5 flex flex-col justify-between gap-3 text-left">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-black bg-black text-white px-2 py-0.5">
                      DIRECT EMAIL
                    </span>
                    <span className="text-xl">✉️</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-black break-all">
                    contact@example.com
                  </h3>
                  <p className="text-xs text-neutral-700 font-medium">
                    프로젝트 제안, 채용 논의, 외주 및 협업 문의는 메일로 언제든 편하게 연락주세요.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleCopyEmail("contact@example.com")}
                    className="flex-1 bg-white hover:bg-yellow-200 neo-border py-2 text-xs font-black neo-shadow-sm neo-press text-black cursor-pointer"
                  >
                    📋 이메일 복사
                  </button>
                  <a
                    href="mailto:contact@example.com"
                    className="flex-1 text-center bg-black hover:bg-neutral-800 text-white neo-border py-2 text-xs font-black neo-shadow-sm neo-press"
                  >
                    메일 보내기 ↗
                  </a>
                </div>
              </div>

              {/* Coffee Chat Card */}
              <div className="w-full bg-pink-100 neo-border neo-shadow p-4 sm:p-5 flex flex-col justify-between gap-2 text-left">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-black bg-pink-400 text-black neo-border px-2 py-0.5">
                      ☕ COFFEE CHAT
                    </span>
                    <span className="text-xl">🍪</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-black">
                    가벼운 기술 토크나 커피챗도 환영합니다!
                  </h4>
                  <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                    프론트엔드 최신 생태계, 디자인 시스템, 아키텍처 고민 등 가벼운 온라인/오프라인 커피챗을 제안해주세요.
                  </p>
                </div>
                <div className="inline-block self-start bg-white neo-border px-3 py-1 text-[11px] font-bold text-neutral-800 mt-2">
                  📍 온/오프라인 모두 가능
                </div>
              </div>
            </div>

            {/* Social Grid (2 cols on mobile, 4 cols on sm/tablet/desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              {[
                { name: "GitHub", icon: "🐙", url: "https://github.com", bg: "bg-white" },
                { name: "Twitter / X", icon: "🐦", url: "https://x.com", bg: "bg-white" },
                { name: "LinkedIn", icon: "💼", url: "https://linkedin.com", bg: "bg-white" },
                { name: "Velog", icon: "📗", url: "https://velog.io", bg: "bg-white" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.bg} neo-border neo-shadow-sm neo-press p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 hover:bg-yellow-200 transition-colors`}
                >
                  <span className="text-xl sm:text-2xl">{s.icon}</span>
                  <span className="text-xs font-black text-black">{s.name}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Interactive Cheer Card (Responsive flex layout) */}
        <section className="w-full bg-yellow-300 neo-border-thick neo-shadow p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="inline-block bg-black text-yellow-300 text-[9px] sm:text-[10px] font-black px-2 py-0.5 uppercase mb-1">
              ✦ COMMUNITY CHEER
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-black text-black">
              프로필이 맘에 드셨다면 응원해주세요!
            </h3>
            <p className="text-xs text-neutral-800 font-medium">
              현재 <span className="font-black text-black underline">{cheerCount}명</span>이 응원을 보냈습니다.
            </p>
          </div>
          <button
            onClick={handleCheer}
            type="button"
            className={`w-full sm:w-auto justify-center bg-white hover:bg-neutral-100 text-black neo-border neo-shadow neo-press px-5 py-2.5 font-black text-xs sm:text-sm flex items-center gap-2 cursor-pointer shrink-0 transition-transform ${
              isCheered ? "scale-105 sm:scale-110 bg-rose-200" : ""
            }`}
          >
            <span className="text-base sm:text-lg">🔥</span>
            <span>응원하기 +1</span>
          </button>
        </section>

        {/* Brutalist Footer */}
        <footer className="w-full pt-4 pb-8 flex flex-col items-center gap-2 text-center text-xs font-bold text-neutral-600">
          <div className="flex items-center gap-2 font-mono text-[11px] text-black">
            <span>✦</span>
            <span>NEOBRUTALISM DESIGN SYSTEM</span>
            <span>✦</span>
          </div>
          <p className="text-neutral-700">
            © 2026 홍길동 (Hong Gildong). Crafted with Passion & Bold Shadows.
          </p>
        </footer>
      </div>
    </div>
  );
}
