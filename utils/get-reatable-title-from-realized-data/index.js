const createLabelTicket = ticket=> ticket.name+ '. ' +'Тикетов: '+ticket.amount+ '. '+ ticket.percent+'%';

const getReatableTitleFromRealizedData = list => list.reduce((ticketList, ticket)=> {
    ticketList.push({[createLabelTicket(ticket)]:ticket.amount});
        return ticketList;
    },[]);

module.exports = getReatableTitleFromRealizedData;
