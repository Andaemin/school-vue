<script>
import { defineComponent } from "vue";
import ToggleSubmit from "./base/ToggleSubmit.vue";

export default defineComponent({
    name: "BoradComponent",
    components: {
        ToggleSubmit,
    },
    data() {
        return {
            list: [],
            count: 4,
        };
    },
    // mounted() {
    //     this.fetchArticles();
    // },
    // methods: {
    //     async fetchArticles() {
    //         const res = await this.$axios.post("/postest");
    //         if (res.data.success) {
    //             this.list = res.data.list;
    //         }
    //     },
    //     formatDate(date) {
    //         return date ? date.slice(0, 10) : "";
    //     },
    //     moveView(post) {
    //         console.log("이동할 게시글:", post);
    //         // console.log("이동할 경로:", `/view/${post.no}`);
    //         this.$router.push("/home/" + post.no);
    //         // console.log(`test ${this.formatDate}`);
    //     },
    // },
});
</script>
<template>
    <v-container class="w-20 elevation-2">
        <v-row class="border-b-md ma-5 pb-4">
            <v-col>
                <h1>4 WEEK</h1>
                <p>✅ 4주차때 진행했던 내용들을 정리 해놓았습니다.</p>
            </v-col>
            <v-col>
                <h4>keyword</h4>
                <p>
                    <b class="props">Sequalize</b> , <b class="props">mySQL</b> , <b class="props">jade</b>,
                    <b>v-textarea</b>
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>‼️ 중요</h3>
                <h4>다음주 강의까지 해야할것</h4>
                <p>
                    # vue version 3.2.13. 3.5 미만버전 문법 사용할것 ( ref 안됨)<br />
                    1. sql db 연결 ❌ 진짜 절대 안됨 ❌<br />
                    2. express : 제네레이터로 만듦 ✅<br />
                    3. Render 될때마다 데이터호출 : require 확인<br />
                    4. Crud 구현 : 간단한 게시판 만들기. (디자인 틀만 잡아놓음.)<br />
                    5. 스타일 라이브러리 : less 사용. ( 안써봤는데..)<br />
                    6. ‼️ Sql 디렉토리 소유권 및 권한설정 ❌❌❌❌❌ <br />
                    7. workbench : 끝까지 안됨; ❌❌❌❌❌
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-col cols="12" class="">
                    <!-- 나중에 데이터 전역으로 바꾸기. pinia 사용 못함 . ❌-->
                    <h4>🎨 버튼 대충 만들어둔거.</h4>
                    <ToggleSubmit :to="{}" cols="6" variant="elevated" color="#42A5F5">
                        <v-icon icon="mdi-checkbox-marked-circle" start />New post
                    </ToggleSubmit>
                    <ToggleSubmit variant="elevated" class="" color="red">
                        <v-icon icon="mdi-cancel" start />delete
                    </ToggleSubmit>
                    <ToggleSubmit class="" variant="text" color="#42A5F5">
                        <v-icon icon="mdi-checkbox-marked-circle" start />Update
                    </ToggleSubmit>
                </v-col>
                <v-col class="">
                    <ToggleSubmit :to="{ name: 'createpost' }" cols="6" variant="elevated" color="#42A5F5">
                        <v-icon icon="mdi-checkbox-marked-circle" start />New post
                    </ToggleSubmit>
                    <h4>글 작성</h4>
                </v-col>
                <v-sheet class="pa-3" color="grey-lighten-4">
                    <v-row class="font-weight-bold">
                        <v-col cols="1">No.</v-col>
                        <v-col cols="5">제목</v-col>
                        <v-col cols="3">작성자</v-col>
                        <v-col cols="3">날짜</v-col>
                    </v-row>
                </v-sheet>
            </v-col>
            <v-col cols="12" v-for="(post, index) in list" :key="index" @click="moveView(post)" style="cursor: pointer">
                <v-row class="py-2 border-b-thin">
                    <v-col cols="1">{{ post.no }}</v-col>
                    <v-col cols="5">{{ post.title }}</v-col>
                    <v-col cols="3">{{ post.writerName }}</v-col>
                    <v-col cols="3">{{ formatDate(post.writeTime) }}</v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style></style>
