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
                confilm_password: "",
            },
            errorsMsg: {
                name: "",
                id: "",
                password: "",
                confilm_password: "",
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
            if (this.user.confilm_password.trim() === "") {
                this.errorsMsg.confilm_password = "❗️ 비밀번호 확인확인해라.";
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
                <v-card-title class="text-h4 font-weight-bold"> ✅ 회원가입</v-card-title>
                <v-text-field
                    v-model="user.name"
                    :error-messages="errorsMsg.name"
                    label="UserName"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="user.id"
                    :error-messages="errorsMsg.id"
                    label="email"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="user.password"
                    :error-messages="errorsMsg.password"
                    label="password"
                    type="password"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="confilm_password"
                    :error-messages="errorsMsg.confilm_password"
                    label="password check"
                    type="password"
                    variant="underlined"
                ></v-text-field>
                <v-text-field label="sex : 횟수 아니다. " variant="underlined"></v-text-field>
            </v-card-item>
            <ToggleSubmit @click="join()" cols="6" variant="elevated" color="#42A5F5">
                <v-icon icon="mdi-checkbox-marked-circle" start /> Complete
            </ToggleSubmit>
        </v-card>
    </v-container>
</template>
