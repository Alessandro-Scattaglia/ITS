/**
 * Author: Alessandro Scattaglia
 * 
 * Tells a fortune based on the number of children, partner's name, country, and job.
 * @example
 * // Outputs: "You will be a burattinaio in Iraq and married to Gonzalo with 0 kids."
 * tellFortune("burattinaio", "Iraq", "Gonzalo", "0");
 */

function tellFortune(num_figli, nome_partner, paese, lavoro) {
    console.log(`You will be a ${lavoro} in ${paese} and married to ${nome_partner} with ${num_figli} kids.`);
}

tellFortune("burattinaio", "Iraq", "Gonzalo", "0");
tellFortune("sognatore", "Italia", "Alessandro", "2");
tellFortune("esploratore", "Brasile", "Maria", "4");
tellFortune("creativo", "Giappone", "Yuki", "1");
