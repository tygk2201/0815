<template>
    <div>
        <div class="post_name">{{ownPost.userName}}</div>
        <input v-model="ownPost.userName"/>
        <button @click="toParent">点击</button>
    </div>
</template>
<script>
export default {
    // props:['post-item'] 无验证
    //有验证的prop
    props:{
        'post-item':{
            type: Object,
            required:true
        }
    },
    data(){
        return{
            ownPost:this.postItem

        }
    },
    methods:{
        toParent(){
            this.$emit('toFather',this.ownPost.userName)

        }
    }
}
</script>