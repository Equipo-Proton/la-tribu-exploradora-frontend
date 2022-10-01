<script>
import LandingPage from "../components/LandingPage.vue";

export default {
  name: "LandingVIew",

  methods: {
    load() {
      setTimeout(this.toLocation, 1000);
    },

    toLocation() {
      this.$router.push("/login");
    },
  },

  created() {
    this.load();
  },

  components: { LandingPage },
};
</script>

<template>
  <main>
    <LandingPage />
  </main>
</template>

<style scoped>
div {
  background-color: #f1fcff;
}
</style>
