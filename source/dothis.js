/* Laura Solorio laurasolorio98@csu.fullerton.edu
   Alyssa Bright alyssabright@csu.fullerton.edu
   Brandon Tomich btomich@csu.fullerton.edu
   File Description: This javascript file contains all functions
  
   Bubble Sort Functions:
   	bubbleSort: Function performing the algorithm to bubble sort the array of characters
	Bformat: Formats bubble sort in an array of strings.
   Merge Sort Functions:
   	mergeSort: Performs merge Sort funtion and then calls merge function
	merge: Merges spliced array
	Mformat: Formats merge sort values into an array of strings
   Quick Sort Functions:
   	quickSort: eprform quick sort algorithm
	partition: Chooses the center as the pivot 
	swap: swap values
	Qformat: Formats quick sort cvalues in an array of strings
   Additional Functions:
   	draw_grid: Draws grid to be able to plot the ouputs on a set position on the graph
   	printthis: prints out the arrays on the html page
*/

//Bubble Sort Varibales
var BSortHolder = [];
var BCounter = 0;
var xaxis=10;
var yaxis=10;

//Merge Sort Variables
var MSortHolder = [];
MSortHolder[1]="";
MSortHolder[2]="";
MSortHolder[3]="";
MSortHolder[4]="";
var MHolder=[];
var MCounter = 2;
var co=0;

//Quick Sort Variables
var QSortHolder = [];
var QCounter = 0;

function draw_grid( rctx, rminor, rmajor, rstroke, rfill  )
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix/10, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy/10, 0, iy + 10 );}
    }
    rctx.restore( );
}
					
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


// mergesort -- in progress
// Merge Sort Implentation (Recursion)
function mergeSort (values) {
  // No need to sort the array if the array only has one element or empty
  if (values.length <= 1) {
    return values;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(values.length / 2);

  // This is where we will be dividing the array into left and right
  const left = values.slice(0, middle);
  const right = values.slice(middle);
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }
	Mformat(resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)));
  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

//Formats array value into string
//String is then stored in BSortHolder Array
function Mformat(left){
	var converter = left.toString();
	converter = "[" +converter +"]";
	if(left.length==1){
		MSortHolder[0]=MSortHolder[0]+ "    "+converter;
	}
	else if(left.length==2){
		MSortHolder[1]=MSortHolder[1]+"   "+converter;
	}
	else if(left.length==3){
		MSortHolder[2]=MSortHolder[2]+" "+converter;
	}
	else if(left.length==6){
		MSortHolder[3]=MSortHolder[3]+"   "+converter;
	}
	else if(left.length==12){
		MSortHolder[4]=MSortHolder[4]+"  "+converter;
	}
	else {
		MSortHolder[MCounter]=converter;
		MCounter++;
	}
	
}	

function printThis(square, arrayDisplay){
	square.beginPath();
	square.fillText(arrayDisplay, xaxis ,yaxis);
	square.fill();
}



// quicksort
function quickSort(values, left, right) {
	Qformat(values);
	var partitionIndex;
	//debugger;
	//if the length of the list is less than one or the it is empty no need to sort 
	if (values.length > 1) {
		partitionIndex = partition(values, left, right);

		//sort left and right
		if (left < partitionIndex - 1) {
			quickSort(values, left, partitionIndex - 1);
		}
		if (partitionIndex + 1 < right) {
			quickSort(values, partitionIndex, right);
		}
	}

	return values;
}

function partition(values, left, right) {
	//choosing the center as the pivot because on average this tends to be most efficient 
	//since it has the least chance of being the largest or smallest element in the list
	var index = Math.floor((right + left) / 2),
		pivotValue = values[index],
		j = left,
		k = right;
	console.log(values);
	console.log("Left = " + left + "and right = " + right + " pivot value  = " + pivotValue);
	//loop until the left index passes over the right 
	while (j <= k) {
		//increment the index left if j is less than pivot 
		while (values[j] < pivotValue) { ++j; }
		//decriment the index right if k is greator than pivot 
		while (values[k] > pivotValue) { --k; }

		//swap indexes 
		if (j <= k) {
			swap(values, j, k);
			++j;
			--k;
		}
	}

	return j;
}

function swap(values, i, j)
{
	var temp = values[i];
	values[i] = values[j];
	values[j] = temp;
}

//Formats array value into string
//String is then stored in QSortHolder Array
function Qformat(values)
{
	var converter = values.toString();
	converter = "[" + converter + "]"
	QSortHolder[QCounter] = converter;
	QCounter++;
}	
