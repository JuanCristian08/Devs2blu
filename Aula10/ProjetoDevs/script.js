// Etapa 1: Vetor com 40+ produtos com imagens CORRETAS
const products = [
  // Eletrônicos
  {
    id: 1,
    name: "Smartphone Samsung Galaxy S24",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&q=80", 
    stock: 15,
    category: "eletrônicos",
    price: 1299.99,
    description: "Smartphone premium com câmera de 200MP e tela Dynamic AMOLED 2X",
    brand: "Samsung",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Notebook Dell Inspiron 15",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&q=80", 
    stock: 8,
    category: "eletrônicos",
    price: 2499.99,
    description: "Notebook com processador Intel Core i7, 16GB RAM e SSD 512GB",
    brand: "Dell",
    rating: 4.6,
  },
  {
    id: 3,
    name: "iPad Air 5ª Geração",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&q=80", 
    stock: 12,
    category: "eletrônicos",
    price: 1899.99,
    description: "Tablet Apple com chip M1 e tela Liquid Retina de 10,9 polegadas",
    brand: "Apple",
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Smart TV LG 55" 4K OLED',
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&q=80", 
    stock: 5,
    category: "eletrônicos",
    price: 2199.99,
    description: "Smart TV OLED com tecnologia AI ThinQ e Dolby Vision",
    brand: "LG",
    rating: 4.7,
  },
  {
    id: 5,
    name: "AirPods Pro 2ª Geração",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop&q=80", 
    stock: 25,
    category: "eletrônicos",
    price: 299.99,
    description: "Fones de ouvido sem fio com cancelamento ativo de ruído",
    brand: "Apple",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&q=80", 
    stock: 10,
    category: "eletrônicos",
    price: 1599.99,
    description: "Smartwatch com GPS, monitoramento de saúde e tela Always-On",
    brand: "Apple",
    rating: 4.9,
  },
  {
    id: 7,
    name: "PlayStation 5 Console",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop&q=80", 
    stock: 3,
    category: "eletrônicos",
    price: 3999.99,
    description: "Console de videogame com SSD ultra-rápido e ray tracing",
    brand: "Sony",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Câmera Canon EOS R6",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&q=80", 
    stock: 7,
    category: "eletrônicos",
    price: 1799.99,
    description: "Câmera mirrorless full-frame com estabilização de imagem",
    brand: "Canon",
    rating: 4.7,
  },
  {
    id: 9,
    name: "JBL Charge 5 Speaker",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80", 
    stock: 18,
    category: "eletrônicos",
    price: 399.99,
    description: "Caixa de som Bluetooth portátil à prova d'água",
    brand: "JBL",
    rating: 4.6,
  },
  {
    id: 10,
    name: "Mouse Básico",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&q=80", 
    stock: 30,
    category: "eletrônicos",
    price: 149.99,
    description: "Mouse gamer sem fio com sensor HERO 25K",
    brand: "Logitech",
    rating: 4.8,
  },
  {
    id: 11,
    name: "Teclado Mecânico Corsair K95",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&q=80", 
    stock: 20,
    category: "eletrônicos",
    price: 299.99,
    description: "Teclado mecânico RGB com switches Cherry MX",
    brand: "Corsair",
    rating: 4.7,
  },
  {
    id: 12,
    name: 'Monitor LG UltraWide 34"',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X67ugndlwgdtJdVQhcXtvraG5UTFb6.png", 
    stock: 6,
    category: "eletrônicos",
    price: 1499.99,
    description: "Monitor ultrawide 4K com HDR10 e USB-C",
    brand: "LG",
    rating: 4.8,
  },

  // Roupas
  {
    id: 13,
    name: "Camiseta Simples",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&q=80", 
    stock: 40,
    category: "roupas",
    price: 89.99,
    description: "Camiseta polo clássica 100% algodão",
    brand: "Ralph Lauren",
    rating: 4.5,
  },
  {
    id: 14,
    name: "Calça Jeans Levi's 501",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&q=80", 
    stock: 25,
    category: "roupas",
    price: 129.99,
    description: "Calça jeans skinny com elastano",
    brand: "Levi's",
    rating: 4.6,
  },
  {
    id: 15,
    name: "Vestido Vermelho Zara",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&q=80", 
    stock: 15,
    category: "roupas",
    price: 159.99,
    description: "Vestido midi com estampa floral delicada",
    brand: "Zara",
    rating: 4.4,
  },
  {
    id: 16,
    name: "Camisa Social Hugo Boss",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&q=80",
    stock: 30,
    category: "roupas",
    price: 119.99,
    description: "Camisa social slim fit em algodão premium",
    brand: "Hugo Boss",
    rating: 4.7,
  },
  {
    id: 17,
    name: "Tênis Nike Air Max 270",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&q=80", 
    stock: 22,
    category: "roupas",
    price: 299.99,
    description: "Tênis esportivo com tecnologia Air Max",
    brand: "Nike",
    rating: 4.8,
  },
  {
    id: 18,
    name: "Jaqueta de Couro Zara",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&q=80",
    stock: 8,
    category: "roupas",
    price: 399.99,
    description: "Jaqueta de couro sintético com forro interno",
    brand: "Zara",
    rating: 4.5,
  },
  {
    id: 19,
    name: "Calça Midi Elegante",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&q=80", 
    stock: 18,
    category: "roupas",
    price: 99.99,
    description: "Saia midi plissada para ocasiões especiais",
    brand: "H&M",
    rating: 4.3,
  },
  {
    id: 20,
    name: "Shorts Jeans Feminino",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop&q=80", 
    stock: 35,
    category: "roupas",
    price: 79.99,
    description: "Shorts jeans com lavagem stone e ajuste confortável",
    brand: "Levi's",
    rating: 4.4,
  },
  {
    id: 21,
    name: "Blusa de Tricô Feminina",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&q=80", 
    stock: 20,
    category: "roupas",
    price: 109.99,
    description: "Blusa de tricô macia com gola alta",
    brand: "Zara",
    rating: 4.6,
  },
  {
    id: 22,
    name: "Kit Social Masculina",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&q=80", 
    stock: 16,
    category: "roupas",
    price: 149.99,
    description: "Calça social slim com tecido anti-rugas",
    brand: "Hugo Boss",
    rating: 4.7,
  },

  // Casa & Jardim
  {
    id: 23,
    name: "Sofá 3 Lugares Confortável",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZlYWPaSrQ0yi9y80LmHPZvMxAclnP.png", 
    stock: 4,
    category: "casa",
    price: 1299.99,
    description: "Sofá retrátil e reclinável com tecido suede",
    brand: "Tok&Stok",
    rating: 4.5,
  },
  {
    id: 24,
    name: "Mesa de Jantar 6 Lugares",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lNxdPAFOzlPXKIuAj1FlHmvfnHCNOK.png",
    stock: 3,
    category: "casa",
    price: 899.99,
    description: "Mesa de jantar em madeira maciça com acabamento natural",
    brand: "Madesa",
    rating: 4.6,
  },
  {
    id: 25,
    name: "Geladeira Brastemp Frost Free",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rdDJYg5l4ppmBwVo9Elfi8uCumjcil.png", 
    stock: 2,
    category: "casa",
    price: 1899.99,
    description: "Geladeira duplex 400L com tecnologia frost free",
    brand: "Brastemp",
    rating: 4.7,
  },
  {
    id: 26,
    name: "Micro-ondas Panasonic 32L",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop&q=80",
    stock: 12,
    category: "casa",
    price: 399.99,
    description: "Micro-ondas com grill e receitas pré-programadas",
    brand: "Panasonic",
    rating: 4.4,
  },
  {
    id: 27,
    name: "Aspirador Robô Roomba",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BzZeLUiVO9CunuopgpLKmVInnlIk1N.png", 
    stock: 8,
    category: "casa",
    price: 799.99,
    description: "Aspirador robô inteligente com mapeamento Wi-Fi",
    brand: "iRobot",
    rating: 4.8,
  },
  {
    id: 28,
    name: "Conjunto de Panelas Tramontina",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0ZWlh1bnH2XIVglDX2f0llC60457OE.png",
    stock: 15,
    category: "casa",
    price: 299.99,
    description: "Conjunto de panelas antiaderentes com 5 peças",
    brand: "Tramontina",
    rating: 4.5,
  },
  {
    id: 29,
    name: "Luminária LED Moderna",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop&q=80",
    stock: 25,
    category: "casa",
    price: 149.99,
    description: "Luminária de teto LED com controle remoto",
    brand: "Philips",
    rating: 4.6,
  },
  {
    id: 30,
    name: "Tapete Decorativo Persa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ms3F0S3G35rIwstpr9JGzPQr4i7Mmu.png",
    stock: 20,
    category: "casa",
    price: 199.99,
    description: "Tapete decorativo com padrão persa tradicional",
    brand: "Oasis",
    rating: 4.3,
  },
  {
    id: 31,
    name: "Vaso de Plantas Cerâmica",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&q=80", 
    stock: 10,
    category: "casa",
    price: 89.99,
    description: "Vaso decorativo em cerâmica com design moderno",
    brand: "Cerâmica São Caetano",
    rating: 4.4,
  },
  {
    id: 32,
    name: "Espelho Decorativo Redondo",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=400&fit=crop&q=80", 
    stock: 12,
    category: "casa",
    price: 179.99,
    description: "Espelho decorativo com moldura dourada",
    brand: "Tok&Stok",
    rating: 4.5,
  },
  {
    id: 33,
    name: "Cortina Blackout Premium",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FuM3BvcUHnEOWQ9XRbyykjzT7gQghT.png",
    stock: 18,
    category: "casa",
    price: 129.99,
    description: "Cortina blackout com isolamento térmico",
    brand: "Santista",
    rating: 4.6,
  },
  {
    id: 34,
    name: "Kit Almofadas Decorativas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80",
    stock: 30,
    category: "casa",
    price: 59.99,
    description: "Kit com 4 almofadas decorativas variadas",
    brand: "Camesa",
    rating: 4.2,
  },

  // Produtos adicionais
  {
    id: 35,
    name: 'MacBook Pro 14" M3',
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&q=80", 
    stock: 5,
    category: "eletrônicos",
    price: 4999.99,
    description: "MacBook Pro com chip M3 e tela Liquid Retina XDR",
    brand: "Apple",
    rating: 4.9,
  },
  {
    id: 36,
    name: "Tênis Adidas Ultraboost",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQtF1qlofYe6U4uI44Oo7m3WjpeZWp.png", 
    stock: 18,
    category: "roupas",
    price: 349.99,
    description: "Tênis de corrida com tecnologia Boost",
    brand: "Adidas",
    rating: 4.7,
  },
  {
    id: 37,
    name: "Air Fryer Philips Walita",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sA5NbnvO4c5CHfu8OuR1X5w51xysPm.png", 
    stock: 14,
    category: "casa",
    price: 449.99,
    description: "Fritadeira elétrica sem óleo com capacidade 4L",
    brand: "Philips",
    rating: 4.8,
  },
  {
    id: 38,
    name: "Headset Gamer HyperX",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop&q=80", 
    stock: 22,
    category: "eletrônicos",
    price: 199.99,
    description: "Headset gamer com microfone removível",
    brand: "HyperX",
    rating: 4.6,
  },
  {
    id: 39,
    name: "Blazer Feminino Elegante",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cJn2DE2QJccdSV3jT3FBR9Ydy09ZMG.png", 
    stock: 12,
    category: "roupas",
    price: 189.99,
    description: "Blazer feminino para look executivo",
    brand: "Zara",
    rating: 4.5,
  },
  {
    id: 40,
    name: "Cafeteira Nespresso",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&q=80", 
    stock: 9,
    category: "casa",
    price: 299.99,
    description: "Cafeteira automática com sistema de cápsulas",
    brand: "Nespresso",
    rating: 4.7,
  },
]

// Variáveis globais
let cart = []
let wishlist = []
let currentProducts = [...products]
let currentPage = 1
const productsPerPage = 12
let isGridView = true

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage()
  showLoadingState()
  setTimeout(() => {
    hideLoadingState()
    displayProducts()
    updateCartCount()
    updateWishlistCount()
  }, 1000)
})

// Loading State
function showLoadingState() {
  const container = document.getElementById("loadingState")
  container.innerHTML = ""

  for (let i = 0; i < 8; i++) {
    const skeleton = document.createElement("div")
    skeleton.className = "bg-white rounded-xl shadow-lg overflow-hidden"
    skeleton.innerHTML = `
      <div class="loading-skeleton h-48 w-full"></div>
      <div class="p-4">
        <div class="loading-skeleton h-4 w-3/4 mb-2 rounded"></div>
        <div class="loading-skeleton h-3 w-1/2 mb-2 rounded"></div>
        <div class="loading-skeleton h-6 w-1/3 rounded"></div>
      </div>
    `
    container.appendChild(skeleton)
  }

  container.style.display = "grid"
  document.getElementById("productsContainer").style.display = "none"
}

function hideLoadingState() {
  document.getElementById("loadingState").style.display = "none"
  document.getElementById("productsContainer").style.display = "grid"
}

// Exibir produtos
function displayProducts(productsToShow = currentProducts) {
  const container = document.getElementById("productsContainer")
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const paginatedProducts = productsToShow.slice(startIndex, endIndex)

  container.innerHTML = ""
  container.className = isGridView
    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 fade-in"
    : "space-y-4 mb-8 fade-in"

  paginatedProducts.forEach((product) => {
    const productCard = createProductCard(product)
    container.appendChild(productCard)
  })

  updateProductCount(productsToShow.length)
  updatePagination(productsToShow.length)
}

function createProductCard(product) {
  const card = document.createElement("div")
  const isOutOfStock = product.stock === 0
  const isInWishlist = wishlist.some((item) => item.id === product.id)

  if (isGridView) {
    card.className =
      "product-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
    card.innerHTML = `
      <div class="relative product-image">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button onclick="quickView(${product.id})" class="bg-white text-gray-800 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <i class="fas fa-eye mr-2"></i>Visualizar
          </button>
        </div>
        <button onclick="toggleWishlistItem(${product.id})" class="absolute top-3 right-3 w-10 h-10 rounded-full ${isInWishlist ? "bg-red-500 text-white" : "bg-white text-gray-400"} flex items-center justify-center hover:scale-110 transition-all duration-300">
          <i class="fas fa-heart"></i>
        </button>
        ${isOutOfStock ? '<div class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">Esgotado</div>' : ""}
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">${product.category}</span>
          <div class="flex items-center text-yellow-400">
            ${generateStars(product.rating)}
            <span class="text-xs text-gray-500 ml-1">(${product.rating})</span>
          </div>
        </div>
        <h3 class="font-bold text-gray-900 mb-1 line-clamp-2">${product.name}</h3>
        <p class="text-sm text-gray-600 mb-2">${product.brand}</p>
        <div class="flex items-center justify-between mb-3">
          <div class="text-2xl font-bold text-primary">R$ ${product.price.toFixed(2)}</div>
          <div class="text-sm ${isOutOfStock ? "text-red-500" : "text-green-600"}">
            ${isOutOfStock ? "Fora de estoque" : `${product.stock} disponíveis`}
          </div>
        </div>
        <button 
          onclick="addToCart(${product.id})" 
          ${isOutOfStock ? "disabled" : ""}
          class="w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
            isOutOfStock
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transform hover:scale-105"
          }"
        >
          <i class="fas fa-shopping-cart mr-2"></i>
          ${isOutOfStock ? "Indisponível" : "Adicionar ao Carrinho"}
        </button>
      </div>
    `
  } else {
    // List view
    card.className =
      "bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6 hover:shadow-xl transition-all duration-300"
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded-lg">
      <div class="flex-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-bold text-xl text-gray-900">${product.name}</h3>
          <button onclick="toggleWishlistItem(${product.id})" class="w-8 h-8 rounded-full ${isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-gray-400"} flex items-center justify-center">
            <i class="fas fa-heart text-sm"></i>
          </button>
        </div>
        <p class="text-gray-600 mb-2">${product.description}</p>
        <div class="flex items-center space-x-4 mb-3">
          <span class="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">${product.category}</span>
          <div class="flex items-center text-yellow-400">
            ${generateStars(product.rating)}
            <span class="text-xs text-gray-500 ml-1">(${product.rating})</span>
          </div>
          <span class="text-sm ${isOutOfStock ? "text-red-500" : "text-green-600"}">
            ${isOutOfStock ? "Fora de estoque" : `${product.stock} disponíveis`}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-primary">R$ ${product.price.toFixed(2)}</div>
          <button 
            onclick="addToCart(${product.id})" 
            ${isOutOfStock ? "disabled" : ""}
            class="py-2 px-6 rounded-xl font-bold transition-all duration-300 ${
              isOutOfStock
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transform hover:scale-105"
            }"
          >
            <i class="fas fa-shopping-cart mr-2"></i>
            ${isOutOfStock ? "Indisponível" : "Adicionar"}
          </button>
        </div>
      </div>
    `
  }

  return card
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>'
  }

  return stars
}

// Carrinho de compras
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product || product.stock === 0) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++
      showToast("Quantidade atualizada no carrinho!", "success")
    } else {
      showToast("Quantidade máxima em estoque atingida!", "warning")
      return
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      maxStock: product.stock,
    })
    showToast("Produto adicionado ao carrinho!", "success")
  }

  updateCartDisplay()
  updateCartCount()
  saveToStorage()
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems")

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="text-center py-12">
        <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-bold text-gray-600 mb-2">Seu carrinho está vazio</h3>
        <p class="text-gray-500">Adicione produtos para começar suas compras!</p>
      </div>
    `
    document.getElementById("cartSubtotal").textContent = "R$ 0,00"
    document.getElementById("cartTotal").textContent = "R$ 0,00"
    return
  }

  cartItems.innerHTML = ""
  let total = 0

  cart.forEach((item) => {
    total += item.price * item.quantity

    const cartItem = document.createElement("div")
    cartItem.className = "flex items-center space-x-4 p-4 border-b border-gray-200 last:border-b-0"
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
      <div class="flex-1">
        <h4 class="font-bold text-gray-900">${item.name}</h4>
        <p class="text-primary font-bold">R$ ${item.price.toFixed(2)}</p>
      </div>
      <div class="flex items-center space-x-3">
        <button onclick="changeQuantity(${item.id}, -1)" class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
          <i class="fas fa-minus text-sm"></i>
        </button>
        <span class="font-bold text-lg w-8 text-center">${item.quantity}</span>
        <button onclick="changeQuantity(${item.id}, 1)" class="w-8 h-8 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors">
          <i class="fas fa-plus text-sm"></i>
        </button>
      </div>
      <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 p-2 transition-colors">
        <i class="fas fa-trash"></i>
      </button>
    `

    cartItems.appendChild(cartItem)
  })

  document.getElementById("cartSubtotal").textContent = `R$ ${total.toFixed(2)}`
  document.getElementById("cartTotal").textContent = `R$ ${total.toFixed(2)}`

  // Update shipping
  const shipping = document.getElementById("shipping")
  if (total >= 299) {
    shipping.textContent = "Grátis"
    shipping.className = "text-green-600"
  } else {
    shipping.textContent = "R$ 29,90"
    shipping.className = "text-gray-600"
    const totalWithShipping = total + 29.9
    document.getElementById("cartTotal").textContent = `R$ ${totalWithShipping.toFixed(2)}`
  }
}

function changeQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId)
  if (!cartItem) return

  const newQuantity = cartItem.quantity + change

  if (newQuantity <= 0) {
    removeFromCart(productId)
    return
  }

  if (newQuantity > cartItem.maxStock) {
    showToast("Quantidade máxima em estoque atingida!", "warning")
    return
  }

  cartItem.quantity = newQuantity
  updateCartDisplay()
  updateCartCount()
  saveToStorage()
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartDisplay()
  updateCartCount()
  saveToStorage()
  showToast("Produto removido do carrinho!", "info")
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0)
  document.getElementById("cartCount").textContent = count
}

function toggleCart() {
  const modal = document.getElementById("cartModal")
  modal.classList.toggle("hidden")
  updateCartDisplay()
}

// Finalizar compra
function finalizePurchase() {
  if (cart.length === 0) {
    showToast("Seu carrinho está vazio!", "warning")
    return
  }

  // Simular processamento
  const button = event.target
  const originalText = button.innerHTML
  button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processando...'
  button.disabled = true

  setTimeout(() => {
    // Atualizar estoque
    cart.forEach((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id)
      if (product) {
        product.stock -= cartItem.quantity
      }
    })

    // Limpar carrinho
    cart = []
    updateCartDisplay()
    updateCartCount()
    saveToStorage()

    // Fechar modal
    toggleCart()

    // Mostrar sucesso
    showToast("🎉 Compra finalizada com sucesso! Obrigado pela preferência!", "success", 5000)

    // Atualizar produtos
    displayProducts(currentProducts)

    // Restaurar botão
    button.innerHTML = originalText
    button.disabled = false
  }, 2000)
}

// Wishlist/Favoritos
function toggleWishlistItem(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const existingIndex = wishlist.findIndex((item) => item.id === productId)

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1)
    showToast("Removido dos favoritos!", "info")
  } else {
    wishlist.push(product)
    showToast("Adicionado aos favoritos!", "success")
  }

  updateWishlistCount()
  updateWishlistDisplay()
  displayProducts(currentProducts)
  saveToStorage()
}

function updateWishlistCount() {
  document.getElementById("wishlistCount").textContent = wishlist.length
}

function toggleWishlist() {
  const modal = document.getElementById("wishlistModal")
  modal.classList.toggle("hidden")
  updateWishlistDisplay()
}

function updateWishlistDisplay() {
  const container = document.getElementById("wishlistItems")

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fas fa-heart text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-bold text-gray-600 mb-2">Nenhum favorito ainda</h3>
        <p class="text-gray-500">Adicione produtos aos seus favoritos!</p>
      </div>
    `
    return
  }

  container.innerHTML = ""
  wishlist.forEach((product) => {
    const item = document.createElement("div")
    item.className = "bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover rounded-lg mb-3">
      <h4 class="font-bold text-sm mb-2">${product.name}</h4>
      <p class="text-primary font-bold mb-3">R$ ${product.price.toFixed(2)}</p>
      <div class="flex space-x-2">
        <button onclick="addToCart(${product.id})" class="flex-1 bg-primary text-white py-2 px-3 rounded-lg text-sm hover:bg-primary/90 transition-colors">
          <i class="fas fa-cart-plus mr-1"></i>Carrinho
        </button>
        <button onclick="toggleWishlistItem(${product.id})" class="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors">
          <i class="fas fa-trash text-sm"></i>
        </button>
      </div>
    `
    container.appendChild(item)
  })
}

// Filtros e pesquisa
function filterByCategory(category) {
  currentProducts = products.filter((product) => product.category === category)
  currentPage = 1
  displayProducts(currentProducts)
  document.getElementById("pageTitle").textContent =
    `Categoria: ${category.charAt(0).toUpperCase() + category.slice(1)}`
  document.getElementById("breadcrumb").textContent = category.charAt(0).toUpperCase() + category.slice(1)

  // Update active nav
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("text-primary", "font-bold"))
  event.target.classList.add("text-primary", "font-bold")
}

function showAllProducts() {
  currentProducts = [...products]
  currentPage = 1
  displayProducts(currentProducts)
  document.getElementById("pageTitle").textContent = "Todos os Produtos"
  document.getElementById("breadcrumb").textContent = "Todos os Produtos"

  // Update active nav
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("text-primary", "font-bold"))
  event.target.classList.add("text-primary", "font-bold")
}

function searchProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim()

  if (searchTerm === "") {
    showAllProducts()
    return
  }

  currentProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm),
  )

  currentPage = 1
  displayProducts(currentProducts)
  document.getElementById("pageTitle").textContent = `Resultados para: "${searchTerm}"`
  document.getElementById("breadcrumb").textContent = `Pesquisa: ${searchTerm}`
}

function sortProducts() {
  const sortBy = document.getElementById("sortSelect").value

  switch (sortBy) {
    case "name":
      currentProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "price-asc":
      currentProducts.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      currentProducts.sort((a, b) => b.price - a.price)
      break
    case "stock":
      currentProducts.sort((a, b) => b.stock - a.stock)
      break
  }

  displayProducts(currentProducts)
}

function clearFilters() {
  document.getElementById("searchInput").value = ""
  document.getElementById("sortSelect").value = "name"
  showAllProducts()
}

// Paginação
function updatePagination(totalProducts) {
  const totalPages = Math.ceil(totalProducts / productsPerPage)
  const container = document.getElementById("pagination")

  if (totalPages <= 1) {
    container.innerHTML = ""
    return
  }

  let paginationHTML = ""

  // Previous button
  if (currentPage > 1) {
    paginationHTML += `<button onclick="changePage(${currentPage - 1})" class="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><i class="fas fa-chevron-left"></i></button>`
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<button class="px-4 py-2 bg-primary text-white rounded-lg">${i}</button>`
    } else if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationHTML += `<button onclick="changePage(${i})" class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">${i}</button>`
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationHTML += `<span class="px-2 py-2">...</span>`
    }
  }

  // Next button
  if (currentPage < totalPages) {
    paginationHTML += `<button onclick="changePage(${currentPage + 1})" class="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><i class="fas fa-chevron-right"></i></button>`
  }

  container.innerHTML = paginationHTML
}

function changePage(page) {
  currentPage = page
  displayProducts(currentProducts)
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function updateProductCount(total) {
  const start = (currentPage - 1) * productsPerPage + 1
  const end = Math.min(currentPage * productsPerPage, total)
  document.getElementById("productCount").textContent = `Mostrando ${start}-${end} de ${total} produtos`
}

// Toggle Grid/List View
function toggleGridView() {
  isGridView = !isGridView
  const button = document.getElementById("gridToggle")
  button.innerHTML = isGridView ? '<i class="fas fa-th"></i>' : '<i class="fas fa-list"></i>'
  displayProducts(currentProducts)
}

// Quick View
function quickView(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const modal = document.getElementById("quickViewModal")
  const content = document.getElementById("quickViewContent")

  const isOutOfStock = product.stock === 0
  const isInWishlist = wishlist.some((item) => item.id === product.id)

  content.innerHTML = `
    <div class="flex items-center justify-between p-6 border-b">
      <h2 class="text-2xl font-bold text-gray-900">Visualização Rápida</h2>
      <button onclick="closeQuickView()" class="text-gray-500 hover:text-gray-700 text-2xl">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="p-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src="${product.image}" alt="${product.name}" class="w-full h-96 object-cover rounded-lg">
        </div>
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">${product.category}</span>
            <button onclick="toggleWishlistItem(${product.id})" class="w-10 h-10 rounded-full ${isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-gray-400"} flex items-center justify-center hover:scale-110 transition-all">
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">${product.name}</h1>
          <p class="text-lg text-gray-600 mb-4">${product.brand}</p>
          <div class="flex items-center mb-4">
            <div class="flex items-center text-yellow-400 mr-3">
              ${generateStars(product.rating)}
            </div>
            <span class="text-sm text-gray-500">(${product.rating})</span>
          </div>
          <p class="text-gray-700 mb-6">${product.description}</p>
          <div class="flex items-center justify-between mb-6">
            <div class="text-4xl font-bold text-primary">R$ ${product.price.toFixed(2)}</div>
            <div class="text-lg ${isOutOfStock ? "text-red-500" : "text-green-600"}">
              ${isOutOfStock ? "Fora de estoque" : `${product.stock} disponíveis`}
            </div>
          </div>
          <button 
            onclick="addToCart(${product.id}); closeQuickView();" 
            ${isOutOfStock ? "disabled" : ""}
            class="w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
              isOutOfStock
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transform hover:scale-105"
            }"
          >
            <i class="fas fa-shopping-cart mr-2"></i>
            ${isOutOfStock ? "Produto Indisponível" : "Adicionar ao Carrinho"}
          </button>
        </div>
      </div>
    </div>
  `

  modal.classList.remove("hidden")
}

function closeQuickView() {
  document.getElementById("quickViewModal").classList.add("hidden")
}

// Toast Notifications
function showToast(message, type = "info", duration = 3000) {
  const container = document.getElementById("toastContainer")
  const toast = document.createElement("div")

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  }

  toast.className = `toast ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm`
  toast.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : type === "warning" ? "exclamation-triangle" : "info-circle"}"></i>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="ml-auto text-white hover:text-gray-200">
      <i class="fas fa-times"></i>
    </button>
  `

  container.appendChild(toast)

  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove()
    }
  }, duration)
}

// Local Storage
function saveToStorage() {
  localStorage.setItem("techstore_cart", JSON.stringify(cart))
  localStorage.setItem("techstore_wishlist", JSON.stringify(wishlist))
}

function loadFromStorage() {
  const savedCart = localStorage.getItem("techstore_cart")
  const savedWishlist = localStorage.getItem("techstore_wishlist")

  if (savedCart) {
    cart = JSON.parse(savedCart)
  }

  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist)
  }
}

// Event Listeners
document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchProducts()
  }
})

// Close modals when clicking outside
window.onclick = (event) => {
  const cartModal = document.getElementById("cartModal")
  const wishlistModal = document.getElementById("wishlistModal")
  const quickViewModal = document.getElementById("quickViewModal")

  if (event.target === cartModal) {
    cartModal.classList.add("hidden")
  }

  if (event.target === wishlistModal) {
    wishlistModal.classList.add("hidden")
  }

  if (event.target === quickViewModal) {
    quickViewModal.classList.add("hidden")
  }
}

// Smooth scroll for better UX
document.documentElement.style.scrollBehavior = "smooth"
