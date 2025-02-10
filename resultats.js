// Récupérer le score RSE passé dans l'URL
let urlParams = new URLSearchParams(window.location.search);
let score = parseInt(urlParams.get('score'));

// Afficher le score
document.getElementById('rse-score').textContent = score;

// Fournir des recommandations basées sur le score
let recommendations = document.getElementById('recommendations');
if (score <= 3) {
    recommendations.innerHTML = "<p>Votre score est faible. Nous vous recommandons de travailler sur vos actions sociales et environnementales pour améliorer votre impact.</p>";
} else if (score <= 5) {
    recommendations.innerHTML = "<p>Votre score est moyen. Continuez à améliorer vos pratiques RSE, notamment dans la gouvernance et la responsabilité sociale.</p>";
} else {
    recommendations.innerHTML = "<p>Félicitations, vous avez un excellent score RSE ! Continuez à promouvoir les bonnes pratiques au sein de votre entreprise.</p>";
}
