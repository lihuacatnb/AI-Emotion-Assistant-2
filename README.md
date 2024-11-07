# 基于Ollama的AI情绪助手
# AI Emotion Assistant Based on Ollama

## 1.项目简介（Project Introduction）
项目构建了一个基于 Ollama 平台的本地 AI 情绪助手系统，前端使用 Vue 框架，具备情感分析等功能。由于当前版本尚未进行调优，因此项目适用于本科毕业设计，不适用商业应用。<br>
<br>
_The project has built a local AI emotion assistant system based on the Ollama platform, using the Vue framework for the frontend, with features such as emotion analysis. As the current version has not been fine-tuned, the project is suitable for undergraduate dissertation work and not for commercial applications_ <br>

## 2.项目基础（Project Foundation）
本项目前端使用了开源项目 __Fully-featured & beautiful web interface for Ollama LLMs__ , 网址为 https://github.com/jakobhoeg/nextjs-ollama-llm-ui .<br>
<br>
_ This project uses the open-source project __Fully-featured & beautiful web interface for Ollama LLMs__ ,the website is https://github.com/jakobhoeg/nextjs-ollama-llm-ui _.<br>






<br>
大模型使用了 __L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF__ 模型，网址为 https://huggingface.co/Ransss/L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF <br>
<br>
_The model used is the __L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF__ model, the website is https://huggingface.co/Ransss/L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF _ <br>
<br>
模型文件在 __/others__ 文件中的 __/models__ 中。<br>
<br>
_The model file is in the __/models__ folder in the __/others__ file._ <br>
<br>

## 3.项目运行（Project Running）
### （1）前端环境 （Front-end Environment）
Node 18.16.0 <br>
### （2）前端运行 （Front-end Running）
npm install<br>
npm run dev<br>
### （3）后端环境 （Back-end Environment）
Ollama 最新版 （The latest version of Ollama）<br>
### （4）后端运行 （Back-end Running）
#### -1- 模型部署
部署请参考 Ollama 的 GitHub 仓库，在 README.md 文件中查看 __自定义模型__ 章节。<br>
<br>
_For project deployment, refer to Ollama’s GitHub repository. In the README.md file, see the section on __Customize a model__._<br>

#### -2- 模型运行
在项目的 __/others/models__ 文件夹中,有一个 __Modelfile__ 文件，用记事本打开，显示`FROM C:/Users/lihuacat/l3-umbral-mind-rp-v0.3-8b-q8_0/l3-umbral-mind-rp-v0.3-8b-q8_0.gguf` 注意修改路径为自己的路径。<br>
_The model file is in the __/models__ folder in the __/others__ file. Note that the path needs to be modified to your own path._<br>
<br>
在 cmd 中先输入模型文件路径，再输入 `ollama create l3-umbral-mind-rp-v0.3-8b-q8_0 -f Modelfile` 注意修改路径为自己的路径。<br>
_The model file is in the __/models__ folder in the __/others__ file. Note that the path needs to be modified to your own path._<br>
<br>
在 cmd 中输入 `ollama run l3-umbral-mind-rp-v0.3-8b-q8_0` 测试，注意修改路径。<br>
_The model file is in the __/models__ folder in the __/others__ file. Note that the path needs to be modified to your own path._<br>
<br>

## 4.开发人员（Developers）
狸猫科技 _Lihuacat Technology_ <br>
感谢燕京理工学院 __陈炜导师__ 的指导 <br>
_Thanks to __Mentor Chen Wei__ from Yanjing University of Science and Technology for the guidance._<br>
感谢燕京理工学院 __刘淑艳导师__ 的指导 <br>
_Thanks to __Mentor Liu Shuyan__ from Yanjing University of Science and Technology for the guidance._

## 5.项目展示（Project Display）
<img src="/others/show-1.png"/><br>
<br>
<br>
<img src="/others/show-2.png"/><br>
<br>
<br>

## 6.商务合作 (Business cooperation)
微信：maxiuwo1314     _WeChat: maxiuwo1314_ <br>
邮箱：zhaogangbjm@gmail.com     _Email：zhaogangbjm@gmail.com_

