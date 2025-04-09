<script>
import { defineComponent } from "vue";
import Login from "../components/Login.vue";
import BoardComponent from "@/components/Board.vue";
import InfoComponent from "@/components/Info.vue";
import ThreeWeek from "@/components/Threeweek.vue";
export default defineComponent({
    name: "HomeView",
    data() {
        return {
            // count: 4,
            // 아 시발 더보기 언젠가 추가할것. 대충 slice 랑 map 사용.
            // 반복문 vue 내장객체 알아볼것,
            // gpt 돌리면 나오는지 해볼것.
            // ketword : computed, v-for...?,
        };
    },
    components: {
        InfoComponent,
        Login,
        ThreeWeek,
        BoardComponent,
    },
});
</script>

<template>
    <v-container class="main-container">
        <InfoComponent />
        <Login />
        <ThreeWeek />
        <BoardComponent />
    </v-container>
</template>

<style></style>
