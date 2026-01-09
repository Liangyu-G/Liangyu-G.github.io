## Token使用监控与管理

| 命令 | 说明 | 权限 |
|------|------|------|
| `/token` | 开启/关闭token显示 | 所有人 |
| `/token_check` | 查看当前会话token使用情况 | 所有人 |
| `/reset_tokens` | 重置所有token计数 | 仅管理员 |
| `/token_all` | 查看所有会话的token使用情况 | 仅管理员 |
| `/token_chart` | 生成Token使用趋势图 | 所有人 |
| `/export_tokens [json/csv]` | 导出Token记录 | 仅管理员 |
<br>
- 🔄 自动统计每个会话的token使用量
- 📊 显示每条消息的token使用情况
- 🔁 支持会话重置时自动重置token计数
- ⚠️ token使用量达到上限时通知管理员
- 🛠️ 支持管理员手动重置token计数
- 💾 自动保存并加载token统计数据
- 📈 Token使用趋势图生成
- 📤 支持导出Token记录(JSON/CSV)
- 💰 自定义Token计费
- 🛡️ 群组及用户级别Token配额管理
- 🚨 Token异常使用检测