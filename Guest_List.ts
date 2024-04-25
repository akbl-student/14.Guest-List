

let Guest_List :string [] = ['asif','ali','amjid'];

//for(let i=0; i<Guest_List.length; i++){
    //console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!')
//}
let absent_Guest :string = 'Amjid';

let new_Guest :string = 'jawid';

Guest_List[0] = new_Guest;

//for (let i = 0; i <Guest_List.length; i++) {
 
   // console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!');

//}
console.log('Mr. ${absent_Guest} is not coming to the party.');

console.log("Good News! we find big table so we are inviting 3 guest.")
Guest_List.unshift('sir zia khan');
Guest_List.splice(2,0,'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

for (let i = 0; i <Guest_List.length; i++) {
 
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!');

}
console.log('\nSorry we not arrange big table, only two peples will be invited.');

while(Guest_List.length > 2){
    Guest_List.pop();
    console.log('Sorry Mr. ${remove_Guest}, you are not invited for dinner.);

}
for (let i = 0; i <Guest_List.length; i++) {
 
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!');

}
Guest_List.splice(0,2);

console.log(Guest_List);



