
[English](docs/en-README.md)

# 機能
- 会社情報登録機能
- メンバー登録機能
- サポーター登録機能
- イベント登録機能
- ニュース投稿機能


# イントロ
このリポジトリを使用することで高速にイベントサイトを作成することが可能です。
WordpressやMicorCMSなどデータベースを使用せずファイルシステムでこのテンプレートは作成することによってサイト立ち上げ時間を大幅削減を実現しました。

# 目次
- [機能](#機能)
- [イントロ](#イントロ)
- [目次](#目次)
- [いつ使うべきか](#いつ使うべきか)
- [使用方法](#使用方法)
  - [プロジェクトのセットアップ](#プロジェクトのセットアップ)
    - [会社情報、メンバー情報、サポーター情報の登録](#会社情報メンバー情報サポーター情報の登録)
    - [イベントやニュースの記事の投稿](#イベントやニュースの記事の投稿)
      - [イベントの投稿方法](#イベントの投稿方法)
      - [ニュースの投稿方法](#ニュースの投稿方法)
    - [デプロイ方法](#デプロイ方法)
- [使用例](#使用例)
- [主に使われている技術](#主に使われている技術)

# いつ使うべきか
もしあなたが下記に当てはまっているならこのテンプレは効果を発揮します
- 高速にイベントサイトを作りたい
- Markdown方式で記事を書きたい
- SvelteKitで記事を書くWEBアプリを作りたい（高度なカスタマイズが必要）
- SSGによるイベントサイトを運営したい
- 記述する記事の本数少ない（年に50本未満）
- Node.jsがコンピューターにセットアップされている

逆に下記に当てはまるならこのテンプレを使うことをおすすめしません
- 年に50本以上の記事を投稿したい
- Html Cssについてあまり知らない
- WordpressみたいなCMSを使って豊富なプラグインを使いたい
- リッチエディターにて記事を書きたい
- Node.jsがコンピューターにセットアップされていない

# 使用方法

## プロジェクトのセットアップ
まずこのリポジトリをご自身のリポジトリにコピーをしてください。

そしてそのリポジトリをご自身のパソコンにクローンしてテキストエディターで開いてください。

<span style="color:red;">もしあなたがVSCodeをお使いでしたら</span>
レポジトリ内の[.vscode/template-editor.code-workspace](.vscode/template-editor.code-workspace)をワークスペースとして開くと楽に編集できます！！

またローカル環境でブログシステムを確認したい場合はルートディレクトリで下記のコマンドを実行して[https://localhost:3000](https://localhost:3000)を開いてください。
（<span style="color:red;">Node.jsがセットアップされていない場合実行できません</span>）
```bash
yarn dev
```

### 会社情報、メンバー情報、サポーター情報の登録
上記のの設定は[src/lib/config.json](src/lib/config.json)で設定することが可能です。
|JSONパス|説明|
----|----
|company|会社の情報をまとめたオブジェクト型のJSON|
|company.name|会社名|
|company.representative|会社の代表|
|company.establish_date|創業した日|
|company.place|会社の場所|
|company.contact_email|お問い合わせ用のメールアドレス|
|company.contact_form_URL|お問い合わせ用のフォームのURL|
|project|プロジェクトのJSON情報|
|project.name|プロジェクト名|
|project.members|プロジェクトのメンバーのリスト型情報|
|project.members[number].name|メンバー名|
|project.members[number].image_URL|メンバーの写真URL|
|project.members[number].contact.instagram|メンバーのインスタのURL|
|project.members[number].contact.twitter|メンバーのTwitterのURL|
|project.supporters|プロジェクトのサポーターのリスト型情報|
|project.supporters[number].name|サポーター名|
|project.supporters[number].image_URL|サポーターの写真URL|
|project.supporters[number].contact.instagram|サポーターのインスタグラムのURL|
|project.supporters[number].contact.twitter|サポーターのツイッターのURL|

### イベントやニュースの記事の投稿
[markdown-template](markdown-template)

#### イベントの投稿方法
[src/routes/ivent/](src/routes/ivent/)の内に`好きな文字（意味のある文字法が好ましい）.md`のようにmdファイルを作成し
[markdown-template/ivent.md](markdown-template/ivent.md)の内容をコピペして編集してください。

#### ニュースの投稿方法
[src/routes/news/](src/routes/news/)の内に`好きな文字（意味のある文字法が好ましい）.md`のようにmdファイルを作成し
[markdown-template/news.md](markdown-template/news.md)の内容をコピペして編集してください。

<span style="color:red;">src/routes/ivent/やsrc/routes/news/はsrc/routes/ivent/2021/hi.mdやsrc/routes/news/custom/test.mdなどフォルダないよのmdファイルにも対応しています。</span>

### デプロイ方法
デフォルトで[Netlify](https://www.netlify.com/)へのデプロイをサポートしています。

他にも商業ではない場合に[Vercel](https://vercel.com)もおすすめです。
その場合には[svelte.config.js](svelte.config.js)の設定を変えてください。


# 使用例
# 主に使われている技術
- SvelteKit
- Tailwindcss

詳しくは[package.json](package.json)を御覧ください。