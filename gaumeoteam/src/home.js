function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: "", script: "cat.js"},
        {title: "Novel", input: "/genre/novel", script: "gen.js"},
        {title: "Đang tiến hành", input: "/genre/ongoing", script: "gen.js"},
        {title: "Đã hoàn thành", input: "/genre/complete", script: "gen.js"}
    ]);	
}