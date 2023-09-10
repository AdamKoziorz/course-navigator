function isValidURL(url) {
    const r = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;

    return r.test(url)
}

export default isValidURL;