
#!/usr/bin/python3
# -*-coding:Utf-8 -*
from random import shuffle
import os
import platform
import pickle

def letterInWord(letter, word):
    return [i for i in range(len(word)) if word[i] == letter]

def showLetterFind(positions, word):
    tabWord = [word[i] if i in positions else '_' for i in range(len(word))]
    return "".join(tabWord)

def choiceWord(file):
    Word = ''
    contentFile = open(file, 'r')
    listWords = [line.strip('\n') for line in contentFile]
    shuffle(listWords)
    return listWords[0]

def fileExist(file):
	if not os.path.isfile('scores'):
		saveScoresData({})

def getScoresData():
	fileExist('scores')
	with open('scores', 'rb') as file:
		myFile = pickle.Unpickler(file)
		return myFile.load()

def saveScoresData(users_scores):
	with open('scores', 'wb') as file:
		myFile = pickle.Pickler(file)
		myFile.dump(users_scores)

def hasDataUser(users_scores, username):
	return users_scores.get(username, False) != False

def saveUser(username, score):
	users_scores = getScoresData()
	print(users_scores)
	if hasDataUser(users_scores, username):
		users_scores[username] += score
	else:
		users_scores[username] = score
	saveScoresData(users_scores)

def getDataUser(username):
	users_scores = getScoresData()
	if not hasDataUser(users_scores, username):
		users_scores[username]= 0
		return users_scores[username]
	return users_scores.get(username)
def clearConsole():
	if platform.system() == "Windows":
		os.system("cls")
	elif platform.system() == "Linux":
		os.system("clear")



