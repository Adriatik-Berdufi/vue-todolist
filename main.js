const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            title: 'Todo List',
        };
    },
    methods: {
       
    },
    
    mounted(){
        console.log('App montata');
        
    },
});
app.mount('#app');