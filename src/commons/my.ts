/*
    说明：
        这个是我自己的全局插件。（我的所有自定义东西都在$my这个命名空间内）
        挂载到Vue的prototype上，在构建中通过this.$my调用

    目录：

*/
/**************************************************************************************************/
// jshint esversion: 6
/**
 * 
 * @param {*} target 
 * @param {string} policy 
 */
function deepCopy(target:any, policy:string ='json')
{
    if(policy === 'function')    // [函数]
    {
        // ...
    }
    else if(policy === 'object')    // [复杂对象]
    {
        // ...
    }

    return JSON.parse(JSON.stringify(target))    // 默认返回[json数据]的深拷贝
}

export default
{
    deepCopy,
}
