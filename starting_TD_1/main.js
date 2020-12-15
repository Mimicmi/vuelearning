const app = new Vue({
    el: "#app",
    data: function () {
        return {
            title: "Welcome to my shop",
            products: [
                {
                    name: "Baby Yoda",
                    price: 19,
                    image:"./assets/téléchargement.jpeg",
                    image2:"./assets/Rickroll.jpg",
                    hovered:null,
                    stock: 0,
                    attributes: {
                        Type: "Jouet",
                        For: "Trentenaires"
                    }
                },                {
                    name: "Pull Deadpool",
                    price: 29,
                    image:"./assets/pull.jpeg",
                    image2:"./assets/Rickroll.jpg",
                    hovered:null,
                    stock: 7,
                    attributes: {
                        Size: "S,M,L,XL",
                        For: "Laine"
                    }
                },                {
                    name: "Lampe Deadpool",
                    price: 9,
                    image:"./assets/51pUTdi-k9L._AC_.jpg",
                    image2:"./assets/Rickroll.jpg",
                    hovered:null,
                    stock: 3
                }
            ],
            cart: [],
            totalPrice: 0,
            codePromo: 5,
            property: "",
            displayCart: false
        }
    },
    methods: {
        addToCart(product){
            this.cart.push(product);
            this.totalPrice += product.price;
            this.displayCart = true;
            console.log('Total :', this.totalPrice);
        }
    }

});