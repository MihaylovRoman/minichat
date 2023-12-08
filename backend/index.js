const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express()

app.use(express.json())
app.use(cors({ origin: true }))

app.post('/authenticate', async (req, res) => {
    const { username } = req.body
    try {
        const r = await axios.put('https://api.chatengine.io/users',
            { username: username, secret: username, firstname: username },
            { headers: { 'private-key': "bdd7b5f6-5688-4e4d-ab44-715f83de6f2c" } })

            return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
    return res.json({ username: username, secret: 'sha256...' })
})

app.listen(5000)