const notion = require('../notion');
const getCountDataProperties = require('../../utils/get-count-data-properties');

const dataFilter = {
    database_id: process.env.DATABASE_ID,
    filter: {
        or: [
            {
                property: 'Реализация',
                select: {
                    is_not_empty: true,
                },
            },
        ],
    },
}

const getRealizationStatistic =  async (req, res, next) => {
    try {
        let data = [];
        let startCursor = undefined;

        while ( startCursor != null || startCursor === undefined ) {
            let myPage = await notion.databases.query({...dataFilter, start_cursor:startCursor});
            startCursor = myPage.next_cursor;
            data = await data.concat(myPage.results);
        }
        const realizedData = data.map(item=>item.properties["Реализация"].select.name);

        res.send(getCountDataProperties(realizedData));
    } catch (error) {
        console.error(error)
    }
    next();
}
module.exports = getRealizationStatistic;
