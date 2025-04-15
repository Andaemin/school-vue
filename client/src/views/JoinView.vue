<script>
import ToggleSubmit from "@/components/base/ToggleSubmit.vue";

// 아 파일이름 잘못지었는데 나중에 바꿀것 ;
export default {
    name: "signup",
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
            this.errorsMsg = { id: "", password: "", confilm_password: "", name: "" };

            // const gumsa = [
            //     {
            //         checker: this.user.id.trim() === "",
            //         field: "id",
            //         message: "‼️ 아이디 입력 안함?",
            //     },
            // ];

            // let aaa = false;
            // for (const check of gumsa) {
            //     if (check.checker) {
            //         this.errorsMsg[check.field] = check.message;
            //         aaa = true;
            //     }
            // }
            // if (aaa) {
            //     return;
            // }
            // ❗️ 나중에 유효성 검사 만들기 귀찮으니 나중에 알아서 바꿀것.

            if (this.user.id.trim() === "") {
                this.errorsMsg.id = "❗️ 아이디 확인헤";
            }

            if (this.user.password.trim() === "") {
                this.errorsMsg.password = "❗️ 비밀번호 확인해라.";
            } else if (this.user.password.trim().length < 6) {
                this.errorsMsg.password = "❓ 6자리 미만? 보안은 개준건가?";
            }

            if (this.user.confilm_password.trim() === "") {
                this.errorsMsg.confilm_password = "❗️ 비밀번호 확인확인해라.";
            } else if (this.user.password.trim() != this.user.confilm_password.trim()) {
                this.errorsMsg.confilm_password = "❓ 같은거 다시쓰는게 어렵나?";
            } else if (this.user.confilm_password.trim().length < 6) {
                this.errorsMsg.confilm_password = "❓ 6자리 미만? 보안은 개준건가?";
            }

            if (this.user.name.trim() === "") {
                this.errorsMsg.name = "❗️ 이름없노?";
            }

            if (
                this.errorsMsg.id ||
                this.errorsMsg.password ||
                this.errorsMsg.confilm_password ||
                this.errorsMsg.name
            ) {
                return;
            }
            try {
                const res = await this.$axios.post("/api/users/join", this.user);
                if (res.data.success) {
                    alert(`화원가입 완료. ${this.user.name}`);
                    this.$router.push("/home");
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
                    v-model="user.confilm_password"
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
            <ToggleSubmit :to="{ name: 'home' }" class="" variant="elevated">
                <v-icon icon="mdi-minus-circle" start />
                Cancel
            </ToggleSubmit>
        </v-card>
    </v-container>
</template>
