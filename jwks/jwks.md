# jwks

JWKS가 있다는걸 알았음..
```
const fs = require("fs");

const jose = require("node-jose");

const keyStore = jose.JWK.createKeyStore();

keyStore.generate("RSA", 2048, { alg: "RS256", use: "sig" }).then((result) => {
  fs.writeFileSync(
    "Keys.json",
    JSON.stringify(keyStore.toJSON(true), null, "  ")
  );
});
```