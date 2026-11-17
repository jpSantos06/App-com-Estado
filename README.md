# EstadoShop — Aplicação interativa com estado

Projeto acadêmico desenvolvido com **React, Vite e Tailwind CSS** para praticar gerenciamento de estado com `useState`, renderização de componentes, imutabilidade de dados e validação de formulários.

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/jpSantos06/App-com-Estado.git
   cd App-com-Estado
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
4. Para gerar a versão de produção:
   ```bash
   npm run build
   ```

## Funcionalidades implementadas

### Parte 1 — Manipulação e validação de dados
- Contador com `useState`, botões para incrementar, decrementar e zerar.
- A interface reage às atualizações de estado por meio da re-renderização do componente.

### Parte 2 — Mini projeto: carrinho de compras
- Catálogo de quatro produtos.
- Adição de produtos e incremento da quantidade quando o item já existe no carrinho.
- Remoção de unidades e exclusão automática do item quando a quantidade chega a zero.
- Cálculo automático do total e da quantidade de itens.
- Feedback visual no botão após adicionar um produto.

### Parte 3 — Desafio: checkout
- Formulário de checkout com nome obrigatório e e-mail opcional.
- Ao tentar enviar sem preencher o nome, o campo recebe borda vermelha e mensagem de erro.
- Ao preencher o nome, a aplicação apresenta uma confirmação visual do pedido.
- O checkout fica desabilitado enquanto o carrinho estiver vazio.

### Parte 4 — Reflexão: imutabilidade e spread operator

Não devemos modificar o estado diretamente, por exemplo com `carrinho.push(item)`, porque o React precisa identificar que o estado mudou para atualizar a interface. O método `push` altera o mesmo array original e não cria uma nova referência; por isso, essa mutação pode não provocar a renderização esperada e ainda gerar efeitos colaterais em outras partes da aplicação.

O spread operator (`[...carrinho, item]`) cria um novo array contendo os elementos anteriores e o novo item. Assim, podemos atualizar o estado de forma imutável usando a função atualizadora do `useState`. Como a referência do array muda, o React consegue reconhecer a atualização e renderizar a interface com os dados mais recentes. Para objetos, também usamos `{ ...item }` para criar cópias com as propriedades atualizadas.

## Tecnologias

- React 18
- JavaScript (ES6+)
- Vite
- Tailwind CSS 3

## Estrutura do projeto

```text
src/
├── components/
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Header.jsx
│   └── ProductCard.jsx
├── App.jsx
├── index.css
└── main.jsx
index.html
package.json
tailwind.config.js
postcss.config.js
vite.config.js
```
