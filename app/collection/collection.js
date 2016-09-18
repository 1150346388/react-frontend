import Persist from './persist';
import Utils from './collection-utils';
import Query from './query';
import config from '../config/config';

/**
 * 集合操作类
 * // 组件初始化时，集合变更事件订阅
 * db.task.pubsub((msg, data) => {
 *     this.setState(data);
 * });
 *
 * // 事件触发，js调用
 * db.task.findOne({_id: 'xxxdfdsfgsg'})
 * db.task.find({...})
 * db.task.update({...})
 * db.task.remove({_id: 'xxxdfdsfgsg'})
 * db.task.insert([{...}])
 */
export default class Collection {

    /**
     * [constructor 集合操作构造函数]
     * @param  {[type]} colName [集合名称]
     * @param  {[type]} list    [初始化列表数据]
     * @return {[type]}         [description]
     */
    constructor(colName, list) {
        // 设置集合id
        this.id = Utils.uuid();
        // 设置集合名称
        this.colName = colName;
        // 初始化参数为集合
        this.items = Utils.getList(list);
    }

    /**
     * [find 根据查询器，查询集合]
     * @param  {[type]} doc   [查询器]
     * @param  {[type]} rtSet [返回指定键]
     * @return {[type]}       [description]
     */
    find(doc, rtSet) {
        // 不符合查询规则
        if (!doc || !typeof(doc) == "object") return false;

        // 初始化请求数据
        let query = {};

        // 如果传入数据为 object 类型
        for (let key in doc) {
            let value = doc[key];
            if (typeof(value) != "object") {
                // 等值搜索
                query[key] = value;
            } else {
                // 条件搜索
                for (let inKey in value) {
                    // 查询器的值
                    let inValue = value[inKey];
                    if (inKey.indexOf("$") == 0) {
                        // 搜索查询器
                        let tag = inKey;

                        // 按照 查询器 解析 查询条件
                        try {
                            let v = Query[tag](inValue);
                            if (v) {
                                query[key] = v
                            } else {
                                return false;
                            }
                        } catch (e) {
                            // 查询器暂不支持;
                            return false;
                        }
                    } else {
                        // 条件搜搜的查询器不是以 $ 开头
                        return false;
                    }
                }
            }
        }


        // 调用持久化对象 查询 数据详情
        return Persist.find(this.colName, query, this).then(((res) => {
            if (Array.isArray(res)) { // 从缓存获取数据
                // 向集合放入新数据
                this.items = res;
            } else { // 从接口获得的数据
                // 向集合放入新数据
                this.items.push(res.data);
                // 设置过期时间
                if (res.timeout) {
                    this.timeout = res.timeout;
                }
            }
        }).bind(this)).catch(((error) => {
            // console.log(error)
        }).bind(this));
    }

    /**
     * [pubsub 集合变更，事件订阅]
     * @param  {Function} callback [集合变更，回调执行函数]
     * @return {[type]}            [description]
     */
    pubsub(callback) {
        // 订阅指定集合的事件
        PubSub.subscribe(this.pubsubKey(), callback);
    }

    /**
     * [pubsubKey 生成订阅事件key]
     * @return {[type]} [description]
     */
    pubsubKey() {
        return `collection.${this.colName}.${this.id}`;
    }

    //getKeyObj(list,key) 第一个参数list 第二个是key值，此方法仅仅是测试用的
    getKeyObj(list, key) {
        if (!list) return false;
        return { taskId: "132dsdskjew" };
    }

    /**
     * [findOne 查询数据详情]
     * @param  {[type]} doc [查询对象 或 数据编号]
     * @return {[type]}     [description]
     */
    findOne(doc) {
        // 调用持久化对象 查询 数据详情
        return Persist.findOne(this.colName, doc).then(((res) => {
            // 向集合放入新数据
            // this.items.push(res.data);
            // 集合变更发布事件
            // PubSub.publish(this.pubsubKey(), this.items);
        }).bind(this));
    }

    /**
     * [include 获得集合，返回的对象]
     * [val 等于insertOne，返回插入单个对象]
     * [val 等于insertMore，返回插入多个对象]
     * @return {[type]} [description]
     */
    getDataKey(val) {
        // 获得集合配置
        let col = config[this.colName];
        // 返回实体主键集合
        return col && col.insert && col.insert[val] && col.insert[val].include;
    }

    /**
     * [insert 向集合插入单条，或多条数据]
     * @param  {[type]} data [单条或多条数据]
     * @return {[type]}      [description]
     */
    insert(data) {
        // 调用持久化对象 查询 数据详情
        return Persist.insert(this.colName, data).then(((res) => {
            // 向集合放入新数据
            // this.items.push(res.data);
            // 集合变更发布事件
            // PubSub.publish(this.pubsubKey(), this.items);
        }).bind(this));
    }

    /**
     * [update 更新集合中单条数据]
     * @param  {[type]} doc [单条数据]
     * @return {[type]}     [description]
     */
    update(doc) {
        // 调用持久对象，更新单条数据
        return Persist.update(this.colName, doc).then(((res) => {
            // 向集合更新单条数据
            // this.items.push(res.data);
            // 集合变更，发布事件
            // PubSub.publish(this.pubsubKey(), this.items);
        }).bind(this));
    }

    /**
     * [remove 向集合删除单条信息]
     * @param  {[type]} doc [单条数据 或 数据编号]
     * @return {[type]}     [description]
     */
    remove(doc) {
        // 调用持久对象，更新单条数据
        return Persist.remove(this.colName, doc).then(((res) => {
            // 向集合更新单条数据
            // this.items.push(res.data);
            // 集合变更，发布事件
            // PubSub.publish(this.pubsubKey(), this.items);
        }).bind(this));
    }
}
