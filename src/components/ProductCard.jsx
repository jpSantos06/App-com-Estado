export default function ProductCard({ produto, onAdicionar, adicionado }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className={`flex h-36 items-center justify-center rounded-xl text-6xl ${produto.fundo}`} aria-hidden="true">{produto.emoji}</div>
      <div className="mt-4 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">{produto.categoria}</p>
        <h3 className="mt-1 text-lg font-bold text-slate-900">{produto.nome}</h3>
        <p className="mt-1 text-sm text-slate-500">{produto.descricao}</p>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-lg font-extrabold text-slate-900">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        <button onClick={() => onAdicionar(produto)} className={`rounded-lg px-3 py-2 text-sm font-bold text-white transition ${adicionado ? 'bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
          {adicionado ? '✓ Adicionado' : '+ Adicionar'}
        </button>
      </div>
    </article>
  )
}