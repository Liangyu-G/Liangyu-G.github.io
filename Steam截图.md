# Check_Steam-Link
自动检测消息中的Steam链接，获取商店/个人资料/创意工坊摘要信息&截图。支持指令搜索steam商店游戏与用户，支持保存steam登录状态。

## 功能
自动检测对话中出现的如下内容，并返回对应页面的网页截图和摘要信息：
- steam商店页链接
- steam个人主页链接
- steam创意工坊链接

  目前支持的格式如下：
```
https://store.steampowered.com/app/881020/Granblue_Fantasy_Relink/ # 游戏商店页链接
https://steamcommunity.com/id/inori_333/ # 个人主页链接
https://steamcommunity.com/sharedfiles/filedetails/?id=3472726693 # 创意工坊物品链接
```
可解析的信息：
```
steam商店界面:
游戏名称、发行时间、开发商、发行商、游戏类别（保留前五个）、游戏简介、游戏评分、游戏价格、是否支持中文（包括简体中文和繁体中文）

steam个人资料界面:
用户名称、封禁记录、个人简介、steam等级、地区、当前状态、游戏数、好友数、最新动态

steam创意工坊界面:
游戏名称、创意工坊作品名称、作者名称、作者主页链接、作者状态、评分、文件大小、创建日期、更新日期、标签、描述
```
## 指令使用指南
根据收到的steam链接自动解析指定界面，插件会自动检测对话中出现的steam链接，并返回对应页面的网页截图和摘要信息（现仅支持steam商店界面、个人主页界面和创意工坊界面）。

`/sss`  指令搜索steam商店，使用方法: /sss + 游戏名，如: /sss 不/存在的你，和我
`/ssu`  指令搜索steam用户，使用方法: /ssu + 用户名，如: /ssu m4a1_death-Dawn
`/ssl`  指令进行steam登录操作，具体使用方法：<br>
`/ssl` enable - 启用steam登录功能<br>
`/ssl` disable - 禁用steam登录功能<br>
`/ssl` status - 查看当前登录状态<br>
`/ssl` store [cookies文本] - 设置Steam商店cookies<br>
`/ssl` community [cookies文本] - 设置Steam社区cookies<br>
`/ssl` test - 测试Steam登录状态<br>


注意**steam商店和steam社区的cookies要分开设置**，steam商店的域名对应steampowered.com，steam社区的域名对应steamcommunity.com，**两者cookies不能通用**  

**获取cookies的方法**：打开浏览器 - 进入steam网页登录你的steam账号 - （按F12）调出开发者工具 - 选择网络/Network选项 - 进入一个steam网页 - 选择名称排在最上面那个项 - 右边那个标头/header里面向下拉 - 找到请求标头/request header项 - 把其中的cookies复制  

这只是一种获取steam cookies的方法，其他还有很多方法，但最好填写完整的cookies，只填写部分的cookies可能会报错  
这就是你的cookies，请保存好，不要泄露，通过指令的方式或者填入Astrbot网页图形ui中插件管理 - Check Steam-Link 插件配置栏中的 input 输入框中  

**注意：当你进入的是前缀为steampowered.com的steam网页时，对应的cookies是steam商店cookies；当你进入的是前缀为steamcommunity.com的网页时，对应的cookies是steam社区的cookies。请不要填错了！！！**  

# 已知问题

+ 使用steam登录功能时，cookies有效期只有差不多48小时，48小时后需要更换cookies，猜测是48小时刷新一次cookies，现阶段无法解决，等后续适配steam web api方案
+ 解析个人主页时，可能会返回```⚠️ 无法获取个人主页部分信息 + 个人主页截图```，再试1-2次就能正常解析，这个问题无法稳定复现，无有效解决方式，猜测是因为个人主页太多gif导致网页未能完全加载
+ 使用/sss和/ssu指令时返回```❌ 搜索失败: 502, message='Attempt to decode JSON with unexpected mimetype: ', url='https://t2i.soulter.top/text2img/generate'```重试1-2次即可正常使用

