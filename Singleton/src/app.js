
const Questions = require('./controllers/Questions');
const msg = require('./helpers/Text');

(async() => {
    msg.CMD('Singleton');
    let quiestions = await Questions();
    await console.log(quiestions)
})();