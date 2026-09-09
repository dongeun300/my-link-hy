export default function Home() {
  const profileLinks = [
    { title: "GitHub 프로필", url: "https://github.com", icon: "💻", desc: "오픈소스 기여 및 프로젝트 코드 저장소" },
    { title: "기술 블로그", url: "#", icon: "✍️", desc: "개발 트러블슈팅과 배운 점 기록" },
    { title: "포트폴리오 / 이력서", url: "#", icon: "📄", desc: "주요 프로젝트 및 기술 스택 소개" },
    { title: "이메일 문의", url: "mailto:contact@example.com", icon: "✉️", desc: "협업 제안 및 커피챗 요청" },
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
            Frontend Developer · Web Engineer
          </p>

          {/* 소개글 */}
          <p className="text-slate-600 text-sm leading-relaxed break-keep mb-6">
            사용자 경험(UX)과 깔끔한 클린 코드를 지향하는 프론트엔드 개발자입니다. 일상의 크고 작은 불편을 기술로 해결하며, 지속 가능한 서비스를 만드는 것에 열정을 갖고 있습니다.
          </p>

          {/* 태그 목록 */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
              💻 Frontend
            </span>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
              ✨ 클린 코드
            </span>
            <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-medium">
              🚀 문제 해결
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
