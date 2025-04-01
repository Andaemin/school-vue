<template>
    <v-container class="elevation-2">
        <v-row class="border-b-md ma-5 pb-4">
            <v-col>
                <h1>2 WEEK</h1>
                <p>✅ 2주차때 진행했던 내용들을 정리해놓았습니다.</p>
                <p><b class="props">V-model</b>을 사용하여 양방향 바인딩을 하여서, 따로 </p>
                <p><b class="props">v-for</b>을 이용하여, 간단하게 반복문을 작성할 수 있었습니다.</p>
                <p><b class="props">@click</b> 걍 <b class="props">v-on:click</b> 임. 이벤트 <b class="props">@</b> 로 축약됨. focus, click, submit 등등</p>
                <p><b>Vuetify</b> 내장 컴포넌트인 <b>v-text-filed</b> 와 <b>v-btn</b> 을 사용하였습니다</p>
            </v-col>
            <v-col>
                <h4>keyword</h4>
                <p><b class="props">v-model</b> , <b class="props">v-for</b> , <b class="props">v-if</b>,
                    <b class="props">v-text-field</b>, <b class="props">v-bind</b> , <b class="props">v-on</b> 
                </p>
            </v-col>
        </v-row>
<!-- 아오 더럽게 길어 -->
        <v-row class="">
            <v-col cols="6">
                <h3 class="text-center">Login Benner</h3>
                <v-text-field v-model="username" label="Enter the user name in the list" variant="underlined"></v-text-field>
                <v-text-field v-model="pwd" label="이거 뭐 그냥 있는거임" variant="underlined"></v-text-field>
                <!-- 이거 굳이 pwd 바인딩 안해줘도 됨. vuetify 스타일 해보라고 한듯함. -->
                <v-btn @click=confirm color="#42A5F5" variant="elevated" SomeUser="SomeUser"><v-icon icon="mdi-checkbox-marked-circle" start/>Submit</v-btn>
            </v-col>
            <v-col cols="2">
                <h4>왼쪽에 대충 찌그리면 됨</h4>
                <p>vind 값 : {{ username }}</p>
                <div v-for="member in listFitter(members)" :key="member.id">
                    <p v-if="member.age >= 20">{{ member.ko_name }}의 나이는 <b class="props">{{ member.age }}</b></p>
                </div>
            </v-col>
            <v-col>
                <h4>User Data List</h4>
                <div v-for="member in members">
                    <p>{{ member.id }}. {{ member.name }} ({{member.ko_name }})</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'SomeUser',
    data(){
        return{
        username:'',
        members: [
                {
                    id: 1,
                    name : "nayeon",
                    ko_name : "나연",
                    age : "25"
                },
                {
                    id: 2,
                    name : "daHyeon",
                    ko_name : "다현",
                    age : "24",
                },
                {
                    id: 3,
                    name : "jeongYeon",
                    ko_name : "정연",
                    age : "23"
                }
            ]
        }
    },
    methods: {
        confirm(){
            alert("눌렀네");
            this.test = 'on'
        },
        listFitter(){
            const setName = [];
            this.members.map(list => {
                if(list.ko_name == this.username){
                    setName.push(list);
                }
            })
            return setName;
        }
    },
    
}

</script>
<style>

</style>
