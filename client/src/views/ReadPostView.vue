<script>
import ToggleSubmit from "@/components/base/ToggleSubmit.vue";

export default {
    name: "ReadBoard",
    components: {
        ToggleSubmit,
    },
    data() {
        return {
            article: {
                title: "",
                writerName: "",
                body: "",
            },
            // dummyData: false,
        };
    },
    mounted() {
        // const test = this.$route.params.no;
        // if (test === "0") {
        //     this.article = {
        //         title: "여기에 타이틀 들어감.",
        //         writerName: "작성자 이름",
        //         body: "대충 여기에 글 들어감. 적을거 없으니 대충 아무거나 적음. 엄마가 섬그늘에 굴 따러가면 아기는 혼자남아 ",
        //     };
        //     this.dummyData = true;
        // }
        const no = this.$route.params.no;
        console.log("테스트용 : ", no);
        this.getArticle(no);
    },
    methods: {
        async getArticle(no) {
            const res = await this.$axios.get("/api/postdata/" + no);
            console.log(res.data);
            if (res.data.success) {
                this.article = res.data.article;
            }
        },
        async remove() {
            if (!window.confirm("정말 삭제하겠습니까?")) {
                return;
            }
            const res = await this.$axios.delete("/api/postdata/" + this.$route.params.no);
            if (res.data.success) {
                this.$router.push("/");
            }
        },
        moveUpdate() {
            this.$router.push("/update/" + this.$route.params.no);
        },
    },
};
</script>
<template>
    <!-- {{ article.title }} -->
    <!-- 주석 title이나 subtitle안에 넣으면 오류남. 이유는 모름. -->
    <v-container>
        <v-card class="mx-auto">
            <v-card-item prepend-icon="mdi-email">
                <v-card-title class="text-h4 font-weight-bold">{{ article.title }}</v-card-title>
                <v-card-subtitle class="text-h5">{{ article.writerName }}</v-card-subtitle>
                <v-card-subtitle class="text">{{ article.hits }}</v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-body-1"> {{ article.body }}</v-card-text>
        </v-card>
        <v-row class="">
            <v-col>
                <ToggleSubmit :to="{ name: 'home' }">홈</ToggleSubmit>
                <ToggleSubmit @click="remove()">삭제</ToggleSubmit>
                <ToggleSubmit @click="moveUpdate()">수정</ToggleSubmit>
            </v-col>
        </v-row>
    </v-container>
</template>
