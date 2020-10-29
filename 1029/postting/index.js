exports.contion = (params = {}) => {
    let { code = 1, msg = null } = params
    return {
        code,
        msg
    }
}