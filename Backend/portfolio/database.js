const dotenv=require('dotenv');
const Pool=require('pg').Pool;

dotenv.config();

const pool=new Pool({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    port:process.env.port,
    database:process.env.database
});

module.exports=pool;
