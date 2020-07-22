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
    }

}
