import dotevn from 'dotenv';
dotevn.config();

function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue;
    if (value == null) {
        throw new Error(`Key ${key} is not defined`);
    }
}

export const config = {
    jwt: {
        secret: required('JWT_SECRET'),
        expiresInSec: required('JWT_EXPIRES_SEC', 86400)
    },
    bcypt: {
        saltRounds: required('BCRYPT_SALT_ROUNDS', 12)
    }
}