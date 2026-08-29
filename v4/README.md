# KARAKARA Cambodia — Siem Reap (V4)

軽量な1ページ静的サイトです。ビルドコマンドは不要で、このフォルダをそのまま公開ディレクトリとして配置できます。

**Live preview URL:** [https://hrkfreelance-droid.github.io/karakara-cambodia-siem-reap/v4/](https://hrkfreelance-droid.github.io/karakara-cambodia-siem-reap/v4/)

V4は、V3のデザイン・要素・機能・データをそのまま引き継ぎ、**スマートフォン表示時の文字サイズと視認性だけ**を引き上げたものです。V3は `/v3/` にそのまま残しています。

## V4で変わったこと（スマホ表示のみ）

変更はすべて `@media (max-width: 29.9375rem)`（= 480px未満、実質スマホのみ）に閉じており、タブレット／PC表示はV3と完全に同一です。

| 対象 | Before (V3) | After (V4) |
| --- | --- | --- |
| SIEM REAP ラベル / SNS | 10px / weight 500 | 12px / weight 600 |
| 店名 KARAKARA | 11px / weight 600 | 13px / weight 700 |
| 営業時間 | 13px / weight 400 | 15px / weight 500 |
| 住所 | 12px / weight 400・muted | 14px / weight 500・ink-soft |
| ボタン文字 | 11px / weight 600 | 13px / weight 700 |
| Foodpanda ↗ | 11px | 13px |
| footer | 10px / weight 400 | 11px / weight 500 |

- **letter-spacing を圧縮**: ラベル 0.34em→0.26em、店名 0.28em→0.22em、ボタン 0.1em→0.06em。文字を大きくしても大文字組みが折り返さず、詰まって読みやすくなるように調整。
- **font-weight を1段上げ**: 背景写真の上でも輪郭がぼやけないよう、主要テキストを 500→600 / 600→700 に。
- **text-shadow を強化**: 文字が大きくなった分、下地のコントラストを 0.55→0.7 に引き上げて輪郭をシャープに。
- **タップ領域**: アクションボタンの最小高さを 50px→54px、左右paddingを 8px→6px に（文字が大きくなっても3列が破綻しないため）。

## レイアウトの凝縮（スマホのみ）

文字を大きくしただけだと縦に間延びするため、余白を詰めて「ロゴ → SIEM REAP → 店舗情報 → ボタン」を一塊のブロックに見せています。

- ロゴ 44vw→48vw（最大 164px→176px）、hero gap 24px→16px
- 左右padding 24px→16px（ボタンの実寸が広がり、文字が余裕を持つ）
- 店舗情報ブロック上マージン 44px→24px、店名上 24px→16px、営業時間上 16px→12px、住所上 4px→2px
- ボタン間 8px→6px、Foodpanda 上 8px→6px（高さ 46px→48px）
- 背景ハロー（文字下の局所グラデーション）をブロックに合わせて縮小・シャープ化
- 詰めた分だけ光学中心がずれるので、グリッド比率を 0.86fr→0.95fr に補正
- 店名上の hairline を中央だけ KARAKARA レッドに（タイポブロック内で唯一の色）
- MENUボタンに内側1pxのハイライトを追加し、主要導線として立たせる

## V3から引き継いでいる内容

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
