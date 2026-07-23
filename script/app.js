// --- BASE DE DATOS Y ESTADO LOCALSTORAGE ---
const initialProducts = [
  { 
    id: 101, 
    nombre: "Remera Patricio Rey - Redondos", 
    categoria: "nacional", 
    precio: 18500, 
    stock: { S: 5, M: 10, L: 8, XL: 4 }, 
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 102, 
    nombre: "Remera AC/DC - Back in Black", 
    categoria: "internacional", 
    precio: 21000, 
    stock: { M: 6, L: 12, XL: 5, XXL: 2 }, 
    imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 103, 
    nombre: "Remera Soda Stereo - Doble Vida", 
    categoria: "nacional", 
    precio: 19000, 
    stock: { S: 4, M: 8, L: 6 }, 
    imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 104, 
    nombre: "Remera Iron Maiden - Eddie Trooper", 
    categoria: "heavy", 
    precio: 23000, 
    stock: { M: 5, L: 9, XL: 3 }, 
    imagen: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 105, 
    nombre: "Remera La Renga - Detonador de Sueños", 
    categoria: "nacional", 
    precio: 18500, 
    stock: { S: 3, M: 7, L: 10, XL: 4, XXL: 1 }, 
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 106, 
    nombre: "Remera Metallica - Master of Puppets", 
    categoria: "heavy", 
    precio: 22500, 
    stock: { S: 2, L: 8, XL: 5 }, 
    imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 107, 
    nombre: "Remera Charly García - Say No More", 
    categoria: "nacional", 
    precio: 19500, 
    stock: { M: 6, L: 6, XL: 2 }, 
    imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 108, 
    nombre: "Remera Nirvana - Nevermind Smile", 
    categoria: "internacional", 
    precio: 20000, 
    stock: { S: 8, M: 15, L: 10, XL: 6 }, 
    imagen: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 109, 
    nombre: "Remera Ramones - Presidential Seal", 
    categoria: "internacional", 
    precio: 19800, 
    stock: { M: 4, L: 7, XXL: 3 }, 
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    id: 110, 
    nombre: "Remera Pappo's Blues - Riff", 
    categoria: "nacional", 
    precio: 18000, 
    stock: { S: 5, M: 5, L: 5, XL: 2 }, 
    imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80" 
  }
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
function renderProducts(filterText = '') {
  const container = document.getElementById('product-grid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = products.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()));

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No se encontraron remeras con ese nombre.</p>`;
    return;
  }

  filtered.forEach(p => {
    const currentSelectedSize = selectedSizes[p.id] || 'M';
    const currentStock = p.sizes[currentSelectedSize] || 0;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="product-img">
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