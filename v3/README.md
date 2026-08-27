# KARAKARA Cambodia — Siem Reap (V3)

軽量な1ページ静的サイトです。ビルドコマンドは不要で、このフォルダをそのまま公開ディレクトリとして配置できます。

**Live preview URL:** Not published yet

V3は、V2の要素・機能・データを一切変えず、Typography / Layout rhythm / Visual hierarchy / Motion / Micro interaction の品質だけを引き上げたビジュアルアップグレードです。背景イラスト・ロゴ・店舗情報・各リンク・menu.pdf はV2と同一のものを使用しています。

## V3で変わったこと

- **Typography**: 本文フォントを Geist（Google Fonts）1書体に統一。`SIEM REAP` などの短いラベルは小さく tracking を強めに、ボタン文字もシャープに。
- **背景**: 単一の黒overlayをやめ、上部／中央／下部で強さの異なる弱いグラデーションを重ねる方式に変更。中央はほぼ透明で、背景イラストの存在感を残す。
- **情報の見せ方**: 大きな透過カードは使わず、余白・タイポグラフィ・細いhairline・局所的なグラデーションのみで整理。
- **Motion**: 読み込み時に背景が 1.09 → 1.045 へゆっくり収束（1.4秒）。ロゴ → SIEM REAP → 店舗情報 → ボタン → footer の順に約110ms間隔で立ち上がり、全体で約1.1秒で完了。
- **Interaction**: 4つのボタンすべてに hover / :active（tap時 scale 0.975〜0.98）/ :focus-visible を実装。
- **配慮**: `prefers-reduced-motion: reduce` で entrance / 背景scale / driftを全停止（機能は維持）。

## パスについて

サブパス配信（例: `/v3/`）に対応するため、HTML / CSS / JS 内のパスはすべて**相対パス**です。先頭スラッシュ付きの絶対パスは使用していません。`script.js` は `document.baseURI` 起点で解決します。

## 反映手順

1. `assets/logo.svg`、`assets/background.png`、`assets/menu.pdf` は現在の素材を配置済み
2. `site-config.js` に確認済みの電話番号、営業時間、住所、必要ならSNS URLを入力
3. フォルダごとデプロイ

空欄の情報は本番UIから非表示になります。Maps URLは依頼指定のSiem Reap URLを設定済みです。FoodpandaはSiem Reap店の指定URLを通常のHTTPSリンクで設定しています。MENUは中間画面を挟まず、PDFを直接開きます。

## 確認用スクリーンショット

`screenshots/` に 375 / 390 / 414 / Desktop と reduced-motion の表示結果を保存しています。

## Links

- [Google Maps](https://maps.app.goo.gl/hwzip64tuUycgDV17)
- [Foodpanda](https://www.foodpanda.com.kh/en/restaurant/xy2f/karakara-spicy-ramen-restaurant-siem-reap)
