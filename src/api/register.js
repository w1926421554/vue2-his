// 挂号管理
import request from '@/utils/request'

// 挂号管理-获取挂号列表
export const getRegisterList = params => {
    return request({
        method: 'get',
        url: '/register/list',
        params
    })
}