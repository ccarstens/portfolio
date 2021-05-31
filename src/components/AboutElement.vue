<template>
    <div id="about" :class="classObject">
        <div class="row">
            <div
                class="maintext col col-sm-10 col-md-12 col-lg-12 offset-md-1x"
                v-html="text"
            ></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AboutElement',
    props: ['text'],

    computed: {
        classObject() {
            return {
                about: true,
                'container-fluid': true,
            }
        },
    },
}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap-scss/functions';
@import '../../node_modules/bootstrap-scss/variables';
@import '../../node_modules/bootstrap-scss/mixins';
@import '../../node_modules/bootstrap-scss/grid';

.about {
    /*padding-top: 35vh;*/
    margin-bottom: 20vh;
}
#app .about {
    font-size: 4em;
    line-height: 1.4em;

    p {
        margin-bottom: 0.6em;
    }
}

@include media-breakpoint-down(md) {
    #app .about {
        font-size: 1.5em;
    }
}
</style>
