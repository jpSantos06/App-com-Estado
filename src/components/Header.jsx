export default function Header({ quantidade }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="text-xl font-black tracking-tight text-slate-900">Estado<span className="text-indigo-600">Shop.</span></a>
        <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
          <span aria-hidden="true">🛒</span> {quantidade} {quantidade === 1 ? 'item' : 'itens'}
        </div>
      </div>
    </header>
  )
}