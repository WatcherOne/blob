/******************************************************************************
 * author: zhubo
 * e-mail: 286154864@qq.com
 * github: https://github.com/WatcherOne
 * create: 2022-06-02
 * function: 处理路由错误的情况！这是 已知最优的处理方式！！！
 *  Todo 组织一下 这段文字
 ******************************************************************************/

import AjaxResult from '../java/model/ajaxResult.js'

export default async (ctx, next) => {
    await next()
    if (ctx.status === 404) {
        // 若为接口类的404, 则返回 code=404
        if (ctx.url.startsWith('/api')) {
            ctx.body = new AjaxResult().set404()
        } else {
            // 非接口类的则重定向到404页面
            ctx.response.redirect("/404")
        }
    }
}
