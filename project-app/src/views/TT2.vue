<template>
  <div class="container-fluid">
    <div class="wrapper">
      <v-breadcrumbs
        class="crumbs"
        :items="items"
      >
        <template v-slot:divider>
          <v-icon>forward</v-icon>
        </template>
      </v-breadcrumbs>

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
          color="success"
          to="/data"
        >Детализация</v-btn>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [{
          text: 'Москва',
        },
        {
          text: 'Шереметьево',
          href: '/'
        },
        {
          text: 'TT1',
          disabled: false,
          href: '/TT1'
        },
        {
          text: 'Текущий месяц',
        }
      ],
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
.wrapper {
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  text-align: -webkit-center;
}

.crumbs {
  margin-top: 50px;
  background-color: #8b8cba;
}

.tablePlusBtn {
  max-width: 70%;
  margin-top: 10%;
}

.submitBtn {
  margin-top: 5%;
}

.crumbs > li {
  color: #d7d2d6;
}

.crumbs > li > a {
  color: white;
}

.crumbs > li > .v-icon {
  color: aliceblue;
}

@media screen and (max-width: 770px) {
  .tablePlusBtn {
    max-width: 100%;
  }
}
</style>
