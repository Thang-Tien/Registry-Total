const jwt = require("jsonwebtoken");

console.log(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
);
console.log(
    new Date(Date.now() + 86400 * 1000).toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
    })
);

token = jwt.sign({ id: 1, role: "Admin" }, "memaybeo", { expiresIn: "1h" });
console.log(token);
