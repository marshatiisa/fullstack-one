//worked with Rio who helped me on this project- debugging and understanding backend better
var cart = document.getElementsByClassName("addToCart");
var trash = document.getElementsByClassName("fa-trash");

Array.from(cart).forEach(function(element) {
      element.addEventListener('click', function(){
        const img = this.parentNode.childNodes[1].src
        const name = this.parentNode.childNodes[3].innerText
        const color = this.parentNode.childNodes[5].innerText
        const price = this.parentNode.childNodes[7].innerText

        console.log(this.parentNode.childNodes)
        fetch('addToCart', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            img,name,color,price
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const img = this.parentNode.childNodes[1].src
    
        fetch('deleteFromCart', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            img
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
