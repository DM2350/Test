_auth_ = "Per Jaakonantti"
_year_ = 2018

from random import randint
import csv

baseColours = ['red','green']
allColours = ['red', 'red-violet', 'violet', 'blue-violet', 'blue', 'blue-green', 'green', 'yellow-green', 'yellow', 'yellow-orange', 'orange', 'red-orange']
numColours = len(allColours)

colourCombinationList = []

for i in range(0,numColours):
	for  j in range(0,2):
		tempList = list()
		tempList.append(baseColours[j])
		tempList.append(allColours[randint(0, numColours-1)])
		colourCombinationList.append(tempList)

with open('list_colours.csv', 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=' ',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for item in colourCombinationList:
    	spamwriter.writerow(item)