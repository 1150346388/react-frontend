import { Map, List } from 'immutable';
import Utils from '../utils';

/**
 * 处理数据工具方法
 */
export default class CollectionUtils extends Utils {

    /**
     * 返回一个List 对象
     * @param  {初始化数组值}
     * @return {[List对象]}
     */
    static getList(array) {
        // 如果参数为数组类型
        if(Array.isArray(array)) {
            // 返回有初始值的List
            return List(array);
        }
        // 返回空值List
        return List.of();
    }

    /**
     * 检查对象是否为Map类型
     * @param  {[doc]}
     * @return {Boolean}
     */
    static isMap(doc) {
        return Map.isMap(doc);
    }

    /**
     * 获取对象数据
     * @param  {immutable对象||普通对象||普通数组} list 集合名称
     * @param  {字符串||普通数组} key  关键词
     * @return {普通对象}      
     */
    static getKeyObj(list, key) {

        if (!list || CollectionUtils.isEmpty(list) || !key) return;
        var obj = {};
        var keyAry = [];
        if (key.constructor == String) {
            keyAry.push(key);
        } else if (key.constructor == Array) {
            keyAry = key;
        }

        for (var i = 0; i < keyAry.length; i++) {
            var nowKey = keyAry[i];
            if (Map.isMap(list)) {
                if (list.get(nowKey) != undefined) obj[nowKey] = list.get(nowKey);
            } else if (list.constructor == Object) {
                if (list[nowKey] != undefined) obj[nowKey] = list[nowKey];
            } else if (list.constructor == Array) {
                if (list[0][nowKey] != undefined) obj[nowKey] = list[0][nowKey];
            }
        };

        return obj;
    }

    /**
     * 获取对象列表数据
     * @param  {普通数组} list 总列表数据
     * @param  {字符串，普通数组} key  关键词
     * @return {普通数组}      
     */
    static getListKeyObj(list, key) {
        if (!list || !key) return;
        var listObj = [];
        for (var i = 0; i < list.length; i++) {
            let newObj = this.getKeyObj(list[i], key);
            if (!CollectionUtils.isEmpty(newObj)) listObj.push(newObj);
        };
        return listObj;
    }

    /**
     * 筛选符合查询条件的数组
     * @param  {immutable数组||普通数组} list  被筛选数组
     * @param  {普通对象} query 筛选对象
     * @return {普通数组}       筛选出的数组
     */
    static filterListKey(list, query) {

        if (!list || CollectionUtils.isEmpty(list) || !query) return;
        var result;
        if (List.isList(list)) {
            return this.filterMapListKey(list, query);
        } else if (list.constructor == Array) {
            return this.filterMapListKey(List(list), query);
        }

    }

    /**
     * 筛选符合查询条件的immutable数组
     * @param  {immutable数组} list  被筛选数组
     * @param  {普通对象} query 筛选对象
     * @return {普通数组}       筛选出的数组
     */
    static filterMapListKey(list, query) {

        if (!list || !query || !List.isList(list)) return;

        var mapQuery = Map(query);
        var mapData = list.filter((obj) => {
            var testHaskey = true;
            mapQuery.map((val, k) => {
                if (val != Map(obj).get(k)) {
                    testHaskey = false;
                }
            });
            return testHaskey;
        });
        return mapData;

    }

    /**
     * 排除key值的对象数据
     * @param  {immutable对象||普通对象} list 集合名称
     * @param  {字符串||普通数组} key  关键词
     * @return {普通对象}      
     */
    static withoutKeyObj(list, key) {

        if (!list || CollectionUtils.isEmpty(list) || !key) return;
        var obj;
        if (Map.isMap(list)) {
            obj = this.withoutMapKeyObj(list, key);
        } else if (list.constructor == Object) {
            let newList = Map(list);
            obj = this.withoutMapKeyObj(newList, key);
        } else if (list.constructor == Array) {
            obj = [];
            for (var i = 0; i < list.length; i++) {
                let rObj = this.withoutMapKeyObj(Map(list[i]), key);
                obj.push(rObj);
            };
        }

        return obj;
    }

    /**
     * 排除key值的immutable数组
     * @param  {immutable对象} list 集合名称
     * @param  {字符串||普通数组} key  关键词
     * @return {普通对象}      
     */
    static withoutMapKeyObj(list, key) {

        if (!list || !key || !Map.isMap(list)) return;
        var newList;
        if (key.constructor == String) {
            newList = list.filterNot((val, k) => {
                return key == k;
            });
        } else if (key.constructor == Array) {
            var newKey = List(key);
            newList = list.filterNot((val, k) => {
                return newKey.includes(k);
            });
        }

        return newList.toObject();
    }

}
