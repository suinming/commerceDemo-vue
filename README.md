# commerceDemo front-end(Vue)

## STRUCTURE
將此網站分為五個部分:
### Home
此為網站的主頁，上半部有navbar可以導向網站的不同分頁
下半部則陳列最新商品。
### Category
將商品做分類，同類型的商品則陳列於同一頁面。
### Product detail page
呈現單一商品的詳細資料，並且可將商品加入購物車。
### Login/Signup
讓使用者創建帳戶，並可在帳戶中查閱自己的訂購記錄。
### Cart
將商品加入購物車後進入結帳的流程(填寫資料、信用卡卡號)

## TOOLS
### Vue/Vuex
以Vue作為前端框架，將可重複使用元素做成Component(本Demo共有3個components);
Vuex的部分主要是存放使用者登入的token與加入購物車的商品，必免在components
間出現過多 prop drilling。
###  Stripe
以Stripe處理使用者的付款(在台灣似乎並非服務範圍，暫時使用開發者的API token)
###  Bulma
為簡化UI的設計在HTML-tag上入Bulma的class，使網站有基本的美觀與排版。
###  Storybook
嘗試以storybook對components做管理。此處有撰寫story的component為ProductBox，
透過input不同的props於ProductBox，使得component的標題顏色有不同的變化。(下方
有影片連結)

## VIDEOS 
### web page
[commerce web page](https://www.loom.com/share/632a658522f84f969a49e0e54ef97e9a)
### storybook
[storybook for one component](https://www.loom.com/share/3d97b40d5fb7433ba7210c23d03331d4)

## BUG
###  Stripe 
需要另尋適合的付款整合工具。
test for git multilines commit
