let contacts = [];

const add = (contact)=> { //parameter 
    for(let i=0;i<contacts.length;i++) {
        if(contact.email===contacts [i].email){
            console.log("Duplicate was found")
            return;
        }
    }
    if(!contact.email || !contact.name){
        console.log("missing fields")
        return;
    }
    contacts.push(contact);
    console.log ("was added");
}


add ({name: "Anna Valsdóttir", email: "anna@tskoli.is"})
add ({name: "Jón Jónsson", email: "jon@tskoli.is"})
add ({name: "Hildur Eiríksdóttir", email:"hildur@tskoli.is"})
console.log ("after add")




/*removedEl = contacts.splice(0, 1);
console.log(add);
console.log(removedEl);*/



//remove email
const remove = (email)=> { //parameter 
    for(let i=0;i<contacts.length;i++) {
        if(email==contacts[i].email){
            console.log("removing email");
            contacts.splice(i, 1);
            return;
        } 
    
    else {
        console.log("contact not found")
    }
}
}

   /* contacts.push(contact);
    console.log ("remove email"); */


remove ("hildur@tskoli.is");
console.log(contacts);


//edit

const edit = (email,newData)=> {
    for(let i=0;i<contacts.length;i++) {
        if (email==contacts[i].email){
		contacts[i]=newData
 		console.log ("was updated")
            return;
        }
    	else {
        console.log ("updated")
    	}
    }  
}
edit ("anna@tskoli.is", {name: "Anna Blabla", email: "blabla@tskoli.is"})



//get contact
const get = (email)=> {
    for(let i=0;i<contacts.length;i++) {
        if (email==contacts[i].email){
            console.log(contacts[i].name)
            console.log(contacts[i].email)
            return;
        }
    } 
    
        console.log ("Contact not found")   
}
get ("jon@tskoli.is")
console.log(contacts)


//list all

const list = (names)=> {
    names.forEach(name => console.log(name));
    }
    add ({name: "Hildur Eiríksdóttir", email:"hildur@tskoli.is"})
list (contacts)

//Clear

const clear = ()=> {
    contacts = []
    console.log ("The contact list was cleared")
    }
    clear ()
