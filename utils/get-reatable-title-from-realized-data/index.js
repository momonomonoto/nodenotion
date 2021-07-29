const createLabelTicket = ticket=> ticket.name+ '. ' +'Тикетов: '+ticket.amount+ '. '+ ticket.percent+'%';

const getReatableTitleFromRealizedData = list => list.reduce((ticketData, ticket)=> ({...ticketData, [createLabelTicket(ticket)]:ticket.amount}),{});

module.exports = getReatableTitleFromRealizedData;
