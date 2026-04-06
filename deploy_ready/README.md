# 个人简历网页（苹果科技感）

这是一个基于 Flask 的个人简历网站，包含：

- 苹果风科技感视觉（深色、玻璃拟态、渐变光晕）
- 中英文一键切换
- 每段经历支持下拉展开查看详情
- 点赞功能（访客先输入姓名，再点赞）
- 右下角实时展示最近 5 条点赞记录（姓名 + 时间）

## 本地运行

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

浏览器打开：`http://127.0.0.1:5000`

## 部署（Render）

### 方式一：通过 `render.yaml` 一键识别

1. 把项目上传到 GitHub。
2. 在 Render 新建 **Blueprint**，连接你的仓库。
3. Render 会读取 `render.yaml` 自动创建服务。
4. 构建完成后即可获得公网链接。

### 方式二：手动新建 Web Service

- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app`
- Runtime: Python 3

## 数据说明

- 点赞数据存储在 `data/likes.db`（SQLite）。
- 生产环境建议使用持久化磁盘（Render Disk）或云数据库，避免重启丢失数据。

## 可定制项

- 简历文案和双语内容：`static/main.js`
- 视觉样式：`static/style.css`
- 后端接口与点赞逻辑：`app.py`
