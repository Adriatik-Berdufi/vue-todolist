const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            title: 'Todo List',

            todoList: [
                {
                    text: 'task1',
                    done: true,
                },
                {
                    text: 'task2',
                    done: false,
                },
                {
                    text: 'task3',
                    done: false,
                },
                {
                    text: 'task4',
                    done: false,
                },
            ],
            newItem: [
                {
                    text: '',
                    done: false,
                }
            ],
        };
    },
    methods: {
      saveNewItem(){
        const newItemCopy = { ...this.newItem };
        this.todoList.push(newItemCopy);
      }
       
    },
    
    mounted(){
        
        
    },
});
app.mount('#app');