function isAbsoluteURL(url) {
    return url.indexOf('://') > 0 || url.indexOf('//') === 0;
}

export default isAbsoluteURL;