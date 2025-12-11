// JavaScript Document
$(document).ready(function() {

    "use strict";

    /*----------------------------------------------------*/
    /*  Cntact Form Send Function
    /*----------------------------------------------------*/

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        // Always sync hidden 'subject' input with #enquiry-type value
        var enquiryType = $("#enquiry-type").val();
        $("input[name='subject']").val(enquiryType);
        var studentName = $("input[name='studentName']").val();
        var email = $("input[name='email']").val();
        var classGrade = $("input[name='classGrade']").val();
        var phoneNumber = $("input[name='phoneNumber']").val();
        var subject = $("input[name='subject']").val();
        // Basic validation
        if (!studentName || !email || !classGrade || !phoneNumber || !subject) {
            alert("Please fill all required fields.");
            return false;
        }
        var whatsappNumber = "919731334399";
        var text =
            "Enquiry from School Website:%0A" +
            "Student Name: " + encodeURIComponent(studentName) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Class/Grade: " + encodeURIComponent(classGrade) + "%0A" +
            "Phone Number: " + encodeURIComponent(phoneNumber) + "%0A" +
            "Enquiry Type: " + encodeURIComponent(subject);
        var waUrl = "https://wa.me/" + whatsappNumber + "?text=" + text;
        window.open(waUrl, '_blank');
        return false;
    });

    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });

    /*----------------------------------------------------*/
    /*  Contact Form Validation
    /*----------------------------------------------------*/
    
    $(".contact-form").validate({
        rules:{ 
            studentName:{
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email: true
            },
            classGrade:{
                required: true,
                minlength: 1
            },
            phoneNumber:{
                required: true,
                minlength: 10
            },
            subject:{
                required: true
            }
        },
        messages:{
            studentName:{
                required: "Please enter the student's name"
            },
            email:{
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            },
            classGrade:{
                required: "Please enter the class/grade"
            },
            phoneNumber:{
                required: "Please enter your phone number"
            },
            subject:{
                required: "Please select enquiry type"
            }
        }
    });
    
})



