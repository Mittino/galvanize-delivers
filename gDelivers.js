"use strict";
(function gDelivers() {
  var products = [
    { id: 1,
      name: "Royale with Cheese",
      price: 8.99,
      image: 'img/burger.jpg',
    },
    { id: 2,
      name: "Arugula Pie",
      price: 11.99,
      image: 'img/pizza.jpg',
    },
    {
      id: 3,
      name: "Smoked Swine",
      price: 14.99,
      image: 'img/ribs.jpg',
    },
    {
      id: 4,
      name: "Ice Cream Biscut",
      price: 7.99,
      image: 'img/ice_cream.jpg',
    },
  ];
  var cartItems = [
    {
      product: {
        id: 1,
        name: "Royale with Cheese",
        price: 8.99,
        image: 'img/burger.jpg',
      },

      quantity: 1,

    }

  ];

  function drawProducts(products){
    var menu = $(".menu");

    products.forEach(function(product) {
      menu.append(
          '<div class="col s12 m6">'+
            '<div class="card">'+
              '<div class="card-image">'+
                '<img src=' + product.image + '>'+
                '<div class="card-content">'+
                  '<p> '+ product.name + '</p>'+
                  '<p>' + "$" + product.price + '</p>'+
                '</div>'+
                '<div class="card-action">'+
                  '<a href="#" class="pink-text" id="royale">Add to Order</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'
      );
    });
  }

  function drawCart(cartItems){
    var cart = $(".cartItems");

    cartItems.forEach(function(cartItem){
      cart.append(
        '<tr>'+
          '<td>' + cartItem.product.name + '</td>'+
          '<td>$' + cartItem.product.price + '</td>' +
        '</tr>'
      );
    });

  }

  $(document).ready(function(){
    $('.parallax').parallax();



    drawProducts(products);
    drawCart(cartItems);



        $('.card-action').click(function(){
          var target = $(event.target).parents();
          // if (event.target !== event.currentTarget && event.target===){
          // target = $(event.target).attr(".cardcontent");
          // }
          console.log("clicked", target);
        });














      });
})();
