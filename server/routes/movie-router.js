import express from 'express'

import  MovieController  from '../controllers/movie-ctrl.js'

const movieRouter = express.Router()

movieRouter.post('/movie',  MovieController.createMovie)
movieRouter.put('/movie/:id',  MovieController.updateMovie)
movieRouter.delete('/movie/:id',  MovieController.deleteMovie)
movieRouter.get('/movie/:id',  MovieController.getMovieById)
movieRouter.get('/movies',  MovieController.getMovies)

export default movieRouter
