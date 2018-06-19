<template>
    <li class="name-scroll">
        <a href="">cornelius</a>
        <p>{{ offset.top }}</p>
    </li>
</template>

<script>
    export default {
        name: "NameScrollElement",
        data(){
            return {
                offset: {}
            }
        },
        created(){
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll(event){
                this.offset = this.$el.getBoundingClientRect()
            }
        }
    }
</script>

<style>
    li{
        list-style-type: none;
        font-weight: 700;
    }
</style>