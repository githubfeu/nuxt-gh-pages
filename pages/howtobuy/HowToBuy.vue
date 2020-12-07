<template>
  <div class="section">
    <div class="card is-clearfix columns">
      <h1><strong>ขั้นตอนการสั่งซื้อ</strong></h1>
    </div>
    <div class="card is-clearfix columns">
      <figure class="card-image is-480x480 column is-one-thirds">
        <img src="../../static/howtobuy.jpg" />
      </figure>
      <div class="card-content column is-two-thirds">
        <div class="card-content__title">
          <h2 class="title is-4"></h2>
        </div>
        <nuxt-link class="button is-primary mt-3" to="/"
          >Back to home</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToBuy",
};
</script>

<style></style>
