// "Link" is a factory function that represents a link (name, url)
const Link = (name, url) => ({name, url})

// Courses is a module that provides operations on an array of "Link"
const links = (() => {
    let linksArray = [];

    const addLink = (name, url) => {
        const newLink = Link(name, url);
        linksArray.push(newLink);
    }

    const removeLink = (name) => {
        linksArray = linksArray.filter((link) => (link.name !== name));
    }

    const isUnique = (name) => linksArray.find((link => (link.name === name))) === undefined;

    return {addLink, removeLink, isUnique};
})();

export default links;
