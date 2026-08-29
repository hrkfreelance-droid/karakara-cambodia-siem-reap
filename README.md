# KARAKARA Cambodia — Siem Reap

軽量な1ページ静的サイトです。Netlifyではこのフォルダを公開ディレクトリとしてそのまま配置できます。ビルドコマンドは不要です。

現在のV2は、背景写真を主役にした中央寄せの店舗案内です。大きな透過カードは使わず、情報ブロック付近の局所的な暗いグラデーションで可読性を確保しています。MENUは中間画面を挟まず、PDFを直接開きます。

## 反映手順

1. `assets/logo.svg`、`assets/background.png`、`assets/menu.pdf` は現在の素材を配置済み
2. `site-config.js` に確認済みの電話番号、営業時間、住所、必要ならSNS URLを入力
3. Netlifyへフォルダごとデプロイ

空欄の情報は本番UIから非表示になります。Maps URLは依頼指定のSiem Reap URLを設定済みです。FoodpandaはSiem Reap店の指定URLを通常のHTTPSリンクで設定しています。

## Preview

- [Open site preview (V2 / root)](https://hrkfreelance-droid.github.io/karakara-cambodia-siem-reap/)
- [V3 preview](https://hrkfreelance-droid.github.io/karakara-cambodia-siem-reap/v3/)
- [V4 preview](https://hrkfreelance-droid.github.io/karakara-cambodia-siem-reap/v4/) — スマホ表示の文字サイズ最適化＋レイアウトを凝縮（最新）

## Netlify（本番公開）

`netlify.toml` で公開ディレクトリを **`v4`** に指定しています。Netlify 側の管理画面で Publish directory を設定する必要はありません。

- 本番 URL のルート `/` に **V4** が出ます（`/v4/` というパスは付きません）
- 新しいバージョンを出すときは `netlify.toml` の `publish` を 1 行書き換えるだけ。**公開 URL は変わりません**
- ビルドコマンドは不要（静的サイト）

### サイト名の候補（優先順）

`*.netlify.app` のサブドメインは Netlify 全体で一意なので、上から順に空きを確認してください。**サイト名にバージョン番号は入れないこと**（V5 で URL が変わってしまうため）。

1. `karakara` — 最短。取れれば理想。ただし将来の多店舗展開時にブランド共通トップとして温存する判断もあり
2. `karakara-siemreap` — 店舗が明確。多店舗展開に耐える（本命）
3. `karakara-kh` — 国別（KH = カンボジア）。短い
4. `karakara-ramen` — 業態が伝わる
5. `karakara-spicy-ramen` — ロゴの正式表記どおりだが長い

サイト名は後から無料で変更できますが、**変更すると旧 URL は即座に無効**になります。名刺・Google ビジネスプロフィール・店頭 POP に載せるのは名前を確定させてから。

## Links

- [GitHub Repository](https://github.com/hrkfreelance-droid/karakara-cambodia-siem-reap)
- [Google Maps](https://maps.app.goo.gl/hwzip64tuUycgDV17)
- [Foodpanda](https://www.foodpanda.com.kh/en/restaurant/xy2f/karakara-spicy-ramen-restaurant-siem-reap)
