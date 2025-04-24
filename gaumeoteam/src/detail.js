load('config.js');

function execute(url) {
    // Đảm bảo URL chính xác với BASE_URL
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        // Xoá các phần không cần thiết như trang chia sẻ FB
        doc.select(".fb-page").remove();

        // Lấy tên tác giả từ các liên kết tới tác giả
        let author = doc.select("a[href*='/tac-gia/']").first().text();

        // Trả về thông tin truyện
        return Response.success({
            name: doc.select("h1.entry-title").text(),  // Tên truyện
            cover: doc.select(".entry-content img").first().attr("src"),  // Ảnh bìa
            host: BASE_URL,
            author: author,  // Tên tác giả
            description: doc.select(".entry-content").text(),  // Mô tả chung về truyện
            detail: doc.select(".entry-content").html(),  // Toàn bộ nội dung chi tiết
            ongoing: doc.select(".entry-content").text().indexOf("Đang tiến hành") >= 0  // Kiểm tra trạng thái ongoing
        });
    }
    return null;
}
