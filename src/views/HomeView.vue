<template>
  <DaeminMain />
</template>

<script>
import { defineComponent } from 'vue';

import DaeminMain from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    DaeminMain,
  },
});
</script>
