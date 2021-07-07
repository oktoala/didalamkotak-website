document.addEventListener("DOMContentLoaded", () => {
    let searchResults = [];
    const searchWrapper = document.querySelector("div[role=search]");
    const searchResultElement = searchWrapper.querySelector(".search-results");
    const searchInput = searchWrapper.querySelector("input");
    const search_button = document.querySelector(".icon-button.toggle-search");
    // const burger = document.querySelector('.burger input');
	const nav = document.querySelector('.navigation');
    const nav_items = document.querySelectorAll(".nav-item");
    const search_text = document.querySelector(".nav-item.show-search");

    const index_nav_items = (function test(){
        for (let i = 0; i < nav_items.length; i-=-1){
            if (nav_items[i].classList.contains("current")){
                return i;
            }
        }
    })();

    const toggleAllSearchItem = () => {
        toggleSearch(searchWrapper, searchInput);
        search_button.classList.toggle("active");
        search_text.classList.toggle("current");
        if (index_nav_items !== undefined){
            nav_items[index_nav_items].classList.toggle("current");
        }
    }

    /* Make always unchecked if reload */
    // burger.checked = false;

    /* Toggle For Search Button */
    const toggleSearch = (searchWrapper, searchInput) => {
        if (searchWrapper.classList.contains("active")) {
            searchWrapper.classList.add("visible");
            setTimeout(() => {
                searchWrapper.classList.remove("visible");
            }, 300);
            searchWrapper.classList.remove("active");
            
        } else {
            searchWrapper.classList.add("active");
            searchInput.focus();
        }
    }

    /* Toggle For Search Button and change the color of focus icon*/
    search_button.addEventListener('click', () => {
        toggleAllSearchItem();
        if (searchWrapper.classList.contains("active")){
            searchResultElement.innerHTML = "";
            searchInput.value = null;
        }
    });

    /* Make input for search can't press enter */
    document.querySelector("form.search").addEventListener("keypress", (event)=>{
        if (event.key == "Enter"){
            event.preventDefault();
        }
    });


    /* Close Search Field when button pressed */
	// burger.addEventListener('click', function(){
	// 	nav.classList.toggle('show');
    //     if (searchWrapper.classList.contains("active")){
    //         toggleAllSearchItem();
    //     }
	// });

    /* Shortcut for Escape and open the search field */
    window.addEventListener("keydown", e => {
        // dismiss search on  ESC
        if (e.key == "Escape" && searchWrapper.classList.contains("active")) {
            e.preventDefault();
            toggleAllSearchItem();
        }

        // open search on CTRL+SHIFT+F
        if (e.ctrlKey && e.shiftKey && e.key == "F" && !searchWrapper.classList.contains("active")) {
            e.preventDefault();
            toggleAllSearchItem();
            document.querySelector(".navigation").classList.add("show");
            // burger.checked = true;
        }
    });

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
                    return "<mark>" + m + "</mark>";
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
                        return "<li>" +
                            "<h4><a href='" + item.url + "'>" + mark(item.title, searchString) + "</a></h4>" +
                            "<p class='summary'>" +
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