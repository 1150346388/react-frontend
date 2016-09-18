import Mock from '../config/mock.conf.js';

export default class MockUtils {

    // mock数据 长度级别
    // 一级mock数据，较正常
    static level_1 = 'level_1';
    // 二级mock数据，较长
    static level_2 = 'level_2';
    // 三级mock数据，非常长
    static level_3 = 'level_3';
    // mock数据长度级别
    static mockLevel = (() => {
        // 初始化mock 长度级别为 二级
        let mockLevel = MockUtils.level_2;
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

    static createMockContent(ret) {
        let fields = {};
        if (arguments.length == 2) {
            fields = arguments[1];
        }
        let levelArr = Mock['level_1'];
        // let levelArr = Mock[MockUtils.mockLevel];
        if (typeof(ret) === 'object') {
            let attrArr = MockUtils.getItemsArr(ret);
            attrArr.forEach((e, index) => {
                if (typeof(ret[e]) === 'string') {
                    let level = ret[e];
                    ret[e] = MockUtils.getSpecialItem(ret[e], levelArr[level]);
                } else if (Array.isArray(ret[e])) {
                    let keyArr = ret[e];
                    let length = (typeof(keyArr[0]) === 'number') ? keyArr.shift() : 15;
                    let paramList = [];
                    let obj = {};
                    let fields = {
                        "taskId": "string",
                        "taskTitle": ['17001', '17002'],
                        "isApply": 'int',
                        "subTaskCount": 'int',
                        "subTaskFinishCount": 'float',
                        "disscussCount": 'int',
                        "status": 'string'
                    };
                    for (let i = 0; i < length; i++) {
                        keyArr.forEach((e, index) => {
                            if (Array.isArray(fields[e])) {
                                obj[e] = MockUtils.getRandomItem(fields[e]);
                            } else {
                                let level = fields[e];
                                obj[e] = MockUtils.getSpecialItem(fields[e], levelArr[level]);
                            }
                        });
                        paramList.push(obj);
                    };
                    ret[e] = paramList;
                } else {
                    ret[e] = MockUtils.createMockContent(ret[e]);
                }
            });
            let res = { "millis": 34, "code": "SUCCESS", "message": "操作成功", "entity": ret };
            return res;
        }
    }

    /**
     * 随机生成一个指定长度的UUID
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    static mockUUID(e) {
        if (typeof(e) === 'object') {
            let oArr = MockUtils.getItemsArr(e)[0];
            let len = e[oArr] || 32
            let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
            let maxPos = $chars.length;　　
            let pwd = '';　　
            for (let i = 0; i < len; i++) {　　　　
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
            }
            e[oArr] = pwd;
            let res = { "millis": 34, "code": "SUCCESS", "message": "操作成功", "entity": e };
            return res;
        }
    }

    /**
     * [GetRandomlength 根据数组返回随机的长度]
     * @param {[type]} a [传参数组]
     */
    static getRandomlength(a) {
        if (a && a.length == 2) {
            let Range = a[1] - a[0];
            let Rand = Math.random();
            return (a[0] + Math.round(Rand * Range));
        }
    }

    /**
     * [getRandomItem 根据传入的数组随机返回其中一个数据]
     * @param  {[type]} arr [传参数组]
     * @return {[type]}     [description]
     */
    static getRandomItem(arr) {
        if (arr && Array.isArray(arr) && arr.length) {
            let Range = arr.length - 1;
            let Rand = Math.random();
            let index = Math.round(Rand * Range);
            return (arr[index]);
        }
    }

    /**
     * [getSpecialItem 根据类型和长度返回数据]
     * @param  {[String]} a [类型]
     * @param  {[int]} b [长度]
     * @return {[type]}   [description]
     */
    static getSpecialItem(a, b) {
        if (a && b) {
            if (a == 'int') {
                let under = b[0];
                let up = b[1];
                return parseInt(Math.random() * (up - under + 1) + under);
            } else if (a == 'en') {
                let str = '';
                let t = MockUtils.getRandomlength(b);
                for (var i = 0; i < t; i++) {
                    str += 'W';
                };
                return str;

            } else if (a == 'zh') {
                let arr = new Array();
                let t = MockUtils.getRandomlength(b);
                for (var i = 0; i < t; i++) {
                    arr[i] = Math.round(Math.random() * 20927) + 19968;
                }
                var arr1 = new Array();
                for (var i in arr) {
                    arr1.push(String.fromCodePoint(arr[i]));
                }
                var s = arr1.join("");
                return s;
            } else if (a == 'float' && Array.isArray(b)) {
                let under = b[0] * 100;
                let up = b[1] * 100;
                return parseInt(Math.random() * (up - under + 1) + under) / 100;
            }
        }
    }

    static getItemsArr(o) {
        var tmpArr = [];
        for (var item in o) {
            tmpArr.push(item);
        }
        return tmpArr;
    }
}
