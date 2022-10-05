import Movie from '../models/movie-model.js'

export default class MovieService {
    static async createRow(movie) {
        return Movie.create(movie);
    }

    static async upDateRow(body,movie) {
        return  Movie.update(body,{where: {id:movie}})
    }

    static async deleteMovie(movie) {
        return  Movie.destroy({where: {id:movie}})
    }

    static async getMovieById(movie) {
        return  Movie.findOne({where: {id:movie}})
    }

    static async getAllMovies() {
        return  await Movie.findAll()
    }
}
