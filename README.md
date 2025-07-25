# 🚀 Welcome to the Playwright + TypeScript Learning Environment!

This environment helps you **understand the basics of test automation** – no prior programming experience required. You will learn step by step how to read and understand simple test scripts.

---

## 🧰 What you need
Before you get started, please install:

- https://nodejs.org/ (recommended: LTS version)
- https://code.visualstudio.com/ (VS Code)
- https://git-scm.com/ (to download the project)

---

## 📦 Download and start the project

1. Open your terminal or command prompt.
2. Enter the following:

```bash
git clone https://github.com/KolmThomas/WS-KnowHow-Basic-Testautomation.git
cd playwright-training
npm install
'''
## 🧪 How to run the TypeScript files and see the results in the console
1. Open your terminal (e.g. in VS Code). (Top Bar > Terminal > New Terminal)
2. Make sure you're in the root folder of the project. 
3. Compile the TypeScript files to JavaScript using this command(if there is no *.js files):
    npx tsc 01_Typescript_Basics/0x_name.ts 
    (Tipp: you can also go in the folder first with "cd 01_Typescript_Basics", that way you can just go with npx tsc 0x_name.ts [e.g: npx tsc 01_variables.ts])

This will create .js files next to each .ts file.

4. Now run each file using Node.js:
    (Tipp: You can go in the folder aswell and make the commands shorter)
    node 01_Typescript_Basics/01_variables.js
    node 01_Typescript_Basics/02_loops.js
    node 01_Typescript_Basics/03_functions.js
You will see the output printed in the terminal using console.log(...).
