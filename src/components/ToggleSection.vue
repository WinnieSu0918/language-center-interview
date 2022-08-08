<template>
  <div class="toggle-section" v-if="information">
    <h2>Section 2</h2>
    {{ information.title }}
    {{ information.descriptionFilterHtml }}
  </div>
</template>

<script>
export default {
  name: "ToggleSection",
  props: ["information"],
};
</script>

<style lang="scss">
.toggle-section {
  background: #ecb390;
  width: 300px;
  height: 300px;
  padding: 24px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 150px;
  }
}
</style>
