import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ATRI -My Dear Moments-",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '功能页', link: '/ZeroBot' }
    ],

    sidebar: [
      {
        text: '功能列表',
        items: [
          { text: '捐赠', link: '/捐赠' },
          { text: '视频分析', link: '/视频分析' },
          { text: '功能大合集', link: '/ZeroBot' },
          { text: '禁漫下载', link: '/禁漫下载' },
          { text: '禁漫搜索', link: '/禁漫搜索' },
          { text: '搜图与色图', link: '/搜图与色图' },
          { text: 'Steam价格查询插件', link: '/Steam价格查询插件' },
          { text: '广播助手', link: '/广播助手' },
          { text: '智能合并转发分析插件', link: '/智能合并转发分析插件' },
          { text: '猜CS职业选手', link: '/猜CS职业选手' },
          { text: '骗子酒馆', link: '/骗子酒馆' },
          { text: 'AI表情包管理器', link: '/AI表情包管理器' },
          { text: '戳一戳', link: '/戳一戳' },
          { text: 'Steam截图', link: '/Steam截图' },
          { text: '动态文字冒险', link: '/动态文字冒险' },
          { text: 'QQ群日常分析插件', link: '/QQ群日常分析插件' },
          { text: '德州扑克', link: '/德州扑克' },
          { text: '色情沉浸式互动控制插件', link: '/色情沉浸式互动控制插件' },
          { text: '打胶', link: '/打胶' },
          { text: '俄罗斯轮盘赌', link: '/俄罗斯轮盘赌' },
          { text: '操控BOT的便捷命令', link: '/操控BOT的便捷命令' },
          { text: '幻影坦克', link: '/幻影坦克' },
          { text: '人生重开模拟器', link: '/人生重开模拟器' },
          { text: 'RSSHub', link: '/RSSHub' },
          { text: 'URL摘要提取器', link: '/URL摘要提取器' },
          { text: '导管记录', link: '/导管记录' },
          { text: 'One Last Kiss 风格生成器', link: '/One Last Kiss 风格生成器' },
          { text: 'AI智能定时任务插件', link: '/AI智能定时任务插件' },
          { text: 'Token使用监控与管理', link: '/Token使用监控与管理' },
          { text: 'QQ违规记录查询', link: '/QQ违规记录查询' },
          { text: '五子棋游戏', link: '/五子棋游戏' },
          { text: '评价QQ头像', link: '/评价QQ头像' },
          { text: '开盒群友', link: '/开盒群友' },
          { text: 'AI画图', link: '/AI画图' },
          { text: '群成员查询插件', link: '/群成员查询插件' },
          { text: '关键词自动回复', link: '/关键词自动回复' },
          { text: '解析流媒体平台链接', link: '/解析流媒体平台链接' },
          { text: 'Sora 模型生成视频', link: '/Sora 模型生成视频' },
          { text: '裁剪和合并gif', link: '/裁剪和合并gif' },
          { text: '猪猪表情包', link: '/猪猪表情包' },
          { text: '硬件信息查询', link: '/硬件信息查询' },
          { text: '无畏契约每日商店', link: '/无畏契约每日商店' },
          { text: '磁链解析插件', link: '/磁链解析插件' },
          { text: '用自然语言AI点歌', link: '/用自然语言AI点歌' },
          { text: '哈基米语音', link: '/哈基米语音' },
          { text: 'AI自主管理群聊', link: '/AI自主管理群聊' },
          { text: 'CS饰品查询', link: '/CS饰品查询' },
          { text: '基于AI的Galgame互动插件', link: '/基于AI的Galgame互动插件' },
          { text: '动漫磁链查询插件', link: '/动漫磁链查询插件' },
          { text: '狼人杀游戏', link: '/狼人杀游戏' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/nUxFhoI0VO' }
    ]
  }
})
