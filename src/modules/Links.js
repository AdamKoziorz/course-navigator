function Link(name, url) {
    this.name = name;
    this.url = url;
}

function Links() {
    let links = [];

    this.addLink = (name, url) => {
        const newLink = new Link(name, url);
        links.push(newLink);
    }

    this.removeLink = (name) => {
        links = links.filter((link) => (link.name !== name));
    }

    this.isUniqueLink = (name) => links.find((link => (link.name === name))) === undefined;
}

export default Links;
