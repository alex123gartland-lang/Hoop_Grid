export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a2e] text-white flex flex-col items-center">
      <header className="w-full py-6 px-4 flex flex-col items-center border-b border-white/10">
        <h1 className="text-4xl font-black tracking-tight text-orange-400">
          🏀 HoopGrid
        </h1>
        <p className="text-white/60 mt-1 text-sm">
          Daily Basketball Trivia Games
        </p>
      </header>

      <section className="w-full max-w-2xl px-4 mt-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
          Daily Games
        </h2>
        <div className="flex flex-col gap-4">

          <a href="/tenable" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-4 transition-all">
            <span className="text-4xl">🎯</span>
            <div>
              <h3 className="text-lg font-bold text-orange-400">TenaBall</h3>
              <p className="text-white/50 text-sm">Name the top 10 answers to today's basketball question</p>
            </div>
          </a>

          <a href="/connections" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-4 transition-all">
            <span className="text-4xl">🔗</span>
            <div>
              <h3 className="text-lg font-bold text-orange-400">Connections</h3>
              <p className="text-white/50 text-sm">Find the 4 groups linking 16 basketball items</p>
            </div>
          </a>

        </div>
      </section>
    </main>
  )
}
