import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { useRouter } from "next/router";

export default function Email() {
  const router = useRouter();
  const [decryptedEmail, setDecryptedEmail] = useState("");
  const fetchPlaintext = async () => {
    
    if(router.isReady) {
      const email = router.query.email;
      const resp = await fetch(`/api/email/${email}`);
      const data = await resp.json();
      setDecryptedEmail(data.email);
    }
  };

  useEffect(() => {
    fetchPlaintext();
  }, [router.isReady]);

  return decryptedEmail === "" ? (
    <div>Loading...</div>
  ) : (
    <div>Welcome, {decryptedEmail}!</div>
  );
}
