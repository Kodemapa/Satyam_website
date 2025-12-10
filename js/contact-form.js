// JavaScript Document
$(document).ready(function() {

    "use strict";

    /*----------------------------------------------------*/
    /*  Cntact Form Send Function
    /*----------------------------------------------------*/

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        var studentName = $(".student-name").val();
        var email = $(".email").val();
        var classGrade = $(".class-grade").val();
        var subject = $(".subject").val();
        // Basic validation
        if (!studentName || !email || !classGrade || !subject) {
            alert("Please fill all required fields.");
            return false;
        }
        // WhatsApp number (add your school's WhatsApp number with country code, e.g., 919876543210)
        var whatsappNumber = "919731334399";
        var text =
            "Enquiry from School Website:%0A" +
            "Student Name: " + encodeURIComponent(studentName) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Class/Grade: " + encodeURIComponent(classGrade) + "%0A" +
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
            subject:{
                required: "Please select enquiry type"
            }
        }
    });
    
})



