<template>
    <div>
        <div style="padding-left: 20%;padding-right: 20%" class="hidden-md-and-down">
            <h4>{{title}}</h4>
            <span>时间:  {{time}}</span>
            <div v-html="content">
            </div>
        </div>
        <div class="hidden-md-and-up">
            <h4>{{title}}</h4>
            <span>时间:  {{time}}</span>
            <div v-html="content">
            </div>
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