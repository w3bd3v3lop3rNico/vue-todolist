const { createApp } = Vue;

createApp ({
    data() {
        return {
            newTodo: {
                text: '',
                done: false,
            },
            
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        addItem () {
            const newTodo = {
                text: this.newTodo.text,
                done: false,
            }
            if (newTodo.text !== '') {
                this.todos.unshift(newTodo);
            }
            else {
                this.newTodo.text = '';
            }
            
        },
        deleteItem (itemIndex, var1) {
            console.log(var1);
            this.todos.splice(itemIndex, 1);
        },
        doneItem (itemIndex, doneValue) {
            console.log('click')
            if (doneValue === true) {
                this.todos[itemIndex].done = false;
            } else if (doneValue === false) {
                this.todos[itemIndex].done = true;
            }
        }
    },
    mounted() {

    },
}).mount('#app');