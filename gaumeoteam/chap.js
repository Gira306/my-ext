load('config.js');

function execute(url) {
    // Thay thế URL cho phù hợp với BASE_URL
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var imgs = [];

        // Lấy tất cả các hình ảnh trong bài viết, ngoại trừ donate.png và creblogtruyen.jpg
        doc.select("#content img").forEach(e => {
            let imgUrl = e.attr("src");

            // Loại bỏ các ảnh không cần thiết
            if (imgUrl.indexOf("donate.png") === -1 && imgUrl.indexOf("creblogtruyen.jpg") === -1) {
                imgs.push(imgUrl);
            }
        });

        return Response.success(imgs);
    }
    return null;
}
