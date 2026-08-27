# KARAKARA Cambodia — Siem Reap

軽量な1ページ静的サイトです。Netlifyではこのフォルダを公開ディレクトリとしてそのまま配置できます。ビルドコマンドは不要です。

現在のV2は、背景写真を主役にした中央寄せの店舗案内です。大きな透過カードは使わず、情報ブロック付近の局所的な暗いグラデーションで可読性を確保しています。MENUは中間画面を挟まず、PDFを直接開きます。

## 反映手順

1. `assets/logo.svg`、`assets/background.png`、`assets/menu.pdf` は現在の素材を配置済み
2. `site-config.js` に確認済みの電話番号、営業時間、住所、必要ならSNS URLを入力
3. Netlifyへフォルダごとデプロイ

空欄の情報は本番UIから非表示になります。Maps URLは依頼指定のSiem Reap URLを設定済みです。FoodpandaはSiem Reap店の指定URLを通常のHTTPSリンクで設定しています。

## Links

- [GitHub Repository](https://github.com/hrkfreelance-droid/karakara-cambodia-siem-reap)
- [Google Maps](https://maps.app.goo.gl/hwzip64tuUycgDV17)
- [Foodpanda](https://www.foodpanda.com.kh/en/restaurant/xy2f/karakara-spicy-ramen-restaurant-siem-reap)
