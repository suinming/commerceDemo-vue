# commerceDemo front-end(Vue)

## 架構
將此網站分為四個部分:
1. Home
  此為網站的主頁，上半部有navbar可以導向網站的不同分頁
  下半部則陳列最新商品。
2. Category 
  將商品做分類，同類型的商品則陳列於同一頁面。
3. Login/Signup
  讓使用者創建帳戶，並可在帳戶中查閱自己的訂購記錄。
4. Cart 
  將商品加入購物車後進入結帳的流程(填寫資料、信用卡卡號)

## 使用技術
1. Vue/Vuex
  以Vue作為前端框架，將可重複使用元素做成Component(本Demo共有3個components);
  Vuex的部分主要是存放使用者登入的token與加入購物車的商品，必免在components
  間出現過多 prop drilling。
2. Stripe
  以Stripe處理使用者的付款(在台灣似乎並非服務範圍，暫時使用開發者的API token)
3. Bulma
  為簡化UI的設計在HTML-tag上入Bulma的class，使網站有基本的美觀與排版。
4. Storybook
  嘗試以storybook對components做管理。此處有撰寫story的component為ProductBox，
  透過input不同的props於ProductBox，使得component的標題顏色有不同的變化。(下方
  有影片連結)

## 影片 

## BUG
1. Stripe 
  需要另尋適合的付款整合工具。
