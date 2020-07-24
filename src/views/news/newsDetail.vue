<template>
    <div>
        <h6>{{title}}</h6>
        <span>时间:{{time}}</span>
        <div v-html="content">
        </div>
    </div>
</template>

<script>
    import request from "../../request/request";

    export default {
        name: "newsDetail",
        data() {
            return {
                content: '',
                title: '',
                time: '',
            }
        },
        created() {
            this.onRender();
        },
        watch: {
            $route() {
                this.onRender();
            },
        },
        methods: {
            onRender() {
                const newsId = this.$route.query.newsId;
                console.log(newsId);
                if (newsId !== undefined && newsId.length > 0) {
                    request.fetchSingleNews(newsId).then((ret) => {
                        console.log(ret);
                        this.content = ret.data.content;
                        this.time = ret.data.time;
                        this.title = ret.data.title;
                    }).catch((err) => {
                        console.log(err);
                    })

                }
            }
        }
    }
</script>

<style scoped>

</style>