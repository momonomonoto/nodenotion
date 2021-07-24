const notion = require('../notion');

const getRealizedTickets = async (req, res, next) => {
    try {
        const myPage = await notion.databases.query({
            database_id: process.env.DATABASE_ID,
        })
        res.send(myPage);
    } catch (error) {
        console.error(error)
    }
    next();
}
module.exports = getRealizedTickets;
