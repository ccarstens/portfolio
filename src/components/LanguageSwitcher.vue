<template>
    <ul class="language-switcher">
        <li><a href="#">english</a></li>
        <li><a href="#">Deutsch</a></li>
        <li><a href="#">日本語</a></li>
        <li><a href="#">русский</a></li>
    </ul>
</template>

<script>
    export default {
        name: "LanguageSwitcher"
    }
</script>

<style lang="scss" scoped>
    .language-switcher{
        font-weight: normal;

        li{
            margin-bottom: -.4em;
        }

        a{
            margin-bottom: -1em;
        }

        a:link{
            text-decoration: underline;
        }
    }
</style>