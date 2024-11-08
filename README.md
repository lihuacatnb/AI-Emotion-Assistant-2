# 基于Ollama的AI情绪助手
# AI Emotion Assistant Based on Ollama

## 1.项目简介（Project Introduction）
项目构建了一个基于 Ollama 平台的本地 AI 情绪助手系统，前端使用 Vue 框架，具备情感分析等功能。由于当前版本尚未进行调优，因此项目适用于本科毕业设计，不适用商业应用。<br>
<br>
_The project has built a local AI emotion assistant system based on the Ollama platform, using the Vue framework for the frontend, with features such as emotion analysis. As the current version has not been fine-tuned, the project is suitable for undergraduate dissertation work and not for commercial applications_ <br>
## 2.项目基础（Project Foundation）
### （1）前端基础（Front-end Foundation）
前端使用了开源项目 __Fully-featured & beautiful web interface for Ollama LLMs__ , 网址为 https://github.com/jakobhoeg/nextjs-ollama-llm-ui <br>
<br>
_The frontend of the user's project uses the open-source project __Fully-featured & beautiful web interface for Ollama LLMs__, available at https://github.com/jakobhoeg/nextjs-ollama-llm-ui_ 
### （2）后端基础（Back-end Foundation）
后端的模型使用了 __L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF__ 模型，网址为 https://huggingface.co/Ransss/L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF <br>
<br>
_The backend of the user's project uses the __L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF__ model, available at https://huggingface.co/Ransss/L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF_
## 3.项目运行（Project Running）
### （1）前端环境 （Front-end Environment）
Node 18.16.0
### （2）前端运行 （Front-end Running）
npm install<br>
npm run dev
### （3）后端环境 （Back-end Environment）
Ollama 最新版 （The latest version of Ollama）
### （4）后端运行 （Back-end Running）
下载好模型文件后，打开模型所在的文件夹，新建一个 __Modelfile__ 文件。新建后，模型文件结构如图所示<br>
<br>
_After downloading the model file, open the folder where the model is located and create a new file named __Modelfile__. Once created, the model file structure will appear as shown in the image._
<br>
<img src="/show11.png"/><br>
使用记事本或任意文本编辑器打开 `Modelfile` 文件，输入以下内容
```plaintext
    FROM <模型路径>/l3-umbral-mind-rp-v0.3-8b-q8_0.gguf
```

示例

```plaintext
    FROM C:/Users/lihuacat/l3-umbral-mind-rp-v0.3-8b-q8_0/l3-umbral-mind-rp-v0.3-8b-q8_0.gguf
```
<br>

在 cmd 中先输入 __模型文件夹路径__ ，再输入 `ollama create l3-umbral-mind-rp-v0.3-8b-q8_0 -f Modelfile` <br>
In the command prompt, first enter the __model folder path__, then enter `ollama create l3-umbral-mind-rp-v0.3-8b-q8_0 -f Modelfile`
<br>
最后，在 cmd 中输入 `ollama run l3-umbral-mind-rp-v0.3-8b-q8_0` 测试<br>
Finally, in the command prompt, enter `ollama run l3-umbral-mind-rp-v0.3-8b-q8_0` to test.
## 4.开发人员（Developers）
狸猫科技 _Lihuacat Technology_ <br>
<br>
感谢燕京理工学院 __陈炜导师__ 的指导 <br>
_Thanks to __Mentor Chen Wei__ from Yanjing University of Science and Technology for the guidance._ <br>
<br>
感谢燕京理工学院 __刘淑艳导师__ 的指导 <br>
_Thanks to __Mentor Liu Shuyan__ from Yanjing University of Science and Technology for the guidance._
## 5.项目展示（Project Display）
<img src="/show-1.png"/><br>
<br>
<br>
<img src="/show-2.png"/><br>
<br>
## 6.商务合作 (Business cooperation)
微信：maxiuwo1314     _WeChat: maxiuwo1314_ <br>
邮箱：zhaogangbjm@gmail.com     _Email：zhaogangbjm@gmail.com_

