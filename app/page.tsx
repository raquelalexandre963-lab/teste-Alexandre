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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-200 rounded-xl p-6">
            <h4 className="font-semibold">Base de .NET e Desenvolvimento de APIs</h4>
            <p className="text-sm text-zinc-600">DIO + Microsoft | Junho 2026</p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <img src="/PZDSHGIR-thumb.svg" alt="Miniatura do certificado" className="w-28 h-40 md:w-36 md:h-48 object-cover rounded" />

            <div className="flex-1">
              <h4 className="font-semibold">Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes</h4>
              <p className="text-sm text-zinc-600">DIO | 13 de junho de 2026 • Certificado atualizado</p>
              <div className="mt-3 flex items-center gap-3">
                <a href="/PZDSHGIR.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Ver certificado (PDF)
                </a>
                <a href="/PZDSHGIR.pdf" download className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded bg-white text-zinc-800 hover:bg-zinc-50">
                  Baixar
                </a>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <h4 className="font-semibold">Certificado em Lógica de Programação e Estruturas em C</h4>
            <p className="text-sm text-zinc-600">Estácio | Junho 2026</p>
            <p className="mt-4 text-zinc-700">Prática com funções, laços e estruturas de dados em C para desenvolver projetos reais, incluindo o jogo Super Trunfo.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-600">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9z" />
                </svg>
              </span>
              PDF disponível mediante solicitação.
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8">Contato</h3>
        <div className="rounded-[2rem] border border-green-500/40 bg-gradient-to-r from-emerald-50 via-white to-lime-100 p-8 shadow-[0_24px_80px_rgba(16,185,129,0.16)]">
          <p className="text-zinc-900 text-xl font-semibold">Vamos conversar sobre projetos ou trabalho?</p>
          <p className="mt-3 text-zinc-600">Meu WhatsApp está atualizado e meu e-mail também. Use qualquer um dos dois para entrar em contato rápido.</p>
          <a href="https://wa.me/5521994479877" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 w-full max-w-md rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-7 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-400/30 transition duration-200 hover:from-emerald-700 hover:to-lime-600 hover:shadow-emerald-500/40">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 fill-current">
                <path d="M16.78 7.22a7.91 7.91 0 00-11.21 0 7.93 7.93 0 000 11.21l-.5 2.2 2.26-.59a7.95 7.95 0 004.7 1.45h.01c4.41 0 8-3.59 8-8a7.95 7.95 0 00-2.75-5.17zm-1.9 10.04c-.34.97-1.3 1.65-2.4 1.8a5.61 5.61 0 01-4.94-1.65l-.35-.35-1.31.34.35-1.33-.35-.35a5.58 5.58 0 011.68-8.8 5.61 5.61 0 018.36 1.68 5.6 5.6 0 01-.01 5.34zm-1.31-3.86c-.17-.3-.6-.49-1.25-.85-.65-.35-1.22-.78-1.72-1.18-.5-.41-.83-.46-1.2-.26-.37.2-1.42.82-1.74 1.02-.32.2-.55.3-.79.3-.24 0-.53-.03-.82-.07-.28-.05-.68-.25-1.04-.73-.36-.48-1.25-1.21-1.25-2.95 0-1.74 1.22-2.86 1.39-3.06.17-.2.38-.21.52-.21.14 0 .3 0 .46 0 .15 0 .36-.06.56.41.2.48.67 1.65.73 1.77.06.12.1.26.02.42-.08.16-.13.27-.26.42-.13.14-.27.31-.39.47-.19.28-.4.57-.18.96.22.39.95 1.56 2.05 2.5 1.42 1.21 2.17 1.35 2.56 1.19.39-.16 1.24-.5 1.42-.99.18-.49.18-.9.13-.99-.05-.09-.21-.15-.45-.26z" />
              </svg>
            </span>
            WhatsApp: +55 (21) 99447-9877
          </a>
          <a href="mailto:raquelalexandre963@gmail.com" className="mt-4 inline-flex items-center justify-center gap-3 w-full max-w-md rounded-full border border-green-600 bg-white px-7 py-4 text-lg font-bold text-green-700 shadow-sm transition duration-200 hover:bg-green-50">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 fill-current">
                <path d="M20 4H4C2.895 4 2 4.895 2 6v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2l-8 5-8-5h16zm-16 12V8.236l7.382 4.614c.191.12.425.12.616 0L20 8.236V18H4z" />
              </svg>
            </span>
            Email: raquelalexandre963@gmail.com
                 </a>
        <p className="mt-4 text-sm text-zinc-500">Envie sua mensagem para mim.</p>
      </div>
    </section>
  </main>
  )
} 