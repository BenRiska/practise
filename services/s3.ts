import aws from "aws-sdk";

aws.config.setPromisesDependency(null);

const s3 = new aws.S3({
  accessKeyId: process.env.SPACES_KEY,
  secretAccessKey: process.env.SPACES_SECRET,
  endpoint: process.env.SPACES_ENDPOINT
});

export default s3;