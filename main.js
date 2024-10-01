/*navbar*/

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

/*cart*/
const cartToggle = document.querySelector(".cart-toggle");
const cart = document.querySelector(".cart-content");

cartToggle.addEventListener("click", () => {
 cart.classList.toggle("cart-visible");
});

/*hamburger to x*/
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

navToggle.addEventListener('click', toggleHamburger)

/*lightbox*/

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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

/*amount in basket*/

var amount = document.querySelector('.amount-number');
     var plus = document.querySelector('.plus');
     var minus = document.querySelector('.minus');
 
     var theQuantity = 0;
 
     plus.addEventListener('click', function() {
         theQuantity++;
         amount.innerHTML = theQuantity;
     });
 
     minus.addEventListener('click', function() {
         if (theQuantity > 0) {
            theQuantity--;
            amount.innerHTML = theQuantity;
        } else {}
     });

     var cartAmount = document.querySelector('.cart-amount');
     var cartAmountNumber = document.querySelector('.cart-amount-number');
     var addToCartButton = document.querySelector('.add-cart');
 
     addToCartButton.addEventListener('click', function() {
         if (amount.innerHTML > 0) {
             cartAmountNumber.innerHTML = amount.innerHTML;
             cartAmount.setAttribute('style', 'display: block');
         } else {
             cartAmount.setAttribute('style', 'display: none');
         }
     });

     var basketMenu = document.querySelector('.cart-content');
     var cartIcon = document.querySelector('.cart-toggle');
     var amountPurchasing = document.querySelector('.amount-to-buy');
     var mobileEmpty = document.querySelector('.cart-text');
     var finalPrice = document.querySelector('.total-price');
     var mobileFull = document.querySelector('.fullcart');
 
  
     addToCartButton.addEventListener('click', function() {
      amountPurchasing.innerHTML = amount.innerHTML;
      finalPrice.innerHTML = amountPurchasing.innerHTML * 125;
  });

  addToCartButton.addEventListener('click', function() {
      if (amountPurchasing.innerHTML == 0) {
          mobileEmpty.setAttribute('style', 'display: flex');
          mobileFull.setAttribute('style', 'display: none');
      } else if (amountPurchasing.innerHTML) {
          mobileEmpty.setAttribute('style', 'display: none');
          mobileFull.setAttribute('style', 'display: block');
      }
  });
