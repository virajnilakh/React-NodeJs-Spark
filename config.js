var config={};
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};



config.dbString="mongodb://localhost:27017/n3napiasanode";
module.exports=config;
