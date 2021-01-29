function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)
  

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  

  let levelOfService  //2= Noober Purple, 1= Noober XL,  0=Noober X
  let passengers = [
    { 
      passenger1Name : "John Smith",
      passenger1Phone : "312-123-4567",
      passenger1NumberOfPassengers : 1,
      passenger1PickupAddressLine1 : "10 Madison St",
      passenger1PickupAddressLine2 : " Chicago, IL",
      passenger1DropoffAddressLine1 : "20 State St, ",
      passenger1DropoffAddressLine2 : "Chicago, IL",
      numberOfPassengers : 1,
      purpleRequested = true, // True=luxury, False=regular
      
    }
    {

    
      passenger2Name : "Jennifer Watson",
      passenger2Phone : "312-987-6543",
      passenger2NumberOfPassengers : 1,
      passenger2PickupAddressLine1 : "30 Madison St, ",
      passenger2PickupAddressLine2 : "Chicago, IL",
      passenger2DropoffAddressLine1 : "40 State St,",
      passenger2DropoffAddressLine2 : " Chicago, IL", 
      numberOfPassengers : 4,
      purpleRequested = false, // True=luxury, False=regular
      
    }
  ]

    i = math.round (math.random()) // This will give us randomly either 0 or 1, i.e. 0=first passenger, 1= second passenger
    
    If (passengers.length > 1){
      levelOfService = "Noober Pool" // More than one passenger in the array
    }

    else If (passengers[i].purpleRequested == true) {
      levelOfService = "Noober Purple"
    }

    else If (passengers[i].numberOfPassengers >3) {
      levelOfService = "Noober XL"

    else {
       levelOfService = "Noober X"
      }
    }

 
      
    

    


       




  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}