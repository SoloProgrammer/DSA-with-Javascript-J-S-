function find_surname(obj,keytomatch){
    while(!Object.keys(obj).includes(keytomatch)){
        obj = obj[Object.keys(obj)[0]];
        find_surname(obj,keytomatch)
    }
    return obj[keytomatch];
}

let obj = {
    name:{
        innername:{
            surname:{
                first_letter:'S',
                full_surname:"Shinde"
            }
        }
    }
}

find_surname(obj,'innername');