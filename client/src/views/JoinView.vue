<script>
import ToggleSubmit from "@/components/base/ToggleSubmit.vue";

export default {
    name: "join",
    components: {
        ToggleSubmit,
    },
    data() {
        return {
            user: {
                name: "",
                id: "",
                password: "",
                password2: "",
            },
            errorsMsg: {
                name: "",
                id: "",
                password: "",
                password2: "",
            },
        };
    },
    methods: {
        async join() {
            this.errorsMsg = { id: "", password: "", password2: "", name: "" };
            if (this.user.id.trim() === "") {
                this.errorsMsg.id = "❗️ 아이디 확인헤";
            }
            if (this.user.password.trim() === "") {
                this.errorsMsg.password = "❗️ 비밀번호 확인해라.";
            }
            if (this.user.password2.trim() === "") {
                this.errorsMsg.password2 = "❗️ 비밀번호 확인확인해라.";
            }
            if (this.user.name.trim() === "") {
                this.errorsMsg.name = "❗️ 이름없노?";
            }
            if (this.errorsMsg.id || this.errorsMsg.password || this.errorsMsg.password2 || this.errorsMsg.name) return;
            try {
                console.log(test);
                const res = await this.$axios.post("/api/join", this.users);
                if (res.data.success) {
                    const id = res.data.user.id;
                    this.$router.push("/home" + id);
                }
            } catch (err) {
                console.error(` 실패! ${err}`);
            }
        },
    },
};
</script>
<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-text-field label="UserName" variant="underlined"></v-text-field>
                <v-text-field label="email" variant="underlined"></v-text-field>
                <v-text-field label="password" type="password" variant="underlined"></v-text-field>
                <v-text-field label="password check" type="password" variant="underlined"></v-text-field>
                <v-text-field label="sex" variant="underlined"></v-text-field>
            </v-card-item>
            <ToggleSubmit @click="join()" cols="6" variant="elevated" color="#42A5F5">
                <v-icon icon="mdi-checkbox-marked-circle" start /> Complete
            </ToggleSubmit>
        </v-card>
    </v-container>
</template>
