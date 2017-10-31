<template>
  <div class="hello">
    <div v-for="user in usersFromServer">
      <p>user: {{user.name}}</p>
      <p>id: {{user.id}}</p>      
    </div>
    <br><br><br><hr><hr><hr>
    <div v-for="element in commitsFromServer">
      <p>committer: {{ searchUserById(element.committer) }}</p>
      <p>author: {{ searchUserById(element.author) }}</p>      
      <p>message:<br>{{ element.commit.message }}</p>
      <br><hr><br>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      usersFromServer: {},
      commitsFromServer: []
    };
  },
  methods: {
    searchUserById: function(userId) {
      for (var i = 0; i < this.usersFromServer.length; i++) {
        if (this.usersFromServer[i] == userId)
          return this.usersFromServer[i].name;
      }
      return null; // Case where no user was found
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/commits")
      .then(response => {
        this.commitsFromServer = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:3000/users")
      .then(response => {
        this.usersFromServer = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
