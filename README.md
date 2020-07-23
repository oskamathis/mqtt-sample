# mqtt-sample
MQTTプロトコルを用いた双方向通信の動作イメージ確認用スクリプト群
- broker.js
- device.js
- server.js

# イベント発火までのフロー
1. サーバー: **イベント登録用URL** をSubscribeしておく
2. デバイス: 下記内容を **イベント登録URL** にPublishする
    - イベント内容
    - 発火日時
    - 自分のデバイスに割り振られたUUID
3. デバイス: UUIDを元に **イベント発火用URL** をSubscribeする
4. サーバー: 発火日時になったら受け取ったUUIDを元に **イベント発火用URL** にPublishする
