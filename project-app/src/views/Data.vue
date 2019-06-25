<template>
  <div class="data">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>PACK&FLY</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down tools">
        <v-btn
          to="/"
          flat
        >Главная</v-btn>
        <v-btn
          to="/Data"
          flat
        >ТТ1</v-btn>
        <v-btn
          to="/Data"
          flat
        >ТТ2</v-btn>
        <v-btn
          to="/Data"
          flat
        >ТТ3</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="dataList"
      class="elevation-1 dataTable"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.remarks }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import dataList from '../data.json';

  export default {
    data () {
      return {
        dataList: dataList,
        headers: [
          {
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Номер', value: 'number' },
          { text: 'Дата', value: 'date' },
          { text: 'Тип', value: 'type' },
          { text: 'Комментарий', value: 'comment' }
        ]
      }
    }
  }
</script>

<style>
.data {
  text-align: -webkit-center;
}

.tools {
  margin-left: 30%;
}

.dataTable {
  margin-top: 10%;
  max-width: 80%;
}
</style>
