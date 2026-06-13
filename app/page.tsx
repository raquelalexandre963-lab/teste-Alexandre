export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-black">Alexandre.</h1>
        <a href="https://github.com/raquelalexandre963-lab" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-800">
          GitHub
        </a>
      </header>

      <section className="flex flex-col items-center text-center mt-10 px-6">
        <img src="/profile.jpeg" alt="Foto do Alexandre Cunha" className="w-64 h-64 rounded-full object-cover border-4 border-black shadow-lg" />
        
        <span className="mt-8 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
          Desenvolvedor | C & .NET & APIs
        </span>

        <h2 className="mt-6 text-5xl font-bold text-black">
          Olá, eu sou o<br/>
          Alexandre Cunha
        </h2>
      </section>

      <section className="max-w-5xl mx-auto mt-24 px-6">
        <h3 className="text-3xl font-bold mb-8">Desafio Super Trunfo em C - Estácio</h3>
        <div className="border border-zinc-200 rounded-xl p-6 bg-slate-50">
          <p className="text-zinc-700">
            Repositório com a evolução do projeto Super Trunfo desenvolvido na disciplina de Lógica de Programação.
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold">Níveis Completados</h4>
            <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-700">
              <li><strong>Nível Novato</strong>: Cadastro básico de cartas</li>
              <li><strong>Nível Aventureiro</strong>: Funções + Cálculos de densidade e PIB per capita <code className="bg-white px-1 rounded">n2_nc2.c</code></li>
              <li><strong>Nível Mestre</strong>: Em desenvolvimento</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold">Tecnologias</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-black text-white px-2 py-1 rounded">Linguagem C</span>
              <span className="text-xs bg-black text-white px-2 py-1 rounded">GCC Compiler</span>
              <span className="text-xs bg-black text-white px-2 py-1 rounded">Git/GitHub</span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold">Como compilar</h4>
            <pre className="mt-3 rounded-xl bg-white p-4 text-sm text-zinc-800 overflow-x-auto shadow-sm">
              <code>
                gcc n2_nc2.c -o super_trunfo
                ./super_trunfo
              </code>
            </pre>
          </div>

          <a href="https://github.com/Cursos-TI/desafio-l-gica-super-trunfo-raquelalexandre963-lab" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-blue-700 font-medium">
            Ver repositório no GitHub →
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 px-6">
        <h3 className="text-3xl font-bold mb-8">Certificações</h3>
        <div className="border border-zinc-200 rounded-xl p-6">
          <h4 className="font-semibold">Base de .NET e Desenvolvimento de APIs</h4>
          <p className="text-sm text-zinc-600">DIO + Microsoft | Junho 2026</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8">Contato</h3>
        <div className="rounded-[2rem] border border-green-500/40 bg-gradient-to-r from-emerald-50 via-white to-lime-100 p-8 shadow-[0_24px_80px_rgba(16,185,129,0.16)]">
          <p className="text-zinc-900 text-xl font-semibold">Vamos conversar sobre projetos ou trabalho?</p>
          <p className="mt-3 text-zinc-600">Estou disponível pelo WhatsApp ou email para responder rápido e agendar um papo.</p>
          <a href="https://wa.me/5521994479877" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 w-full max-w-md rounded-full bg-green-600 px-7 py-4 text-lg font-bold text-white shadow-xl shadow-green-500/30 transition duration-200 hover:bg-green-700 hover:shadow-green-600/30">
            <span className="text-2xl">💬</span>
            WhatsApp: +55 (21) 99447-9877
          </a>
          <a href="mailto:raquelalexandre963@gmail.com" className="mt-4 inline-flex items-center justify-center gap-3 w-full max-w-md rounded-full border border-green-600 bg-white px-7 py-4 text-lg font-bold text-green-700 shadow-sm transition duration-200 hover:bg-green-50">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M20 4H4C2.895 4 2 4.895 2 6v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2l-8 5-8-5h16zm-16 12V8.236l7.382 4.614c.191.12.425.12.616 0L20 8.236V18H4z" />
              </svg>
            </span>
            Email: raquelalexandre963@gmail.com
          </a>
          <p className="mt-4 text-sm text-zinc-500">Envie sua mensagem para meu email.</p>
        </div>
      </section>
    </main>
  )
}