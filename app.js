const vm = new Vue({
  el: "#app",
  data: () => ({
    products: [],
  }),
  filters: {
    currencyMoney(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  },
  methods: {
    fetchProducts() {
      fetch('./api/produtos.json')
        .then(response => response.json())
        .then(products => {
          this.products = products;
        });
    },
  },
  created() {
    this.fetchProducts();
  },
});