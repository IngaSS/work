<template>
  <div class="container-fluid">
    <div class="wrapper">
      <v-toolbar class="toolbar">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="logo">PACK&FLY</v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down tools">
          <h1>Домодедово</h1>
        </v-toolbar-items>
      </v-toolbar>

      <TT />
      <TT />
      <TT />
    </div>

  </div>
</template>

<script>
import TT from '../components/TT';

  export default {
    components: {
      TT
    },
    data: () => ({
      
    })
  }
</script>

<style>
.wrapper {
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  text-align: -webkit-center;
}

.toolbar {
  background-color: #FF7A00!important;
}

.logo {
  color: white;
  font-size: 30px;
}

.tools > a > .v-btn__content {
  color: white;
}


</style>
