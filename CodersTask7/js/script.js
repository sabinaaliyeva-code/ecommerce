
//slideshow
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


setInterval(function() {
  plusSlides(1);
}, 5000);

// Sample product data
document.addEventListener('DOMContentLoaded', function() {
    
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cartCount = document.querySelector('.cart-count');


    let cartItems = [];
    let cartTotal = 0;
    
    
    function initSlider() {
        slider.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" width="100%" height="300">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${product.id}">Səbət əlavə et</button>
                </div>
            `;
            
            slider.appendChild(productCard);
        });
        
    
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }
    
    
    function addToCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        
        const existingItem = cartItems.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                ...product,
                quantity: 1
            });
        }
        
        
        cartTotal += product.price;
        
        
        updateCartCount();
        
        
        e.target.textContent = 'Səbətə əlavə olundu!';
        e.target.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            e.target.textContent = 'Səbət əlavə et';
            e.target.style.backgroundColor = '#ff6b6b';
        }, 1000);
    }
    
    
    function updateCartCount() {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
    

    
    initSlider();
});












    