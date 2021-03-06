const validationText = document.querySelector('.validation-text');
// _subpages_common-validation.js includes formElement variable
// _subpages_common-validation.js includes allValueFields variable


// count with validation

formElement.addEventListener('submit', function(e){
    e.preventDefault();

    // added validation focus
    for(v=0; v < allValueFields.length; v++) {
        if(allValueFields[v].value == ""){
            allValueFields[v].style.border = "2px red solid";
            validationText.style.opacity= "1";
        } else {
            allValueFields[v].style.border = 'none';
            allValueFields[v].style.borderBottom = '2px solid white';
        }
    }
    
    // validation check
    for(x=0; x < allValueFields.length; x++) {
        if (allValueFields[x].value == "") {
            return false;
        }
    }

    // CALCULATE:
    validationText.style.opacity = "0";

    const select = document.querySelector('select');
    const score = document.querySelector('.score').children[1];
    const button = document.querySelector('button');
    const ageValue = formElement.querySelector('input[type="text"].age').value;
    const growthValue = formElement.querySelector('input[type="text"].growth').value;
    const weightValue = formElement.querySelector('input[type="text"].weight').value;
    
    // hide score
    button.addEventListener('click', function() {
        score.className -= "show";
    });

    // animate show score
    function showScore() {
        score.className = "show";
    }
    setTimeout(showScore, 400);
    
    const modelMan = Math.round((66.5 + (5.003*growthValue) + (13.75*weightValue) - (6.775*ageValue)));
    const modelWoman = Math.round((655.1 + (1.85*growthValue) + (9.563*weightValue) - (4.676*ageValue)));

    if(select.selectedIndex == 0){
        score.textContent = "PPM = " + modelMan + " kcal";
    } else {
        score.textContent = "PPM = " + modelWoman + " kcal";
    }
});