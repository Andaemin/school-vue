<script>
import ToggleSubmit from "@/components/base/ToggleSubmit.vue";

export default {
    name: "CreatePost",
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
            try {
                // 실험용
                // this.$axios.post("/api/board", this.article);
                const res = await this.$axios.post("/api/board", this.article);
                if (res.data.success) {
                    const no = res.data.article.no;
                    this.$router.push("/readboard/" + no);
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
        <h1>📝 글 작성하기</h1>
        <h4>✅ 알아서 아래 양식에 맞춰서 대충 구겨 박으세요</h4>

        <v-container class="mt-6 pa-0">
            <v-text-field v-model="article.title" label="Title" :error-messages="errorsMsg.title" />
            <v-text-field v-model="article.writerName" label="작성자" />
            <v-textarea v-model="article.body" label="글내용" :error-messages="errorsMsg.body" />
            <!-- 버튼 구별용 -->
            <ToggleSubmit class="" variant="elevated" color="#42A5F5" @click="submit">
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
