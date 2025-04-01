<script>
import { defineComponent } from 'vue';
import Login from '../components/Login.vue';
import BoardComponent from '@/components/Board.vue';
import InfoComponent from '@/components/Info.vue'
import Threeweek from '@/components/Threeweek.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    InfoComponent,
    Login,
    Threeweek,
    BoardComponent,

  },
});
</script>

<template>
    <v-container>
        <InfoComponent/>
        <Login />
        <Threeweek/>
        <BoardComponent />
    </v-container>
</template>

<style></style>