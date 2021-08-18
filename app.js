const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')


let trips = [{
    taskID: 1,
    title: 'Duluth',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    dateOfDeparture: '16/08/2021',
    dateOfReturn: '16/09/2021'
}]



app.get('/trips', (req, res) => {

    res.render('index', { allTrips: trips })
})

app.post('/add-trip', (req, res) => {

    const tripTitle = req.body.tripTitle
    const tripimageUrl = req.body.tripimageUrl
    const tripdateOfDeparture = req.body.tripdateOfDeparture
    const tripdateOfReturn = req.body.tripdateOfReturn

    let trip = { title: tripTitle, imageUrl: tripimageUrl, dateOfDeparture: tripdateOfDeparture, dateOfReturn: tripdateOfReturn }

    trips.push(trip)
    res.redirect('/trips')
})

app.post('/delete-trip', (req, res) => {

    const tripID = parseInt(req.body.tripID)

    trips = tasks.filter((trips) => {
        return trip.tripID != taskID
    })

    res.redirect('/trips')
})

app.listen(3000, () => {
    console.log('server is running...')
})