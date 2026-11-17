import { useState } from 'react'

export default function Checkout({ disabled, onFinalizar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tentouEnviar, setTentouEnviar] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const nomeInvalido = tentouEnviar && nome.trim() === ''

  function enviar(event) {
    event.preventDefault()
    setTentouEnviar(true)
    if (!nome.trim()) {
      setSucesso(false)
      return
    }
    setSucesso(true)
    onFinalizar(nome.trim())
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Última etapa</p>
        <h2 className="mt-1 text-lg font-extrabold">Finalizar compra</h2>
        <p className="mt-1 text-sm text-slate-500">Informe seus dados para concluir o pedido.</p>
      </div>
      <form onSubmit={enviar} noValidate className="mt-5 space-y-4">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold text-slate-700">Nome completo *</label>
          <input id="nome" value={nome} onChange={e => { setNome(e.target.value); setSucesso(false) }} onBlur={() => tentouEnviar && setTentouEnviar(true)} placeholder="Digite seu nome" className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${nomeInvalido ? 'border-rose-500 bg-rose-50 focus:ring-rose-200' : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'}`} aria-invalid={nomeInvalido} aria-describedby={nomeInvalido ? 'erro-nome' : undefined} />
          {nomeInvalido && <p id="erro-nome" className="mt-1.5 text-xs font-semibold text-rose-600">O nome é obrigatório. Preencha este campo.</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">E-mail (opcional)</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@email.com" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
        </div>
        <button type="submit" disabled={disabled} className="w-full rounded-xl bg-slate-900 px-4 py-3 font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300">Confirmar pedido</button>
        {disabled && <p className="text-center text-xs text-slate-500">Adicione pelo menos um produto para continuar.</p>}
        {sucesso && <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">Pedido confirmado! Obrigado, {nome.trim()}.</div>}
      </form>
    </section>
  )
}