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
    showModal(id) {
      this.fetchProduct(id);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    closeModal({ target, currentTarget }) {
      if (target === currentTarget) this.product = null;
    },
  },
  created() {
    this.fetchProducts();
  },
});