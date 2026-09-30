# Amazon Ops Blog

一个无需 Node.js、无需构建步骤的静态个人博客模板，适合直接上传 GitHub 后部署到 Vercel 或 GitHub Pages。

## 1. 先修改个人信息

打开 `site-config.js`：

```js
window.SITE_CONFIG = {
  name: "你的名字",
  role: "Amazon 跨境电商运营",
  email: "your-email@example.com",
  github: "https://github.com/你的GitHub用户名",
  domain: "https://你的域名.com"
};
```

`domain` 目前只是作为配置预留。正式部署前，还需要手工替换下面两个文件中的 `https://example.com`：

- `robots.txt`
- `sitemap.xml`

同时建议修改 `index.html` 里的 `<meta name="author">`、页面标题和描述。

## 2. 本地预览

最简单：直接双击 `index.html`。

更推荐在目录中运行：

```bash
python -m http.server 8000
```

浏览器打开：

```text
http://localhost:8000
```

## 3. 上传 GitHub

### 方法 A：网页上传

1. GitHub 新建 Repository。
2. 建议选择 Private 或 Public，按你的用途决定。
3. 点击 `Add file` → `Upload files`。
4. 上传 ZIP 解压后的所有文件和文件夹，不要只上传 ZIP。
5. Commit changes。

### 方法 B：Git 命令

```bash
git init
git add .
git commit -m "Initial Amazon Ops Blog"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

## 4. Vercel 部署

1. 登录 Vercel。
2. `Add New` → `Project`。
3. Import 刚才的 GitHub Repository。
4. 这是纯静态网站，通常不需要填写 Build Command。
5. 点击 Deploy。
6. 部署完成后会得到一个 `xxx.vercel.app` 地址。

如果 Vercel 识别配置时有疑问：

- Framework Preset：Other
- Build Command：留空
- Output Directory：留空
- Install Command：留空

## 5. 绑定自己的域名

Vercel：

`Project` → `Settings` → `Domains` → 添加你的域名。

然后按照 Vercel 页面提示，到域名服务商修改 DNS。实际 DNS 值以 Vercel 当时显示的配置为准。

## 6. 博客文章怎么新增

复制 `posts/keyword-value.html`，例如：

```text
posts/my-new-post.html
```

修改文章内容后，在 `index.html` 的 `blog-grid` 中复制一张 `.post-card`，把 `href` 改成新文章路径。

## 7. 当前文件结构

```text
amazon-personal-blog/
├── index.html
├── styles.css
├── script.js
├── site-config.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── README.md
├── assets/
│   └── favicon.svg
└── posts/
    ├── post.css
    ├── keyword-value.html
    ├── natural-rank.html
    └── review-insight.html
```

## 8. 这个版本已经包含

- 响应式 PC / 手机布局
- 深色 / 浅色切换
- 首页个人介绍
- 能力模块
- 项目方法模块
- 博客文章卡片
- 3 篇示例文章
- 联系方式模块
- 404 页面
- favicon
- robots.txt
- sitemap.xml
- Vercel 配置

## 9. 下一步建议

部署成功后再升级这些功能：

- 换成你的真实姓名、头像和联系方式
- 使用你的真实域名更新 sitemap
- 加 Google Search Console
- 加 Google Analytics
- 增加文章分类 / 标签
- 加 Markdown 自动生成文章
- 加后台 CMS（后续文章多了再做）
