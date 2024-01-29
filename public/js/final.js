const userAction = document.querySelector('.input-choice');
const textNarration = document.querySelector('.text-narratif');
const submitChoice = document.querySelector('.submit-choice');

let counters = {
    counterCat: 0,
    counterBox: 0,
    counterDesk: 0,
    counterTableau: 0,
    counterTiroir: 0,
    clé: 0,
    lampeEteinte: 0
};

const setTextNarration = (content) => {
    textNarration.textContent = content;
};

const switchAction = (userchoice, answer, counter) => {
    if (userAction.value.toLowerCase().includes(userchoice)) {
        setTextNarration(answer);
        userAction.value = ''
        counters[counter]++;
        return true; // Action successfully performed
    }
    return false; // Action not performed
};

submitChoice.addEventListener('click', () => {
    let actionPerformed = false;

    actionPerformed = switchAction('bureau', 'Margaux se rapproche du bureau. La lampe éclaire chaudement la pièce', 'counterDesk') || actionPerformed;
    actionPerformed = switchAction('étein', 'Margaux éteint la lampe. Une inscription est présente. On dirait une flèche qui pointe vers le haut', 'lampeEteinte') || actionPerformed;
    actionPerformed = switchAction('allum', 'Margaux allume la lampe. Elle semble s\'être un peu aveuglée', 'lampeEteinte') || actionPerformed;
    actionPerformed = switchAction('tableau gauche', 'Le tableau semble mal accroché, on dirait que quelqu\'un l\'a décroché récemment.', 'lampeEteinte') || actionPerformed;
    actionPerformed = switchAction('tableau droite', 'Le tableau représente un chat-hibou. Curieusement ces deux animaux s\'assemblent bien..', 'lampeEteinte') || actionPerformed;
    actionPerformed = switchAction('décroch', 'Margaux décroche le tableau. Il semble qu\'un objet soit accroché derrière. Il y a une clé. Margaux la récupère', 'clé') || actionPerformed;
    actionPerformed = switchAction('chat', 'Margaux se rapproche du chat, elle le caresse. Il commence a ronronner et descend de la table et se frotte à elle. Il y inscription sur le bureau. 17. Le chat reprend sa place.', 'clé') || actionPerformed;
    actionPerformed = switchAction('chouette', `Margaux se rapproche de la chouette, elle s'envole, puis elle revient. Elle ne semble pas très caline contrairement au chat.`, 'clé') || actionPerformed;
    actionPerformed = switchAction('noir', `Margaux se rapproche de la boite noir, il y a un cadenas à 4 chiffres, --essayez de taper le code dans la barre d'action--`, '') || actionPerformed;
    actionPerformed = switchAction('boite', `Margaux se rapproche de la boite noir, il y a un cadenas à 4 chiffres, --essayez de taper le code dans la barre d'action--`, '') || actionPerformed;
    actionPerformed = switchAction('tiroir', `Il y a un tiroir, il semble être fermé à clé`, 'counterTiroir') || actionPerformed;
    if (!actionPerformed) {
        setTextNarration('Margaux tente de réaliser cette action, mais il ne se passe rien.. Ou l\'action est trop vage');
    }
    if (counters.clé > 0 && userAction.value.toLowerCase().includes('clé') && counters.counterTiroir > 0) {
        textNarration.textContent = 'Margaux utilise la clé qu\'elle a trouvé pour ouvrir le tiroir. Il y un autre chiffre indiqué sur une page blanche. 24.'
    };

    if(userAction.value.toLowerCase().includes('1724')) {
        textNarration.textContent = 'Margaux ouvrait le boite et découvrait ce que la personne décrit par la lune, la chouette et le chat avait préparé. Il avait soigneusement écrit sur un classeur "pour nos 10 ans". Margaux ne pu s\'empecher d\'ouvrir le classeur' 
        setTimeout(() => {
            window.location.href = '/voyages';
        }, 16000)
    }
});
