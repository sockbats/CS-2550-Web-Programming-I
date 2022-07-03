const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];

$(document).ready(function () {
    initValidation("#myform");
});
           
function initValidation(formName) {
  
    let $form = $(formName);
  
    $('form :input').change(function(ev){
        validateForm();
        if(!this.checkValidity()) {
            $(`#${this.name} .errorMsg`).show()
        }
        else {
            $(`#${this.name} .errorMsg`).hide()
        }
    });
    
    $form.submit(function(event){
      $form = $(this);
      formEl=$form.get(0);
  
      event.preventDefault();  //prevent default browser submit
      event.stopPropagation(); //stop event bubbling
  
      validateForm();
  
      if (!formEl.checkValidity()){
        $("input").addClass("was-validated")
      }
      else{
        $form.hide();
        $("#thankyou").show();
      }
     
  
    });
}
  
function validateForm() {
    validateState("#state", "You must enter a valid two character state code, e.g., UT");
    
    /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/
   
    validateCheckboxGroup("#check", "find-page", "you must select at least one!");
    
}

function validateState(id, msg){
    $el = $(`${id} input`);
    let valid=false;
    if (stateAbbreviations.includes($el.val().toUpperCase())) {
        valid = true
    }
    setElementValidity(id, valid, msg);
}
  
function validateCheckboxGroup(fieldName, groupName, message) {
    let valid=false;
    let field = $(`${fieldName} li input`)
    for (let i of field.slice(0, 3)) {
        if (i.checked) {
            valid = true
        }
    }
    setElementValidity(fieldName, valid, message);

    return valid;
}
  
function setElementValidity(fieldName, valid, message){
    let $field=$(`${fieldName} input`);
    let el = $field[0];
    if (valid) {  //it has a value
        el.setCustomValidity('');  //sets to no error message and field is valid
        $(`${fieldName} .errorMsg`).hide()
    } else {
        el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
        $(`${fieldName} .errorMsg`).show()
    }
    //TODO  insert or remove message in error div for element

}
