import CryptoJS from "crypto-js";
export default function handle(req, res) {
  const {
    query: { email },
  } = req;

  let adjustedString = email.replaceAll("_", "/").replaceAll("-", "+");
  let decrypted = CryptoJS.AES.decrypt(adjustedString, process.env.key);
  let plaintextEmail = decrypted.toString(CryptoJS.enc.Utf8);
  res.status(200).json({ email: plaintextEmail });
}
