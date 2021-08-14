const addNoPointText = name => name === 'Реализовано' || name === 'Не реализовано'? ' (ТВХ нет)':'';

const createLabelTicket = ticket=> ticket.name+ '. ' +'Тикеров: '+ticket.amount+ ' - '+ ticket.percent+'%'+addNoPointText(ticket.name);

const getReatableTitleFromRealizedData = list => list.reduce((ticketData, ticket)=> ({...ticketData, [createLabelTicket(ticket)]:ticket.amount}),{});

module.exports = getReatableTitleFromRealizedData;
