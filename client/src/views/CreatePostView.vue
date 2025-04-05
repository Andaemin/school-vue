<script>
import ToggleSubmit from '@/components/base/ToggleSubmit.vue'

export default ({
    name : 'CreatePost',
    data(){
        return{
            article:{
                title:"",
                writerName:"",
                body:""
            }
        }
    },
    components : {
        ToggleSubmit
    },
    methods:{
        async submit(){
            if(this.article.title == " "){
                alert("타이틀 입력 안함?")
                return
            }
            if(this.article.body==""){
                alert("내용을 입력해주세요")
                return
            }
            //여기까지 왔으면 제목과 내용이 다 입력됨
            const res = await this.$axios.post("/api/write",this.article)
            if(res.data.success) {  //글 정상 작성완료시
                //해당 글을 보는 화면으로이동
                var no = res.data.article.no
                this.$router.push("/home"+no)
            }
        }
    }
})
</script>
<template>
    <v-container class="w-50">
        <h1>글 작성하기</h1>
        <h4>알아서 아래 양식에 맞춰서 대충 구겨 박으세요</h4>
        <v-container class="mt-6 pa-0">  
            <v-text-field v-model="article.title" label="글제목"></v-text-field>
            <v-text-field v-model="article.writerName" label="작성자"></v-text-field>
            <v-textarea v-model="article.body" label="글내용"></v-textarea>
            <ToggleSubmit class="" variant="elevated" color="#42A5F5">
                <v-icon icon="mdi-checkbox-marked-circle" start/>Complate
            </ToggleSubmit>
            <ToggleSubmit color="red">
                <v-icon icon="mdi-cancel" start/>Cancel
            </ToggleSubmit>
        </v-container>
    </v-container>
</template>