import { addLocaleData, IntlProvider } from 'react-intl';
import Utils from '../utils';

import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

class IntlFactory {

    constructor() {
        //添加格式化数字、钱币等需要的配置文件
        addLocaleData(zh);
        addLocaleData(en);
        //获取localStorage里语言
        this.lang = window.localStorage.getItem('language');
        //判断获取的lang值是否为空，为空则设置默认值'zh'
        if (this.lang == null) {
            this.lang = 'zh';
            window.localStorage.setItem('language', this.lang);
        }
    }

    /**
     * 在localStorage存储语言环境,并返回相应的翻译文件
     * @author songhuaqian
     * @Date   2016-08-12
     * @param  {[type]}   param [语言]
     * @return {[type]}         [翻译文件]
     */
    async judgeLang(param) {
        //根据传入的param覆盖lang语言
        this.lang = param;
        if (window.localStorage) {
            window.localStorage.setItem('language', param);
        }
        //根据不同语言环境获取翻译文件地址
        let key = 'i18n_' + param;
        let url = jsCache.getUrl(key);
        //使用jsCache加载资源，加载结束继续执行下面代码
        await Utils.jsCacheLoad(url);
        //返回翻译文件
        return window[key];
    }

    /**
     * 获取语言
     * @author songhuaqian
     * @Date   2016-08-12
     * @return {[type]}   [description]
     */
    getLang() {
        return this.lang;
    }

    /**
     * 切换语言环境，返回对应语言环境IntlProvider实例
     * @author songhuaqian
     * @Date   2016-08-12
     * @param  {[type]}   param [语言]
     * @return {[type]}         [description]
     */
    async changeLang(param) {
        if (!param) {
            param = window.localStorage.getItem('language') || 'zh';
        }
        //等待翻译文件加载完成
        this.langMsg = await this.judgeLang(param);
        let _this = this;
        //IntlProvider配置内容，格式化数字、货币、日期等，翻译文件
        return new IntlProvider({
            locale: param,
            formats: {
                number: {
                    //%格式
                    'percent': {
                        style: 'percent',
                        // 0.505->50.50%
                        // minimumFractionDigits: 2
                        // 0.505->50.5%
                        // maximumFractionDigits: 2
                        // 0.505->50.5%
                        // minimumSignificantDigits: 2
                        // 0.5046->50%,0.505->51%
                        // maximumSignificantDigits: 2
                        // 0.5046->50%,0.505->51%
                        minimumIntegerDigits: 2
                    },
                    'currency': {
                        style: 'currency',
                        //钱币格式，人民币CNY,日元JPY,美元USD......
                        currency: (() => {
                            return _this.lang === 'en' ? 'USD' : 'CNY';
                        })()
                    },
                    'decimal': {
                        style: 'decimal',
                        minimumIntegerDigits: 2
                    }
                },
                date: {
                    // new Date();->8/7/16
                    'short': {
                        month: 'numeric',
                        day: 'numeric',
                        year: '2-digit'
                    },
                    // new Date();->2016
                    'year-only': { year: 'numeric' },
                    // new Date();->Aug 7, 2016
                    'medium': {
                        month: 'numeric',
                        // month: 'narrow',//A 10,2016
                        day: 'numeric',
                        year: 'numeric'
                    },
                    // new Date();->August 7, 2016
                    'long': {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    },
                    // new Date();->Tuesday, August 9, 2016
                    'full': {
                        // era:'short',//公元2016年8月10日星期三
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    },
                    missing: undefined,
                },
                time: {
                    'hour-only': {
                        // new Date();->11 AM
                        hour: '2-digit',
                        hour12: false,
                        // new Date();->11
                        // hour: '2-digit',
                        // hour12: false,
                    },
                    // new Date();->11:32 AM
                    'short': {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    },

                    'medium': {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false,
                    },

                    'long': {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                    },

                    'full': {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZoneName: 'short'
                    }
                },
                relative: {
                    'seconds': {
                        units: 'second',
                    },
                    'minute': {
                        units: 'minute',
                    },
                    'hour': {
                        units: 'hour',
                    },
                    'day': {
                        units: 'day',
                    },
                    'year': {
                        units: 'year',
                    },
                },
            },
            messages: this.langMsg,
        }, {});
    }
}

export default new IntlFactory();
