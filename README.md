# Backend für HTW_Insta

REST-API für Posts.

`POST = {
    title: String,
    location: String,
    image_id: String
}`

- `GET /posts`
- `GET /posts/:id`
- `POST /posts`
- `DELETE /posts/:id`

## Verbindung zur Datenbank

MongoDB (Cloud Atlas)

1. `.env`-Datei erstellen. Beispiel:

    DB_CONNECTION = mongodb+srv://ikt-pwa.0elr1ih.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority
    DATABASE = htwinsta
    PATH_TO_PEM = assets/X509-cert-3298914405631471913.pem
    PORT = 3000

2. Wenn Zertifikat, dann Zertifikat in den `assets`-Ordner kopieren.

3. Wenn kein Zertifikat, können überall die `credentials` gelöscht werden und die jeweiligen `option`-Blöcke in den `mongoose-Connection. Z.B. wird aus

    const credentials = process.env.PATH_TO_PEM

    const connection = mongoose.createConnection(process.env.DB_CONNECTION, {
        sslKey: credentials,
        sslCert: credentials,
        dbName: "htwinsta" });

einfach

    const connection = mongoose.createConnection(process.env.DB_CONNECTION);

## Starten

`npm i`
`npm run watch`
