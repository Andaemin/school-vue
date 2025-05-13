<script>
import { defineComponent } from "vue";
import ToggleSubmit from "./base/ToggleSubmit.vue";

export default defineComponent({
    name: "FiveWeek",
    components: {
        ToggleSubmit,
    },
});
</script>

<template>
    <v-container class="w-20 elevation-2">
        <v-row class="border-b-md ma-5 pb-4">
            <v-col>
                <h1>5 WEEK</h1>
                <p>✅ 4주차때 진행한 내용의 연장선.</p>
                <p>핵심 키워드 및 내용 정리는 📆 <b>4주차</b> ‼️ 참고할것</p>
            </v-col>
        </v-row>
        <v-row class="ma-5">
            <v-col class="">
                <v-row class="d-block">
                    <h3>회원가입</h3>
                    <v-card-subtitle class="pa-0">아래 버튼 누르면 회원가입 페이지로 이동됨.</v-card-subtitle>
                    <ToggleSubmit class="w-auto flex-0" :to="{ name: 'signup' }" variant="elevated" color="#42A5F5">
                        <v-icon icon="mdi-checkbox-marked-circle" start />Sign Up!
                    </ToggleSubmit>
                </v-row>
                <v-row class="d-block">
                    <h3>로그인</h3>
                    <v-card-subtitle class="pa-0 auto">로그인 페이지로 이동합니다.</v-card-subtitle>
                    <ToggleSubmit :to="{ name: 'login' }" variant="elevated" color="#b6d7a8">
                        <v-icon icon="mdi-checkbox-marked-circle" start />login!
                    </ToggleSubmit>
                </v-row>
            </v-col>
            <v-col class="">
                <v-row class="d-block">
                    <h3>User Profile</h3>
                    <p>회원가입 후 로그인시 아래 프로필 바뀜.</p>
                </v-row>
                <v-row align="center">
                    <v-col class="" cols="1">
                        <v-avatar color="info">
                            <v-icon icon="mdi-account-circle" />
                        </v-avatar>
                    </v-col>
                    <v-col v-if="!$store.state.loginUser">
                        <v-card-title class="text-h5">회원이름 </v-card-title>
                        <v-card-subtitle>회원 아이디</v-card-subtitle>
                    </v-col>
                    <v-col v-if="$store.state.loginUser">
                        <v-card-title class="text-h5">회원이름 : {{ $store.state.loginUser.name }} </v-card-title>
                        <v-card-subtitle>회원 아이디 : {{ $store.state.loginUser.id }} </v-card-subtitle>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped></style>
