# 補充內容

- [TSLint 規則](https://palantir.github.io/tslint/rules/)
- [Codelyzer 規則 (for Angular 用的)](https://github.com/mgechev/codelyzer)
- [Windows 小技巧: 繁體中文語言如何變更預設輸入法(英文)](https://blog.miniasp.com/post/2012/06/30/Windows-8-Tips-How-to-change-default-input-method-for-languages)


## 熱鍵表

- 下載 PDF 檔
    - [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
    - [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    - [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

- 全部儲存：
    - [Win] ctrl + k, s
    - [Mac] cmd + option + s

- 切換關聯檔案
    - [Win] alt + o / i / u / p
    - [Mac] option + shift + o / i / u / p
    - o: html
    - i: css
    - u: ts
    - p: spec.ts

- 快速開啟檔案
    - [Win] ctrl + p
    - [Mac] cmd + p

- 開啟/關閉左邊的 siderbar
    - [Win] ctrl + b
    - [Mac] cmd + b

- 開啟/關閉檔案總管
    - [Win] ctrl + shift + e
    - [Mac] cmd + shift + e

- 開啟/關閉搜尋視窗
    - [Win] ctrl + shift + f
    - [Mac] cmd + shift + f

- 開啟/關閉原始檔控制(git)
    - [Win/Mac] ctrl + shift + g

- 自動排版
    - [Win/Mac] alt + shift + f (記得設定 prettier.singleQuote)

- 註解/取消註解
    - [Win] ctrl + /
    - [Mac] cmd + /

## Emmet

- https://emmet.io/

## Prettier 設定檔

- 建立 `.prettierrc`
- 設定內容: https://prettier.io/docs/en/options.html

## Input 資料流程

![](./images/input.jpg)

## 問題排除

- F12 看到 `Error: Angular JIT compilation failed: '@angular/compiler' not loaded!` 
  - 重開 VSCode
- PowerShell 簽章問題
  1. F1
  2. Terminal: Select Default Shell
  3. Command Prompt
