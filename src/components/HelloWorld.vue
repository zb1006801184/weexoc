<template>
    <text @click="toBack">1234555</text>
</template>


<script>
    let navigator =  weex.requireModule('navigator');
    export default {
        methods:{
            toBack(){
                navigator.pop({animated: "true"})
            }
        }
    }

</script>