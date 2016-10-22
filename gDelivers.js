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
  var orderTotals = {
    subtotal: 0,
    tax: 0,
    total: 0,
  };

  function drawProducts(products){
    var menu = $(".menu");

    products.forEach(function(product) {
      var $productCard = $('<div class="col s12 m6">'+
        '<div class="card">'+
          '<div class="card-image">'+
            '<img src=' + product.image + '>'+
            '<div class="card-content">'+
              '<p> '+ product.name + '</p>'+
              '<p>' + "$" + product.price + '</p>'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="javascript:void(0)" class="pink-text add-to-order">Add to Order</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>');

      $productCard.find('.add-to-order').on('click', function(event) {
        console.log('Clicked ' + product.name);
        addToCart(product);

      });

      menu.append($productCard);
    });
  }

  function addToCart(product){
    cartItems.push({
      product: product,
      quantity: 1,
    });

    drawCart(cartItems);
  }

  function drawCart(cartItems){
    var cart = $(".cartItems");
    cart.html('');
    cartItems.forEach(function(cartItem){
      cart.append(
        '<tr>'+
          '<td>' + cartItem.product.name + '</td>'+
          '<td>$' + cartItem.product.price + '</td>' +
        '</tr>'
      );
    });
  }

  function drawOrderTotal(orderTotals){
    var totals = $(".orderTotals");
    var subtotal = orderTotals.subtotal.toFixed(2);
    var tax = orderTotals.tax.toFixed(2);
    var total = orderTotals.total.toFixed(2);
      totals.append(
        '<tr>' +
          '<td class="right-align" data-field="subtotal">Subtotal</td>' +
          '<td class="subtotal"> $' + subtotal + '</td>'+
        '</tr>' +
          '<td class="right-align" data-field="tax">Tax</td>' +
          '<td class="tax"> $' + tax + '</td>' +
        '<tr>' +
          '<td class="right-align" data-field="total">Total</td>' +
          '<td class="tax"> $' + total + '</td>' +
        '</tr>'
      );
    }


  $(document).ready(function(){
    $('.parallax').parallax();



    drawProducts(products);
    drawCart(cartItems);
    drawOrderTotal(orderTotals);


        // $('.card-action').click(function(){
        //   var target = $(event.target).parents();
        //   // if (event.target !== event.currentTarget && event.target===){
        //   // target = $(event.target).attr(".cardcontent");
        //   // }
        //   console.log("clicked", target);
        // });














      });
})();
