<script>
import ToggleSubmit from "@/components/base/ToggleSubmit.vue";

export default {
    name: "loginview",
    components: {
        ToggleSubmit,
    },
    data() {
        return {
            user: {
                id: "",
                password: "",
                esg: "",
            },
            errorsMsg: {
                id: "",
                password: "",
            },
        };
    },
    methods: {
        async login() {
            this.errorsMsg = {
                id: "",
                password: "",
            };
            if (this.user.id.trim() === "") {
                this.errorsMsg.id = "❗️ 아이디 입력해라";
            }
            if (this.user.password.trim() === "") {
                this.errorsMsg.password = "❗️ 비밀번호 확인해라.";
            }
            try {
                //여기까지 수업 내용
                const res = await this.$axios.post("/api/users/login", {
                    id: this.id,
                    password: this.password,
                });
                if (!res.data.success) {
                    this.user.esg = res.data.message;
                } else if (res.data.success) {
                    this.$router.push("/home");
                }
            } catch (err) {
                console.error(err);
            }
        },
    },
};
</script>

<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-card-title class="text-h4 font-weight-bold"> ✍️ Login!</v-card-title>
                <v-card-subtitle class="font-weight-bold"> ✅ 로그인 화면입니다. </v-card-subtitle>
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
            </v-card-item>
            <ToggleSubmit @click="login()" cols="6" variant="elevated" color="#42A5F5">
                <v-icon icon="mdi-checkbox-marked-circle" start /> Login
            </ToggleSubmit>
            <ToggleSubmit :to="{ name: 'home' }" class="" variant="elevated">
                <v-icon icon="mdi-minus-circle" start />
                Cancel
            </ToggleSubmit>
            <!-- <p class="text-red">{{ user.esg }}</p> -->
        </v-card>
    </v-container>
</template>
