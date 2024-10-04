// app controller

class AppController {
    static getHomepage(req, resp) {
        resp.status(200).send('Hello Holberton School!')
    }
}

module.exports = AppController;
