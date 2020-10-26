const Note = require("../models/notes")
const auth = require("../auth")
const {Router} = require("express")
const router = Router();

//INDEX
router.get("/", auth, async (req, res)=> {
    try {
        const {username} = req.payload
        res.status(200).json(await Note.find({username}))
    }
    catch (error){
        res.status(400).json({error})
    }
})

//CREATE

router.post("/", auth, async (req, res)=> {
    try {
        const {username} = req.payload
        req.body.username = username
        res.status(200).json(await Note.create(req.body))
    }
    catch (error){
        res.status(400).json({error})
    }
})

//UPDATE
router.put("/:id", auth, async (req, res)=> {
    try {
        const {username} = req.payload
        req.body.username = username
        const {id} = req.params
        res.status(200).json(await Note.findByIdAndUpdate(id, req.body, {new: true}))
    }
    catch (error){
        res.status(400).json({error})
    }
})

//DELETE
router.delete("/:id", auth, async (req, res)=> {
    try {
        const {id} = req.params
        res.status(200).json(await Note.findByIdAndRemove(id))

    }
    catch (error){
        res.status(400).json({error})
    }
})


module.exports = router; 