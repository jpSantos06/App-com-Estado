export default function Cart({ itens, onRemover, total }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold">Seu carrinho</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{itens.reduce((s, i) => s + i.quantidade, 0)} itens</span>
      </div>
      {itens.length === 0 ? (
        <div className="py-9 text-center">
          <div className="text-4xl" aria-hidden="true">🛍️</div>
          <p className="mt-3 font-semibold text-slate-700">Seu carrinho está vazio</p>
          <p className="mt-1 text-sm text-slate-500">Adicione produtos para começar.</p>
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-slate-100">
          {itens.map(item => (
            <li key={item.id} className="flex items-center gap-3 py-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl" aria-hidden="true">{item.emoji}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{item.nome}</p>
                <p className="text-xs text-slate-500">{item.quantidade} × {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
              <button onClick={() => onRemover(item.id)} className="rounded-lg px-2 py-1 text-xs font-bold text-rose-600 hover:bg-rose-50" aria-label={`Remover ${item.nome}`}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="font-semibold text-slate-600">Total</span>
        <strong className="text-xl text-slate-900">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
      </div>
    </section>
  )
}