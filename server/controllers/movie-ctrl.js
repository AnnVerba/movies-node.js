import Util from '../Util/util.js'
import MovieService from "../services/ModelService.js";


const util = new Util();

export default class MovieController {

    static async createMovie(req, res) {

        if (!req.body||!req.body.name||!req.body.time) {
            util.setError(400, 'You must provide a movie')
            return util.send(res)
        }

        try {
            await MovieService.createRow(req.body)
            util.setSuccess(201, 'Movie created!', req.body)
        } catch (e) {
            util.setError(400, 'Movie not created!')

        }
        return util.send(res)
    };


    static async updateMovie(req, res) {

        try {
            const movie = MovieService.upDateRow(req.body, req.params.id)
            util.setSuccess(200, 'Movie updated!', movie.id,)

        } catch (err) {
            util.setError(500, 'Movie not updated!')

        }
        return util.send(res);
    }

    static async deleteMovie(req, res) {
        try {
            const movie = MovieService.deleteMovie(req.params.id)
            util.setSuccess(200, true, movie)

        } catch (err) {
            util.setError(400, 'Movie not found ')

        }

        return util.send(res);
    };


    static async getMovieById(req, res) {
        try {
            const movie = await MovieService.getMovieById(req.params.id);
            util.setSuccess(200, true, movie)
        }
        catch (err) {
            util.setError(400, err)
        }
        return util.send(res);
    }

    static async getMovies(req, res) {
        try {
            const movies = await MovieService.getAllMovies()
            util.setSuccess(200, true, movies)

        } catch (e) {
            util.setError(400, false)
        }
        return util.send(res);
    }
}

