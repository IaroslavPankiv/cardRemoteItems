let cards = document.querySelectorAll('.card');


for (let i = 0; i < cards.length; i++) {
   let card = cards[i];
   cards[i].addEventListener('mousemove', startrotate);
   card.addEventListener('mouseout', stopRotate)


}

   function startrotate(event) {
      let cardItem = this.querySelector('.card-item')
      // cardItem.innerText = event.offsetY + " " + event.offsetX;
      let halfHeight = cardItem.offsetHeight / 2 ;
      cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 +'deg) rotateY('+ (event.offsetX - halfHeight)  / 5 +'deg)';


   }

   function stopRotate() {
      let cardItem = this.querySelector('.card-item');
      cardItem.style.transform = 'rotate(0)';
   }
   