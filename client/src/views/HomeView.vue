<script>
import { defineComponent } from 'vue';
import Login from '../components/Login.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Login,
  },
});
</script>

<template>
    <v-app>
        <Login />
    </v-app>
</template>