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

      <section className="max-w-5xl mx-auto mt-16 px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8">Certificações</h3>
        <div className="border border-zinc-200 rounded-xl p-6">
          <h4 className="font-semibold">Base de .NET e Desenvolvimento de APIs</h4>
          <p className="text-sm text-zinc-600">DIO + Microsoft | Junho 2026</p>
        </div>
      </section>
    </main>
  )
}