みみ
ulti.14
オンライン状態を隠す

みみ — 2026/03/04 20:04
import express from "express";
import { Client, GatewayIntentBits } from "discord.js";

const app = express();
const PORT = process.env.PORT || 10000;

テキスト.txt
1 KB
みみ — 2026/03/04 20:27
import express from "express";
import { Client, GatewayIntentBits } from "discord.js";

const app = express();

app.get("/", (_, res) => res.send("OK"));

app.listen(process.env.PORT, () => {
  console.log("🌐 Web server started");
});

console.log("Node:", process.version);
console.log("TOKEN:", process.env.DISCORD_TOKEN ? "OK" : "NG");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("✅ READY発火");
});

client.login(process.env.DISCORD_TOKEN)
  .then(() => console.log("🔑 login成功"))
  .catch(err => console.error("🔑 login失敗:", err));
みみ — 2026/03/04 20:36
Node.js v20.20.0
==> Exited with status 1
==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys
==> Running 'node index.js'
file:///opt/render/project/src/index.js:1
みみ — 20:27

SyntaxError: Invalid or unexpected token
    at compileSourceTextModule (node:internal/modules/esm/utils:346:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:146:18)
    at #translate (node:internal/modules/esm/loader:497:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:544:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:148:19)
Node.js v20.20.0
Render
Troubleshooting Your Deploy
Diagnose and resolve common issues when deploying to Render.
==> Deploying...
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
==> Running 'node index.js'
Node: v20.20.0
TOKEN: OK
🌐 Web server started
==> Your service is live 🎉
==> 
==> ///////////////////////////////////////////////////////////
==> 
==> Available at your primary URL https://lala-bot-qaol.onrender.com/
==> 
==> ///////////////////////////////////////////////////////////
みみ — 2026/03/04 20:53
==> Running 'node index.js'
Node: v20.20.0
TOKEN: OK
🌐 Web server started
✅ Bot Online: Lala#2733
(node:67) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use node --trace-deprecation ... to show where the warning was created)
==> Your service is live 🎉
==> 
==> ///////////////////////////////////////////////////////////
みみ — 2026/03/04 21:02
import express from "express";
import { Client, GatewayIntentBits } from "discord.js";
import axios from "axios";
import * as cheerio from "cheerio";
import cron from "node-cron";
import fs from "fs";

テキスト.txt
5 KB
==> Running 'node index.js'
Node: v20.20.0
TOKEN: OK
🌐 Web server started
🔑 login成功
✅ Bot Online: Lala#2733
==> Your service is live 🎉
==> 
==> ///////////////////////////////////////////////////////////
==> 
==> Available at your primary URL https://lala-bot-k8cz.onrender.com/
==> 
==> ///////////////////////////////////////////////////////////
🔍 更新チェック開始
🔍 更新チェック
🔍 更新チェック終了
み — 2026/03/05 14:38
画像
画像
みみ — 1:09
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>セトリまとめ</title>

index.txt
6 KB
const liveData = [
  {
    id: "2026-03-20-tokyo",
    date: "2026.03.20",
    title: "○○ TOUR 2026 東京公演",
    venue: "Zepp Shinjuku",

data.txt
2 KB
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ライブ詳細 | セトリまとめ</title>

live.txt
5 KB
/* ===== Base ===== */
* {
  box-sizing: border-box;
}

body {

style.txt
5 KB
﻿
み
ulti.14.sub
 
const liveData = [
  {
    id: "2026-03-20-tokyo",
    date: "2026.03.20",
    title: "○○ TOUR 2026 東京公演",
    venue: "Zepp Shinjuku",
    city: "東京",
    artist: "○○",
    tour: "○○ TOUR 2026",
    note: "初日公演。演出変更あり。",
    setlistMain: [
      "1曲目",
      "2曲目",
      "3曲目",
      "4曲目",
      "5曲目",
      "6曲目",
      "7曲目",
      "8曲目"
    ],
    setlistEncore: [
      "EN1",
      "EN2"
    ]
  },
  {
    id: "2026-03-21-osaka",
    date: "2026.03.21",
    title: "○○ TOUR 2026 大阪公演",
    venue: "なんばHatch",
    city: "大阪",
    artist: "○○",
    tour: "○○ TOUR 2026",
    note: "MC長め。セトリ1曲変更。",
    setlistMain: [
      "1曲目",
      "2曲目",
      "3曲目",
      "4曲目",
      "5曲目",
      "6曲目",
      "7曲目",
      "8曲目"
    ],
    setlistEncore: [
      "EN1",
      "EN2"
    ]
  },
  {
    id: "2026-03-22-nagoya",
    date: "2026.03.22",
    title: "○○ TOUR 2026 名古屋公演",
    venue: "DIAMOND HALL",
    city: "名古屋",
    artist: "○○",
    tour: "○○ TOUR 2026",
    note: "ダブルアンコールなし。",
    setlistMain: [
      "1曲目",
      "2曲目",
      "3曲目",
      "4曲目",
      "5曲目",
      "6曲目",
      "7曲目",
      "8曲目"
    ],
    setlistEncore: [
      "EN1",
      "EN2"
    ]
  }
];
data.txt
2 KB