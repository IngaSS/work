<template>
  <div class="homepage">
    <h1>Домодедово</h1>
    <v-card class="link-card">
      <router-link class="link" to="/TT1">TT1</router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>


<style>
.homepage {
  display: flex;
  flex-direction: row;
  margin: auto;
  min-width: 800px;
  justify-content: space-between;
}

.link-card {
  background-color: #eceff1;
  min-height: 200px;
  max-width: 350px;
  min-width: 350px;
  text-align: center;
}

.link {
  line-height: 13;
  color: cadetblue;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: 1.5px;
}

.link-card:hover {
  background-color: #b0bec5;
}

.link-card:hover .link {
  text-decoration: none;
  color: #eceff1;
}

@media screen and (max-width: 830px) {
  .homepage {
    display: flex;
    flex-direction: column;
    margin: auto;
    min-width: 350px;
    min-height: 450px;
    justify-content: space-between;
  }
}
</style>



