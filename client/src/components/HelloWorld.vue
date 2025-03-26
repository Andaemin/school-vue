<template>
  <v-container>
    <v-row class="text-center">
        <v-col>
            <v-text-field v-model="name" label="name"></v-text-field>
            <v-text-field v-model="pwd" label="Password"></v-text-field>
            <v-row class="">
                <v-btn @Click=confirm color="#42A5F5" variant="Tonal" test="test">button</v-btn>
                <h1>{{ member[0].name }}</h1>
            </v-row>
            <div v-for="member in cutList(member)">
                <div v-if="member.age >= 23">{{ member.name }}의 나이는 {{ member.age }}</div>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    name: 'DaeminMain',
    
    data(){
        return{
        member: [
                {
                    name : "nayeon",
                    age : "25"
                },
                {
                    name : "daHyeon",
                    age : "24",
                },
                {
                    name : "jeongHyeong",
                    age : "23"
                }
            ]
        }
    },
    methods: {
        confirm(){
            alert("onClick");
            this.test = 'on'
        },
        cutList(){
            const setName = [];
            this.member.map((list) => {
                if(list.name == this.name){
                    setName.push(list);
                }
            });
    }
    },
    
}

</script>
