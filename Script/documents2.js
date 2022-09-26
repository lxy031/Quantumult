/******************************

脚本功能：documents解锁订阅
更新时间：2022-9-27
截止日期：2023-03
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-request-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/documents2.js
[mitm]

hostname = license.pdfexpert.com

*******************************/

var body = JSON.parse($request.body);
body = {
  chargingPlatform: "iOS AppStore",
  receiptData:
    "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",
  token: "33d3aced-fced-4c92-9971-2d42afc7c94f",
  bundleId: "com.readdle.ReaddleDocsIPad"
};

$done({ body: JSON.stringify(body) });
