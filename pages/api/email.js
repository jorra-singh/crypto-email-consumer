import CryptoJS from "crypto-js";
export default function userHandler(req, res) {
  const {
    query: { cipherTextEmail },
  } = req;

//   let decrypted = CryptoJS.AES.decrypt(cipherTextEmail.toString(), process.env.key);
//   res.status(200).json({ email: decrypted.toString(CryptoJS.enc.Utf8).replace('-','/') });
res.status(200).json({email : cipherTextEmail})
}
