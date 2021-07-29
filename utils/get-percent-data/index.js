const sum = (acc, curr) => acc + curr;
const sumValues = data => Object.values(data).reduce(sum);

const getDataWithPercentAmount = data => {
    const entryList = Object.entries(data);
    const sumPropertyWithPercent = sumValues(data);
    const percentData = entryList.map(entry=> {
        const [name,amount] = entry;
        const percent = Math.round((amount/sumPropertyWithPercent)*100);

        return {name,amount,percent};
    })
    return percentData;
}

module.exports = getDataWithPercentAmount;
