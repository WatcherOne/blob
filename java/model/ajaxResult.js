/**
 *    视图层
 *    视图的内核, 模型就是指视图的数据
 */ 

class AjaxResult {
    constructor (data) {
        this.status = 200
        this.data = data
        this.msg = '请求成功'
    }

    setStatus (status) {
        this.status = status
        return this
    }

    setData (data) {
        this.data = data
        return this
    }

    setMsg (message) {
        this.msg = message
        return this
    }

    set401 () {
        this.status = 401
        this.msg = '用户未登录'
        return this
    }

    set404 () {
        this.status = 404
        this.msg = '无效请求'
        return this
    }
}

export default AjaxResult
