# 风云机场 · WindCloud

> 风云机场，永不失联！

## 在线访问

**落地页（GitHub Pages）：** https://windcloudapp.github.io/windcloud/

**主站域名（仪表盘，任选其一）：**

| 域名 | 链接 | 备注 |
|------|------|------|
| windcloudapp.dpdns.org | https://windcloudapp.dpdns.org/ | **推荐** |
| windcloud.ccwu.cc | https://windcloud.ccwu.cc/ | 备用 |

## 快速链接

| 项目 | 链接 |
|------|------|
| 注册（含邀请码） | https://windcloudapp.dpdns.org/#/register?code=scBNQo2u |
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

> 主站域名指向用户仪表盘，请勿将其设为 GitHub Pages 自定义域名。

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
