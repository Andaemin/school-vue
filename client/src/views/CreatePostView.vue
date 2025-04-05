<script>

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
    <v-container>
        <v-text-field v-model="article.title" label="글제목"></v-text-field>
        <v-text-field v-model="article.writerName" label="작성자"></v-text-field>
        <v-textarea v-model="article.body" label="글내용"></v-textarea>
        <div class="text-center">
            <v-btn color="primary" @click="submit()"> 글작성</v-btn>
        </div>
    </v-container>
</template>