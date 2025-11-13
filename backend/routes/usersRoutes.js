const express = require("express")
const router = express.Router()
const {login, register, data} = require ("../controllers/usersControllers")
const {protect} = require ("../middleware/authMiddleware")

//endpoints publicos
router.post("/login",login)
router.post("/register", register)

//endpoints privados sin protección
router.get("/data", protect, data)

module.exports = router