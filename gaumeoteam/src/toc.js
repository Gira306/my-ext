load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let list = [];

        // Trên trang gaumeoteam.com, các chương nằm trong .entry-content a
        let chapters = doc.select('.entry-content a');

        for (let i = 0; i < chapters.size(); i++) {
            let chapter = chapters.get(i);
            let name = chapter.text();
            let link = chapter.attr('href');

            list.push({
                name: name,
                url: link,
                host: BASE_URL
            });
        }

        return Response.success(list);
    }
    return null;
}
