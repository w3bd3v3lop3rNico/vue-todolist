const { createApp } = Vue;

createApp ({
    data() {
        return {
            todo: 0,
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
        deleteItem (itemIndex) {
            this.todos.splice(itemIndex, 1);
        }
    },
    mounted() {

    },
}).mount('#app')
