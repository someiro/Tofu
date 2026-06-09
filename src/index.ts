import express from "express";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";

const app = express();
const port = 3000;

const s3 = new S3Client({
  region: process.env.S3_REGION!,
  endpoint: process.env.S3_ENDPOINT_URL!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  }
});

app.get("/:bucket/*path", async (req, res) => {
  try {
    const bucket = req.params.bucket;
    const path = req.params.path;
    
    const key = path.join("/");
    
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });
  
    const url = await getSignedUrl(
      s3,
      command,
      {
        expiresIn: 60
      }
    );

    //res.json({"bucket": bucket, "key": key, "url": url});

    res.redirect(url);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log("Starting Tofu Server!");
});
