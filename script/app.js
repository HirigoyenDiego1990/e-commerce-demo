// --- BASE DE DATOS Y ESTADO LOCALSTORAGE ---
const initialProducts = [
  {
    id: "p1",
    name: "Remera - The Beatles",
    price: 18500,
    img: "/img/img 01 - the beatles.webp",
    sizes: { S: 5, M: 8, L: 2, XL: 0 }
  },
  {
    id: "p2",
    name: "Remera - Black Sabbath",
    price: 17200,
    img: "/img/img 02 - black sabbath.webp",
    sizes: { S: 3, M: 10, L: 6, XL: 4 }
  },
  {
    id: "p3",
    name: "Remera - Foo Figther",
    price: 18000,
    img: "/img/img 03 - foo fighter.webp",
    sizes: { S: 0, M: 4, L: 5, XL: 3 }
  },
  {
    id: "p4",
    name: "Remera - Iron Maiden",
    price: 19000,
    img: "/img/img 04 - iron maiden.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p5",
    name: "Remera - Mega Death",
    price: 19000,
    img: "/img/img 05 - mega death.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p6",
    name: "Remera - Metallica",
    price: 19000,
    img: "/img/img 06 - metallica.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p7",
    name: "Remera - Misfits",
    price: 19000,
    img: "/img/img 07 - misfits.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p8",
    name: "Remera - Nirvana",
    price: 19000,
    img: "/img/img 08 - nirvana.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p9",
    name: "Remera - Pink Floyd",
    price: 19000,
    img: "/img/img 09 - pink floyd.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p10",
    name: "Remera - Ramones",
    price: 19000,
    img: "/img/img 10 - ramones.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p11",
    name: "Remera - Rolling Stones",
    price: 19000,
    img: "/img/img 11 - rolling stones.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p12",
    name: "Remera - Sex Pistols",
    price: 19000,
    img: "/img/img 12 - sex pistols.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p13",
    name: "Remera - The Clash",
    price: 19000,
    img: "/img/img 13 - the clash.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p14",
    name: "Remera - AC/DC",
    price: 19000,
    img: "/img/img 14 - ac dc.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p15",
    name: "Remera - The Runaways",
    price: 19000,
    img: "/img/img 15 - the runaways.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p16",
    name: "Remera - Bikini Kill",
    price: 19000,
    img: "/img/img 16 - bikini kill.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p17",
    name: "Remera - Punisher",
    price: 19000,
    img: "/img/img 17 - punisher.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p18",
    name: "Remera - Blue pow",
    price: 19000,
    img: "/img/img 18 - blue_tshirt_pow_comic.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p19",
    name: "Remera - Dark purple occult",
    price: 19000,
    img: "/img/img 19 - dark_purple_occult_shirt.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p20",
    name: "Remera - Forest green beast",
    price: 19000,
    img: "/img/img 20 - forest_green_beast_tee.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p21",
    name: "Remera - Grey team x",
    price: 19000,
    img: "/img/img 21 - heather_gray_team_x_shirt.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p22",
    name: "Remera - Yellow zap pop",
    price: 19000,
    img: "/img/img 22 - yellow_tshirt_zap_pop_art.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p23",
    name: "Remera - Wham comic",
    price: 19000,
    img: "/img/img 23 - wham_comic_tshirt.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p24",
    name: "Remera - Red Bam pop",
    price: 19000,
    img: "/img/img 24 - red_tshirt_bam_pop_art.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p25",
    name: "Remera - Psychedelicc mystical eye",
    price: 19000,
    img: "/img/img 25 - psychedelic_mystical_eye_tshirt.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p26",
    name: "Remera - Orange Kaboom comic",
    price: 19000,
    img: "/img/img 26 - orange_tshirt_kaboom_comic.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
  {
    id: "p27",
    name: "Remera - Olive green hunter",
    price: 19000,
    img: "/img/img 27 - olive_green_hunter_tshirt.webp",
    sizes: { S: 2, M: 6, L: 0, XL: 1 }
  },
];

let products = JSON.parse(localStorage.getItem('rock_products')) || initialProducts;
let cart = JSON.parse(localStorage.getItem('rock_cart')) || [];
let orders = JSON.parse(localStorage.getItem('rock_orders')) || [];
let selectedSizes = {};

function saveData() {
  localStorage.setItem('rock_products', JSON.stringify(products));
  localStorage.setItem('rock_cart', JSON.stringify(cart));
  localStorage.setItem('rock_orders', JSON.stringify(orders));
}
saveData();

// --- CAMBIO DE TEMA CLARO / OSCURO ---
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });
}

// --- RENDERING DEL CATÁLOGO ---
// --- CONFIGURACIÓN DE INFINITE SCROLL ---
const ITEMS_PER_PAGE = 8; // 2 filas exactas en PC
let currentPage = 1;
let isLoading = false;
let currentFilter = '';

function renderProducts(filterText = currentFilter) {
  currentFilter = filterText; // Guardamos el texto del buscador
  
  const container = document.getElementById('product-grid');
  if (!container) return;
  container.innerHTML = '';

  // 1. Filtrado por nombre
  const filtered = products.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()));

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No se encontraron remeras con ese nombre.</p>`;
    return;
  }

  // 2. Si el usuario está buscando, mostramos todos los resultados.
  // Si no busca nada, mostramos solo la tanda actual para el infinite scroll.
  const visibleProducts = filterText !== '' 
    ? filtered 
    : filtered.slice(0, currentPage * ITEMS_PER_PAGE);

  // 3. Tu renderizado intacto
  visibleProducts.forEach(p => {
    const currentSelectedSize = selectedSizes[p.id] || 'M';
    const currentStock = p.sizes[currentSelectedSize] || 0;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">$${p.price.toLocaleString()}</div>
        
        <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 0.3rem;">Seleccionar Talle:</div>
        <div class="size-selector">
          ${Object.keys(p.sizes).map(size => {
            const isAvailable = p.sizes[size] > 0;
            const isActive = currentSelectedSize === size;
            return `
              <button 
                class="size-btn ${isActive ? 'active' : ''} ${!isAvailable ? 'disabled' : ''}" 
                onclick="selectSize('${p.id}', '${size}')"
                ${!isAvailable ? 'disabled' : ''}
              >
                ${size}
              </button>
            `;
          }).join('')}
        </div>

        <div class="stock-tag" style="font-size:0.8rem; margin-bottom:1rem; color:var(--text-muted);">
          Stock (${currentSelectedSize}): <strong>${currentStock} un.</strong>
        </div>

        <button 
          class="btn-primary" 
          style="margin-top: auto;" 
          onclick="addToCart('${p.id}')"
          ${currentStock === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}
        >
          ${currentStock > 0 ? 'Agregar al Carrito 🛒' : 'Sin Stock'}
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Detector automático para cargar la siguiente tanda al scrollear
function setupInfiniteScroll() {
  const sentinel = document.getElementById('scroll-sentinel');
  if (!sentinel) return;

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    
    // Solo carga más si el usuario llegó al fondo, no hay búsqueda activa y quedan remeras por mostrar
    if (entry.isIntersecting && !isLoading && !currentFilter) {
      if (currentPage * ITEMS_PER_PAGE < products.length) {
        isLoading = true;
        setTimeout(() => {
          currentPage++;
          renderProducts(currentFilter);
          isLoading = false;
        }, 300);
      }
    }
  }, {
    rootMargin: '150px' // Detecta 150px antes del final
  });

  observer.observe(sentinel);
}

// Inicializar el detector al cargar el script
document.addEventListener('DOMContentLoaded', setupInfiniteScroll);

function selectSize(productId, size) {
  selectedSizes[productId] = size;
  renderProducts(document.getElementById('search-input')?.value || '');
}

function filterProducts() {
  const text = document.getElementById('search-input').value;
  renderProducts(text);
}

// --- CARRITO DE COMPRAS ---
function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('open');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const size = selectedSizes[productId] || 'M';
  const availableStock = product.sizes[size];

  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);

  if (existingIndex > -1) {
    if (cart[existingIndex].qty + 1 > availableStock) {
      Swal.fire({
  icon: 'insuccess',
  title: 'Sin stock disponible',
  text: 'Sin stock, por favor selecciona otro talle',
  confirmButtonText: 'Genial',
  confirmButtonColor: '#25D366', // Puedes poner el color primario de tu marca
  customClass: {
    popup: 'my-custom-popup'
  }
});
      return;
    }
    cart[existingIndex].qty += 1;
  } else {
    if (availableStock < 1) {
      Swal.fire({
  icon: 'insuccess',
  title: 'Sin stock disponible',
  text: 'Sin stock, por favor selecciona otro talle',
  confirmButtonText: 'Genial',
  confirmButtonColor: '#25D366', // Puedes poner el color primario de tu marca
  customClass: {
    popup: 'my-custom-popup'
  }
});
      return;
    }
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      size: size,
      qty: 1
    });
  }

  saveData();
  updateCartUI();
  toggleCart();
}

function updateCartQty(index, delta) {
  const item = cart[index];
  const product = products.find(p => p.id === item.id);
  const maxStock = product.sizes[item.size];

  if (delta === 1 && item.qty + 1 > maxStock) {
    alert("Límite de stock alcanzado.");
    return;
  }

  item.qty += delta;
  if (item.qty <= 0) {
    cart.splice(index, 1);
  }

  saveData();
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById('cart-items-container');
  const countBadge = document.getElementById('cart-count');
  const totalPriceEl = document.getElementById('cart-total-price');

  if (!container) return;

  container.innerHTML = '';
  let total = 0;
  let totalItems = 0;

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">El carrito está vacío.</p>`;
  } else {
    cart.forEach((item, index) => {
      total += item.price * item.qty;
      totalItems += item.qty;

      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img src="${item.img}" class="cart-item-img" alt="${item.name}">
        <div class="cart-item-details" style="flex-grow:1;">
          <div style="font-weight:bold; font-size:0.9rem;">${item.name}</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Talle: ${item.size} | $${item.price.toLocaleString()}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
          </div>
        </div>
        <div style="font-weight: bold; font-size: 0.9rem;">
          $${(item.price * item.qty).toLocaleString()}
        </div>
      `;
      container.appendChild(el);
    });
  }

  if (countBadge) countBadge.textContent = totalItems;
  if (totalPriceEl) totalPriceEl.textContent = `$${total.toLocaleString()}`;
}

// --- CHECKOUT & MERCADO PAGO ---
function processCheckout(e) {
  e.preventDefault();

  if (cart.length === 0) {
    Swal.fire({
  title: 'Tu carrito esta vácio',
  text: 'No puede continuar sin productos selecionados',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
}).then((result) => {
  if (result.isConfirmed) {
    // Aquí ejecutas la lógica de eliminación
  }
});
    return;
  }

  const name = document.getElementById('client-name').value;
  const dni = document.getElementById('client-dni').value;
  const phone = document.getElementById('client-phone').value;

  const newOrder = {
    id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleString(),
    customer: { name, dni, phone },
    items: [...cart],
    total: cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0),
    status: 'Pendiente'
  };

  // Resta automática de stock
  cart.forEach(cartItem => {
    const prod = products.find(p => p.id === cartItem.id);
    if (prod && prod.sizes[cartItem.size] !== undefined) {
      prod.sizes[cartItem.size] -= cartItem.qty;
    }
  });

  orders.unshift(newOrder);
  cart = [];

  saveData();
  updateCartUI();
  renderProducts();

  Swal.fire({
  icon: 'success',
  title: '¡Pedido realizado!',
  text: 'Gracias por tu compra. Seras redireccionado a Mercado Pago.',
  confirmButtonText: 'Genial',
  confirmButtonColor: '#25D366', // Puedes poner el color primario de tu marca
  customClass: {
    popup: 'my-custom-popup'
  }
});
  window.location.href = "https://www.mercadopago.com.ar";
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
});