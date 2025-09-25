# 基于Ollama的AI情绪助手

---

📖 **本 README 为中文版本**，点击这里查看 [English version](./README_EN.md)  

---

## 1.项目简介
本项目构建了一个基于 Ollama 平台 的本地 AI 情绪助手系统，支持情感分析等功能，适用于本科毕业设计。

## 2.项目基础
- 前端使用 Vue 框架，基于开源项目[Fully-featured & beautiful web interface for Ollama LLMs](https://github.com/jakobhoeg/nextjs-ollama-llm-ui)
- 后端的模型使用 [L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF](https://huggingface.co/Ransss/L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF)

## 3.项目运行
### （1）前端环境
Node 18.16.0
### （2）前端运行
- npm install
- npm run dev
### （3）后端环境
Ollama<br>
### （4）后端运行 （Back-end Running）
下载模型文件后，在模型文件夹下新建一个 __Modelfile__  文件，目录结构示例：<br>
<img src="/show11.png"/><br>
使用记事本或任意文本编辑器打开 `Modelfile` 文件，输入以下内容：<br>

```plaintext
    FROM <模型路径>/l3-umbral-mind-rp-v0.3-8b-q8_0.gguf
```
<br>
Modelfile文件示例：

```plaintext
    FROM C:/Users/lihuacat/l3-umbral-mind-rp-v0.3-8b-q8_0/l3-umbral-mind-rp-v0.3-8b-q8_0.gguf
```

<br>

在 cmd 中进入 __模型文件夹路径__ ，执行：

```plaintext
    ollama create l3-umbral-mind-rp-v0.3-8b-q8_0 -f Modelfile
```
<br>
测试运行：

```plaintext
    ollama run l3-umbral-mind-rp-v0.3-8b-q8_0
```


## 4.开发人员
-狸猫C型AI
-感谢燕京理工学院 __陈炜导师__

## 5.项目展示
<img src="/show-1.png"/><br>
<br>
<br>
<img src="/show2.png"/><br>
<br>

---

<p align="center">⭐️ 如果你觉得有帮助，欢迎点个 Star 支持一下！ ⭐️</p>
