const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            title: 'Todo List',
            newItem: [{text: '',done: false,}],
        };
    },
    methods: {
      saveNewItem(){
        const newItemCopy = { ...this.newItem };
        if(newItemCopy.text.length == 0) return;
        this.todoList.push(newItemCopy);
        this.newItem.text = '';
      },
      deleteItem(index){this.todoList.splice(index,1);},
      doneItem(item){item.done = item.done == false ? true : false;},
      deleteAll(){this.todoList = [];},
       
    },
    mounted(){},
});
app.mount('#app');