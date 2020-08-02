import request from '@/utils/request'

export default {

    login(user) {
        return request({
            url: '/auth/login',
            method: 'post',
            data: user
        })
    },

    addOrUpdateNews(news) {
        return request({
            url: '/news/insert',
            method: 'post',
            data: news
        })
    },

    addOrUpdateProduct(product) {
        return request({
            url: '/product/insert',
            method: 'post',
            data: product
        })
    },

    addOrUpdateJob(job) {
        return request({
            url: '/job/insert',
            method: 'post',
            data: job
        })
    },

    listNews(pagination, type) {
        return request({
            url: '/news/list/' + type,
            method: 'post',
            data: pagination
        })
    },

    listDoc(pagination) {
        return request({
            url: '/document/list/',
            method: 'post',
            data: pagination
        })
    },

    listAllNews(pagination) {
        return request({
            url: '/news/list',
            method: 'post',
            data: pagination
        })
    },

    listJobs() {
        return request({
            url: '/job/list',
            method: 'get',
        })
    },

    deleteNews(newsId) {
        return request({
            url: 'news/delete/' + newsId,
            method: 'get'
        })
    },

    deleteProduct(id) {
        return request({
            url: 'product/delete/' + id,
            method: 'get'
        })
    },

    deleteJob(id) {
        return request({
            url: 'job/delete/' + id,
            method: 'get'
        })
    },

    deleteDoc(uuid) {
        return request({
            url: 'document/delete/' + uuid,
            method: 'get'
        })
    },

    fetchSingleNews(newsId) {
        return request({
            url: 'news?newsId=' + newsId,
            method: 'get'
        })
    },

    listProduct() {
        return request({
            url: '/product/listAll',
            method: 'post'
        })
    },

    listAllProduct(pagination) {
        return request({
            url: '/product/list',
            method: 'post',
            data: pagination
        })
    },

    showProduct(id) {
        return request({
            url: '/product?id=' + id,
            method: 'get'
        })
    }

}
