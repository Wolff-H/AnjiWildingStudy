/**
 * @description 定义了store会用到的类型
 */
declare namespace store_d
{
    export interface Action
    {
        type: string
        [propName: string]: any
    }

}
