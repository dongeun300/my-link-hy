export default function Home() {
  const profileLinks = [
    { title: "GitHub 프로필", url: "https://github.com", icon: "💻", desc: "코딩 공부 및 프로젝트 기록" },
    { title: "개발 블로그", url: "#", icon: "✍️", desc: "배운 내용과 생각 정리" },
    { title: "인스타그램", url: "#", icon: "📸", desc: "대학 생활과 일상" },
    { title: "이메일 문의", url: "mailto:contact@example.com", icon: "✉️", desc: "문의 및 협업 제안" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-4 py-16 text-slate-800">
      <main className="w-full max-w-md flex flex-col items-center text-center">
        {/* 프로필 아바타 카드 */}
        <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 p-8 shadow-xl shadow-indigo-100/50 flex flex-col items-center">
          {/* 아바타 영역 */}
          <div className="relative mb-5">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 flex items-center justify-center text-white text-3xl font-bold shadow-md shadow-indigo-200 ring-4 ring-white">
              홍
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="Online" />
          </div>

          {/* 이름 및 역할 */}
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">
            홍길동
          </h1>
          <p className="text-xs font-semibold tracking-wide uppercase text-indigo-600 mb-3">
            Vibe Coding Learner · Student
          </p>

          {/* 소개글 */}
          <p className="text-slate-600 text-sm leading-relaxed break-keep mb-6">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생 입니다.
          </p>

          {/* 태그 목록 */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
              🌱 성장 중
            </span>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
              ✨ 바이브 코딩
            </span>
            <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-medium">
              🎓 대학생
            </span>
          </div>

          {/* 링크 목록 */}
          <div className="w-full flex flex-col gap-2.5">
            {profileLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/70 px-4 py-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {item.desc}
                    </div>
                  </div>
                </div>
                <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-indigo-600 text-xs">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
