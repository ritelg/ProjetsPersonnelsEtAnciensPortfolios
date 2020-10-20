#!/usr/bin/python3.5
# -*-coding:Utf-8 -*
import functions as fc
import data as data

def main():

    print('\n')
    username = str(input('Entrez un Login pour jouer : '))

    continuer_partie = True

    while continuer_partie:
        nbPointsUser = int(fc.getDataUser(username))
        print('\n========================================================================= \n')
        print('Bonjour ' + str(username) + ', vous avez ' + str(nbPointsUser) + ' points !!!')

        wordChoice = fc.choiceWord('words.txt')

        errors = 0
        letterFindIndexTotal = []
        print('Bienvenu dans le jeu du pendu !!! \n')
        while True:
            letterInput = str(input('Veuillez entrez une lettre, il vous reste : ' + str(data.nbErrorsMax - errors) + ' chances, (Entrez * pour quitter le jeux) ? '))
            letterFindIndex = fc.letterInWord(letterInput, wordChoice)
            [letterFindIndexTotal.append(i) for i in letterFindIndex if i not in letterFindIndexTotal]
            result = fc.showLetterFind(letterFindIndexTotal, wordChoice)
            print(result)
            if len(letterFindIndexTotal) == len(wordChoice):
                fc.saveUser(username, int(data.nbErrorsMax - errors))
                print('\n\nSuper, Vous avez gagné !!!, Vous avez fait ' + str(errors) + ' erreurs, et vous avez maintenant ' + str(nbPointsUser + data.nbErrorsMax - errors) + ' points')
                response = str(input('Voulez vous continuer à jouer (Taper y pour continuer la partie) ?'))
                if response != 'y':
                    continuer_partie = False
                else:
                    fc.clearConsole()
                break
            if letterFindIndex == []:
                errors += 1
            if letterInput == '*':
                print('\nDommage, Vous avez perdu')
                continuer_partie = False
                break
            if errors >= data.nbErrorsMax:
                print('\n\nDommage, Vous avez perdu')
                response = str(input('Voulez vous continuer à jouer (Taper y pour continuer la partie) ?'))
                if response != 'y':
                    continuer_partie = False
                else:
                    fc.clearConsole()
                break

if __name__ == '__main__':
    main()