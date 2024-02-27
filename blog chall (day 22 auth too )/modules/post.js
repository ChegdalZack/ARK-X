const fs = require("fs")

function getAllPosts() {
    let data = fs.readFileSync("C:/Users/hp/Desktop/ARK-X/JS/Arkx/ARKX CHallenges/blog chall (day 22 auth too )/modules/data.json", "utf-8");
    return JSON.parse(data)
}

function createPost(data) {
    fs.writeFileSync("C:/Users/hp/Desktop/ARK-X/JS/Arkx/ARKX CHallenges/blog chall (day 22 auth too )/modules/data.json",
    JSON.stringify(data)
    );
}

module.exports = {getAllPosts,createPost}