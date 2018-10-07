<template>
 <div class="wrapper-height">
    子组件接收父组件数据:<span>{{inputName}}</span></br>

    <!-- 子组件向父组件传值：<span>{{childValue}}</span></br>
    <input type="button" value="点击触发" @click="childClick"> -->
 </div>
</template>

<script>
export default {
    props:{
        inputName:Object,
        // required:true,
    },
    components: {

    },
    data() {
        return {
            childValue: '我是子组件的数据'
        }
    },
    created(){
        console.log(this.inputName);
        console.log(typeof(this.inputName))
    },
    methods:{
        
        // childClick () {
        //     console.log(this.childValue);
        //     // this.$emit('childByValue',this.childValue);
        //     this.$emit('childByValue', this.childValue)
        // } 
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
