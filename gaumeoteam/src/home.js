load('config.js');

function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: BASE_URL + "", script: "cat.js"},
        {title: "Novel", input: BASE_URL + "/manga-genre/tieu-thuyet-bl/", script: "gen.js"},
        {title: "Đang tiến hành", input: BASE_URL + "/manga-genre/dang-tien-hanh/", script: "gen.js"},
        {title: "Đã hoàn thành", input: BASE_URL + "/manga-genre/hoan-thanh/", script: "gen.js"}
    ]);	
}
