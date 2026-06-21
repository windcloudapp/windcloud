# 风云机场 · WindCloud

> 风云机场，永不失联！  
> 六年磨一剑，专注跨境解决方案！

## 在线访问

部署 GitHub Pages 后，站点地址为：

**https://windcloudapp.github.io/windcloud/**

## 快速链接

| 项目 | 链接 |
|------|------|
| 用户控制台 | https://app.windcloud.space/ |
| 注册（含邀请码） | https://app.windcloud.space/#/register?invite_code=scBNQo2u |
| 客户端下载 | https://github.com/windcloudapp/proxy-client |
| 邀请码 | `scBNQo2u` |

## 推广返利

邀请新用户可获得 **30%** 返利，累计满 **¥3000** 可提现。

## 本地预览

```bash
# Python
python -m http.server 8080

# 或 Node.js
npx serve .
```

浏览器打开 http://localhost:8080 即可预览。

## 部署 GitHub Pages

1. 将本仓库推送到 `windcloudapp/windcloud`
2. 进入 GitHub 仓库 **Settings → Pages**
3. **Source** 选择 `Deploy from a branch`
4. **Branch** 选择 `main`，文件夹选 `/ (root)`
5. 保存后等待几分钟，站点即可上线

## 目录结构

```
windcloud/
├── index.html          # 落地页
├── assets/
│   ├── css/style.css   # 样式
│   ├── js/main.js      # 交互脚本
│   └── img/            # Logo 与图标
├── .nojekyll           # 禁用 Jekyll 处理
└── README.md
```

## License

© 2026 WindCloud. All rights reserved.
