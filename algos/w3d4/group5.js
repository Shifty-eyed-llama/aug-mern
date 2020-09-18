// Ryan Marean, Beverly Kwok, Bryan Birch,

/*
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

// for loop to iterate through ailments
// for loop to iterate through meds,
// check if meds.treatableSymptoms hasOwnProperty
// if yes, push into output array



// iterative solution
// functional solution

/*
Input: ["pain"], medications
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


function webMD(ailments, meds) {
    var output = []

    for (var i = 0; i < meds.length; i++) {
        var j = 0;
        while (meds[i].treatableSymptoms.includes(ailments[j])) {
            j++;
            if (j >= ailments.length) {
                output.push(meds[i].name);
            }
        }
    }
    return output
}

console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["pain"], medications));
console.log(webMD(["existential dread"], medications));






const webMD = (ailments, meds) => meds.filter(med => med.treatableSymptoms.includes(ailments.map(ailment => med.)))


// const array = ["one", "two", "three"]
// array.forEach(function (item, index) {
//     console.log(item, index);
// });

const webMD = (ailments, meds) => meds.filter(med => med.treatableSymptoms.includes(ailments)) ///========== med objects

const webMD = (ailments, meds) => ailments.forEach(ailment => meds.filter(med => med.treatableSymptoms.includes(ailment)))



function webMD(ailments, meds) {
    var output = []

    for (var i = 0; i < meds.length; i++) {
        for (var j = 0; j < ailments.length; j++) {
            if (meds[i].treatableSymptoms.includes(ailments[j])) {
                output.push(meds[i].name)
            }
        }
    }
    return output
}