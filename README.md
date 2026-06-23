# 风云机场 · WindCloud

> 风云机场，永不失联！  
> 六年磨一剑，专注跨境解决方案！

## 在线访问

部署 GitHub Pages 后，**落地页**地址为：

**https://windcloudapp.github.io/windcloud/**

> 请勿将 GitHub Pages 自定义域名设为 `windcloudapp.dpdns.org`——该域名已指向用户仪表盘（主站），否则访问 github.io 会被重定向到登录页。

## 快速链接

| 项目 | 链接 |
|------|------|
| 用户仪表盘 | https://windcloudapp.dpdns.org/ |
| 注册（含邀请码） | https://windcloudapp.dpdns.org/#/register?invite_code=scBNQo2u |
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
