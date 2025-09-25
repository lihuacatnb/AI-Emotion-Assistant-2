# AI Emotion Assistant Based on Ollama

---

📖 **This is the English version of the README.** Click here for the [中文版本](./README.md) 

---

## 1. Project Introduction
The project builds a local AI emotion assistant system based on the Ollama platform, supporting functions such as sentiment analysis, and is suitable for undergraduate graduation projects.

## 2. Project Basics
- The frontend uses the Vue framework and is based on the open-source project [Fully-featured & beautiful web interface for Ollama LLMs](https://github.com/jakobhoeg/nextjs-ollama-llm-ui)
- The backend model used is [L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF](https://huggingface.co/Ransss/L3-Umbral-Mind-RP-v0.3-8B-Q8_0-GGUF)


## 3.Project Setup
### （1）Front-end Environment
Node 18.16.0
### （2）Front-end Running
- npm install
- npm run dev
### （3）Back-end Environment
Ollama
### (4) Back-end Running
- After downloading the model file, create a new **Modelfile** in the model folder. Example directory structure:  
<img src="/show11.png"/>
<br>

- Open the `Modelfile` with Notepad or any text editor, and enter the following content:
<br>
```plaintext
    FROM <model_path>/l3-umbral-mind-rp-v0.3-8b-q8_0.gguf
```
<br>

- Example Modelfile:
<br>
```plaintext
    FROM C:/Users/lihuacat/l3-umbral-mind-rp-v0.3-8b-q8_0/l3-umbral-mind-rp-v0.3-8b-q8_0.gguf
```
<br>

- In __cmd__, go to the __model folder path__ and execute:
<br>
```plaintext
    ollama create l3-umbral-mind-rp-v0.3-8b-q8_0 -f Modelfile
```
<br>

- Test run:
<br>
```plaintext
    ollama run l3-umbral-mind-rp-v0.3-8b-q8_0
```


## 4.Developers
- LH-Cat AI
- Special thanks to Professor __Wei Chen__, Yanjing Institute of Technology

## 6.Project Display
<img src="/show-1.png"/><br>
<br>
<br>
<img src="/show2.png"/><br>
<br>

---

<p align="center">⭐️ If you find this helpful, feel free to give it a Star to show your support! ⭐️</p>
