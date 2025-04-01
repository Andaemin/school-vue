<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BoradComponent',
})

</script>
<template>
    <v-container class="w-20 elevation-2">
        <v-row class="border-b-md ma-5 pb-4">
            <v-col>
                <h1>4 WEEK</h1>
                <p>✅ 4주차때 진행했던 내용들을 정리 해놓았습니다.</p>
            </v-col>
            <v-col>
                <h4>keyword</h4>
                <p><b class="props">Sequalize</b> , <b class="props">mySQL</b> , <b class="props">jade</b>,
                    <b>v-textarea</b>
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>‼️ 중요 </h3>
                <h4>다음주 강의까지 해야할것</h4>
                <p># vue version 3.2.13. 3.5 미만버전 문법 사용할것 ( ref 안됨)<br>
                1. sql db 연결 ✅ <br>
                2. express : 제네레이터로 만듦 ✅<br>
                3. Render 될때마다 데이터호출 : require 확인<br>
                4. Crud 구현 : 간단한 게시판 만들기. <br>
                5. 스타일 라이브러리 : less 사용. ( 안써봤는데..)<br>
                6. ‼️ Sql 디렉토리 소유권 및 권한설정 ✅ <br>
                7. workbench : 끝까지 안됨;
            </p>
            </v-col>
        </v-row>
    </v-container>
</template>
<style></style>