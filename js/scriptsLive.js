/****** FILE: themes/wec/js/fontawesome/fontawesome-all.min.js *****/

/****** FILE: themes/wec/js/core.js *****/
;

/****** FILE: themes/wec/js/script.js *****/

$(document).ready(function(){$('#Form_RegisterForm').change(function(){var formData=$('#Form_RegisterForm').serializeArray();if(getFieldValue(formData,"GST")=="Yes"&&getFieldValue(formData,"PAN")=="Yes"){var fullName=getFieldValue(formData,"FirstName")+" "+getFieldValue(formData,"Surname")
var requiredFields=["Mobile","Email","Designation"]
var linkData=[{name:"name",value:fullName}];for(var i=0;i<requiredFields.length;i++){var val=getFieldValue(formData,requiredFields[i]);linkData[i+1]={name:requiredFields[i].toLowerCase(),value:val}}
var link="https://www.smefirst.com/?"+$.param(linkData)+"&source=niti";$(".crisil-link-wrapper").toggleClass('d-none',false);$(".crisil-link-wrapper #crisil-link").attr('href',link);}
else{$(".crisil-link-wrapper").toggleClass('d-none',true);}});var recaptchaCallback=function(){var elementExists=document.getElementById('recaptcha_bubble');if(null!=elementExists){grecaptcha.render('recaptcha_bubble',{'sitekey':'the site key here'});}};function getFieldValue(fieldArray,fieldName){var response="";$.each(fieldArray,function(i,field){if(field.name==fieldName){response=field.value;}});return response;}
$("#Form_RegisterForm").validate({rules:{FirstName:"required",Surname:"required",Mobile:{"required":true,minlength:10,maxlength:10,number:true},'Password[_Password]':"required",'Password[_ConfirmPassword]':{equalTo:"#Password_Password"},Designation:"required",PAN:"required",GST:"required",Qualifications:"required",Address:"required",City:"required",Pincode:{"required":true,minlength:6,maxlength:6,number:true},Email:{required:true,email:true}}});$("#Form_ProfileForm").validate({rules:{FirstName:"required",Surname:"required",Mobile:{"required":true,minlength:10,maxlength:10,number:true},Designation:"required",PAN:"required",GST:"required",Qualifications:"required",Address:"required",City:"required",Pincode:{"required":true,minlength:6,maxlength:6,number:true},Email:{required:true,email:true}}});$("#Form_ApplicationForm").validate({rules:{WEPID:"required",Email:{required:true,email:true},Submission:"required",InitiativeBrief:{"required":true,maxlength:600,},InitiativeImpact:{"required":true,maxlength:1200},AdditionalInfo:{maxlength:1200},Attachment:{required:false,extension:"doc|docx|pdf"},}});});;
