<script>
import { defineComponent } from "vue";
import Login from "../components/Login.vue";
import BoardComponent from "@/components/Board.vue";
import InfoComponent from "@/components/Info.vue";
import ThreeWeek from "@/components/Threeweek.vue";
import Fiveweek from "@/components/fiveweek.vue";
import Todolist from "@/components/Todolist.vue";
// import moment from "moment"; provide 안넘겨짐..
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
    // provide() {
    //     return {
    //         moment,
    //     };
    // },
    components: {
        InfoComponent,
        Login,
        ThreeWeek,
        BoardComponent,
        Fiveweek,
        Todolist,
    },
});
</script>

<template>
    <v-container class="main-container">
        <InfoComponent />
        <Login />
        <ThreeWeek />
        <BoardComponent />
        <Fiveweek />
        <Todolist />
    </v-container>
</template>

<style></style>
