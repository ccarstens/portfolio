<template>
    <article>
        <header v-html="description"></header>
        <div class="content">
            <div v-for="m in projectContent.media" class="media">
                {{ m.src }}
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "ProjectElement",
        props: [
            'content'
        ],
        data () {
            return {
                projectContent: {}
            }
        },
        created(){
            this.projectContent = this.content
        },
        computed: {
            description(){
                return `
                    <p>${ this.projectContent.title } - ${this.projectContent.year}</p>
                    <p>${ this.projectContent.description }</p>
                `
            }
        }
    }
</script>

<style scoped>

</style>