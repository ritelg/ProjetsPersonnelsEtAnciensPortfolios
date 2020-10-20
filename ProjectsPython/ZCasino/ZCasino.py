#!/usr/bin/python3.5
# -*-coding:Utf-8 -*

from random import randrange
from math import ceil

input_nb=0
mise = 0
miseRestant = 1000
continuer_partie = True

while continuer_partie:

    # Choix du numero à jouer entre 0 et 49
    while True:
        try:
            input_nb = int(input('Entrez un numero compris entre 0 et 49 : '))
        except:
            print('Veuillez entrez un nombre')
        if input_nb >= 0 and input_nb <= 49:
            break
        else:
            print('Le numero entrez est invalide')

    # Choix de la mise
    while True:
        try:
            mise = int(input('Entrez votre mise, il vous reste : ' + str(miseRestant) + '$ : '))
        except:
            print('\nVotre mise est invalide ou est superieur a la mise restante')
        if mise == 0 or mise > miseRestant:
            print('Votre mise est invalide, il vous ' +  str(miseRestant )+ '$')
        else:
            break

    # Generation numero Gagnant
    numero_gagnant = randrange(49)
    print('Numero Gagnant : ' + str(numero_gagnant))

    if numero_gagnant == input_nb:
        miseRestant += 3*mise
        print('Vous gagnez : ' + str(3*mise) + '$, il vous reste maintenant : ' + str(miseRestant) + '$')
    elif numero_gagnant%2 == 0 and input_nb%2 == 0:
        miseRestant += ceil(0.5*mise)
        print('Vous gagnez : ' + str(ceil(0.5*mise)) + '$, il vous reste maintenant : ' + str(miseRestant) + '$')
    elif numero_gagnant%2 == 1 and input_nb%2 == 1:
        miseRestant += ceil(0.5*mise)
        print('Vous gagnez : ' + str(ceil(0.5*mise)) + '$, il vous reste maintenant : ' + str(miseRestant) + '$')
    else:
        miseRestant -= mise
        print('Vous perdez : ' + str(mise) + '$, il vous reste maintenant : ' + str(miseRestant) + '$')

    response = input('Voulez vous continuez la partie (Entrez y pour continuer et n pour quitter): ')
    if response == 'n':
        print('Dommage, Bonne journée à vous, n\'hesitez pas à revenir jouer ?')
        continuer_partie = False
    if miseRestant <= 0:
        print('Dommage, Vous n\'avez plus de sous vous avez perdu revenez jouer quand vous voulez !!!')