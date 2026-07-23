// --- VERIFICACIÓN DE SESIÓN ADMIN ---
if (sessionStorage.getItem('rock_admin_logged') !== 'true') {
  Swal.fire({
  title: 'Iniciar seción',
  text: 'Primero inicia seción para continuar',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
}).then((result) => {
  if (result.isConfirmed) {
    // Aquí ejecutas la lógica de eliminación
  }
});
  window.location.href = 'login.html';
}

let products = JSON.parse(localStorage.getItem('rock_products')) || [];
let orders = JSON.parse(localStorage.getItem('rock_orders')) || [];
let adminCredentials = JSON.parse(localStorage.getItem('rock_admin')) || { user: 'admin', pass: 'admin123' };

function saveData() {
  localStorage.setItem('rock_products', JSON.stringify(products));
  localStorage.setItem('rock_orders', JSON.stringify(orders));
  localStorage.setItem('rock_admin', JSON.stringify(adminCredentials));
}

// --- MODO OSCURO / CLARO ---
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });
}

function logoutAdmin() {
  sessionStorage.removeItem('rock_admin_logged');
  window.location.href = 'index.html';
}

function switchAdminTab(tabId, btn) {
  document.querySelectorAll('.admin-subtab').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.admin-tab').forEach(el => el.classList.remove('active'));
  
  document.getElementById(tabId).style.display = 'block';
  btn.classList.add('active');
}

// --- TABLA DE STOCK Y PRECIOS ---
function renderAdminStock() {
  const tbody = document.getElementById('admin-stock-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  products.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${p.name}</strong></td>
      <td>
        $<input type="number" value="${p.price}" id="price-${p.id}" style="width:90px; padding:0.3rem;">
      </td>
      <td>
        <div style="display:flex; gap:0.5rem; align-items:center;">
          S: <input type="number" class="stock-input" value="${p.sizes.S}" id="stock-${p.id}-S">
          M: <input type="number" class="stock-input" value="${p.sizes.M}" id="stock-${p.id}-M">
          L: <input type="number" class="stock-input" value="${p.sizes.L}" id="stock-${p.id}-L">
          XL: <input type="number" class="stock-input" value="${p.sizes.XL}" id="stock-${p.id}-XL">
        </div>
      </td>
      <td>
        <button class="btn-primary" style="padding:0.4rem 0.8rem; font-size:0.8rem;" onclick="saveAdminProduct('${p.id}')">
          Guardar 💾
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function saveAdminProduct(productId) {
  const prod = products.find(p => p.id === productId);
  prod.price = parseFloat(document.getElementById(`price-${productId}`).value);
  
  prod.sizes.S = parseInt(document.getElementById(`stock-${productId}-S`).value) || 0;
  prod.sizes.M = parseInt(document.getElementById(`stock-${productId}-M`).value) || 0;
  prod.sizes.L = parseInt(document.getElementById(`stock-${productId}-L`).value) || 0;
  prod.sizes.XL = parseInt(document.getElementById(`stock-${productId}-XL`).value) || 0;

  saveData();
  Swal.fire({
  title: '¿Actualizar producto?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Sí, actualizar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    // Aquí ejecutas la lógica de eliminación
  }
});
}

// --- TABLA DE PEDIDOS ---
function renderAdminOrders() {
  const tbody = document.getElementById('admin-orders-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const activeOrders = orders.filter(o => o.status !== 'Archivado');

  if (activeOrders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">No hay pedidos activos.</td></tr>`;
    return;
  }

  activeOrders.forEach(order => {
    const tr = document.createElement('tr');
    const detailsHtml = order.items.map(i => `${i.qty}x ${i.name} (${i.size})`).join('<br>');

    // 1. Dejamos solo los dígitos del teléfono
    const cleanPhone = String(order.customer.phone || '').replace(/\D/g, '');
    
    // 2. Mensaje opcional predeterminado para que el dueño salude con contexto
    const waMessage = encodeURIComponent(`Hola ${order.customer.name}, te escribimos por tu pedido #${order.id}`);
    const waUrl = `https://wa.me/${cleanPhone}?text=${waMessage}`;

    tr.innerHTML = `
      <td><strong>${order.id}</strong></td>
      <td style="font-size:0.8rem;">${order.date}</td>
      <td>
        <strong>${order.customer.name}</strong><br>
        <small>
          DNI: ${order.customer.dni} | Tel: 
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color: #25D366; font-weight: bold; text-decoration: underline;">
            💬 ${order.customer.phone}
          </a>
        </small>
      </td>
      <td style="font-size:0.85rem;">${detailsHtml}</td>
      <td><strong>$${order.total.toLocaleString()}</strong></td>
      <td>
        <select onchange="updateOrderStatus('${order.id}', this.value)" style="padding:0.3rem; background:var(--bg-main); color:var(--text-main); border:1px solid var(--border);">
          <option value="Pendiente" ${order.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
          <option value="Enviado" ${order.status === 'Enviado' ? 'selected' : ''}>Enviado</option>
          <option value="Entregado" ${order.status === 'Entregado' ? 'selected' : ''}>Entregado</option>
        </select>
      </td>
      <td>
        <button class="btn-primary" style="background:var(--danger); padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="archiveOrder('${order.id}')">
          Archivar 📦
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveData();
    renderAdminOrders();
  }
}

function archiveOrder(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = 'Archivado';
    saveData();
    renderAdminOrders();
  }
}

function updateAdminCredentials(e) {
  e.preventDefault();
  adminCredentials.user = document.getElementById('new-admin-user').value;
  adminCredentials.pass = document.getElementById('new-admin-pass').value;

  saveData();
  Swal.fire({
  title: '¿Actualizar credenciales?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Sí, actualizar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    // Aquí ejecutas la lógica de eliminación
  }
});
  document.getElementById('new-admin-user').value = '';
  document.getElementById('new-admin-pass').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  renderAdminStock();
  renderAdminOrders();
});