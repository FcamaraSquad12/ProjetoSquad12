const router = require('express').Router();

const Group = require('../models/Group')

router.post('/', async (req, res) => {
    const { title, date, time, subject, link } = req.body
  
    if (!title) {
        res.status(422).json({error: 'O nome é obrigatório!'})
    }

    const group = {
      title,
      date,
      time,
      subject,
      link
    }
  
    try {
      await Group.create(group)
  
      res.status(201).set("Access-Control-Allow-Origin", "*").json({ message: 'Grupo inserido no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  router.get('/', async (req, res) => {
    try {
      const groups = await Group.find()
  
      res.status(200).set("Access-Control-Allow-Origin", "*").json(groups)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const group = await Grupo.findOne({ _id: id })
  
      if (!group) {
        res.status(422).set("Access-Control-Allow-Origin", "*").json({ message: 'Grupo não encontrado!' })
        return
      }
  
      res.status(200).json(group)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
    const { title, date, time, subject, link } = req.body
  
    const person = {
      title,
      date,
      time,
      subject,
      link
    }
  
    try {
      const updatedGroup = await Group.updateOne({ _id: id }, group)
  
      if (updatedGroup.matchedCount === 0) {
        res.status(422).set("Access-Control-Allow-Origin", "*").json({ message: 'Grupo não encontrado!' })
        return
      }
  
      res.status(200).json(group)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const group = await Group.findOne({ _id: id })
  
    if (!group) {
      res.status(422).json({ message: 'Group não encontrado!' })
      return
    }
  
    try {
      await Group.deleteOne({ _id: id })
  
      res.status(200).set("Access-Control-Allow-Origin", "*").json({ message: 'Grupo removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  module.exports = router;