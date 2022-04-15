const router = require('express').Router();

const Person = require('../models/Person')

router.get('/people', async (req, res) => {
  try {
    const people = await Person.find()

    res.status(200).set("Access-Control-Allow-Origin", "*").json(people)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.post('/', async (req, res) => {
  const { name, profession, description, email, password, skills, whatsapp, calendly, portfolio, linkedin, drive } = req.body

  const person = {
    name, 
    profession, 
    description, 
    email, 
    password, 
    skills, 
    whatsapp, 
    calendly,
    portfolio, 
    linkedin, 
    drive
  }

  try {
    await Person.create(person)

    res.status(201).set('Access-Control-Allow-Methods', '*').json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).set('Access-Control-Allow-Methods', '*').json({ erro: error })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const person = await Person.findOne({ _id: id })

    if (!person) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).set("Access-Control-Allow-Origin", "*").json(person)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.get('/:email', async (req, res) => {
  const mail = req.params.email

  try {
    console.log(mail)
    const person = await Person.findOne({ email: mail })

    if (!person) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).set("Access-Control-Allow-Origin", "*").json(person)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id

  const { name, profession, description, email, password, skills, whatsapp, calendly, portfolio, linkedin, drive } = req.body

  const person = {
    name, 
    profession, 
    description, 
    email, 
    password, 
    skills, 
    whatsapp,
    calendly, 
    portfolio, 
    linkedin, 
    drive
  }

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person)

    if (updatedPerson.matchedCount === 0) {
      res.status(422).set("Access-Control-Allow-Origin", "*").json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const person = await Person.findOne({ _id: id })

  if (!person) {
    res.status(422).set("Access-Control-Allow-Origin", "*").json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Person.deleteOne({ _id: id })

    res.status(200).set("Access-Control-Allow-Origin", "*").json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

module.exports = router;