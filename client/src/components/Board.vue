<script>
import { defineComponent } from "vue";
import ToggleSubmit from "./base/ToggleSubmit.vue";
import moment from "moment";
export default defineComponent({
    name: "BoradComponent",
    components: {
        ToggleSubmit,
    },
    data() {
        return {
            list: [],
            count: 0,
            page: 1,
            filterTag: "",
        };
    },
    // inject: ["moment"],
    mounted() {
        this.getArticleList();
        console.log(`boardvue : ${this.page}`);
    },
    computed: {
        createtag() {
            const tags = new Set();
            this.list.forEach((post) => {
                if (post.category && post.category.length > 0) {
                    post.category.forEach((cat) => tags.add(cat.name));
                }
            });
            return [...tags];
        },
    },
    methods: {
        async getArticleList() {
            const res = await this.$axios.post("/api/postdata", {
                page: this.page,
            });
            console.log("리스트 응답 체크용.", res.data);

            if (res.data.success) {
                this.list = res.data.list;
                this.count = res.data.count;
            }
        },
        formatDate(date) {
            return date ? moment(date).format("MMMM Do YYYY, h:mm:ss a") : "날짜 없음";
        },
        moveView(num) {
            console.log(num);
            this.$router.push("/readBoard/" + num.no);
        },
        // posthandler() {
        //     if (this.$store.state.loginUser) {
        //         this.$router.push({ name: "createpost" });
        //     } else {
        //         this.$router.push({ name: "login" });
        //     }
        // },
        async more() {
            this.page++;
            console.log("테스트");
            let res = await this.$axios.post("/api/postdata", { page: this.page });
            console.log(`${res.data}`);

            if (res.data.success) {
                res.data.list.forEach((article) => {
                    this.list.push(article);
                });
            }
        },
    },
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
                <h4>다음주 강의까지 해야할것. 완료된건 체크(✅)</h4>
                <p>
                    # vue version 3.2.13. 3.5 미만버전 문법 사용할것 ( ref 안됨)<br />
                    1. <b>sql db 연결 </b>✅<br />
                    2. <b>express </b>: 제네레이터로 만듦 ✅<br />
                    3. <b>Render 될때마다 데이터호출 </b>: 완료 ✅<br />
                    4. <b>Crud 구현</b> : 간단한 게시판 만들기. ✅<br />
                    5. <b>스타일 라이브러리 </b>: less 사용. ( 사용 안했음...) ❌<br />
                    6. ‼️ <b>Sql 디렉토리 소유권 및 권한설정</b> ( 하루 꼬박 걸림.) ✅ <br />
                    7. <b>workbench </b> 되긴 하나, <b class="props"> 직접적인 컨트롤 안됨. 반영 늦음.</b>)✅
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-col cols="12" class="">
                    <!-- 나중에 데이터 전역으로 바꾸기. pinia 사용 못함 . ❌-->

                    <!-- 뭐였지.. -->
                    <h4>🎨 버튼 대충 만들어둔거.</h4>
                    <ToggleSubmit :to="{}" cols="6" variant="elevated" color="#42A5F5">
                        <v-icon icon="mdi-checkbox-marked-circle" start />New post
                    </ToggleSubmit>
                    <ToggleSubmit variant="elevated" class="" color="red"> <v-icon icon="mdi-cancel" start />delete </ToggleSubmit>
                    <ToggleSubmit class="" variant="text" color="#42A5F5"> <v-icon icon="mdi-checkbox-marked-circle" start />Update </ToggleSubmit>
                </v-col>
                <v-col>
                    <ToggleSubmit
                        @click="$router.push($store.state.loginUser ? { name: 'createpost' } : { name: 'login' })"
                        cols="6"
                        variant="elevated"
                        color="#42A5F5"
                    >
                        <v-icon icon="mdi-checkbox-marked-circle" start />New post
                    </ToggleSubmit>
                </v-col>
                <h4>글 작성</h4>
                <ToggleSubmit :to="{ name: 'CategoryCut' }" class="font-weight-bold" color="#C62828" variant="elevated"
                    >태그삭제 및 관리.</ToggleSubmit
                >

                <v-row class="pa-2">
                    <v-btn @click="filterTag = ''" class="ma-1" :color="filterTag === '' ? 'blue-darken-1' : 'grey-lighten-1'" variant="flat">
                        모두 보기
                    </v-btn>
                    <v-btn
                        v-for="(tag, index) in createtag"
                        :key="index"
                        @click="filterTag = tag"
                        class="ma-1"
                        :color="filterTag === tag ? 'blue-darken-1' : 'grey-lighten-1'"
                        variant="flat"
                    >
                        {{ tag }}
                    </v-btn>
                </v-row>

                <v-sheet class="pa-3" color="grey-lighten-4">
                    <v-row class="font-weight-bold text-center">
                        <v-col cols="1">No.</v-col>
                        <v-col cols="2">제목</v-col>
                        <v-col cols="3">내용</v-col>
                        <v-col cols="3">작성자</v-col>
                        <v-col cols="3">날짜</v-col>
                    </v-row>
                </v-sheet>
            </v-col>
            <!-- 테스트용. 나중에 안쪽으로 밀어넣기. -->
            <v-col cols="12" class="cursor-pointer" v-for="(post, index) in filteredList" :key="index" @click="moveView(post)">
                <v-sheet class="pa-3">
                    <v-row cols="12" class="py-2 border-b-thin text-center">
                        <v-col cols="">{{ post.no }}</v-col>
                        <v-col cols="">{{ post.title || ' " undefined_title " ' }}</v-col>
                        <v-col cols="1" v-if="post.category && post.category.length > 0" class="pa-2">
                            <v-chip v-for="(tag, index) in post.category" :key="index" class="ma-1" color="primary" variant="outlined" size="small">
                                {{ tag.name }}
                                <!-- 5. 12이부분 GPT 돌렸습니다... -->
                            </v-chip>
                        </v-col>
                        <v-col v-else>
                            <v-chip class="bg-red w-1">Non</v-chip>
                        </v-col>
                        <!-- <v-col cols="">{{ post.body || ' " 내용 없음 " ' }}</v-col> -->
                        <v-col cols="">{{ post.writerName || ' " 작성자 이름 없음" ' }}</v-col>
                        <v-col cols="3">{{ formatDate(post.writeTime) }}</v-col>
                    </v-row>
                </v-sheet>
            </v-col>
            <v-col class="text-center">
                <ToggleSubmit v-if="list.length < count" @click="more()"> 더보기</ToggleSubmit>
            </v-col>
        </v-row>
    </v-container>
</template>
<style></style>
