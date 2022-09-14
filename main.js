const contacts = [];

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

//get contact
const get = (email)=> {
    for(let i=0;i<contacts.length;i++) {
        if (get==contacts[i].email){
            console.log("Name:Jón Jónsson")
            console.log("Email: jon@tskoli.is")
            return;
        }
    else {
        console.log ("Contact not found")
    }
    }  
}
get ("jon@tskoli.is")
console.log(contacts)


//list all

const list = (name)=> {
    names.forEach(name => console.log(name));
    list ([])
}