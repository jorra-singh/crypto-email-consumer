import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { useRouter } from "next/router";

export default function Email() {
  const router = useRouter();
  const [routerReady, setRouterReady] = useState(false);

  //Wait until the router is ready
  useEffect(() => {
    if(router.isReady) {
        setRouterReady(true);
    }
  }, [router.isReady]);

  const renderEncryptedData = () => {
    if (routerReady) {
        //Parse through the query string to get the encrypted email parameter
        const queryString = router.query;
        const cipherTextEmail = queryString.email;

        //Decrypt the ciphertext
        var decrypted = CryptoJS.AES.decrypt(cipherTextEmail.toString(), process.env.key);

        //render the deciphered email to the user
        return (
        <div>Hello, {decrypted.toString(CryptoJS.enc.Utf8)}</div>
        )
    } else {
        //If the router is NOT ready, we show a loading screen.
        return (<div>Loading</div>)
    }
  }

  return renderEncryptedData();
}
