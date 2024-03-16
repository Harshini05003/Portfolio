const pool=require('../database');
const queries=require('../queries')
const getControllerDetails = async (request,response,entity) => {
    try {
        const data = await pool.query(queries.getDetails(entity));
        response.json(data.rows);
    } catch (error) {
        throw error;
    }
};
module.exports={
    getControllerDetails
}