import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

const s3 = new S3Client({
    region: "eu-north-1",
  credentials: {
    accessKeyId: "AKIA34AMDB5YY6SDUNAW",
    secretAccessKey: "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",
  },
});

const bucketName = "myadminbucket927";
const fileName = 'visitorCount.json';

// Helper function to read visitor count from S3
async function readVisitorCount() {
  const params = { Bucket: bucketName, Key: fileName };
  try {
    const data = await s3.send(new GetObjectCommand(params));
    const jsonData = JSON.parse(await streamToString(data.Body));
    return jsonData.count || 0;
  } catch (error) {
    if (error.name === 'NoSuchKey') {
      // If file doesn't exist, start the count from 0
      await writeVisitorCount(0);
      return 0;
    }
    console.error('Error reading visitor count:', error);
    throw new Error('Failed to read visitor count');
  }
}

// Helper function to write visitor count to S3
async function writeVisitorCount(count) {
  const uploadParams = {
    Bucket: bucketName,
    Key: fileName,
    Body: JSON.stringify({ count }),
    ContentType: 'application/json',
  };
  await s3.send(new PutObjectCommand(uploadParams));
}

// Convert stream to string for S3 Body content
async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}

// Exported GET method for updating and retrieving visitor count
export async function GET() {
  try {
    const currentCount = await readVisitorCount();
    const updatedCount = currentCount + 1;
    await writeVisitorCount(updatedCount);

    return NextResponse.json({ count: updatedCount });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json({ error: 'Error updating visitor count' }, { status: 500 });
  }
}
