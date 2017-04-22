import mongoose from 'mongoose'
import Person from '../models/Person'
import Config from '../config.json'

mongoose.connect(Config.mongo)

let persons = [
	{
		name: 'Wilson Anciro',
		age: 25
	},
	{
		name: 'Arielle Marie Andrade',
		age: 24
	}
]

Person.insertMany(persons, (err, res) => {
	return new Promise((resolve, reject) => {
		console.log('Task Done', JSON.stringify(res, null, 2))
		process.exit()
	})
}) 