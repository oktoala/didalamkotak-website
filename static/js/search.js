document.addEventListener("DOMContentLoaded", () => {
    let searchResults = [];
    const searchInput = document.querySelector('#search-input');
    const searchResultElement = document.querySelector('#search-results');

    const mark = (content, search) => {
        if (search) {
            let pattern = /^[a-zA-Z0-9]*:/i;
            search.split(" ").forEach(s => {
                if (pattern.test(s)) {
                    s = s.replace(pattern, "");
                }

                if (s && s.startsWith("+")) {
                    s = s.substring(1);
                }

                if (s && s.indexOf("~") > 0
                    && s.length > s.indexOf("~")
                    && parseInt(s.substring(s.indexOf("~") + 1)) == s.substring(s.indexOf("~") + 1)
                ) {
                    s = s.substring(0, s.indexOf("~"));
                }

                if (!s || s.startsWith("-")) {
                    return;
                }
                let re = new RegExp(s, "i");
                content = content.replace(re, m => {
                    return "<mark class='mark'>" + m + "</mark>";
                });
            });
        }

        return content;
    }

    fetch("/search")
        .then(response => response.json())
        .then(result => {
            const searchContent = result;
            const searchIndex = lunr(builder => {
                builder.ref("id")
                builder.field("content");
                builder.field("title");
                builder.field("url");
                builder.field("type");

                Array.from(result).forEach(doc => {
                    builder.add(doc)
                }, builder)
            })
            searchInput.removeAttribute("disabled");
            searchInput.addEventListener("keyup", e => {
                let searchString = e.target.value;
                if (searchString && searchString.length > 2) {
                    try {
                        searchResults = searchIndex.search(searchString);
                    } catch (err) {
                        if (err instanceof lunr.QueryParseError) {
                            return;
                        }
                    }
                } else {
                    searchResults = [];
                }

                if (searchResults.length > 0) {
                    searchResultElement.innerHTML = searchResults.map(match => {
                        let item = searchContent.find(el => {
                            return el.id == parseInt(match.ref);
                        });
                        return "<li class='results mb-5'>" +
                            "<h4 ><a class='result-h' href='" + item.url + "'>" + mark(item.title, searchString) + "</a></h4>" +
                            "<p class='summary text-dk-text-alpha-500 text-xs leading-6 mt-4'>" +
                            mark((item.content.length > 200 ? (item.content.substring(0, 200) + "...") : item.content), searchString) +
                            "</p>" +
                            "</li>";
                    }).join("");
                } else {
                    searchResultElement.innerHTML = "<li><p class='no-result'>No results found</p></li>";
                }
            });
        })
        .catch(err => {
            console.error(err);
        });
});