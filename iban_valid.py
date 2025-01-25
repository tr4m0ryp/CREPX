
function Validate_IBAN(iban) {
    iban = iban.replace(/\s/g, '').toUpperCase();

    if (iban.length < 5 || iban.length > 34) {
        return false;
    } 
    
    if (!/^[A-Z]{2}/.test(iban)){
        return false
    }

    return iban
}

function containsNumbers(str) {
    return /\d/.test(str);
  }

function Valide_Name(name) {
    front_name = front_name.replace(/\s/g, '').toLowerCase();
    front_name = front_name.charAt(0).toUpperCase() + front_name.slice(1); 

    back_name = front_name.replace(/\s/g, '').toLowerCase();
    back_name = back_name.chartAt(0).toUpperCase() + backname.slice(1);

    const name = front_name + " " + back_name;

    if (constainsNumber(name) == true){ 
        return false;
    } else {
        return true; 
    };

}


function Restricted_Countries(iban) {
    country_check = /^[A-Z]{2}
    
    if (country_check = ["NL", "BE", "DE", "AE"]){
        return false
    };

}

function main() {

    const iban = "NL91ABNA0417164300";
    const front_name = "john";
    const back_name = "doe";


    if (Valide_Iban(iban) == false) {
        console.log("Not Valid Iban");
    } else {
        console.log("Your Iban-number:", Valide_iban(iban));
    };

    if (Valide_Name(front_name, back_name) == true){
        console.log("Your name is", Valide_Name.name);
    }; 

    if(Restricted_Countries(iban) == false){
        console.log("Your Country isn't allowed due privacy rules");
    };
    
}
