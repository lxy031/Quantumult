/*
脚本功能：哔哩哔哩魔改
软件版本：6.90.0
更新时间：2022-10-31
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 哔哩哔哩魔改
^https?:\/\/ap(i|p)\.bilibili\.com\/x\/(vip|v2|resource)\/(space|account|web|price|top_panel_info|show)(\/|\?)(mine|myinfo|access|vip_center|panel|_bridge|skin\?).* url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/BiliBili/bili_info.js

[mitm] 

hostname = app.bilibili.com, api.bilibili.com
*/
