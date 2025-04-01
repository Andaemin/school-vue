<template>
    <v-container class="elevation-2">
        <v-row>
            <v-col>
                <h1>2 WEEK</h1>
                <p>2주차때 진행했던 내용들을 정리해놓았습니다.</p>
                <p><b class="props">test</b></p>
                <p><b>Vuetify</b> 내장 컴포넌트인 <b>v-text-filed</b> 와 <b>v-btn</b> 을 사용하였습니다</p>
            </v-col>
        </v-row>
        <v-row class="">
            <v-col cols="6">
                <h3 class="text-center">Login Benner</h3>
                <v-text-field v-model="name" label="name" variant="elevated"></v-text-field>
                <v-text-field v-model="pwd" label="Password"></v-text-field>
                <v-btn @click=confirm color="#42A5F5" variant="elevated" SomeUser="SomeUser"><v-icon icon="mdi-checkbox-marked-circle" start/>Submit</v-btn>
            </v-col>
            <v-col cols="2">
                <h4>대충 찌끄리면 <br>하단에 정보 나옵니다.</h4>
                <div v-for="member in cutList(members)" :key="member.id">
                    <p v-if="member.age >= 20">{{ member.name }}의 나이는 {{ member.age }}</p>
                </div>
            </v-col>
            <v-col>
                <h4>User Data List</h4>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'SomeUser',
    data(){
        return{
        members: [
                {
                    id: 1,
                    name : "nayeon",
                    age : "25"
                },
                {
                    id: 2,
                    name : "daHyeon",
                    age : "24",
                },
                {
                    id: 3,
                    name : "jeongHyeong",
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
        cutList(){
            const setName = [];
            this.members.map((list) => {
                if(list.name == this.name){
                    setName.push(list);
                }
            });
    }
    },
    
}

</script>
<style>

</style>
