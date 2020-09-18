/*  chris, clint, ryan, robert
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

function webMD(ailments, meds) {

    let output = [];
    let symptoms = 0;

    for (let obj of meds) {
        console.log(obj);
        if (obj.hasOwnProperty(["treatableSymptoms"])) {
            for (let value of obj["treatableSymptoms"]) {
                console.log(value)
                for (var i = 0; i < ailments.length; i++) {
                    console.log(ailments[i]);
                    if (value == ailments[i]) {
                        symptoms += 1;
                        console.log(symptoms)
                    }
                }

            }
        }
    }
    return output;
}

console.log(webMD(["pain"], medications));
// console.log(webMD(["pain", "inflammation", "depression"], medications));
// console.log(webMD(["existential dread"], medications));

// iterative solution
// functional solution

/*
Input:["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/
-