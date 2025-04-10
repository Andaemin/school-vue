<script>
import ToggleSubmit from "@/components/base/ToggleSubmit.vue";

export default {
    name: "UpdatePost",
    data() {
        return {
            article: {
                title: "",
                writerName: "",
                body: "",
            },
            errorsMsg: {
                title: "",
                body: "",
            },
        };
    },
    components: {
        ToggleSubmit,
    },
    mounted() {
        this.getArticle;
    },
    methods: {
        async submit() {
            this.errorsMsg = { title: "", body: "" };
            if (this.article.title.trim() === "") {
                this.errorsMsg.title = "❗️ 제목을 입력해주세요";
            }
            if (this.article.body.trim() === "") {
                this.errorsMsg.body = "❗️ 내용을 입력해주세요";
            }
            if (this.errorsMsg.title || this.errorsMsg.body) return;
        },
        async getArticle() {
            const res = await this.$axios.get("/api/postdata/" + this.$route.params.no);
            if (res.data.success) {
                this.postdata = res.data.postdata;
            }
        },
        async updatePost() {
            try {
                const res = await this.$axios.get("/api/postdata/" + this.$route.params.no);
                if (res.data.success) {
                    this.$router.replace("/readboard" + this.$router.params.no);
                }
            } catch (err) {
                console.error("작성 실패:", err);
            }
        },
    },
};
</script>

<template>
    <v-container class="w-50">
        <h1>📝 작성된 글 수정</h1>
        <v-container class="mt-6 pa-0">
            <v-text-field v-model="article.title" label="Title" :error-messages="errorsMsg.title" />
            <v-text-field v-model="article.writerName" label="작성자" />
            <v-textarea v-model="article.body" label="글내용" :error-messages="errorsMsg.body" />
            <!-- 버튼 구별용 -->
            <ToggleSubmit class="" variant="elevated" color="#42A5F5" @click="updatePost()">
                <v-icon icon="mdi-checkbox-marked-circle" start /> Complete
            </ToggleSubmit>
            <ToggleSubmit :to="{ name: 'home' }" class="" variant="elevated">
                <v-icon icon="mdi-minus-circle" start />
                Cancel
            </ToggleSubmit>
        </v-container>
    </v-container>
    <!-- DB 상식 :  -->
</template>
