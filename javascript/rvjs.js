// Theme

const root = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';

root.className = currentTheme;

document.querySelector('.theme').addEventListener('click', toggleTheme);

function toggleTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    localStorage.setItem('theme', newTheme);
}

// Theme

const inflationArray = [
    {date: 2016, percentage: 1.02},
    {date: 2017, percentage: 1.038},
    {date: 2018, percentage: 1.024},
    {date: 2019, percentage: 1.017},
    {date: 2020, percentage: 1.05},
    {date: 2021, percentage: 1.031},
    {date: 2022, percentage: 1.111},
    {date: 2023, percentage: 1.105},
]

const ubrArray = [
    {date: 2015.5, ubr: 48, sbrr: 49.3},
    {date: 2016.5, ubr: 48.4, sbrr: 49.7},
    {date: 2017.5, ubr: 46.6, sbrr: 47.9},
    {date: 2018.5, ubr: 48, sbrr: 49.3},
    {date: 2019.5, ubr: 49.1, sbrr: 50.4},
    {date: 2020.5, ubr: 49.9, sbrr: 51.2},
    {date: 2021.5, ubr: 49.9, sbrr: 51.2},
    {date: 2022.5, ubr: 49.9, sbrr: 51.2},
    {date: 2023.5, ubr: 49.9, sbrr: 51.2},
    {date: 2024.5, ubr: 49.9, sbrr: 51.2},
    {date: 2025.5, ubr: 49.9, sbrr: 51.2},
    /* Will apparantly remain same until April 2028 - but UK made statements really cannot be trusted */
]

// Up Cap 

const upCapS = [
    {date: 2017.5, percentage: 0.05},
    {date: 2018.5, percentage: 0.075},
    {date: 2019.5, percentage: 0.10},
    {date: 2020.5, percentage: 0.15},
    {date: 2021.5, percentage: 0.15},
    /* Probably not true values under here */
    {date: 2022.5, percentage: 0.15},
    {date: 2023.5, percentage: 0.15},
]

const upCapM = [
    {date: 2017.5, percentage: 0.125},
    {date: 2018.5, percentage: 0.175},
    {date: 2019.5, percentage: 0.20},
    {date: 2020.5, percentage: 0.25},
    {date: 2021.5, percentage: 0.25},
    /* Probably not true values under here */
    {date: 2022.5, percentage: 0.25},
    {date: 2023.5, percentage: 0.25},
]

const upCapL = [
    {date: 2017.5, percentage: 0.42},
    {date: 2018.5, percentage: 0.32},
    {date: 2019.5, percentage: 0.49},
    {date: 2020.5, percentage: 0.16},
    {date: 2021.5, percentage: 0.06},
    /* Probably not true values under here */
    {date: 2022.5, percentage: 0.06},
    {date: 2023.5, percentage: 0.06},
]

// Down Cap

const downCapS = [
    {date: 2017.5, percentage: 0.20},
    {date: 2018.5, percentage: 0.30},
    {date: 2019.5, percentage: 0.35},
    {date: 2020.5, percentage: 0.55},
    {date: 2021.5, percentage: 0.55},
    /* Probably not true values under here */
    {date: 2022.5, percentage: 0.55},
    {date: 2023.5, percentage: 0.55},
]

const downCapM = [
    {date: 2017.5, percentage: 0.10},
    {date: 2018.5, percentage: 0.15},
    {date: 2019.5, percentage: 0.20},
    {date: 2020.5, percentage: 0.25},
    {date: 2021.5, percentage: 0.25},
    /* Probably not true values under here */
    {date: 2022.5, percentage: 0.25},
    {date: 2023.5, percentage: 0.25},
]

const downCapL = [
    {date: 2017.5, percentage: 0.041},
    {date: 2018.5, percentage: 0.046},
    {date: 2019.5, percentage: 0.059},
    {date: 2020.5, percentage: 0.058},
    {date: 2021.5, percentage: 0.048},
    /* Probably not true values under here */
    {date: 2022.5, percentage: 0.048},
    {date: 2023.5, percentage: 0.048},
]

//

// Number fancy maker

function typography(num) {
    return Number(num).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function typographyDecimal(num) {
    return Number(num).toLocaleString('en-US', {minimumFractionDigits: 3, maximumFractionDigits: 3});
}

const input = document.getElementById('input');

input.addEventListener("submit", function (event) {
    event.preventDefault();
    const startYear = document.querySelector('.startYear').value;
    const startValue = document.querySelector('.startValue').value;
    const endYear = document.querySelector('.endYear').value;
    const endValue = document.querySelector('.endValue').value;
    const town = document.querySelector('.town').checked;
    console.log(startYear, startValue, endYear, endValue, town);

    // NCA Solver

    let ubrFindYear = 0;
    console.log("ubrArray:", ubrArray);
    console.log("endYear:", endYear);

    const userEndValue = document.querySelectorAll('.userEndValue');
    const ubrNCA = document.querySelector('.ubrNCA');
    const resultNCA = document.querySelector('.resultNCA');

    userEndValue.forEach(function(element) {
        element.textContent = typography(endValue);
      });

    for (let i = 0; i < ubrArray.length; i++) {
        console.log("Checking ubrArray index", i, "with date", ubrArray[i].date);
        if (ubrArray[i].date == ((+endYear + 0.5 /*(+endYear + 1))/2*/))) {
        ubrFindYear = ubrArray[i].ubr;
        console.log("Found match at index", i, "with ubr", ubrFindYear);
        break;
        }
    }
    ubrNCA.textContent = typographyDecimal((ubrFindYear/100));
    console.log(ubrFindYear);

    let nca = +endValue * (ubrFindYear/100);
    console.log("NCA =", nca);
    resultNCA.textContent = typography(nca);

    // Year Solver

    const endYearLess = document.querySelector('.endYearLess');
    const userStartValue = document.querySelector('.userStartValue');
    const ubrYear = document.querySelector('.ubrYear');
    const resultYear = document.querySelectorAll('.resultYear');

    for (let i = 0; i < ubrArray.length; i++) {
        console.log("Checking ubrArray index", i, "with date", ubrArray[i].date);
        if (ubrArray[i].date == ((+endYear + (+endYear - 1))/2)) {
        ubrFindYear = ubrArray[i].ubr;
        console.log("Found match at index", i, "with ubr", ubrFindYear);
        break;
        }
    }

    endYearLess.textContent = (endYear-1);
    userStartValue.textContent = typography(startValue);
    ubrYear.textContent = typographyDecimal((ubrFindYear/100));
    resultYear.forEach(function(element) {
        element.textContent = typography(startValue * (ubrFindYear/100));
    });

    // Inflation Solver

    const userInflation = document.querySelector('.userInflation');
    const resultInflation = document.querySelectorAll('.resultInflation');

    let inflationSolver = 0;

    if (+endYear > 2023 || +endYear < 2016) {
        alert("Error! Type Values between 2016 and 2023")
    } else if (endYear < startYear) {
        alert("Error! Starting year must be less than end year!")
    }
    else {
        for (let i = 0; i < ubrArray.length; i++) {
            console.log("Checking ubrArray index", i, "with date", ubrArray[i].date);
            if (inflationArray[i].date == (endYear - 1)) {
            inflationSolver = inflationArray[i].percentage;
            console.log("Found match at index", i, "with percentage", inflationSolver);
            break;
            }
        }
    }

    userInflation.textContent = typographyDecimal(inflationSolver);
    let inflationLogicCheck;
    resultInflation.forEach(function(element) {
        inflationLogicCheck = inflationSolver * (startValue * (ubrFindYear/100));
        element.textContent = typography(inflationLogicCheck);
    });

    // Phasing Solver

        // In London?

        let brs;
        if (town) {
            brs = 0.02;
        } else {
            brs = 0;
        }            
        console.log(brs);

        // prop size finder

        let size;
        if (brs == 0 && (startValue <= 20000 && endValue <= 20000)) {
            size = "small";
        } else if (brs == 0 && (startValue <= 100000 && endValue <= 100000)) {
            size = "medium";
        } else if (brs == 0 && (startValue > 100000 || endValue > 100000)) {
            size = "large";
        } else if (brs == 0.02 && (startValue <= 28000 && endValue <= 28000)) {
            size = "small";
        } else if (brs == 0.02 && (startValue <= 100000 && endValue <= 100000)) {
            size = "medium";
        } else if (brs == 0.02 && (startValue > 100000 || endValue > 100000)) {
            size = "large";
        } else {
            size = "error";
        }
        console.log(size);
        console.log((+endYear + (+endYear + 1))/2);



    const logicCheck = document.querySelector('.logicCheck');
    const resultPhasing = document.querySelector('.resultPhasing');

    let phasingSolver = 0;

    if (nca > inflationLogicCheck) {
        if (size == "small") {
            for (let i = 0; i < upCapS.length; i++) {
                console.log("Checking ubrArray index", i, "with date", upCapS[i].date);
                if (upCapS[i].date == ((+endYear + (+endYear + 1))/2)) {
                phasingSolver = (1 + upCapS[i].percentage);
                console.log("Found match at index", i, "with percentage", phasingSolver);
                break;
                }
            }
        } else if (size == "medium") {
            for (let i = 0; i < upCapM.length; i++) {
                console.log("Checking ubrArray index", i, "with date", upCapM[i].date);
                if (upCapM[i].date == ((+endYear + (+endYear + 1))/2)) {
                phasingSolver = (1 + upCapM[i].percentage);
                console.log("Found match at index", i, "with percentage", phasingSolver);
                break;
                }
            }
        } else if (size == "large") {
            for (let i = 0; i < upCapL.length; i++) {
                console.log("Checking ubrArray index", i, "with date", upCapL[i].date);
                if (upCapL[i].date == ((+endYear + (+endYear + 1))/2)) {
                phasingSolver = (1 + upCapL[i].percentage);
                console.log("Found match at index", i, "with percentage", phasingSolver);
                break;
                }
            }
        }
    } else if (nca < inflationLogicCheck) {
        if (size == "small") {
            for (let i = 0; i < downCapS.length; i++) {
                console.log("Checking ubrArray index", i, "with date", downCapS[i].date);
                if (downCapS[i].date == ((+endYear + (+endYear + 1))/2)) {
                phasingSolver = (1 - downCapS[i].percentage);
                console.log("Found match at index", i, "with percentage", phasingSolver);
                break;
                }
            }
        } else if (size == "medium") {
            for (let i = 0; i < downCapM.length; i++) {
                console.log("Checking ubrArray index", i, "with date", downCapM[i].date);
                if (downCapM[i].date == ((+endYear + (+endYear + 1))/2)) {
                phasingSolver = (1 - downCapM[i].percentage);
                console.log("Found match at index", i, "with percentage", phasingSolver);
                break;
                }
            }
        } else if (size == "large") {
            for (let i = 0; i < downCapL.length; i++) {
                console.log("Checking ubrArray index", i, "with date", downCapL[i].date);
                if (downCapL[i].date == ((+endYear + (+endYear + 1))/2)) {
                phasingSolver = (1 - downCapL[i].percentage);
                console.log("Found match at index", i, "with percentage", phasingSolver);
                break;
                }
            }
        }
    }
    let phasing = (inflationLogicCheck * phasingSolver);
    logicCheck.textContent = typographyDecimal(phasingSolver);
    resultPhasing.textContent = typography(phasing);
    
    // SBRR Solver

    const userUbrSbrr = document.querySelector('.userUbrSbrr');
    const resultUbrSbrr = document.querySelector('.resultUbrSbrr');

    let ubrSbrr = 0;

    for (let i = 0; i < ubrArray.length; i++) {
        console.log("Checking ubrArray index", i, "with date", ubrArray[i].date);
        if (ubrArray[i].date == ((+endYear + (+endYear - 1))/2)) {
        ubrSbrr = (ubrArray[i].sbrr - ubrArray[i].ubr);
        console.log("Found match at index", i, "subtracted amnt = ", ubrSbrr);
        break;
        }
    }
    let finalUbrSbrr = ((ubrSbrr/100) * endValue);
    userUbrSbrr.textContent = typographyDecimal((ubrSbrr/100));
    resultUbrSbrr.textContent = typography(finalUbrSbrr);

    // BRS Solver

    const isLondon = document.querySelector('.isLondon');
    const resultBrs = document.querySelector('.resultBrs');
    const tableRows = document.querySelectorAll('tr');

    isLondon.textContent = typographyDecimal(brs);
    resultBrs.textContent = typography(brs * endValue);

    if ((brs * endValue) == 0) {
        tableRows[7].style.backgroundColor = 'red';
    } else {
        tableRows[7].style.backgroundColor = 'white';
    }

    // Total

    const total = document.querySelector('.total');

    total.textContent = "?? " + typography((brs * endValue) + (finalUbrSbrr) + (phasing));

});

/* 
Get values
CHECK do the years equal any of the years in array? else return invalid year

check start & endValue 
small medium or large (london t or f)

NCA = multiply endValue with UBR of endYear

year = startValue * (UBR endYear -1)
inflation = year * inflation@year
phasing = 
    if (NCA > inflation) {
        //upwards cap
        if ()
    } else if (NCA < inflation) {
        //downwards cap
        if ()
    }

*/

