const vm = new Vue({
  el: "#app",
  data: () => ({
    products: [],
  }),
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