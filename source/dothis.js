/* Laura Solorio laurasolorio98@csu.fullerton.edu
   Alyssa Bright alyssabright@csu.fullerton.edu
   Brandon btomich@csu.fullerton.edu
   File Description: This javascript file contains all functions
*/

//Bubble Sort Varibales
var BSortHolder = [];
var BCounter = 0;

//Merge Sort Variables
var MSortHolder = [];

//Quick Sort Variables
var QSortHolder = [];
var QCounter = 0;

					
/*
Bubble sort the array of chacters. After each swap a function will be called to 
reformat the array value into a string. They will then re
*/
function bubbleSort(values) {
	//Format and store starting 
	Bformat(values);
	var length = values.length;
		for (var i = 0; i < length; i++) { 
			for (var j = 0; j < (length - i - 1); j++) { 
				//Compare current and next position
				if (values[j] > values[j + 1]) {
					var tmp = values[j]; 
					values[j] = values[j + 1];
					values[j + 1] = tmp;
					Bformat(values);
				}
			}
		}
}	

//Formats array value into string
//String is then stored in BSortHolder Array
function Bformat(values){
	var converter = values.toString();
	converter = "[" +converter +"]"
	BSortHolder[BCounter]=converter;
	BCounter++;
}


// quicksort -- in progress
function quickSort(values, left, right){
   var len = values.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(values, pivot, left, right);
    
   //sort left and right
   quickSort(values, left, partitionIndex - 1);
   quickSort(values, partitionIndex + 1, right);
  }
  return values;
}

function partition(values, pivot, left, right){
   var pivotValue = values[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(values[i] < pivotValue){
      swap(values, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(values, right, partitionIndex);
  return partitionIndex;
}

function swap(values, i, j){
   var temp = values[i];
   values[i] = values[j];
   values[j] = temp;
}
		
//Formats array value into string
//String is then stored in QSortHolder Array
function Qformat(values){
	var converter = values.toString();
	converter = "[" +converter +"]"
	QSortHolder[QCounter]=converter;
	QCounter++;
}	
