load('config.js');
function execute(url, page) {
    if (!page) page = '1';  // Trang đầu tiên là 1

    let response = fetch(url + '/page/' + page);
    if (response.ok) {
        let doc = response.html();
        let novelList = [];

        // Tìm trang tiếp theo (nếu có)
        let next = doc.select('ul.page-numbers li .current').first().parent().next().select('a').text();
        if (!next) next = '';

        // Duyệt từng bài viết (truyện)
        doc.select('article').forEach(e => {
            const name = e.select('h2.entry-title a').text();
            const link = e.select('h2.entry-title a').attr('href');
            const cover = e.select('img').attr('src');
            const description = e.select('.entry-summary').text();

            novelList.push({
                name: name,
                link: link,
                cover: cover,
                description: description,
                host: BASE_URL
            });
        });

        return Response.success(novelList, next);
    }

    return null;
}
