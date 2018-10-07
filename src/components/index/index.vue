<template>
 <div class="wrapper-height">
    <router-link :to="{path:'/map'}">点击调用百度地图</router-link></br>

    <!-- 父组件向子组件传值：<input type="text" v-model="name"></br> -->
    <child :inputName='data'></child></br>

    <!-- 父组件接收子组件数据： -->
    <!-- <span>{{getName}}</span>
    <child @childByValue='childByValue'></child></br> -->
 </div>
</template>

<script>
import child from './child';

export default {
    components: {
        child
    },
    data() {
        return {
            name:'',
            getName:'',
            data:[{'id':0,'name':'a'},{'id':1,'name':'b'}]
        }
    },
    methods:{
        myajax(){
            this.$http({					
                method: "get",					
                url: "",					
                data: {						
                    page: 1,						
                    size: 10					
                }
                }).then(res => {						
                    console.log("请求成功");						
                    console.log(res);					
                },res => {						
                    console.log("请求失败");						
                    console.log(res);					
            });
        },
        childByValue(childByValue){
            this.getName=childByValue;
        }
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
