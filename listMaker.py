_auth_ = "Per Jaakonantti"
_year_ = 2018

from random import randint
import csv

strings = 10 #CHANGE WHEN NECESSARY
capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
capLength = len(capitalLetters)

longList = []

for i in range(0,100):
	tempList = list()
	tempString = str()
	for j in range(0,strings):
		tempString += capitalLetters[randint(0, capLength-1)]
	tempList.append(tempString)

	tempString2 = tempString
	while(tempString == tempString2):
		changer = randint(0, strings-1)
		listA = list(tempString2)
		listA[changer] = capitalLetters[randint(0, capLength-1)]
		tempString2 = ''.join(listA)
	tempList.append(tempString2)
	longList.append(tempList)

print(longList)

with open('list_strings_' + str(strings) +  '.csv', 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for item in longList:
    	#print(item)
    	spamwriter.writerow(item)
