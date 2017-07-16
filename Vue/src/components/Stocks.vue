<template>
  <main>
    <section class="section">
      <div class="container heading">
        <h1 class="title">Stockcharts</h1>
        <h2 class="subtitle">using Vue.js, Firebase, VueFire, Highcharts, Vue-Highcharts, Socket.io, vue-socket.io, Axios and Bulma</h2>
      </div>
    </section>
    <section class="section">
      <div class="add-stocks">
        <highstock :options="options" ref="highcharts"></highstock>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <table class="table">
              <thead>
                <th>Stock Symbol</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.key">
                  <td class="stockname">
                    {{ item.Code }}
                  </td>
                  <td>
                    <button class="button is-danger delete" v-on:click="removeStock(item)"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="column">
            <form class="form" v-on:submit.prevent="addStock">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" v-model="stock" placeholder="Add Stock">
                </p>
                <p class="control">
                  <button class="button is-success">Add Stock</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { db } from './firebase';
import axios from 'axios';

export default {
  name: 'stocks',
  data() {
    return {
      stock: '',
      options: {
        rangeSelector: {
          enabled: false
        },
        yAxis: {
          labels: {
            formatter: function () {
              return (this.value > 0 ? ' + ' : '') + this.value + '%';
            }
          },
          plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
          }]
        },

        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true
          }
        },

        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
        },

        series: []
      }
    }
  },
  firebase: {
    items: db.ref('Stocks')
  },
  mounted() {
    var vm = this;
    setTimeout(() => {
      vm.createChart();
    }, 1000);
  },
  methods: {
    createChart() {
      let highcharts = this.$refs.highcharts.chart;
      var vm = this;

      this.items.forEach(function (item, i) {
        var seriesOptions = [];
        axios.get('https://www.quandl.com/api/v3/datasets/WIKI/' + item.Code +
          '.json?start_date=2016-06-01&api_key=s4HBgzD5m8DQZ2sBKRGw').then(function (response) {
            seriesOptions[i] = {
              id: item['.key'].toString(),
              name: response.data.dataset.name,
              data: response.data.dataset.data
            };

            highcharts.addSeries(seriesOptions[i]);
          });
      });
    },
    addStock() {
      if (this.stock.length > 0) {
        this.$firebaseRefs.items.push({
          Code: this.stock
        })
        var seriesData = this.stock;
        this.addSeries(seriesData);
        this.$socket.emit('addItem', seriesData)
      }
    },
    addSeries(seriesData) {
      var fbKey = '';
      this.$firebaseRefs.items.orderByKey().limitToLast(1).on('child_added', function (data) {
        fbKey = data.key;
      })

      let highcharts = this.$refs.highcharts.chart;

      axios.get('https://www.quandl.com/api/v3/datasets/WIKI/' + seriesData +
        '.json?start_date=2016-06-01&api_key=s4HBgzD5m8DQZ2sBKRGw').then(function (response) {

          var seriesOptions = {
            id: fbKey,
            name: response.data.dataset.name,
            data: response.data.dataset.data
          };

          highcharts.addSeries(seriesOptions);
        });

      this.stock = '';

    },
    removeStock(stock) {
      var removedStock = stock['.key'];
      this.removeSeries(removedStock);
      this.$firebaseRefs.items.child(removedStock).remove();
      this.$socket.emit('removeItem', removedStock);
    },
    removeSeries(data) {
      var series = this.$refs.highcharts.chart.get(data);
      if (series == null) {
        return;
      }
      series.remove();
    }
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    disconnect() {
      console.log('socket disconnected');
    },
    addItem(data) {
      this.addSeries(data);
    },
    removeItem(data) {
      this.removeSeries(data);
    }
  }
}
</script>

<style scoped>
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

.heading {
  text-align: center;
}

.subtitle {
  text-transform: none;
}

table {
  width: 250px;
  margin: 0 auto;
}

.delete {
  background: red;
}

.stockname {
  width: 70%;
}

form {
  text-align: left;
}

.tag {
  margin-left: 5px;
}

.tag.is-large {
  min-width: 100px;
}
</style>
