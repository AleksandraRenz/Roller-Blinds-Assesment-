function Roller_Blinds()
// This is a JavaScript script for the PRACTICE ASSESSMENT – ROLLER BLINDS 
// Aleksandra Renz Dec 2020
{
	
	var i;                          // special variable to control the loop
    var inWindows;					// how many windows to be fitted
    var inHeight;					// height of a window
    var inWidth;					// width of a window
	var outArea;					// area of a window
    var blindCost;					// cost of a blind
    var totalCost = 0;				// total cost all blinds
    var inputInstall;				// installation input 
    var installFee = 10;			// installation fee
    var inputVat;					// VAT input
    var errorFlag;					// error alert
 
    
	                                     // I have copied 'do loops' based on Black Box testing exercise, 
	                                     // for wrong values entered (0 and below 0 or letters/characters instead of numbers)
										 
										 
	do									 
    {
        errorFlag = 'N';
        inWindows = prompt ('How many windows there is going to be fitted with blinds -', '0');         //prompting from user the number of windows
   
        if (isNaN(inWindows) == true)            //alert window for not a number input
        {
            errorFlag = 'Y';
			alert ('Please enter a number');
        }
        else 
			if (inWindows <= 0)                  //alert window for input less or equal 0
			{
				errorFlag = 'Y';
				alert ('Entered wrong value');
			}
    } while (errorFlag == 'Y');
    
	
	
	
	for (i = 0 ; i < inWindows  ; i++ )
    {
        
		
		do 
        {
			errorFlag = 'N';
			inHeight = prompt ('What is the height of the window (in metres) -', '0');           //prompting from user the height of the window
            
			if (isNaN(inHeight) == true)
			{
				errorFlag = 'Y';
                alert ('Please enter a number');    //alert window for not a number input
			}
			else	
				if (inHeight <= 0)                  //alert window for input less or equal 0
				{
					errorFlag = 'Y';
					alert ('Entered wrong value');
				}
        } while (errorFlag == 'Y'); 

		
 
		do 
        {
			errorFlag = 'N';
			inWidth = prompt ('What is the width of the window (in metres) -', '0');			//prompting from user the width of the window
            
			if (isNaN(inWidth) == true)
			{
				errorFlag = 'Y';
                alert ('Please enter a number');      //alert window for not a number input
			}
			else	
				if (inWidth <= 0)                     //alert window for input less or equal 0
				{
					errorFlag = 'Y';
					alert ('Entered wrong value');
				}
        } while (errorFlag == 'Y'); 
    
	
        outArea = inHeight * inWidth;  															
     
            alert ('The window area is ' + outArea.toFixed(2)  + ' m2');                          
    
        
            if (outArea >= 2)																	//calculating the cost for the window
            {blindCost = 55;
                    alert ('The cost of the blind for that window is ' + blindCost + '£');}
            else
                if  (outArea >= 1)  
                {blindCost = 45;
                        alert ('The cost of the blind for that window is ' + blindCost + '£');}
                else
                {blindCost = 35;
                        alert ('The cost of the blind for that window is ' + blindCost + '£');}
        
		totalCost = totalCost * 1 + blindCost * 1
        
    }
    
        alert ('Total cost of all the blinds for all the windows is ' + totalCost.toFixed(2) + '£') 


inputInstall = prompt ('Is installation required? - Y or N? - ', 'Y');                           //prompting if installation is required
inputInstall = inputInstall.toUpperCase();
    
    if (inputInstall == 'Y') 
       totalCost = totalCost * 1 + installFee * inWindows;
       
    
inputVat = prompt ('Do you pay VAT? - Y or N? - ', 'Y');										//prompting the choice of VAT
inputVat = inputVat.toUpperCase();    
    
    if (inputVat == 'Y') 
    totalCost = totalCost * 1 + totalCost * 0.2;        // totalCost = totalCost * 1.2;
    
    
    
    
    alert ('Final cost of blinds for all the windows is ' + totalCost.toFixed(2) + '£');
    
    
}