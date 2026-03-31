/* ============================================================
   FreshMart — Main JS
   Cart, WhatsApp Order, Search, Slider, Scroll Reveal, UI
   ============================================================ */

'use strict';

// ── Config ──────────────────────────────────────────────────
const CONFIG = {
  whatsapp: '919876543210',       // Change to your WhatsApp number (country code + number)
  storeName: 'FreshMart',
  currency: '₹',
  freeShippingAbove: 499,
  deliveryFee: 40,
};

// ── Product Data ────────────────────────────────────────────
const PRODUCTS = [
  // Fruits & Vegetables
  { id: 1, name: 'Fresh Tomatoes', category: 'vegetables', weight: '500g', price: 35, mrp: 50, img: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=300&q=80', badge: 'fresh', rating: 4.7, reviews: 128 },
  { id: 2, name: 'Green Spinach', category: 'vegetables', weight: '250g', price: 25, mrp: 35, img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&q=80', badge: 'fresh', rating: 4.5, reviews: 86 },
  { id: 3, name: 'Alphonso Mangoes', category: 'fruits', weight: '1kg', price: 180, mrp: 240, img: 'https://images.unsplash.com/photo-1582655097634-9d5d553f1038?w=300&q=80', badge: 'hot', rating: 4.9, reviews: 312 },
  { id: 4, name: 'Bananas', category: 'fruits', weight: '1 dozen', price: 55, mrp: 70, img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=80', badge: '', rating: 4.4, reviews: 204 },
  { id: 5, name: 'Onions', category: 'vegetables', weight: '1kg', price: 45, mrp: 60, img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300&q=80', badge: '', rating: 4.3, reviews: 155 },
  { id: 6, name: 'Watermelon', category: 'fruits', weight: '1 piece', price: 120, mrp: 150, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80', badge: 'sale', rating: 4.6, reviews: 98 },
  // Dairy
  { id: 7, name: 'Amul Full Cream Milk', category: 'dairy', weight: '1L', price: 68, mrp: 72, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80', badge: 'fresh', rating: 4.8, reviews: 445 },
  { id: 8, name: 'Paneer', category: 'dairy', weight: '200g', price: 85, mrp: 100, img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80', badge: 'fresh', rating: 4.6, reviews: 189 },
  { id: 9, name: 'Curd', category: 'dairy', weight: '500g', price: 48, mrp: 55, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&q=80', badge: '', rating: 4.5, reviews: 222 },
  // Grains & Staples
  { id: 10, name: 'Basmati Rice', category: 'grains', weight: '5kg', price: 395, mrp: 450, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', badge: 'sale', rating: 4.7, reviews: 567 },
  { id: 11, name: 'Atta (Wheat Flour)', category: 'grains', weight: '5kg', price: 220, mrp: 260, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80', badge: '', rating: 4.5, reviews: 341 },
  { id: 12, name: 'Toor Dal', category: 'grains', weight: '1kg', price: 130, mrp: 160, img: 'https://images.unsplash.com/photo-1625869779249-c9ba7ed85c79?w=300&q=80', badge: '', rating: 4.4, reviews: 198 },
  // Beverages
  { id: 13, name: 'Fresh Orange Juice', category: 'beverages', weight: '1L', price: 120, mrp: 150, img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&q=80', badge: 'fresh', rating: 4.8, reviews: 143 },
  { id: 14, name: 'Green Tea (25 bags)', category: 'beverages', weight: '50g', price: 85, mrp: 110, img: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&q=80', badge: '', rating: 4.6, reviews: 276 },
  // Snacks
  { id: 15, name: 'Mixed Nuts', category: 'snacks', weight: '250g', price: 195, mrp: 240, img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&q=80', badge: '', rating: 4.7, reviews: 189 },
  { id: 16, name: 'Whole Wheat Biscuits', category: 'snacks', weight: '200g', price: 45, mrp: 55, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&q=80', badge: 'sale', rating: 4.3, reviews: 112 },
  // Household
  { id: 17, name: 'Coconut Oil', category: 'household', weight: '1L', price: 220, mrp: 260, img: 'https://images.unsplash.com/photo-1617221489058-d7e8e60cf9f1?w=300&q=80', badge: '', rating: 4.5, reviews: 321 },
  { id: 18, name: 'Dish Wash Liquid', category: 'household', weight: '750ml', price: 95, mrp: 120, img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&q=80', badge: 'sale', rating: 4.2, reviews: 88 },
  // Meat & Eggs
  { id: 19, name: 'Farm Fresh Eggs', category: 'eggs-meat', weight: '12 pcs', price: 90, mrp: 108, img: 'https://images.unsplash.com/photo-1491524062933-cb0289261700?w=300&q=80', badge: 'fresh', rating: 4.8, reviews: 512 },
  { id: 20, name: 'Chicken Breast', category: 'eggs-meat', weight: '500g', price: 175, mrp: 210, img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&q=80', badge: 'fresh', rating: 4.6, reviews: 234 },
];

// ── Cart State ───────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('fm_cart') || '[]');

function saveCart() {
  localStorage.setItem('fm_cart', JSON.stringify(cart));
}

function getCartItem(id) {
  return cart.find(i => i.id === id);
}

function addToCart(productId) {
  const p = PRODUCTS.find(p => p.id === productId);
  if (!p) return;
  const existing = getCartItem(productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${p.name} added to cart`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(productId, delta) {
  const item = getCartItem(productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  renderCartItems();
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function cartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartUI() {
  const count = cartCount();
  document.querySelectorAll('#cart-count, #cart-count-2').forEach(el => {
    if (el) el.textContent = count;
  });

  // Update summary if drawer open
  const subtotal = cartTotal();
  const delivery = subtotal >= CONFIG.freeShippingAbove ? 0 : CONFIG.deliveryFee;
  const total = subtotal + delivery;

  const elSub = document.getElementById('cart-subtotal');
  const elDel = document.getElementById('cart-delivery');
  const elTot = document.getElementById('cart-total');
  if (elSub) elSub.textContent = `${CONFIG.currency}${subtotal}`;
  if (elDel) elDel.textContent = subtotal >= CONFIG.freeShippingAbove ? 'Free' : `${CONFIG.currency}${delivery}`;
  if (elTot) elTot.textContent = `${CONFIG.currency}${total}`;
}

function renderCartItems() {
  const wrap = document.getElementById('cart-items-list');
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-basket"></i>
        <p>Your cart is empty</p>
        <p style="font-size:.8rem;color:var(--gray-400)">Add some fresh products!</p>
      </div>`;
    return;
  }

  wrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/f0fdf4/16a34a?text=🛒'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-weight">${item.weight}</div>
        <div class="cart-item-price">${CONFIG.currency}${item.price} × ${item.qty} = ${CONFIG.currency}${item.price * item.qty}</div>
        <div class="cart-item-controls">
          <button onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus" style="font-size:.7rem"></i></button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus" style="font-size:.7rem"></i></button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove"><i class="fas fa-times"></i></button>
    </div>
  `).join('');
}

// ── WhatsApp Order ───────────────────────────────────────────
function buildWhatsAppMessage() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return null;
  }

  const subtotal = cartTotal();
  const delivery = subtotal >= CONFIG.freeShippingAbove ? 0 : CONFIG.deliveryFee;
  const total = subtotal + delivery;

  let msg = `🛒 *${CONFIG.storeName} — New Order*\n\n`;
  msg += `*Items:*\n`;
  cart.forEach(item => {
    msg += `• ${item.name} (${item.weight}) × ${item.qty} = ${CONFIG.currency}${item.price * item.qty}\n`;
  });
  msg += `\n*Subtotal:* ${CONFIG.currency}${subtotal}`;
  msg += `\n*Delivery:* ${delivery === 0 ? 'Free' : CONFIG.currency + delivery}`;
  msg += `\n*Total:* ${CONFIG.currency}${total}`;
  msg += `\n\n_Please confirm my order and share delivery details. Thank you!_`;

  return msg;
}

function orderOnWhatsApp() {
  const msg = buildWhatsAppMessage();
  if (!msg) return;
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function contactOnWhatsApp(message) {
  const msg = message || `Hi ${CONFIG.storeName}! I'd like to know more about your products.`;
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ── Cart Drawer ──────────────────────────────────────────────
function openCart() {
  renderCartItems();
  updateCartUI();
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Toast ────────────────────────────────────────────────────
function showToast(msg, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-info-circle"></i>';
  toast.className = `toast ${type}`;
  toast.innerHTML = `${icon} ${msg}`;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Hero Slider ──────────────────────────────────────────────
function initSlider() {
  const track = document.querySelector('.hero-slides');
  if (!track) return;
  const slides = track.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  let current = 0;
  let autoplay;

  const dots = document.querySelectorAll('.slider-dot');

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  document.querySelector('.slider-btn.next')?.addEventListener('click', () => { next(); restartAuto(); });
  document.querySelector('.slider-btn.prev')?.addEventListener('click', () => { prev(); restartAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); restartAuto(); }));

  function startAuto() { autoplay = setInterval(next, 5000); }
  function restartAuto() { clearInterval(autoplay); startAuto(); }

  goTo(0);
  startAuto();

  // Touch support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); restartAuto(); }
  });
}

// ── Search ───────────────────────────────────────────────────
function initSearch() {
  const inputs = document.querySelectorAll('.search-input');
  inputs.forEach(input => {
    const wrap = input.closest('.nav-search') || input.parentElement;
    let suggestBox = wrap.querySelector('.search-suggestions');

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q || q.length < 2) {
        if (suggestBox) suggestBox.classList.remove('show');
        return;
      }
      const matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      ).slice(0, 6);

      if (!suggestBox) {
        suggestBox = document.createElement('div');
        suggestBox.className = 'search-suggestions';
        wrap.appendChild(suggestBox);
      }

      if (!matches.length) {
        suggestBox.classList.remove('show');
        return;
      }

      suggestBox.innerHTML = matches.map(p => `
        <div class="suggestion-item" data-id="${p.id}">
          <img src="${p.img}" alt="" style="width:30px;height:30px;object-fit:cover;border-radius:4px;">
          <span>${p.name} <small style="color:var(--gray-400)">${p.weight}</small></span>
          <span style="margin-left:auto;font-weight:700;color:var(--primary)">₹${p.price}</span>
        </div>
      `).join('');
      suggestBox.classList.add('show');

      suggestBox.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
          addToCart(parseInt(item.dataset.id));
          input.value = '';
          suggestBox.classList.remove('show');
          openCart();
        });
      });
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) {
          window.location.href = `products.html?search=${encodeURIComponent(q)}`;
        }
      }
    });

    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) suggestBox?.classList.remove('show');
    });
  });
}

// ── Scroll Reveal ────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// ── Back to Top ──────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Navbar Scroll ────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Mobile hamburger
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

// ── Render Products Grid ─────────────────────────────────────
function renderProducts(products, containerId = 'products-grid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  if (!products.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--gray-400)">
      <i class="fas fa-search" style="font-size:2.5rem;display:block;margin-bottom:.75rem;color:var(--gray-300)"></i>
      No products found. Try a different filter.
    </div>`;
    return;
  }

  grid.innerHTML = products.map(p => {
    const discount = p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0;
    const badgeHtml = p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'fresh' ? '🌿 Fresh' : p.badge === 'hot' ? '🔥 Hot' : '🏷️ Sale'}</span>` : '';
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    return `
    <div class="product-card reveal" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/300x300/f0fdf4/16a34a?text=🥦'">
        ${badgeHtml}
        <button class="product-wishlist" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">🤍</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category.replace('-', ' & ')}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-weight">${p.weight}</div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span>${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${CONFIG.currency}${p.price}</span>
          ${p.mrp > p.price ? `<span class="product-mrp">${CONFIG.currency}${p.mrp}</span><span class="product-off">${discount}% off</span>` : ''}
        </div>
        <button class="btn-add-cart" onclick="handleAddToCart(${p.id}, this)">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>`;
  }).join('');

  initScrollReveal();
}

function handleAddToCart(id, btn) {
  addToCart(id);
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Added!';
  btn.classList.add('added');
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.classList.remove('added');
  }, 1500);
}

function toggleWishlist(id, btn) {
  btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
  showToast(btn.textContent === '❤️' ? 'Added to wishlist' : 'Removed from wishlist');
}

// ── Filter Pills ─────────────────────────────────────────────
function initFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  const grid = document.getElementById('products-grid');
  if (!pills.length || !grid) return;

  // Read URL params
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('category');
  const urlSearch = params.get('search');

  let activeCategory = urlCat || 'all';

  // Set search input value
  if (urlSearch) {
    document.querySelectorAll('.search-input').forEach(i => i.value = urlSearch);
  }

  pills.forEach(pill => {
    if (pill.dataset.filter === activeCategory) pill.classList.add('active');
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.filter;
      applyFilter();
    });
  });

  function applyFilter() {
    const searchVal = (document.querySelector('.search-input')?.value || urlSearch || '').toLowerCase();
    let filtered = PRODUCTS;
    if (activeCategory !== 'all') filtered = filtered.filter(p => p.category === activeCategory);
    if (searchVal) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal));
    renderProducts(filtered);
  }

  document.querySelectorAll('.search-input').forEach(inp => {
    inp.addEventListener('input', applyFilter);
  });

  applyFilter();
}

// ── Countdown Timer ──────────────────────────────────────────
function initCountdown(targetDate, prefix = 'timer') {
  const el = document.getElementById(`${prefix}-days`);
  if (!el) return;

  function update() {
    const now = new Date();
    const diff = new Date(targetDate) - now;
    if (diff <= 0) {
      ['days','hours','mins','secs'].forEach(u => {
        const e = document.getElementById(`${prefix}-${u}`);
        if (e) e.textContent = '00';
      });
      return;
    }
    const d = Math.floor(diff / 864e5);
    const h = Math.floor((diff % 864e5) / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1e3);
    document.getElementById(`${prefix}-days`).textContent  = String(d).padStart(2,'0');
    document.getElementById(`${prefix}-hours`).textContent = String(h).padStart(2,'0');
    document.getElementById(`${prefix}-mins`).textContent  = String(m).padStart(2,'0');
    document.getElementById(`${prefix}-secs`).textContent  = String(s).padStart(2,'0');
  }
  update();
  setInterval(update, 1000);
}

// ── Page Loader ──────────────────────────────────────────────
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 400);
    }, 800);
  });
}

// ── Featured Products on Home ────────────────────────────────
function initHomeProducts() {
  const grid = document.getElementById('featured-products');
  if (!grid) return;
  const featured = PRODUCTS.slice(0, 8);
  renderProducts(featured, 'featured-products');
}

// ── Contact Form ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name=name]')?.value;
    const phone = form.querySelector('[name=phone]')?.value;
    const message = form.querySelector('[name=message]')?.value;
    const subject = form.querySelector('[name=subject]')?.value;
    const msg = `Hi FreshMart!\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`;
    contactOnWhatsApp(msg);
    showToast('Redirecting to WhatsApp...', 'success');
  });
}

// ── Newsletter Form ──────────────────────────────────────────
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = form.querySelector('input[type=email]')?.value;
      if (!email) return;
      showToast('🎉 Subscribed! Check WhatsApp for your coupon.', 'success');
      form.reset();
      // Optionally send to WhatsApp
      contactOnWhatsApp(`Hi FreshMart! I want to subscribe to offers. Email: ${email}`);
    });
  });
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initNavbar();
  initSlider();
  initSearch();
  initScrollReveal();
  initBackToTop();
  initHomeProducts();
  initFilters();
  initContactForm();
  initNewsletter();
  updateCartUI();

  // Cart drawer
  document.querySelectorAll('[data-open-cart]').forEach(btn => btn.addEventListener('click', openCart));
  document.getElementById('close-cart')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('btn-order-whatsapp')?.addEventListener('click', orderOnWhatsApp);
  document.getElementById('btn-clear-cart')?.addEventListener('click', clearCart);

  // WhatsApp float
  document.getElementById('wa-float-btn')?.addEventListener('click', () => contactOnWhatsApp());

  // Countdown on offers page (end of week)
  const weekEnd = new Date();
  weekEnd.setDate(weekEnd.getDate() + (7 - weekEnd.getDay()));
  weekEnd.setHours(23, 59, 59, 0);
  initCountdown(weekEnd, 'timer');

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
});

// Expose for inline onclick
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.clearCart = clearCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.orderOnWhatsApp = orderOnWhatsApp;
window.contactOnWhatsApp = contactOnWhatsApp;
window.handleAddToCart = handleAddToCart;
window.toggleWishlist = toggleWishlist;
