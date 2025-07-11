const API_URL = 'http://localhost:3000/enderecos';

// Elementos do DOM
const form = document.getElementById('formEndereco');
const listaEnderecos = document.getElementById('listaEnderecos');

const idField = document.getElementById('id');
const nomeField = document.getElementById('nome');
const cepField = document.getElementById('cep');
const estadoField = document.getElementById('estado');
const cidadeField = document.getElementById('cidade');
const bairroField = document.getElementById('bairro');
const logradouroField = document.getElementById('logradouro');

// Buscar dados do ViaCEP ao sair do campo CEP
cepField.addEventListener('blur', async () => {
  const cep = cepField.value.replace(/\D/g, '');
  if (cep.length === 8) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert('CEP não encontrado!');
        return;
      }

      estadoField.value = data.uf;
      cidadeField.value = data.localidade;
      bairroField.value = data.bairro;
      logradouroField.value = data.logradouro;
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP!');
    }
  }
});

// Carregar endereços da API
async function carregarEnderecos() {
  try {
    const res = await fetch(API_URL);
    const enderecos = await res.json();
    listaEnderecos.innerHTML = '';

    if (enderecos.length === 0) {
      // Não mostra nada, o tfoot já mostra "Nenhum endereço cadastrado"
      return;
    }

    enderecos.forEach(endereco => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td class="p-3">${endereco.nome}</td>
    <td class="p-3">${endereco.cep}</td>
    <td class="p-3">${endereco.cidade}</td>
    <td class="p-3">${endereco.bairro}</td>
    <td class="p-3 text-center flex gap-2 justify-center">
      <button onclick="editarEndereco('${endereco.id}')" class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center gap-1">
        <i data-feather="edit-3"></i> Editar
      </button>
      <button onclick="removerEndereco('${endereco.id}')" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center gap-1">
        <i data-feather="trash-2"></i> Excluir
      </button>
    </td>
  `;
  listaEnderecos.appendChild(tr);
});

    feather.replace(); // Atualiza os ícones (feather icons)

  } catch (error) {
    console.error('Erro ao carregar endereços:', error);
  }
}

// Cadastrar ou atualizar endereço
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (
    !nomeField.value ||
    !cepField.value ||
    !estadoField.value ||
    !cidadeField.value ||
    !bairroField.value ||
    !logradouroField.value
  ) {
    alert('Preencha todos os campos!');
    return;
  }

  const endereco = {
    nome: nomeField.value,
    cep: cepField.value,
    estado: estadoField.value,
    cidade: cidadeField.value,
    bairro: bairroField.value,
    logradouro: logradouroField.value
  };

  try {
    if (idField.value) {
      // Atualizar
      await fetch(`${API_URL}/${idField.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(endereco)
      });
    } else {
      // Criar
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(endereco)
      });
    }

    form.reset();
    idField.value = '';
    await carregarEnderecos();
  } catch (error) {
    console.error('Erro ao salvar endereço:', error);
    alert('Erro ao salvar endereço.');
  }
});

// Editar endereço
async function editarEndereco(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    idField.value = data.id;
    nomeField.value = data.nome;
    cepField.value = data.cep;
    estadoField.value = data.estado;
    cidadeField.value = data.cidade;
    bairroField.value = data.bairro;
    logradouroField.value = data.logradouro;
  } catch (error) {
    console.error('Erro ao editar endereço:', error);
    alert('Erro ao editar endereço.');
  }
}

// Remover endereço
async function removerEndereco(id) {
  if (confirm('Deseja realmente excluir este endereço?')) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) {
        alert('Erro ao excluir! Código: ' + res.status);
        return;
      }
      await carregarEnderecos();
    } catch (error) {
      console.error('Erro ao excluir endereço:', error);
      alert('Erro ao excluir!');
    }
  }
}

// Limpar também limpa ID oculto
form.addEventListener('reset', () => {
  idField.value = '';
});

// Inicialização
window.onload = carregarEnderecos;

// Tornar funções globais para funcionar nos botões onclick
window.editarEndereco = editarEndereco;
window.removerEndereco = removerEndereco;