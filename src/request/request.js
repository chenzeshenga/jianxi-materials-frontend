import request from '@/utils/request'

export default {

    test() {
        console.log('test');
        return request({
            url: '/test/list',
            method: 'get'
        });
    },

    login(user) {
        console.log('login');
        return request({
            url: '/auth/login',
            method: 'post',
            data: user
        })
    },

    addOrUpdateNews(news) {
        console.log('addOrUpdateNews')
        return request({
            url: '/news/insert',
            method: 'post',
            data: news
        })
    },

    listNews(pagination, type) {
        console.log('listNews')
        return request({
            url: '/news/list/' + type,
            method: 'post',
            data: pagination
        })
    },

    listAllNews(pagination) {
        console.log('listAllNews')
        return request({
            url: '/news/list',
            method: 'post',
            data: pagination
        })
    },

    deleteNews(newsId) {
        console.log('delete news');
        return request({
            url: 'news/delete/' + newsId,
            method: 'get'
        })
    },

    fetchSingleNews(newsId) {
        console.log('fetchSingleNews');
        return request({
            url: 'news?newsId=' + newsId,
            method: 'get'
        })
    },

    listProduct() {
        console.log('listProduct');
        return request({
            url: '/product/listAll',
            method: 'post'
        })
    },

    showProduct(id) {
        console.log('showProduct');
        return request({
            url: '/product?id=' + id,
            method: 'get'
        })
    }

}
