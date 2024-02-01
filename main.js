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
        if(newItemCopy.text.length == 0) return;
        this.todoList.push(newItemCopy);
        this.newItem.text = '';
      },
      deleteItem(index){
        this.todoList.splice(index,1);
      },
       
    },
    
    mounted(){
        
        
    },
});
app.mount('#app');