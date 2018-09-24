_auth_ = "Per Jaakonantti"
_year_ = 2018

from random import randint
import csv

baseColours = ['red','green']
allColours = ['redRed', 'redViolet', 'violetViolet', 'blueViolet', 'blueBlue', 'blueGreen', 'greenGreen', 'yellowGreen', 'yellowYellow', 'yellowOrange', 'orangeOrange', 'redOrange']
alternatives = ['same', 'different']
numColours = len(allColours)

colourCombinationList = []

for k in range(0,2):
	for i in range(0,numColours):
		for  j in range(0,2):
			tempList = list()
			tempList.append(baseColours[j])
			tempList.append(allColours[i])
			tempList.append(alternatives[k])
			colourCombinationList.append(tempList)

with open('list_colours.csv', 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for item in colourCombinationList:
    	spamwriter.writerow(item)
