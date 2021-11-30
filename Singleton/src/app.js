
const Questions = require('./controllers/Questions');
const msg = require('./helpers/Text');

(async() => {
    msg.CMD('Singleton');
    let Questions = await Questions();
    await console.log(Questions)
})();