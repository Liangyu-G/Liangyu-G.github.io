# RSSHub

✨ Get Everything You Want to Know / 获取你想知道的一切。✨

支持通过 RSSHub 路由和直接 URL 订阅 RSS 源，并定时获取最新的 RSS 内容。

<img width=300 src="https://github.com/user-attachments/assets/16886f57-886c-4aad-abd1-2edd5d1f2c06">

## 功能

- 添加、列出和删除 RSSHub endpoint
- 通过 RSSHub 路由订阅 RSS 源
- 直接通过 URL 订阅 RSS 源
- 列出所有订阅
- 删除订阅
- 获取最新一条订阅内容

## 指令描述

### RSSHub 相关指令

- `/rss rsshub add <url>`: 添加一个 RSSHub endpoint
- `/rss rsshub list`: 列出所有 RSSHub endpoint
- `/rss rsshub remove <idx>`: 删除一个 RSSHub endpoint

### 订阅相关指令

- `/rss add <idx> <route> <cron_expr>`: 通过 RSSHub 路由给当前会话的增加一条订阅
- `/rss add-url <url> <cron_expr>`: 给当前会话直接增加一条自定义的订阅
- `/rss list`: 列出当前会话的所有订阅
- `/rss remove <idx>`: 删除当前会话指定序号的订阅
- `/rss get <idx>`: 获取当前会话的指定序号中最新一条的订阅内容

## Cron 表达式教程

Cron 表达式格式：`* * * * *`，分别表示分钟、小时、日、月、星期，`*` 表示任意值，支持范围和逗号分隔。例：

1. `0 0 * * *` 表示每天 0 点触发。
2. `0/5 * * * *` 表示每 5 分钟触发。
3. `0 9-18 * * *` 表示每天 9 点到 18 点触发。
4. `0 0 1,15 * *` 表示每月 1 号和 15 号 0 点触发。

星期的取值范围是 0-6，0 表示星期天。

## 使用

### 从 RSSHub 订阅内容

首先使用指令 `/rss rsshub add https://rsshub.app` 添加官方 RSSHub 订阅站。

然后使用指令 `/rss rsshub list` 查看刚刚添加的订阅站。

官方维护了很多可用的路由，涵盖了 Telegram Channel、Bilibili、金融信息、高校官网信息等等。可参考 RSSHub 官方维护的路由：https://docs.rsshub.app/zh/routes/popular

找到自己想订阅的内容，根据其中的 Route、Example、Parameters 组装成最终的路由，如 `/cls/telegraph`（只需要路由名即可，不要加前面的 `https://rsshub.app` ）

然后使用指令 `/rss add 0 /cls/telegraph 0 * * * *` 订阅消息，每小时拉取一次。第一个 0 表示使用的是 list 中第 0 个 RSSHub 站。