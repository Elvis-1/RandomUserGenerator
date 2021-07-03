const app = Vue.createApp({
    // template:'<h1>Hello {{firstName}}</h1>',

    data(){
        return {
            firstName:'Elvis',
            lastName:'Igiebor',
            email: 'john@gmail.com',
            gender:'male',
            // picture:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
            picture:"image/El.jpg",
        


        } 
    },

    methods : {
       async getUser(){
            const res = await fetch('https://randomuser.me/api')
           
           const {results} = await res.json()
           console.log(results)
           this.firstName = results[0].name.first
           this.lastName = results[0].name.last
           this.email = results[0].email
           this.gender = results[0].gender
           this.picture = results[0].picture.large
            // console.log(this.firstName)
            // this.firstName= 'Sam',
            // this.lastName ='Moses',
            // this.email = 'sam@gmail.com',
            // this.gender='female',
            // // picture:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
            // this.picture="https://randomuser.me/api/potraits/women/10/jpg"



        }
    },
})


app.mount('#app')