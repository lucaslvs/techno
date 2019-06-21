const vm = new Vue({
  el: "#app",
  data: () => ({
    products: [],
    product: null,
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
    fetchProduct(id) {
      fetch(`./api/produtos/${id}/dados.json`)
      .then(response => response.json())
      .then(product => {
        this.product = product;
      });
    },
  },
  created() {
    this.fetchProducts();
  },
});