<template>
  <div class="tablePlusBtn">
    <v-data-table
      :headers="headers"
      :items="products"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.KPU }}</td>
        <td>{{ props.item.paid }}</td>
        <td>{{ props.item.notPaid }}</td>
        <td>{{ props.item.toAccount }}</td>
      </template>
    </v-data-table>
    <v-btn
      class="submitBtn"
      to="/data"
    >Детализация</v-btn>
  </div>
</template>

<script>
export default {
    data: () => ({
      headers: [
          {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'КПУ', value: 'KPU' },
          { text: 'Опл.', value: 'paid' },
          { text: 'Не опл.', value: 'notPaid' },
          { text: 'К учету', value: 'toAccount' }
        ],
      products: [
        {
          name: 'Одинарные',
          KPU: 100,
          paid: 95,
          notPaid: 5,
          toAccount: 97
        },
        {
          name: 'Двойные',
          KPU: 80,
          paid: 70,
          notPaid: 3,
          toAccount: 77
        }
      ]
    })
}
</script>

<style>
.tablePlusBtn {
  max-width: 80%;
  margin-top: 10%;
  display: flex;
  justify-content: space-around;
}

.submitBtn {
  margin-top: 5%;
}

.elevation-1 {
  min-width: 70%;
}

.theme--light.v-datatable thead th.column.sortable.active {
  font-weight: 800;
  font-size: 16px;
}

.v-datatable thead th.column.sortable {
  font-size: 16px;
}

table.v-table tbody td:first-child {
  font-weight: 500;
  font-size: 16px;
}

.submitBtn:before {
  background-color: #FF7A00;
}

@media screen and (max-width: 770px) {
  .tablePlusBtn {
    max-width: 100%;
  }
}
</style>


