import { Map, List } from 'immutable';
import { browserHistory } from 'react-router';

/**
 * 处理数据工具方法
 */
export default class Utils {

    // 轮巡回调函数数组
    static pollFuns = []

    // 对系统进行轮巡
    static poll = (() => {
        // 1秒轮巡
        setInterval(function() {
            // 便利需轮巡的数组
            for (let i in Utils.pollFuns) {
                // 获取需要轮巡的对象
                let obj = Utils.pollFuns[i];
                // 如果该值为函数类型
                if (typeof obj === 'function') {
                    // 直接轮巡函数
                    obj();
                // 如果为对象类型
                } else {
                    // 获得当前延迟秒数
                    obj.cur = (obj.cur || obj.delay) - 1;
                    // 如果不需要延迟
                    if(obj.cur < 1) {
                        // 如果对象 func 为函数类型
                        if(typeof obj.func === 'function') {
                            // 执行轮巡函数
                            obj.func();
                        }
                        // 延迟时间重置
                        obj.cur = obj.delay;
                    }
                }
            }
        }, 1000);
    })();

    /**
     * [pushPollFuns 向轮巡回调数组，放入轮巡函数] todo 接收对象，时间倍数
     * @param  {[type]} obj [需要轮巡的函数，结构 function 或 {func: ()=> {}, delay: 10}]
     * @return {[type]}      [description]
     */
    static pushPollFuns(obj) {
        // 设置func 值
        let func = obj;
        // 如果obj 为对象类型
        if (typeof obj === 'object') {
            // 获取对象 func 属性
            func = obj.func;
        }
        // 当为函数类型
        if (typeof func === 'function') {
            // 向数组放置，需轮巡的函数 或对象
            Utils.pollFuns.push(obj);
        }
    }

    // 当前站点路由
    static routers = []

    /**
     * [recursion 递归获取React路由路径]
     * @param  {[type]} obj [路由对象值]
     * @return {[type]}     [description]
     */
    static recursion(obj) {
        // 当值为对象或数组
        if (Utils.isObject(obj)) {
            // 便利对象或数组
            for (let k in obj) {
                // 继续递归值
                Utils.recursion(obj[k]);
            }
            // 当值为字符串
        } else if (typeof obj === 'string') {
            // 当值为 / 开始，则为url
            if (obj.startsWith('/')) {
                // 向路由数组放置路径
                Utils.routers.push(obj);
            }
        }
    }

    /**
     * [onEnter React 根路由【/】被加载，进入函数]
     * @param  {[type]} param [React路由对象]
     * @return {[type]}       [description]
     */
    static onEnter(param) {
        // 获取路由对 根节点的 配置
        let routers = param && param.routes && param.routes[0];
        // 递归路由，获得所有的 访问路径
        Utils.recursion(routers);
        // 将对路由操纵的 <A> 点击事件的轮巡操纵，放入轮巡数组
        Utils.pushPollFuns(() => {
            // 遍历当前路由数组
            for (let i in Utils.routers) {
                // 构建路由查询表达式
                let s = $('[href="' + Utils.routers[i] + '"]');
                // 当Dom元素不存在，进入下次循环
                if (s.length < 1) continue;
                // 当路由没有 intercept 拦截样式
                if (!s.hasClass('intercept')) {
                    // 绑定路由点击事件
                    s.click(() => {
                        // 获得路由，跳转路径
                        let url = s.attr('href');
                        // 进入依赖资源加载函数
                        Utils.loading(url);
                        // 使点击事件失效
                        return false;
                    });

                    // 为路由加入 intercept Class
                    s.each(function() {
                        $(this).addClass('intercept');
                    });
                }
            }
        });
    }

    /**
     * [loading 根据路由地址，加载依赖资源]
     * @param  {[type]} href [当前路由地址]
     * @param  {[type]} skip [需要先跳转到skip路径，再跳转到href路径；解决直接刷新浏览器问题]
     * @return {[type]}      [description]
     */
    static async loading(href, skip) {
        // 读取 index.html 页面中设置 window.loadMap 数据，获得页面依赖，资源数组 或默认数组
        let loadList = loadMap[href] || [];
        // 遍历依赖默认数组
        for (let i in loadList) {
            // 加载依赖资源
            await Utils.jsCacheLoad(loadList[i]);
        }
        // 由于路由相同不加载页面，所有前跳转到其他路由
        if(skip) {
            // 页面跳转到其他路由
            browserHistory.push(skip);
        }
        // 浏览器跳转到路由
        href && browserHistory.push(href);
    }

    // 返回页面对象key
    static key = 0

    /**
     * 返回一个唯一的key <React key={Utils.getKey('react')} />
     * @param  { 唯一key前缀 }
     * @return {[react_1 字符串作为唯一key]}
     */
    static getKey(prefix) {
        // 构建前缀字符串
        let p = (prefix || 'key') + '_';
        // 全局key 自增1
        Utils.key = Utils.key + 1;
        // 返回唯一key
        return p + Utils.key;
    }

    /**
     * [uuid 生成uuid字符串]
     * @return {[type]} [description]
     */
    static uuid() {
        // 返回uuid字符串
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // 已使用jsCache加载到页面的js
    static loadedPageJs = []

    // 用户刷新页面，执行方法
    static refresh = (()=> {
        // 获得当前路径
        let url = location.pathname;
        // 如果刷新页面不等于当前 '/' 根路径
        if(url != '/') {
            // 加载当前页面依赖资源，并先跳转到根路径 再 跳转到该页面
            Utils.loading(url, '/');
        }        
    })();

    /**
     * [jsCacheLoad 使用jsCache加载资源]
     * @param  {[type]} url [资源存在url]
     * @return {[type]}     [description]
     */
    static jsCacheLoad(url) {
        // 返回承诺对象
        return new Promise((resolve, reject) => {
            // 判断当前url资源，是否已经被加载到页面
            if (!url || Utils.loadedPageJs.includes(url)) {
                // 返回成功承诺对象
                resolve();
                // url资源需要加载
            } else {
                // 将url 放入已加载资源数组
                Utils.loadedPageJs.push(url);
                // 使用jsCache加载 url资源
                window.jsCache.load({ url: url }).then(() => {
                    // 资源加载完成，返回成功状态
                    resolve();
                });
                // 设置5秒定时器
                setTimeout(() => {
                    // 5秒过后资源未加载，报错
                    reject(new Error('jsCache load url:' + url + ' is timeout'));
                }, 5000);
            }
        });
    }

    /**
     * 判断是否为空
     * @param  {[type]}  obj 对象
     * @return {Boolean}     [description]
     */
    static isEmpty(obj) {
        if (!obj) return true;
        if (this.isArray(obj)) {
            return obj.length == 0;
        } else if (this.isObject(obj)) {
            for (var name in obj) {
                return false;
            }
            return true;
        }
        return false;
    };

    /**
     * 判断是否为对象
     * @param  {[type]}  obj 对象
     * @return {Boolean}     [description]
     */
    static isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    /**
     * 判断是否为数组
     * @param  {[type]}  obj 数组
     * @return {Boolean}     [description]
     */
    static isArray(obj) {
        return Array.isArray(obj) || toString.call(obj) === '[object Array]';
    };

}
