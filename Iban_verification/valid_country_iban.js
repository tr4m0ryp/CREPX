

function valid_county_iban(iban){

    const country_IB2 = {
        //landcode: [lengteiban, cijfers, letter, alfa]
        AL: [28,8,16],
        AD: [24,8,12],
        AT: [20,16],
        AZ: [28,4,20],
        BH: [22,4,14],
        BE: [16,12],
        BA: [20,16],
        BG: [22,4,6,8],
        HR: [21,17],
        CY: [28,8,16],
        CZ: [24,20],
        DK: [18,14],
        EE: [20,16],
        FO: [18,14],
        FI: [18,14],
        FR: [27,10,11,2],
        DE: [22,18],
        GI: [23,4,15],
        GR: [27,7,16],
        GL: [18,14],
        HU: [28,24],
        IS: [26,22],
        IE: [22,4,14],
        IL: [23,19],
        IT: [27,1,10,12],
        JO: [30,4,22],
        KZ: [20,3,13],
        XK: [20,16],
        KW: [30,4,22],
        LV: [21,4,13],
        LB: [28,4,20],
        LI: [21,5,12],
        LT: [20,16],
        LU: [20,3,13],
        MK: [19,3,10,2],
        MT: [31,4,5,18],
        MR: [27,23],
        MU: [30,4,2,2,12,3,3],
        MD: [24,20],
        MC: [27,10,11,2],
        ME: [22,18],
        NL: [18,4,10],
        NO: [15,11],
        PK: [24,4,16],
        PS: [29,4,21],
        PL: [28,24],
        PT: [25,21],
        QA: [29,4,21],
        RO: [24,4,16],
        SM: [27,1,10,12],
        SA: [24,2,18],
        RS: [22,18],
        SC: [31,4,2,2,16,3],
        SK: [24,20],
        SI: [19,15],
        ES: [24,20],
        SE: [24,20],
        CH: [21,5,12],
        TN: [24,20],
        TR: [26,5,17],
        AE: [23,3,16],
        GB: [22,4,14],
        VA: [22,18],
    };

    const landcode = iban.slice(0,2)

    //Length Checker
    if (country_IB2.hasOwnProperty(landcode)){
        
        const expected_length = country_IB2[landcode][0];
       
        if (expected_length == iban.length){
            return true;
        }else{
            console.log('non-valid iban');
            return false;
        };
    
    }else{
    console.log("Landcode", landcode, "Isn't a valid")
    return false;
};

}

