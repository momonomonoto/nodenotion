const notion = require('../notion');

const dataFilter = {
    database_id: process.env.DATABASE_ID,
    page_size:undefined
}

const getRealizedTickets = async (req, res, next) => {
    try {
        const myPage = await notion.databases.query({...dataFilter})
        res.send(myPage);
    } catch (error) {
        console.error(error)
    }
    next();
}
module.exports = getRealizedTickets;
