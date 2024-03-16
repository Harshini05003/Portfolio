function getDetails(tableName){
    return `SELECT * FROM ${tableName}`;
}
module.exports={
    getDetails
}