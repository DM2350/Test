_auth_ = "Per Jaakonantti"
_year_ = 2018

from random import randint
import csv

strings = 4 #CHANGE WHEN NECESSARY
capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
capLength = len(capitalLetters)

stringList = []

for i in range(0,100):
	tempString = str()
	for j in range(0,strings):
		tempString += capitalLetters[randint(0, capLength-1)]
	stringList.append(tempString)

with open('list_strings_' + strings +  '.csv', 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=' ',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for item in stringList:
    	spamwriter.writerow(item)