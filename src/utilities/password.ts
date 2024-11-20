const hash = async (password: string) => {
    return await Bun.password.hash(password);
}

const isMatch = async (password: string, hash: string) => {
    return await Bun.password.verify(password, hash);
}

export {hash, isMatch}