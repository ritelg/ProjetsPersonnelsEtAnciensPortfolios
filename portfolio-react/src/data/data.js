export const experiences = {
    1: {
        lieux: 'Bois Ariégois - Saint paul de Jarrat',
        titre: 'Technicien de Maintenance',
        date: '05/2018 à 08/2018',
        description : 'Èlectricité, Hydraulique, Pneumatique, Automatismes',
        key: 1
    },
    2: {
        lieux: 'Marcc - Fréjus',
        titre: 'Apprentissage Marcc',
        date: '2012 à 2014',
        description : 'Climatisation, Frigorifique',
        key: 1
    }
};

export const portfolio = {
    1: {
        img: require('./project-citation.jpg'),
        title: 'Generateur de citations',
        description: 'Generateur de citations basé sur javascript',
        link: 'https://ritelg.github.io/citations/',
        link_github: 'https://github.com/ritelg/citations'
    },
    2: {
        img: require('./project-blog.jpg'),
        title: 'Blog (Formation)',
        description: 'description',
        link: 'https://ritelg.github.io/tuto-forum-grafikart/',
        link_github: 'https://github.com/ritelg/tuto-forum-grafikart'
    },
    3: {
        img: require('./project-social.jpg'),
        title: 'Social (Formation)',
        description: 'description',
        link: 'https://ritelg.github.io/tuto-social-grafikart/',
        link_github: 'https://github.com/ritelg/tuto-social-grafikart'
    },
    4: {
        img: require('./project-restaurant.jpg'),
        title: 'Restaurant (Formation)',
        description: 'description',
        link: 'https://ritelg.github.io/tuto-restaurant-grafikart/index.html',
        link_github: 'https://github.com/ritelg/tuto-restaurant-grafikart'
    },
    5: {
        img: require('./project-thailande.png'),
        title: 'Decouverte de la Thailande (Udemy)',
        description: 'description',
        link: 'https://ritelg.github.io/decouverte-thailande-udemy',
        link_github: 'https://github.com/ritelg/decouverte-thailande-udemy'

    }
};

export const skills = {

    'front': {
        1:{
            skill: 'HTML',
            pourcentage: '70'
        },
        2:{
            skill: 'CSS',
            pourcentage: '50'
        },
        3:{
            skill: 'REACT',
            pourcentage: '40'
        },
        4:{
            skill: 'JAVASCRIPT',
            pourcentage: '50'
        },

    },
    'back': {
        1:{
            skill: 'PHP',
            pourcentage: '60'
        },
        2:{
            skill: 'WORDPRESS',
            pourcentage: '50'
        },
        3:{
            skill: 'SYMFONY',
            pourcentage: '50'
        }

    },
    'other': {

    }
};

export const training = {
    1: {
        date: '2012 - 2014',
        location: 'IUT de Nice',
        diplome: 'DUT GEII (Génie Électrique et Informatique Industrielle)',
        description: {
            1: 'Electricite industrielle',
            2: 'Automate Siemens'
        }
    },
    2: {
        date: '2009 - 2012',
        location: 'Lycée Gallieni - Fréjus',
        diplome: 'Bac Pro Electrotechnique',
        description: {
            1: 'Electricité Batiment',
            2: 'Electicite Industrielle'
        }
    }/*,
    3: {
        date: '',
        location: '',
        diplome: '',
        description: {
            1: '',
            2: ''
        }
    },
    4: {
        date: '',
        location: '',
        diplome: '',
        description: {
            1: '',
            2: ''
        }
    },*/
};