<template>
  <div class="todos">
    <b-container class="bv-example-row">
      <b-row>
        <div class="todo" v-for="todo in todoList" v-bind:key="todo.id">
          <b-col cols="8" md="auto" class="text-center">
            <b-card
              :title="todo.title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              :class="todo.completed ? 'is-completed' : 'is-not-completed'"
            >
              <b-card-text>{{todo.description}}</b-card-text>
              <b-button
                href="#"
                v-on:click="markComplete(todo)"
                variant="primary"
              >{{todo.completed ? "Task Completed" : "Pending Task"}}</b-button>
              <b-button squared variant="outline-danger" v-on:click="deleteTodo(todo)">Delete</b-button>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts" src="./Todos.ts">
</script>
<style lang="css" src="./Todos.css" scoped></style>