<template>
    <div>
        <post-card v-for="(item,index) in postList" :post-item='item' :key="index" @toFather="getDate"></post-card>
        <!-- <input type="text" speech  x-webkit-speech class="voice_input"></input> -->
    </div>
</template>

<script>
import postCard from '@/components/meetingCard.vue';
export default {
    data(){
        return{
            postList:[
                {
                    userName:'jjjj',
                    postTime:'2019-02-03 12:30:00',
                    content:{
                        text:'ddddddddd',
                        imgList:['ffff','fffff']
                    }
                },
                {
                    userName:"11111",
                    postTime:'2019-02-03 12:30:00',
                    content:{
                        text:'ddddddddd',
                        imgList:['ffff','fffff']
                    }
                }
            ]
        }
    },
    components:{
        postCard
    },
    methods:{
        getDate(text){
            window.console.log(text);

        }
    }
    
}
</script>
<style lang="less" scoped>
.voice_input{
    width: 300px;
    height: 20px;
}
</style>