const express = require("express")
const controlle = require("../controller/controllers")

const router = express.Router()
 
router.get("/", controlle.getPost)

router.post("/post" , controlle.createpost)

router.get("/getData",controlle.getAllData)

module.exports = router
