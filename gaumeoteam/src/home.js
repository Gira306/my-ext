load('config.js');
function execute() {
    return Response.success([
        {title: "Novel", input: BASE_URL + "/manga-genre/tieu-thuyet-bl", script: "tab.js"},
        {title: "Đang tiến hành", input: BASE_URL + "/manga-genre/dang-tien-hanh", script: "tab.js"},
        {title: "Hoàn thành", input: BASE_URL + "/manga-genre/hoan-thanh", script: "tab.js"}
    ]);
}