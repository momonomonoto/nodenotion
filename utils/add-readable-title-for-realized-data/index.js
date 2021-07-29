const createLabelTicket = ticket=> ticket.name+ '. ' +'Тикетов: '+ticket.amount+ '. '+ ticket.percent+'%';

const addReatableTitleForRealizeData = list => list.reduce((ticketList, ticket)=> {
    ticketList.push({...ticket, readable:{[createLabelTicket(ticket)]:ticket.amount}});
        return ticketList;
    },[]);

module.exports = addReatableTitleForRealizeData;
