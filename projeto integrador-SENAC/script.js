let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Adicionar item
function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
  alert(`${nome} foi adicionado ao carrinho!`);
}

// Exibir carrinho
function carregarCarrinho() {
  const tabela = document.querySelector("#tabela-carrinho tbody");
  const totalEl = document.getElementById("total");
  tabela.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, i) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${item.nome}</td>
      <td>R$ ${item.preco.toFixed(2)}</td>
      <td><button class="btn" onclick="removerItem(${i})">🗑️</button></td>`;
    tabela.appendChild(linha);
    total += item.preco;
  });

  totalEl.textContent = carrinho.length ? `Total: R$ ${total.toFixed(2)}` : "Carrinho vazio 😢";
}

// Remover item
function removerItem(i) {
  carrinho.splice(i, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

// Limpar carrinho
function limparCarrinho() {
  carrinho = [];
  localStorage.removeItem('carrinho');
  carregarCarrinho();
}

// Finalizar compra
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("🎉 Pedido confirmado! Obrigado por comprar na Doce Magia 🍭");
  limparCarrinho();
  toggleCarrinho();
}

// Carrinho lateral
function toggleCarrinho() {
  document.getElementById("carrinho-lateral").classList.toggle("ativo");
}

// Pesquisa de produtos
document.getElementById("barra-pesquisa").addEventListener("input", function() {
  const termo = this.value.toLowerCase();
  document.querySelectorAll(".produto").forEach(produto => {
    const nome = produto.dataset.nome.toLowerCase();
    produto.style.display = nome.includes(termo) ? "block" : "none";
  });
});

// Carrega carrinho ao abrir
window.onload = carregarCarrinho;