const app = new Vue({
    el: "#app",
    data: function() {
        return {
            title: "Welcome to my Vue app !!!",
            introduction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cupiditate debitis dolore doloribus error iste laborum minima minus nobis non odit possimus reiciendis sed, sint sunt velit vitae? Nobis?",
            subtitle: "Merry Christmas",
            christmas: false,
            summer: 3,
            newYear: 2021,
            sale: true,
            computeTitle: "This is a message from a computed method... ",
            property:"",
            product:['mask', 'pullover', 'lamp', {
                item0: 'livre',
                item1: 'lampe',
                item2:'chocolat'
            }, 9],
            count: 0,
            image: "./assets/googlelogo_color_160x56dp.png"
        }
    },
    methods: {
        alert(str){
            console.log(this.property);
        }
    },
    computed: {
        footerMessage(){
            this.computeTitle += this.title + ' ' + this.subtitle;
            return this.computeTitle;
        }
    }
});

/*data est une fonction qui retourne un objet*/