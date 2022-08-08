<template>
  <button class="app-button" @click="toggle">Toggle Section 2</button>
  <div class="app-section-wrap">
    <EmptySection />
    <ToggleSection v-if="isOpen" :information="information" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import EmptySection from "./components/EmptySection.vue";
import ToggleSection from "./components/ToggleSection.vue";

export default {
  name: "App",
  components: {
    EmptySection,
    ToggleSection,
  },
  setup() {
    const store = useStore();
    const isOpen = ref(false);
    const toggle = async () => {
      await store.dispatch("getIdInformation");
      isOpen.value = !isOpen.value;
    };
    const information = computed(() => {
      if (!store.state.getIdInformation) return;
      return store.state.getIdInformation.find(
        (item) => item.UID === "61df26a9d083a3542803f5cd"
      );
    });
    return {
      toggle,
      isOpen,
      information,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

.app-button {
  margin-bottom: 10px;
}

.app-section-wrap {
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
}
</style>
