/**
 * 项目实体配置
 */
export default {
    "find": {
        // 查询集合，获取Url
        getUrl: () => {
            return `/step/v2/project/projectPage`;
        },
        // 查询集合，mock数据结构
        "return": {
            "joinNum": "int",
            "closeNum": "int",
            
            "closeProjectInfoList": [
                "projectId", "projectImportanceLevel", "commonFlag", "members",
                "projectCode", "projectIcon", "projectManager", "projectManagerIcon",
                "projectManagerLoginName", "projectName", "projectNameForShirt",
                "projectNameSpace", "projectStatus", "projectTagList"
            ],
            "projectInfoList": [
                "projectId", "projectImportanceLevel", "commonFlag", "members",
                "projectCode", "projectIcon", "projectManager", "projectManagerIcon",
                "projectManagerLoginName", "projectName", "projectNameForShirt",
                "projectNameSpace", "projectStatus", "projectTagList"
            ]
        },
        // 缓存有效期 1分钟
        "validate": 60 * 1000,
        // 数据完整性
        "fulldata": true
    },
    // 实体相关配置
    "entity": {
        // 实体主键
        "primaryKey": "projectId",
        // 实体字段配置，根据mock级别 + 数据类型 = mock属性长度
        "fields": {
            "projectId": "string",
            "projectName": "string",
            "projectManager": "string",
            "projectManagerIcon": "string",
            "projectStatus": "string",
            "projectImportanceLevel": "string",
            "projectIcon": "string",
            "projectTagList": "array",
            "members": "int",
            "projectManagerLoginName": "string",
            "projectNameSpace": "string",
            "projectNameForShirt": "string",
            "projectCode": "string",
            "commonFlag": "string"
        }
    }
}
