
export default class Util {
    constructor() {
        this.statusCode = null;
        this.succes = null;
        this.data = null;
        this.message = null;
    }

    setSuccess(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.succes = true;
    }

    setError(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
        this.succes = false;
    }

    send(response) {
        const result = {
            status: this.succes,
            message: this.message,
            data: this.data,
        };

        if (this.succes === true) {
            return response.status(this.statusCode).json(result);
        }
        return response.status(this.statusCode).json({
            status: this.succes,
            message: this.message,
        });
    }
}
