<template>
  <div class="card-image">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="../../static/werewolf.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">werewolf</p>
        </div>
        <div>
          <button class="button is-small">
            <span class="icon is-small">
              <i class="fa fa-heart"></i>
            </span>
          </button>
          <button class="button is-small">
            <span class="icon is-small">
              <i class="fa fa-heart-o"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>บอร์ดเกม</p>
        <div class="is-pulled-left">
          <i class="fa fa-star"></i>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>500B</strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary">Add to card</button>
            <button class="button is-text"></button>
          </div>
          <div class="select is-rounded is-small">
            <select>
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link class="details" to=""> </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "productList",
};
</script>

<style>
</style>