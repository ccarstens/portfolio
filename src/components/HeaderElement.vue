<template>
    <div class="site-header-container">
        <!--<div class="gradient fixed-top"></div>-->
        <header id="site-header" class="fixed-top">
            <nav>
                <ul class="d-flex justify-content-between">
                    <li class="d-block d-flex justify-content-left"><a href="#">cornelius</a></li>
                    <li class="d-block d-flex justify-content-center"><a href="#">projects</a></li>
                    <li class="d-block d-flex justify-content-center"></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: "HeaderElement"
    }
</script>

<style lang="scss">

    #site-header, .gradient{
        width: 100%;
        height: 30px;
    }

    #site-header{
        z-index: 2;

        font-weight: 700;

    }

    .gradient{
        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 66%, rgba(255,255,255,0) 100%);
        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 66%,rgba(255,255,255,0) 100%);
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 66%,rgba(255,255,255,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );
        z-index: 0;

    }
    ul {
        list-style-type: none;
        padding-left: 0;

        /*-webkit-justify-content: space-between;*/

    }

    li{
        width: 30%;


        a{
            display: inline-block;
            /*color: #000000;*/

        }
    }

</style>