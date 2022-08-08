<template>
  <div class="empty-section">
    <h2>Section 1</h2>
  </div>
</template>

<script>
export default {
  name: "EmptySection",
};
</script>

<style lang="scss">
.empty-section {
  background: #d4e2d4;
  width: 150px;
  height: 150px;
  padding: 24px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
</style>
