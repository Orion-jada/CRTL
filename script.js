const PRODUCTS = {
  1: { id:1, title:'CRTL Shirt', price:'$28', desc:'A shirt. Not life-changing, but better than that old thing in your drawer.', img:'https://via.placeholder.com/900x900/0b0d0e/9aa4ad?text=CRTL+Shirt' },
  2: { id:2, title:'CRTL Hoodie', price:'$68', desc:'Keeps you warm. Might make you slightly more interesting to look at.', img:'https://via.placeholder.com/900x900/0b0d0e/9aa4ad?text=CRTL+Hoodie' },
  3: { id:3, title:'CRTL Socks', price:'$12', desc:'Soft, reliable, and unlikely to be lost in the laundry for more than 3 days.', img:'https://via.placeholder.com/900x900/0b0d0e/9aa4ad?text=CRTL+Socks' },
  4: { id:4, title:'CRTL Sticker Pack', price:'$8', desc:'Stick it somewhere. Or don’t. We don’t judge.', img:'https://via.placeholder.com/900x900/0b0d0e/9aa4ad?text=CRTL+Stickers' },
  5: { id:5, title:'CRTL Tote Bag', price:'$22', desc:'Carries your things. Might also carry your existential dread.', img:'https://via.placeholder.com/900x900/0b0d0e/9aa4ad?text=CRTL+Tote' },
  6: { id:6, title:'CRTL Cap', price:'$24', desc:'Keep the sun out. Look marginally cooler than your neighbor.', img:'https://via.placeholder.com/900x900/0b0d0e/9aa4ad?text=CRTL+Cap' }
};

const backdrop = document.getElementById('backdrop');
const modal = backdrop.querySelector('.modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const modalThumb = document.getElementById('modal-thumb').querySelector('img');
const modalAddBtn = document.getElementById('modal-add-to-cart');
const modalCloseBtn = backdrop.querySelector('.close');

document.querySelectorAll('.quick-view').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    const product = PRODUCTS[id];
    if (!product) return;

    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = product.price;
    modalThumb.src = product.img;
    modalThumb.alt = product.title;

    backdrop.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
});

modalCloseBtn.addEventListener('click', closeModal);
modalAddBtn.addEventListener('click', () => {
  alert('Added to cart. No regrets (probably).');
  closeModal();
});

function openModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;

  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = p.price;
  modalThumb.src = p.img;
  modalThumb.alt = p.title;

  backdrop.style.display = 'flex';
  requestAnimationFrame(() => {
    backdrop.classList.add('show');
    modal.classList.add('show');
  });
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  backdrop.classList.remove('show');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 300); // matches CSS transition timing
  document.body.style.overflow = '';
}

// close modal when clicking outside
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
