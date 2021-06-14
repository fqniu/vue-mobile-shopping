<template>
    <div class="page-status">
        <div class="statusHeight" :style="{height:statusHeight + 'rem'}"></div>
        <div class="title-bar" :style="{backgroundColor: backgroundColor}">
            <div class="title-name font-bold" :style="{color: titleColor}">{{title || $store.webTitle}}</div>
            <div  v-if="leftEle"
                class="left-ele alifont font-bold" 
                :class="leftEle.iconName"
                :style="{color:leftEle.color?leftEle.color: '#000',fontSize:leftEle.fontSize?leftEle.fontSize:'.24rem'}"
                @click="leftEleMethod"
            ></div>
            <div class="right-ele">
                <div class="ele-item alifont" :class="ele.iconName"
                    :style="{color:ele.color?ele.color: '#000',fontSize:ele.fontSize?ele.fontSize:'.24rem'}"
                    @click="ele.method" 
                    v-for="(ele,index) in rightEle" :key="index"
                ></div>
            </div>

            <div v-if="rightText"
                class="right-ele click"
                :style="{color:rightText.color?rightText.color: '#000',fontSize:rightText.fontSize?rightText.fontSize:'.24rem'}"
                @click="rightTextMethod"
            >
                {{rightText.text}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "baseTitleBar",
        props:{
            backgroundColor:{
                type: String,
                default: '#fff'
            },
            leftEle:{
                type:Object,
                default:  ()=>{
                    return null
                }
            },
            rightEle:{
                type: Array,
                default:  ()=>{
                    return []
                }
            },
            rightText:{
                type:Object,
                default:  ()=>{
                    return null
                }
            },
            title:{
                type: String,
                default: ''
            },
            titleColor:{
                type: String,
                default: '#333'
            }
        },
        data(){
            return{
                statusHeight:'0'
            }
        },
        methods:{
            leftEleMethod(){
                if(this.leftEle.method){
                    this.leftEle.method()
                }
            },
            rightEleMethod(){
                if(this.rightEle.method){
                    this.rightEle.method()
                }
            },
            rightTextMethod(){
                if(this.rightText.method){
                    this.rightText.method()
                }
            },
            initAppStatus(){
                try {
                    window.native.getApp();
                    this.appStatusHeight = JSON.parse(window.native.getStatusHeight('light')).status;
                    this.appScreenWidth = JSON.parse(window.native.getStatusHeight('light')).width;
                    this.statusHeight = this.appStatusHeight / this.appScreenWidth * 750 /100;
                }catch (e) {
                    // this.statusHeight = '.2'
                }
            }
        },
        mounted(){
            this.initAppStatus();
        },
    }
</script>

<style scoped lang="scss">
    .title-bar{
        width: 100%;
        height: .9rem;
        position: relative;
        z-index: 999;
    }
    .title-name{
        margin: auto;
        line-height: .9rem;
        font-size: .32rem;
        max-width: 4.5rem;
        // color: #fff;
        text-align: center;
    }
    .left-ele{
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        position: absolute;
        left: .24rem;
        top: 0;
    }
    .right-ele{
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        position: absolute;
        right: .24rem;
        top: 0;
        display: flex;
        .ele-item{
            margin-left: .25rem;
        }
    }
</style>
