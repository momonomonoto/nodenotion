const createLabelTicket = ticket=> ticket.name+ '. ' +'Тикеров: '+ticket.amount+ ' - '+ ticket.percent+'%';

const getReatableTitleFromRealizedData = list => list.reduce((ticketData, ticket)=> ({...ticketData, [createLabelTicket(ticket)]:ticket.amount}),{});

module.exports = getReatableTitleFromRealizedData;
