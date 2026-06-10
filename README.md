<div align="center">
    <h1>📛 Tofu</h1>
    <p>S3 ストレージ読取専用ゲートウェイ</p>
</div>

## ❓ What's This ?
Tofu は、プライベートな S3 互換オブジェクトストレージを、あたかもパブリックアクセス可能であるかのように扱うための軽量ゲートウェイシステムです。

私は、とあるオブジェクトストレージサービスを契約しました。

しかし、そのサービスではポリシー上パブリックアクセスが原則禁止されており、Web アプリケーションから利用するには不便な場面がありました。

その問題を解決するために、`Tofu` を開発しました。

## 🔨 Environment Variables

Tofu を起動するには、以下の環境変数を設定してください。

| Name | Description | Example |
|--------|--------|--------|
| `S3_REGION` | オブジェクトストレージのリージョン | `ap-northeast-1` |
| `S3_ENDPOINT_URL` | S3 互換 API のエンドポイント URL | `https://s3.wasabisys.com` |
| `S3_ACCESS_KEY_ID` | アクセスキー ID | `AKIA...` |
| `S3_SECRET_ACCESS_KEY` | シークレットアクセスキー | `xxxxxxxx` |

### 例

```env
S3_REGION=ap-northeast-1
S3_ENDPOINT_URL=https://s3.wasabisys.com
S3_ACCESS_KEY_ID=xxxxxxxx
S3_SECRET_ACCESS_KEY=xxxxxxxx
```

## 📜 License
Tofu is [MIT licensed](https://github.com/someiro/Tofu/blob/main/LICENSE).
