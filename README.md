## Bun×Next.js開発メモ
### 開発環境
| 利用しているもの | バージョン |
|----|----|
| Bun | 1.0.3 |
| Next.js | 13.5.2 |

### Bunのインストール方法
`curl -fsSL https://bun.sh/install | bash`
を実行する。その後
`source /home/<username>/.bashrc`
を実行する

### Next.js プロジェクトの開始方法
`bun create next-app`
を実行する
実行後に出てくる選択肢に回答する。

その後、作業ディレクトリを移動する
`cd <作成されたディレクトリ>`

サーバを起動する
- Bunで開発サーバーを起動
`bun --bun run dev`
- Node.jsで開発サーバーを実行
`bun run dev`

### Supabase CLIの導入
追記：Bunを使おうとしてもダメだった
`npm install supabase --save-dev`
- プロジェクト初期化
`npx supabase init`
- Supabase Stackの起動
`npx supabase start`
- ログイン
`npx supabase login`
- プロジェクトの接続
`npx supabase link --project-ref <projectId> -p "<dbpassword>"`

### PrismaとSupabase DataBaseでログインシステムを作ってみる
`bun add prisma`
`bunx prisma init --datasource-provider postgresql`
ここでschemaを決めとく
`bunx prisma migrate dev --name init`
`bunx prisma db push`
`bunx generate`
ここでたねまきファイルを作っておく
`bun run ./prisma/seed.ts`

データベース型定義ファイルを落としてくる
`npx supabase gen types typescript --project-id "$PROJECT_REF" --schema > ./src/types/supabase.ts` 

### middlewareの作成
`bun add @supabase/auth-helpers-nextjs @supabase/supabase-js`