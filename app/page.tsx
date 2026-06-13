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
        <div className="w-64 h-64 bg-blue-600 rounded-full" />
        
        <span className="mt-8 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
          Desenvolvedor | C & .NET & APIs
        </span>

        <h2 className="mt-6 text-5xl font-bold text-black">
          Olá, eu sou o<br/>
          Alexandre Cunha
        </h2>
      </section>

      <section className="max-w-5xl mx-auto mt-24 px-6">
        <h3 className="text-3xl font-bold mb-8 dark:text-white">Projetos</h3>
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h4 className="text-xl font-semibold dark:text-white">Super Trunfo em C</h4>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Jogo de cartas Super Trunfo desenvolvido em C. Trabalha lógica de comparação, structs e manipulação de dados via terminal.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">C</span>
            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Lógica</span>
          </div>
          <a href="https://github.com/Cursos-TI/desafio-l-gica-super-trunfo-raquelalexandre963-lab" 
             className="inline-block mt-6 text-blue-700 font-medium">Ver código →</a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8 dark:text-white">Certificações</h3>
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h4 className="font-semibold dark:text-white">Base de .NET e Desenvolvimento de APIs</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">DIO + Microsoft | Junho 2026</p>
        </div>
      </section>
    </main>
  )
}