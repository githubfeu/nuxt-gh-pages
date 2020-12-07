<template>
  <div class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Board Game Shop</h1>
        <h2 class="subtitle">All About Board Game</h2>
        <div class="buttons">
          <nuxt-link class="button is-warning" to="/about/About">About Shop</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url('../../static/bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left top;
}
h1,
h2 {
  color: #fff;
}
</style>
