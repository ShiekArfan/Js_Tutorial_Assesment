let Countries_array = ["China", "India", "UnitedStates", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia"]
let country =prompt("Enter the Country Name :");

if (country==Countries_array && Countries_array=="Ethiopia"){
    console.log ("The entered Country Name is exist in the List")
}
else {
    Countries_array.push("Ethiopia") == country
    console.log ("Since the Ethiopia Country was not in list, its added now ==> ", Countries_array)
}
