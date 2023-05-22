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

MongoDB

1. `.env`-Datei erstellen. Beispiel:

`
DB_CONNECTION = mongodb+srv://ikt-pwa.0elr1ih.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority
DATABASE = htwinsta
PATH_TO_PEM = assets/X509-cert-3298914405631471913.pem
PORT = 3000
`

Wenn Zertifikat, dann `assets`-Ordner erstellen und Zertifikat dort hineinkopieren.

## Starten

`npm i`
`npm run watch`
