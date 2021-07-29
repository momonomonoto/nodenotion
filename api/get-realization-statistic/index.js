const notion = require('../notion');
const getCountDataProperties = require('../../utils/get-count-data-properties');
const addAmountPercent = require('../../utils/add-amount-percent');
const getReatableTitleFromRealizedData = require('../../utils/get-reatable-title-from-realized-data');

const compose = require('../../utils/compose');

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
        const formatData = compose(getReatableTitleFromRealizedData, addAmountPercent, getCountDataProperties);
        res.send(formatData(realizedData));
    } catch (error) {
        console.error(error)
    }
    next();
}
module.exports = getRealizationStatistic;
