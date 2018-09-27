<template>
	<div>
		
		
				<li v-for="item in todos" :key="item.id">
				 	{{ item.title }}
				 	{{ item.quest }}
			 		<button v-on:click="removeTodo(item)">Remove</button>
			 	</li>
			 	<input type="text" v-model="newTodoText" />
			 	<input type="text" v-model="newTodoQuest" />
			 	<button v-on:click="addNewTodo">Add</button>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
		    newTodoText: '',
		    todos: [
		      {
		        id: 1,
		        title: 'Do the dishes',
		        quest: '11111'
		      },
		      {
		        id: 2,
		        title: 'Take out the trash',
		        quest: '222222'
		      },
		      {
		        id: 3,
		        title: 'Mow the lawn',
		        quest: '33333333'
		      }
		    ],
		    nextTodoId: 4
		}
	},
  	methods: {
	    addNewTodo: function () {
		  	this.todos.push({
		   		id: this.nextTodoId++,
			    title: this.newTodoText,
			    quest: this.newTodoQuest
		 	})
			this.newTodoText = this.newTodoQuest = ''
		},
		removeTodo: function (item) {
			let index = this.todos.indexOf(item);
			this.todos.splice(index, 1);
		}
  	}
}
</script>