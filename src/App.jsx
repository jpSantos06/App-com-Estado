import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const produtos = [
  { id: 1, nome: 'Fone Bluetooth', categoria: 'Áudio', descricao: 'Som nítido para acompanhar sua rotina.', preco: 149.90, emoji: '🎧', fundo: 'bg-violet-100' },
  { id: 2, nome: 'Smartwatch Fit', categoria: 'Acessórios', descricao: 'Praticidade e estilo no seu pulso.', preco: 229.90, emoji: '⌚', fundo: 'bg-sky-100' },
  { id: 3, nome: 'Mochila Urbana', categoria: 'Lifestyle', descricao: 'Espaço e conforto para o dia a dia.', preco: 119.90, emoji: '🎒', fundo: 'bg-amber-100' },
  { id: 4, nome: 'Câmera Instantânea', categoria: 'Tecnologia', descricao: 'Registre momentos especiais.', preco: 349.90, emoji: '📸', fundo: 'bg-rose-100' },
]

export default function App() {
  // Parte 1: useState guarda o valor e fornece a função que atualiza a interface.
  const [contador, setContador] = useState(0)
  // Parte 2: o carrinho é atualizado de forma imutável com spread operator.
  const [carrinho, setCarrinho] = useState([])
  const [ultimoAdicionado, setUltimoAdicionado] = useState(null)

  function adicionarProduto(produto) {
    setCarrinho(atual => {
      const existente = atual.find(item => item.id === produto.id)
      if (existente) {
        return atual.map(item => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item)
      }
      return [...atual, { ...produto, quantidade: 1 }]
    })
    setUltimoAdicionado(produto.id)
  }

  function removerProduto(id) {
    setCarrinho(atual => atual
      .map(item => item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item)
      .filter(item => item.quantidade > 0))
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0)
  const quantidade = carrinho.reduce((soma, item) => soma + item.quantidade, 0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header quantidade={quantidade} />
      <main className="mx-auto max-w-6xl px-5 py-8 sm:py-10">
        <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-800 px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">React + Tailwind CSS</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Sua experiência de compra, com estado em tempo real.</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">Explore os produtos, adicione ao carrinho e veja como o React atualiza a interface a cada interação.</p>
        </section>

        <section className="mb-8 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Parte 1 — exercício guiado</p>
            <h2 className="mt-1 text-lg font-extrabold">Contador com useState</h2>
            <p className="mt-1 text-sm text-slate-500">Cada clique atualiza o estado e provoca uma nova renderização.</p>
          </div>
          <div className="mt-4 flex items-center gap-3 sm:mt-0">
            <button onClick={() => setContador(valor => Math.max(0, valor - 1))} className="h-10 w-10 rounded-xl border border-slate-300 text-xl font-bold hover:bg-slate-100" aria-label="Diminuir contador">−</button>
            <output className="min-w-12 text-center text-2xl font-black tabular-nums">{contador}</output>
            <button onClick={() => setContador(valor => valor + 1)} className="h-10 w-10 rounded-xl bg-indigo-600 text-xl font-bold text-white hover:bg-indigo-700" aria-label="Aumentar contador">+</button>
            <button onClick={() => setContador(0)} className="ml-1 text-sm font-semibold text-slate-500 hover:text-indigo-700">Zerar</button>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <section>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Parte 2 — mini projeto</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight">Produtos em destaque</h2>
              </div>
              <span className="text-sm text-slate-500">{produtos.length} produtos</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {produtos.map(produto => <ProductCard key={produto.id} produto={produto} onAdicionar={adicionarProduto} adicionado={ultimoAdicionado === produto.id} />)}
            </div>
          </section>
          <aside className="space-y-5">
            <Cart itens={carrinho} onRemover={removerProduto} total={total} />
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-indigo-600">Parte 3 — desafio</p>
              <Checkout disabled={carrinho.length === 0} onFinalizar={() => {}} />
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Objetivo da atividade</p>
          <h2 className="mt-1 text-lg font-extrabold">Estado, imutabilidade e eventos</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Este projeto demonstra o ciclo de renderização dos componentes, atualização de listas sem mutação direta e resposta visual a cliques e submissões de formulário.</p>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">EstadoShop · Projeto acadêmico React + Tailwind CSS</footer>
    </div>
  )
}