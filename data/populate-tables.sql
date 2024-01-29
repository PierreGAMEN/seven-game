BEGIN;

-- Populer la table activity
-- Populer la table activity
INSERT INTO activity (id, name, description, image) VALUES
(1, 'Randonnée/Trek', 'Profitez de la nature dans son plus simple appareil.', 'Randonnée.jpg'),
(2, 'Escalade', 'Explorez les célèbres fissures des environs. Un moyen efficace de revenir avec des souvenirs plein la tête.', 'escalade.jpg'),
(3, 'Détente', 'Détendez-vous sur de belles plages de sable fins, sur un transat, un cocktail bien frais à la main.', 'beach.jpg'),
(4, 'Fête', 'Participez à des festivités animées. Pensez à boire de l''eau en fin de soirée.', 'fête.jpg'),
(5, 'Restauration', 'Dégustez une cuisine délicieuse dans des restaurants locaux.', 'restaurant.jpg'),
(6, 'Plongée', 'Explorez les fonds marins, nagez avec les requins, dansez avec les orques ou restez à la surface, le snorkeling, c''est bien aussi !', 'Plongée.jpg'),
(7, 'Parapente', 'Volez dans les airs et prenez de la hauteur. Voyez ce que les autres ne voient pas !', 'parapente.jpg'),
(8, 'Visiter', 'Visitez les plus beaux sites touristiques de la région, c''est pas historique ça ?', 'visite.jpg'),
(9, 'Surfer', 'Surfez sur les vagues sauf si le vent souffle offshore, c''est mort. Et au fait, ça n''file pas ?', 'surf.jpg');


INSERT INTO travel (id, image, destination, short_description, long_description, Price) VALUES
(1, 'grece.jpg', 'Grèce', '2 à 3 semaines', 'Découvrez la tranquillité de la vie en montagne entourée de vues à couper le souffle.', '1200.00'),
(2, 'islande.jpg', 'Islande', '2 semaine à 1 mois', 'L''Islande, joyau nordique, fascine avec ses paysages époustouflants : volcans actifs, cascades majestueuses, aurores boréales envoûtantes. Reykjavik, la vibrante capitale, offre une fusion unique entre tradition et modernité. Explorez des glaciers, plongez dans des sources chaudes et vivez une aventure nature exceptionnelle. Une terre de mystères et de merveilles, l''Islande invite à une découverte immersive et inoubliable.', '3000.00'),
(3, 'clubMed.jpg', 'Club Med', '1 à 2 semaines', 'Laissez-vous séduire par la beauté et la détente d''une escapade tropicale.', '900.00'),
(4, 'norvege.jpg', 'Norvège', '2 à 3 semaines', 'Découvrez des fjords majestueux, des aurores boréales enchanteresses et une culture riche. La Norvège vous offre une expérience unique entre nature préservée et patrimoine historique.', '1500.00'),
(5, 'maroc.jpg', 'Maroc', '3 à 4 semaines', 'Plongez dans les saveurs exquises de la cuisine marocaine, perdez-vous dans les ruelles colorées des médinas, et découvrez la diversité captivante du Maroc entre montagnes, déserts et côtes pittoresques.', '1200.00'),
(6, 'canada.jpg', 'Canada', '1 mois à 1 an', 'Explorez les paysages spectaculaires du Canada, des montagnes majestueuses aux lacs cristallins. Vivez des aventures en plein air et découvrez la chaleur de l''accueil canadien.', '1800.00'),
(7, 'japon.jpg', 'Japon', '2 à 3 semaines', 'Découvrez la splendeur des cerisiers en fleurs, explorez les temples anciens, dégustez la délicieuse cuisine japonaise et vivez l''effervescence des grandes villes. Le Japon vous invite à une aventure culturelle fascinante.', '2500.00'),
(8, 'thailande.jpg', 'Thaïlande', '2 à 3 semaines', 'Explorez les plages paradisiaques, les temples magnifiques et la vie nocturne animée de la Thaïlande. Une destination qui mêle traditions anciennes et modernité.', '2000.00'),
(9, 'australie.jpg', 'Australie', '3 semaines à 2 mois', 'Découvrez la diversité exceptionnelle de l''Australie, des plages de sable fin aux forêts tropicales luxuriantes. Rencontrez une faune unique et explorez des sites emblématiques.', '3500.00'),
(10, 'perou.jpg', 'Pérou', '2 à 4 semaines', 'Plongez dans l''histoire ancienne des Incas, explorez les mystérieuses lignes de Nazca et découvrez la beauté des Andes. Le Pérou offre une aventure culturelle et naturelle inoubliable.', '2800.00'),
(11, 'egypte.jpg', 'Égypte', '2 à 3 semaines', 'Explorez les trésors antiques de l''Égypte, des pyramides de Gizeh aux temples de Louxor. Plongez dans l''histoire fascinante de cette civilisation millénaire.', '2200.00'),
(12, 'nouvelleZelande.jpg', 'Nouvelle-Zélande', '1 mois à 3 mois', 'Découvrez les paysages époustouflants de la Nouvelle-Zélande, des montagnes majestueuses aux fjords pittoresques. Une aventure pour les amoureux de la nature et des activités en plein air.', '3200.00'),
(13, 'bresil.jpg', 'Brésil', '2 à 4 semaines', 'Voyagez au cœur de l''Amazonie, dansez au rythme envoûtant du carnaval de Rio et détendez-vous sur les plages ensoleillées. Le Brésil vous offre une expérience vibrante et diversifiée.', '2500.00'),
(14, 'italie.jpg', 'Italie', '2 à 3 semaines', 'Explorez l''art, la cuisine et l''histoire de l''Italie. Découvrez les trésors de Rome, dégustez des plats délicieux en Toscane et imprégnez-vous de la beauté de Venise.', '1900.00');

-- INSERT INTO travel_has_activity (travel_id, activity_id) VALUES

INSERT INTO travel_has_activity (travel_id, activity_id) VALUES
(1, 1), -- Grèce - Randonnée en montagne
(1, 2), -- Grèce - Escalade
(1, 5), -- Grèce - Restauration
(2, 3), -- Islande - Détente
(2, 6), -- Islande - Plongée
(2, 8), -- Islande - Visiter
(3, 4), -- Club Med - Fête
(3, 5), -- Club Med - Restauration
(3, 6), -- Club Med - Plongée
(4, 7), -- Norvège - Parapente
(4, 8), -- Norvège - Visiter
(4, 9), -- Norvège - Surfer
(5, 2), -- Maroc - Escalade
(5, 8), -- Maroc - Visiter
(5, 9), -- Maroc - Surfer
(6, 1), -- Canada - Randonnée/Trek
(6, 4), -- Canada - Fête
(6, 7), -- Canada - Parapente
(7, 3), -- Japon - Détente
(7, 8), -- Japon - Visiter
(7, 9), -- Japon - Surfer
(8, 1), -- Thaïlande - Randonnée/Trek
(8, 3), -- Thaïlande - Détente
(8, 5), -- Thaïlande - Restauration
(9, 4), -- Australie - Fête
(9, 6), -- Australie - Plongée
(9, 8), -- Australie - Visiter
(10, 1), -- Pérou - Randonnée/Trek
(10, 5), -- Pérou - Restauration
(10, 8), -- Pérou - Visiter
(11, 3), -- Égypte - Détente
(11, 6), -- Égypte - Plongée
(11, 8), -- Égypte - Visiter
(12, 1), -- Nouvelle-Zélande - Randonnée/Trek
(12, 4), -- Nouvelle-Zélande - Fête
(12, 7), -- Nouvelle-Zélande - Parapente
(13, 4), -- Brésil - Fête
(13, 5), -- Brésil - Restauration
(13, 6), -- Brésil - Plongée
(14, 5), -- Italie - Restauration
(14, 8), -- Italie - Visiter
(14, 9); -- Italie - Surfer

COMMIT;