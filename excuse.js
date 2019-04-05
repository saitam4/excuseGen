window.onload = function() 
{

    let who = ['My cat', 'A fucking dog', 'My granma', 'His filthy turtle', 'My bloody bird','Your momma','Your sister'];
    let what = ['eat', 'pissed', 'crushed', 'broked', 'shit', 'burned', 'vaporized','smoked',];
    let trgtexcuse = ['my homework', 'my project', 'my essay', 'my dish', 'my card pyramid', 'my present','my code'];
    let when = ['before the class', 'right in time', 'when I farted', 'during my lunch', 'while I was praying',
        'while i was in the shower','while I was taking a dump'];
        
    let whoDid = who[Math.round(Math.random()*(who.length-1))];
    let whatDid = what[Math.round(Math.random()*(what.length-1))];
    let whatTrgt = trgtexcuse[Math.round(Math.random()*(trgtexcuse.length-1))];
    let whenDid = when[Math.round(Math.random()*(when.length-1))];
    
    document.getElementById('excuses').innerHTML = '<div>' + whoDid + ' ' + whatDid + ' ' + whatTrgt + ' ' + whenDid + ' .</div>'
    
    
}
