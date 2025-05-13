<script>
export default {
    name: "App",

    data: () => ({}),

    async mounted() {
        this.getUserInfo();
    },
    methods: {
        async getUserInfo() {
            const res = await this.$axios.post("/api/users/info");
            if (res.data.isLogin === true) {
                this.$store.commit("login", res.data.user);
            }
        },

        async logout() {
            // if (!confirm("정말 로그아웃 하시겠습니까?")) {
            //     return;
            // }
            // 젖같으니 빼놓기
            const res = await this.$axios.post("/api/users/logout");
            if (res.data.success) {
                this.$store.commit("logout");
            }
        },
    },
};
</script>

<template>
    <v-app>
        <v-container class="">
            <v-row class="ma-2" cols="1" align="center">
                <v-avatar color="info">
                    <v-icon icon="mdi-account-circle" />
                </v-avatar>
                <v-sheet v-if="!$store.state.loginUser">
                    <v-card-title class="text-h5">회원이름 </v-card-title>
                    <v-btn :to="{ name: 'login' }">로그인</v-btn>
                </v-sheet>
                <v-col class="" v-if="$store.state.loginUser">
                    <v-col>
                        <v-card-subtitle class="pa-0 auto">{{ $store.state.loginUser.name }}님. 환영합니다</v-card-subtitle>
                        <v-btn :to="{ name: 'home' }" @click="logout()">로그아웃</v-btn>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
        <router-view />
    </v-app>
</template>
