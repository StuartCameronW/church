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

// The following are kept as decimals because the calculations require later values too, e.g. 2015 is entered and 2016 data required

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
    // Will apparantly remain same until April 2028 - but UK made statements really cannot be trusted
    // UBR for big >=51000 RVs and lower is SBRR
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

// London Logic

const cityOfLondonCheckbox = document.getElementById('cityLondon');
const greaterLondonCheckbox = document.getElementById('greaterLondon');

cityOfLondonCheckbox.addEventListener('change', () => {
  if (cityOfLondonCheckbox.checked) {
    greaterLondonCheckbox.checked = true;
    greaterLondonCheckbox.style.opacity = '0.5';
  } else {
    greaterLondonCheckbox.style.opacity = '1';
  }
});

greaterLondonCheckbox.addEventListener('click', () => {
    if (cityOfLondonCheckbox.checked) {
      greaterLondonCheckbox.checked = true;
    }
});

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
    console.log(startYear, startValue, endYear, endValue);

    // In City of London?

    let brs;
    cityOfLondonCheckbox.checked ? brs = 0.02 : brs = 0;
    let cityLondon;
    cityOfLondonCheckbox.checked ? cityLondon = 0.004 : cityLondon = 0;

    // In Greater London?

    let greaterLondon;
    greaterLondonCheckbox.checked ? greaterLondon = true : greaterLondon = false;

    // NCA Solver

    const userEndValue = document.querySelectorAll('.userEndValue');
    const ubrNCA = document.querySelector('.ubrNCA');
    const resultNCA = document.querySelector('.resultNCA');

    userEndValue.forEach(function(element) {
        element.textContent = typography(endValue);
    });

    let ubrFindYear = 0;
    let ncaUbrFindYear = 0;

    function findUbrPos() {
        for (let i = 0; i < ubrArray.length; i++) {
            if (ubrArray[i].date == (+endYear + 0.5)) {
                ncaUbrFindYear = ubrArray[i].ubr;
                console.log("Found ubr pos", i, "with ubr", ncaUbrFindYear);
                return ncaUbrFindYear;
            }
        }
    }

    function findSbrrPos() {
        for (let i = 0; i < ubrArray.length; i++) {
            if (ubrArray[i].date == (+endYear + 0.5)) {
                ncaUbrFindYear = ubrArray[i].sbrr;
                console.log("Found sbrr pos", i, "with sbrr", ncaUbrFindYear);
                return ncaUbrFindYear;
            }
        }
    }

// Start Value for Phasing

    if (endYear > 2018 && startValue >= 51000) {
        ubrFindYear = findSbrrNeg();
    } else if (endYear <= 2018 && startValue < 51000) {
        if (greaterLondon === true && startValue < 25500) {
            ubrFindYear = findUbrNeg()
        } else if (greaterLondon === true && startValue >= 25500) {
            ubrFindYear = findSbrrNeg()
        } else if (greaterLondon === false && startValue < 18000) {
            ubrFindYear = findUbrNeg();
        } else if (greaterLondon === false && startValue >= 18000) {
            ubrFindYear = findSbrrNeg();
        }
    } else if (endYear <= 2018 && startValue > 51000) {
        ubrFindYear = findSbrrNeg();
    } else if (endYear > 2018 && startValue < 51000) {
        ubrFindYear = findUbrNeg();
    }

// End Value for NCA

    if (endYear > 2018 && endValue >= 51000) {
        ncaUbrFindYear = findSbrrPos();
    } else if (endYear <= 2018 && endValue < 51000) {
        if (greaterLondon === true && endValue < 25500) {
            ncaUbrFindYear = findUbrPos();
        } else if (greaterLondon === true && endValue >= 25500) {
            ncaUbrFindYear = findSbrrPos();
        } else if (greaterLondon === false && endValue < 18000) {
            ncaUbrFindYear = findUbrPos();
        } else if (greaterLondon === false && endValue >= 18000) {
            ncaUbrFindYear = findSbrrPos();
        }
    } else if (endYear <= 2018 && endValue > 51000) {
        ncaUbrFindYear = findSbrrPos();
    } else if (endYear > 2018 && endValue < 51000) {
        ncaUbrFindYear = findUbrPos();
    }

    ubrNCA.textContent = typographyDecimal((ncaUbrFindYear/100 + cityLondon));
    console.log(ncaUbrFindYear);

    let nca = +endValue * (ncaUbrFindYear/100 + cityLondon);
    console.log("NCA =", nca);
    resultNCA.textContent = "£ " + typography(nca);

    // Year Solver

    const endYearLess = document.querySelector('.endYearLess');
    const userStartValue = document.querySelector('.userStartValue');
    const ubrYear = document.querySelector('.ubrYear');
    const resultYear = document.querySelectorAll('.resultYear');

    function findUbrNeg() {
        for (let i = 0; i < ubrArray.length; i++) {
            if (ubrArray[i].date == (+endYear - 0.5)) {
                ubrFindYear = ubrArray[i].ubr;
                console.log("Found ubr neg", i, "with ubr", ubrFindYear);
                return ubrFindYear;
            }
        }
    }

    function findSbrrNeg() {
        for (let i = 0; i < ubrArray.length; i++) {
            if (ubrArray[i].date == (+endYear - 0.5)) {
                ubrFindYear = ubrArray[i].sbrr;
                console.log("Found sbrr neg", i, "with sbrr", ubrFindYear);
                return ubrFindYear;
            }
        }
    }

    endYearLess.textContent = `${endYear - 1} RV`;
    userStartValue.textContent = typography(startValue);
    ubrYear.textContent = typographyDecimal(ubrFindYear/100 + cityLondon);
    resultYear.forEach((element) => {
        element.textContent = typography(startValue * (ubrFindYear/100 + cityLondon));
    });

    // Inflation Solver

    const userInflation = document.querySelector('.userInflation');
    const resultInflation = document.querySelectorAll('.resultInflation');

    let inflationSolver = 0;

 
    for (let i = 0; i < ubrArray.length; i++) {
        if (inflationArray[i].date == (endYear - 1)) {
        inflationSolver = inflationArray[i].percentage;
        console.log("Found inflation at", i, "with percentage", inflationSolver);
        break;
        }
    }

    userInflation.textContent = typographyDecimal(inflationSolver);
    let inflationLogicCheck;
    resultInflation.forEach(function(element) {
        inflationLogicCheck = inflationSolver * (startValue * (ubrFindYear/100));
        element.textContent = typography(inflationLogicCheck);
    });

    // Phasing Solver

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
        console.log(+endYear + 0.5);
    
    const logicCheck = document.querySelector('.logicCheck');
    const resultPhasing = document.querySelector('.resultPhasing');

    let phasingSolver = 0;

    if (nca > inflationLogicCheck) {
        console.log('NCA IS BIGGER');
        if (size == "small") {
            phasingSolver = checkDate(upCapS, true);
        } else if (size == "medium") {
            phasingSolver = checkDate(upCapM, true);
        } else if (size == "large") {
            phasingSolver = checkDate(upCapL, true);
        }
    } else if (nca < inflationLogicCheck) {
        console.log('NCA IS LESS');
        if (size == "small") {
            phasingSolver = checkDate(downCapS, false);
        } else if (size == "medium") {
            phasingSolver = checkDate(downCapM, false);
        } else if (size == "large") {
            phasingSolver = checkDate(downCapL, false)
        }
    }

        function checkDate(cap, input) {
            for (let i = 0; i < cap.length; i++) {
                if (+cap[i].date == (+endYear + 0.5)) {
                    input ? phasingSolver = (1 + cap[i].percentage) : phasingSolver = (1 - cap[i].percentage);
                    console.log("At index", i, "Phasing is", cap[i].percentage, phasingSolver);
                    return phasingSolver;
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
        if (ubrArray[i].date == (+endYear - 0.5)) {
        ubrSbrr = (ubrArray[i].sbrr - ubrArray[i].ubr);
        console.log("Found SBRR at index", i, "subtracted amnt = ", ubrSbrr);
        break;
        }
    }
    let finalUbrSbrr = ((ubrSbrr/100) * endValue + cityLondon); // + cityLondon may be falsey check later
    userUbrSbrr.textContent = typographyDecimal((ubrSbrr/100 + cityLondon)); // + cityLondon may be falsey check later
    resultUbrSbrr.textContent = typography(finalUbrSbrr);

    // BRS Solver

    const isLondon = document.querySelector('.isLondon');
    const resultBrs = document.querySelector('.resultBrs');
    const tableRow = document.getElementById('brsRow');

    isLondon.textContent = typographyDecimal(brs);
    resultBrs.textContent = typography(brs * endValue);

    if ((brs) === 0) {
        tableRow.style.backgroundColor = 'darkred';
    } else {
        tableRow.style.backgroundColor = 'var(--background-color)';
    }

    // Total

    const total = document.querySelector('.total');

    total.textContent = "£ " + typography((brs * endValue) + (finalUbrSbrr) + (phasing));

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

