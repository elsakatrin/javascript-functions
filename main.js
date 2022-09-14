//Javascript - functions

//array
let contacts = [];


//This was made from Smáris video 
//It tells us that we've added contacts, if we added the same one often than once or if we didn't fill out what was needed
const add = (contact)=> { //parameter 
    for(let i=0;i<contacts.length;i++) {
        if(contact.email===contacts [i].email){
            console.log("Duplicate was found")
            return; 
        }
    }
    if(!contact.email || !contact.name){ //The '!' means NO and the '||' means OR 
        console.log("missing fields")
        return;
    }
    contacts.push(contact);
    console.log ("was added");
}






//Here I add to my contact list, names and emails 
add ({name: "Anna Valsdóttir", email: "anna@tskoli.is"})
add ({name: "Jón Jónsson", email: "jon@tskoli.is"})
add ({name: "Hildur Eiríksdóttir", email:"hildur@tskoli.is"})
console.log ("after add")
//Add is a function






//remove 
//I removed the information from Hildur on the list 
const remove = (email)=> { 
    for(let i=0;i<contacts.length;i++) {
        if(email==contacts[i].email){
            console.log("removing email");
            contacts.splice(i, 1); //splice is used to modify the contents of an array by removing existing elements and / or adding new elements.
            return;
        } 
    
    else {
        console.log("contact not found") //Hildur was not found, because she was removed
    }
}
}
remove ("hildur@tskoli.is"); //Here it would be possible to put another email and remove someone else instead 
console.log(contacts); //Printed the contact list after Hildur was removed 
//Remove is a function






//edit
//I edited both name and email for Anna 
const edit = (email,newData)=> {
    for(let i=0;i<contacts.length;i++) {
        if (email==contacts[i].email){
		contacts[i]=newData
 		console.log ("was updated")
            return;
        }
    	else {
        console.log ("Not updated")
    	}
    }  
}
edit ("anna@tskoli.is", {name: "Anna Blabla", email: "blabla@tskoli.is"}) //Here is where Annas name and email was changed 
//Edit is a function





//get contact
//This prints out Jóns information
const get = (email)=> {
    for(let i=0;i<contacts.length;i++) {
        if (email==contacts[i].email){
            console.log(contacts[i].name) //This prints the name 
            console.log(contacts[i].email) //This prints the email - I could have used "Name: Jón" but then I couldn't change the person I would have liked to find
            return;
        }
    } 
        console.log ("Contact not found")   //If there's no Jón this prints 
}
get ("jon@tskoli.is") // Here I could change the email and find a different person, because of how it's listed in the console log above
console.log(contacts)
//Get is a funtion




//list all
//Here I list the contacts, except for Hildur because she had already been removed from the list 
const list = (names)=> {
    names.forEach(name => console.log(name));
    }
list (contacts)
//List is a function




//Clear
//I cleared the contact list so it's empty - try to type 'contacts' into the console to see 
const clear = ()=> {
    contacts = []
    console.log ("The contact list was cleared") 
    }
    clear ()
    //Clear is a function 

