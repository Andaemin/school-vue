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
        console.log(no);
        this.getArticle(no);
    },
    methods: {
        async getArticle(number) {
            const res = this.$axios.get("/api/article/" + number);
            console.log(res.data);
            if (res.data.success) {
                this.article = res.data.article;
            }
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
            </v-card-item>
            <v-card-text class="text-body-1"> {{ article.body }}</v-card-text>
        </v-card>
        <v-row class="">
            <v-col>
                <ToggleSubmit :to="{ name: 'home' }">홈</ToggleSubmit>
                <ToggleSubmit>삭제</ToggleSubmit>
                <ToggleSubmit>수정</ToggleSubmit>
            </v-col>
        </v-row>
    </v-container>
</template>
