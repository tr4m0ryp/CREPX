

function valid_county_iban(iban){

    const country_IB2 = {
        AL: [28],
        AD: [24],
        AT: [20],
        AZ: [28],
        BH: [22],
        BE: [16],
        BA: [20],
        BG: [22],
        HR: [21],
        CY: [28],
        CZ: [24],
        DK: [18],
        EE: [20],
        FO: [18],
        FI: [18],
        FR: [27],
        DE: [22],
        GI: [23],
        GR: [27],
        GL: [18],
        HU: [28],
        IS: [26],
        IE: [22],
        IL: [23],
        IT: [27],
        JO: [30],
        KZ: [20],
        XK: [20],
        KW: [30],
        LV: [21],
        LB: [28],
        LI: [21],
        LT: [20],
        LU: [20],
        MK: [19],
        MT: [31],
        MR: [27],
        MU: [30],
        MD: [24],
        MC: [27],
        ME: [22],
        NL: [18],
        NO: [15],
        PK: [24],
        PS: [29],
        PL: [28],
        PT: [25],
        QA: [29],
        RO: [24],
        SM: [27],
        SA: [24],
        RS: [22],
        SC: [31],
        SK: [24],
        SI: [19],
        ES: [23],
        SE: [24],
        CH: [21],
        TN: [24],
        TR: [26],
        AE: [23],
        GB: [22],
        VA: [22],
    };

    const landcode = iban.slice(0,2)

    if (country_IB2.hasOwnProperty(landcode)){
        
        const expected_length = country_IB2[landcode][0];
       
        if (expected_length == iban.length){
            return true;
        }else{
            console.log('non-valid iban');
            return false;
        };
    
    }else{
    console.log("Landcode", landcode, " Isn't a valid")
    return false;
};


}

