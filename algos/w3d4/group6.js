/*//Participants Group6 - Daniel Havens, Jennifer Joy, Yunzhou Zhou
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
    newArr = [];
    for (var i = 0; i < ailments.length; i++) {
        for (var j = 0; j < meds.length; j++) {
            if (ailments[i].hasOwnProperty('treatableSymptoms')) {
                for (var n = 0; n < meds['treatableSymptoms'].length; n++) {
                    if (meds[j]['treatableSymptoms'][n] == ailments[i]) {
                        newArr.push(meds[i].name);
                    }


                }
            }
        }
        return newArr;
    }





    const webMD2 = (ailments, meds) => {
        return ailments.filter(ailment => ailment.treatableSymptoms.includes(meds)).map(ailment => ailment.name);
    }

    console.log(webMD2(["pain"], medications))
    console.log(webMD2(["pain", "inflammation", "depression"], medications))
    console.log(webMD2(["existential dread"], medications))

    // iterative solution
    // functional solution
    //functional example from yesterday
    // const naughtyList = (people, habit) => meds.filter(person => meds.ailments.includes(habit)).map(person => `${person.firstName}, ${person.lastName}`)
    //const webMD = (ailments, meds) => meds.filter(person => person.habits.includes(habit)).map(person => `${person.firstName}, ${person.lastName}`)
    /*
    Input: ["pain"], medications
    Output: ["PainAssassinator", "Longvida Curcumin"]
    */

    /*
    Input: ["pain", "inflammation", "depression"], c
    Output: ["Longvida Curcumin"]
    */

    /*
    Input: ["existential dread"], medications
    Output: []
    */
    n