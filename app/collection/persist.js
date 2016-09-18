import config from '../config/config';
import MockUtils from './mockUtils';
import Utils from './collection-utils';
import ServeConfig from '../../serve.config.js';

/**
 * 持久化数据对象
 */
export default class Persist {

    // 是否需要mock数据
    static isMock = (() => {
        // 初始化非mock数据
        let isMock = false;
        // 获得当前 浏览器url
        // let href = location.href
        let href = 'http://localhost:3000';

        // 如果url包含mock
        if (href.includes('mock')) {
            // 需要mock数据
            isMock = true;
        }

        return isMock;
    })();

    // mock数据长度级别
    static mockLevel = (() => {
        // 初始化mock 长度级别为 二级
        let mockLevel = Persist.level_2;
        // 获得当前 浏览器url
        // let href = location.href
        let href = 'http://localhost:3000';

        // 如果url包含mock
        if (href.includes('mock')) {
            // mock级别开始索引
            let start = href.indexOf('mock') + 5;
            // mock级别结束索引
            let end = href.indexOf('&', start);
            // 如果结束索引无效，则为url长度
            if (end < 0) {
                // 设置为url长度
                end = href.length;
            }
            // 获得mock级别
            mockLevel = href.substring(start, end);
        }
    })();

    // 初始化jquery
    static initJquery = (() => {
        // ajax全局配置选项设置
        $.ajaxSetup({
            cache: false
        });

        // 发送ajax拦截方法
        $(document).ajaxSend(function(evt, request, settings) {

        });

        // ajax请求成功, 拦截后台操作错误的提示消息
        $(document).ajaxSuccess(function(event, xhr, settings) {

        });

        // ajax请求失败, 提示网络请求错误消息
        $(document).ajaxError(function(event, xhr, settings, exception) {

        });

        // 扩展jquery ajax支持put delete方法.
        jQuery.each(["put", "delete"], function(i, method) {

            jQuery[method] = function(url, data, callback, type) {
                // shift arguments if data argument was omitted
                if (jQuery.isFunction(data)) {
                    type = type || callback || 'json';
                    callback = data;
                    data = undefined;
                }

                return jQuery.ajax({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                });
            };
        });
    })();

    /**
     * [mock 根据集合名称、操作、参数，生产mock数据]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} oper    [操作名称]
     * @param  {[type]} doc     [操作参数]
     * @return {[type]}         [description]
     */
    static mock(colName, oper, doc) {
        // 获得集合相关配置
        let col = config[colName];
        // 获得集合--操作相关配置
        let op = col && col[oper];
        // 获得集合--操作--返回值相关配置
        let ret = op && op.return;
        //获取集合主键
        let primaryKey = col && col['entity']['primaryKey'];
        //获取集合fields配置
        let mockFields = col && col['entity']['fields'];
        //获取集合指定的json文件
        let url = op && op.mockUrl;
        //如果指定了返回路径
        if (url) {
            $.getJSON(url, function(json) {
                return JSON.parse(json);
            });
            //集合配置中没有return参数，统一返参格式
        } else if (!ret) {
            $.getJSON('./app/mock/success.json', function(json) {
                return JSON.parse(json);
            });
            //要求返参中添加一个uuid的标识符
        } else if (ret.hasOwnProperty(primaryKey) && ret.length == 1) {
            return MockUtils.mockUUID(ret);
        }
        //有return对象和fileds一般为查询接口
        else if (ret && mockFields) {
            return MockUtils.createMockContent(ret, mockFields);
        }

    }

    /**
     * [getUrl 获得集合--操作--url]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} oper    [操作名称]
     * @param  {[type]} param   [操作参数]
     * @return {[type]}         [description]
     */
    static getUrl(colName, oper, param) {
        // 获得集合相关配置
        let col = config[colName];
        // 获得集合--操作相关配置
        let op = col && col[oper];
        // 获得结合--操作--url
        return op && op.getUrl(param);
    }

    /**
     * [findOne 查询集合某数据详情]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} doc     [单条数据]
     * @return {[type]}         [description]
     */
    static findOne(colName, doc) {
        // 如果需要返回mock数据
        if (Persist.isMock) {
            // 返回配置相关mock数据
            return Persist.mock(colName, 'findOne', doc);
        }

        let paramObj = {};
        // 如果数据为 Map 类型
        if (Utils.isMap(doc) || typeof(doc) == "object") {
            //getKeyObj(list,key) 第一个参数list 第二个是key值
            paramObj = Utils.getKeyObj(doc, this.primaryKey(colName));
        } else if (typeof(doc) == "string") {
            if (doc.length == 0) return false;
            paramObj[Persist.primaryKey(colName)] = doc;
        } else {
            //查询不符合规则
            return false;
        }
        // 执行ajax请求查询某集合数据详情（务必加上ServeConfig.env.preReq）
        return $.get(ServeConfig.env.preReq + Persist.getUrl(colName, 'findOne', doc)).done((res) => {
            return true;
        });
    }

    /**
     * [find 查询数据集合]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} doc     [数据参数]
     * @return {[type]}         [description]
     */
    static find(colName, doc, colEntity) {
        // 有缓存数据 && 缓存没有过期
        if (config[colName]["find"]["fulldata"] && new Date().getTime() <= (colEntity.timeout || 0)) {
            // 获取缓存数据
            return new Promise((resolve, reject) => {
                resolve(Utils.filterListKey(colEntity.items, doc));
            });
        }

        // 如果需要返回mock数据
        if (Persist.isMock) {
            // 返回配置相关mock数据
            return Persist.mock(colName, 'find', doc);
        }

        // 执行ajax请求查询某集合数据详情（务必加上ServeConfig.env.preReq）
        return $.get(ServeConfig.env.preReq + Persist.getUrl(colName, 'find', doc), { params: doc }).then((res) => {
            // 设置过期时间
            if (config[colName]["find"]["fulldata"]) {
                res.timeout = new Date().getTime() + config[colName]["find"]["validate"];
            }
        });
    }

    /**
     * [include 获得集合，返回的对象]
     * [val 等于insertOne，返回插入单个对象]
     * [val 等于insertMore，返回插入多个对象]
     * @return {[type]} [description]
     */
    static getDataKey(val, colName) {
        // 获得集合配置
        let col = config[colName];
        if (col && col[val] && col[val].include) {
            // 返回实体主键集合
            return [col && col[val] && col[val].include, false];
        } else {
            // 返回实体主键集合
            return [col && col[val] && col[val].exclusive, true];
        }
    }


    /**
     * [insert 向集合插入单条，或多条数据]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} data [单条或多条数据]
     * @return {[type]}         [description]
     */
    static insert(colName, data) {
        let paramObj = {};
        //判断插入的data值是insertOne还是insertMore
        let p1 = "";
        //返回插入对象值
        let arr = {};
        if (data && data.constructor == Object) {
            p1 = "insertOne";
            arr = Persist.getDataKey(p1, colName);
            if (!arr[1]) {
                paramObj = Utils.getKeyObj(data, arr[0]);
            } else {
                paramObj = Utils.withoutKeyObj(data, arr[0]);
            }
        } else if (data && data.constructor == Array) {
            p1 = "insertMore";
            arr = Persist.getDataKey(p1, colName);
            if (!arr[1]) {
                paramObj = Utils.getKeyObj(data, arr[0]);
            } else {
                paramObj = Utils.withoutKeyObj(data, arr[0]);
            }
        } else {
            return false;
        }
        // 如果需要返回mock数据
        if (Persist.isMock) {
            // 返回配置相关mock数据
            return Persist.mock(colName, p1, data);
        }
        // 执行ajax请求查询某集合数据详情（务必加上ServeConfig.env.preReq）
        return $.post(ServeConfig.env.preReq + Persist.getUrl(colName, p1, data), Persist.getParam(colName, p1, paramObj));
    }

    /**
     * [update 更新集合中单条数据]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} doc [单条数据]
     * @return {[type]}         [description]
     */
    static update(colName, doc) {
        // 如果需要返回mock数据
        if (Persist.isMock) {
            // 返回配置相关mock数据
            return Persist.mock(colName, 'update', doc);
        }
        let paramObj = {};
        let p1 = 'update';
        let arr = Persist.getDataKey(p1, colName);
        if (Utils.isMap(doc) || typeof(doc) == "object") {
            if (!arr[1]) {
                paramObj = Utils.getKeyObj(doc, arr[0]);
            } else {
                paramObj = Utils.withoutKeyObj(doc, arr[0]);
            }
        } else {
            return false;
        }
        //url带参数
        let param = Utils.getKeyObj(doc, Persist.primaryKey(colName));
        // 执行ajax请求查询某集合数据详情（务必加上ServeConfig.env.preReq）
        return $.put(ServeConfig.env.preReq + Persist.getUrl(colName, p1, param), Persist.getParam(colName, p1, paramObj));
    }

    /**
     * [update 向集合删除单条信息]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} doc [单条数据 或 数据编号]
     * @return {[type]}         [description]
     */
    static remove(colName, doc) {
        // 如果需要返回mock数据
        if (Persist.isMock) {
            // 返回配置相关mock数据
            return Persist.mock(colName, 'remove', doc);
        }
        let paramObj = {};
        let p1 = 'remove';
        if (Utils.isMap(doc) || typeof(doc) == "object") {
            let arr = Persist.getDataKey(p1, colName);
            if (!arr[1]) {
                paramObj = Utils.getKeyObj(doc, arr[0]);
            } else {
                paramObj = Utils.withoutKeyObj(doc, arr[0]);
            }
        } else if (typeof(doc) == "string") {
            paramObj[Persist.primaryKey(colName)] = doc;
        } else {
            return false;
        }
        //url带参数
        let param = Utils.getKeyObj(doc, Persist.primaryKey(colName));
        // 执行ajax请求查询某集合数据详情（务必加上ServeConfig.env.preReq）
        return $.delete(ServeConfig.env.preReq + Persist.getUrl(colName, p1, param));
    }

    static automatic() {
        if (ServerConfig.isAutomatic) {
            $.get('/api/oauth/toke', ServerConfig.passportKey,
                function(data) {
                    console.log(data);
                });
        }
    };
}
