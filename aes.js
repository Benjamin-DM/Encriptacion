var crypto = require('crypto');
var algorithm = 'aes-256-cbc';
var password = crypto.randomBytes(32);
var iv = crypto.randomBytes(16);

function encrypt(buffer) {
    var cipher = crypto.createCipheriv(algorithm, Buffer.from(password), iv)
    var crypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
    return crypted;
}

function decrypt(buffer) {
    var decipher = crypto.createDecipheriv(algorithm, Buffer.from(password), iv)
    var dec = Buffer.concat([decipher.update(buffer), decipher.final()]);
    return dec;
}

// encrypt "hello world"
var encrypted = encrypt(Buffer.from("Hola me llamo benjamin", "utf8"))
// decrypt "hello world"
console.log(decrypt(encrypted).toString('utf8'));
console.log(encrypted.toString('utf8'));