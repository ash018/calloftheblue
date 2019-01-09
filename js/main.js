jQuery.validator.addMethod("wordCount", function (value, element, params) {
	var count = getWordCount(value);
	if (count >= params[0] && count <= params[1]) {
		return true;
	}
}, jQuery.validator.format("A minimum of {0} words and maximum of {1} is required."));

function getWordCount(wordString) {
	var words = wordString.split(" ");
	words = words.filter(function (words) {
		return words.length > 0
	}).length;
	return words;
}

function socialNetowrkShare() {
	stLight.options({
		popup: 'true',
		publisher: "465ba087-f6d1-4d8b-ac35-426b657d62c6",
		doNotHash: false,
		doNotCopy: false,
		hashAddressBar: false
	});
	stWidget.addEntry({
		"service": "facebook",
		"element": document.getElementById('fb_share_button'),
		"url": "http://www.site.com/link/to/share/",
		"title": "Title",
		"type": "hcount"
	});
}
if ($('input[name="contestType"]').length > 1) {
	$('input[name="contestType"]').on("click", function () {
		checkEventType($(this).val());
	});
}
$("a[name='show-contest-modal']").on('click', function () {
	$('[name="contestType"]').removeAttr('checked');
	$("input[name='contestType'][value='" + $(this).attr('data-type') + "']").prop('checked', true);
	checkEventType($(this).attr('data-type'));
});

function printDetail() {
	var printContents = document.getElementById('event-pass').innerHTML;
	var originalContents = document.body.innerHTML;
	document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = originalContents;
}

function checkEventType(eventType) {
	if (eventType == "cotbRegisterAndWin") {
		$("#terms-block,#bikeDetails,#riding-info").addClass('hidden');
		$("#owner-opt").removeClass('col-md-offset-1 col-md-5').addClass('text-center');
	} else if (eventType == "cotbFameEvent") {
		$("#terms-block,#bikeDetails,#riding-info").removeClass('hidden');
		$("#owner-opt").addClass('col-md-offset-1 col-md-5').removeClass('text-center');
	} else {
		$("#bikeDetails").addClass('hidden');
		$("#terms-block,#riding-info").removeClass('hidden');
		$("#owner-opt").addClass('col-md-offset-1 col-md-5').removeClass('text-center');
	}
	$("#terms-pdf").prop("href", "theme/contest/calloftheblue/images/" + eventType + "Terms.pdf");
}
$(document).on("click", ".share-social", function () {
	socialNetowrkShare();
	$('#stwrapper').append('<a href="#" data-dismiss="modal" class="modal_close"><img src="https://www.yamaha-motor-india.com//theme/image//moto-gp/close.png" class="img-responsive"></a>');
});
$("#navbar li").on("click", function () {
	$("#navbar").removeClass('in');
});

function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription, overrideImage) {
	FB.ui({
		method: 'share_open_graph',
		action_type: 'og.likes',
		action_properties: JSON.stringify({
			object: {
				'og:url': "hi",
				'og:title': "test title",
				'og:description': "cotb contest like",
				'og:image': "www.yamaha-motor-india.com/theme/contest/calloftheblue/images/calloftheblue1.png"
			}
		})
	}, function (response) {});
}
$(document).ready(function () {
	if ($('#owl_top_slider')[0])
		init_owl_carouselAutoPlay("#owl_top_slider .owl-carousel", true);
	if ($('.product-sliders')[0])
		init_owl_carouselAutoPlay(".product-sliders .owl-carousel", true);
	if ($('#philosophy')[0])
		init_owl_carouselAutoPlay("#philosophy .owl-carousel", true);
	if ($('#accessories')[0])
		init_owl_carouselAutoPlay("#accessories .owl-carousel", true);
	init_slider('#owl_images');
	init_slider('#owl_videos');
	init_gallery('#owl_gallery');
	$('.share-social').click(function () {
		socialNetowrkShare();
	});

	function init_slider(element_id) {
		$(element_id).owlCarousel({
			margin: 10,
			nav: true,
			loop: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});
	}

	function init_gallery(element_id) {
		$(element_id).owlCarousel({
			margin: 10,
			nav: true,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 6
				}
			}
		});
	}

	function init_owl_carouselAutoPlay(element_id, autoplay) {
		$(element_id).owlCarousel({
			nav: true,
			loop: true,
			autoplay: autoplay,
			autoWidth: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}
	if ($("#result").html() != '') {
		$('#success-modal').modal('show');
	}
	$('#verifymobOtpAllEvent').click(function () {
		if ($("#mobileNoAllEvent,#mobOtpAllEvent").valid()) {
			validateMobileAndEmail('mobileNoAllEvent', 'mobOtpAllEvent', 'AllEvent');
		}
	});
	$(function () {
		$('#mobileNoAllEvent,#alternateMobileNoAllEvent, #otpAllEvent').on('keypress', function (event) {
			return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode === 0);
		});
		$('#sendmobOtpAllEvent').click(function () {
			var formId = $("#mobileNoAllEvent").closest('form').attr('id');
			$("#mobileNoAllEvent").validate({
				rules: {
					mobileNoAllEvent: {
						required: true,
						number: true,
						minlength: 10,
						maxlength: 12
					}
				},
				messages: {
					mobileNoAllEvent: {
						required: "Please enter valid contact number",
					}
				}
			});
			if ($("#mobileNoAllEvent").valid()) {
				$("#mobOtpNotVerifiedAllEvent").html("");
				$('#mobOtpElementAllEvent').show();
				validateMobileAndEmail('mobileNoAllEvent', '', 'AllEvent');
			}
		});
	});
	$('#verifymobOtpTrack').click(function () {
		if ($("#mobileNoTrack,#mobOtpTrack").valid()) {
			validateMobileAndEmail('mobileNoTrack', 'mobOtpTrack', 'Track');
		}
	});
	$(function () {
		$('#mobileNoTrack,#alternateMobileNoTrack, #otpAllEventTrack').on('keypress', function (event) {
			return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode === 0);
		});
		$('#sendmobOtpTrack').click(function () {
			var formId = $("#mobileNoTrack").closest('form').attr('id');
			$("#mobileNoTrack").validate({
				rules: {
					mobileNoTrack: {
						required: true,
						number: true,
						minlength: 10,
						maxlength: 12
					}
				},
				messages: {
					mobileNoTrack: {
						required: "Please enter valid contact number",
					}
				}
			});
			if ($("#mobileNoTrack").valid()) {
				$("#mobOtpNotVerifiedTrack").html("");
				$('#mobOtpElementTrack').show();
				validateMobileAndEmail('mobileNoTrack', '', 'Track');
			}
		});
	});
	$('#verifymobOtp').click(function () {
		if ($("#mobileNo,#mobOtp").valid()) {
			//validateMobileAndEmail('mobileNo', 'mobOtp', '');
			verify_mob_otp('mobileNo', 'mobOtp', '');
		}
	});
	$(function () {
		$('#mobileNo,#alternateMobileNo, #otp').on('keypress', function (event) {
			return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode === 0);
		});
		$('#sendmobOtp').click(function () {
			$("#mobileNo-info").hide();
			var formId = $("#mobileNo").closest('form').attr('id');
			$("#mobileNo").validate({
				rules: {
					mobileNo: {
						required: true,
						number: true,
						minlength: 11,
						maxlength: 12
					}
				},
				messages: {
					mobileNo: {
						required: "Please enter valid contact number",
					}
				}
			});
			if ($("#mobileNo").valid()) {
				$("#mobOtpNotVerified").html("");
				$('#mobOtpElement').show();
				//validateMobileAndEmail('mobileNo', '', '');
				get_otp_number('mobileNo', '', '');
			}
		});
	});

	function validateGroupName() {
		if ($("#groupName").val() == '') {
			$('#groupName-error').html("Please tell the Riding Group Name");
			return false;
		} else {
			return true;
		}
	}
	
	function get_otp_number(field, otpType, EventType) {
		var formId = $("#" + field + "").closest('form').attr('id');
		var receipient = $("#" + field + "").val();;
		if (otpType != '') {
			var otp = $("#" + otpType + "").val();
		}
		if (field != "") {
			$.ajax({
				method: "POST",
				url: "get_otp_number.php",
				data: {
					type: field,
					otp: otp,
					receipient: receipient,
					AJAX: 1
				}
			}).done(function (responsedata) {
				console.log(responsedata);//return false;
				switch ($.trim(responsedata)) {
					case 'valid':
					console.log(field);
						//$(otpType + "NotVerified").html("");
						//$('#verify' + otpType + '').html("Verified").prop("disabled", "true").parent().addClass('not-allowed');
						//$('#send' + otpType + '').prop("disabled", "true").parent().addClass('not-allowed');
						//$('#verified' + field + '').val('1');
						$('#' + field + '-error').hide();
						$('#' + field + '-success').html(" OTP has been send.Please check your SMS");
						/*if ($('#verifiedmobileNo' + EventType + '').val() == '1') {
							$("#mobOtpNotVerified" + EventType + "").html("");
							$("#mobileNo" + EventType + ",#mobOtp" + EventType).prop("readonly", "true");
						}*/
						break;
					case 'invalid':
						$('#' + field + '-error').html("OTP does not send.");
						$('#' + field + '-error').show();
						break;
					case 'success':
						break;
					case 'error':
						break;
					default:
						break;
				}
			})
		}
	}
	
	function verify_mob_otp(field, otpType, EventType) {
		var formId = $("#" + field + "").closest('form').attr('id');
		var receipient = $("#" + field + "").val();;
		if (otpType != '') {
			var otp = $("#" + otpType + "").val();
		}
		if (field != "") {
			$.ajax({
				method: "POST",
				url: "verify_mob_otp.php",
				data: {
					type: field,
					otp: otp,
					receipient: receipient,
					AJAX: 1
				}
			}).done(function (responsedata) {
				//console.log(responsedata);return false;
				switch ($.trim(responsedata)) {
					case 'valid':
						$(otpType + "NotVerified").html("");
						$('#verify' + otpType + '').html("Verified").prop("disabled", "true").parent().addClass('not-allowed');
						$('#send' + otpType + '').prop("disabled", "true").parent().addClass('not-allowed');
						$('#verified' + field + '').val('1');
						$('#' + otpType + '-error').hide();
						$('#' + otpType + '-success').html($('#' + otpType + '-success').data('type') + " OTP has been Verified.");
						if ($('#verifiedmobileNo' + EventType + '').val() == '1') {
							$("#mobOtpNotVerified" + EventType + "").html("");
							$("#mobileNo" + EventType + ",#mobOtp" + EventType).prop("readonly", "true");
						}
						break;
					case 'invalid':
						$('#' + otpType + '-error').html("Please enter valid OTP");
						$('#' + otpType + '-error').show();
						break;
					case 'success':
						break;
					case 'error':
						break;
					default:
						break;
				}
			})
		}
	}
	
	function validateMobileAndEmail(field, otpType, EventType) {
		var formId = $("#" + field + "").closest('form').attr('id');
		var receipient = $("#" + field + "").val();;
		if (otpType != '') {
			var otp = $("#" + otpType + "").val();
		}
		if (field != "") {
			$.ajax({
				method: "POST",
				url: "r15motogp-getotp.php",
				data: {
					type: field,
					otp: otp,
					receipient: receipient,
					AJAX: 1
				}
			}).done(function (responsedata) {
				console.log(responsedata);return false;
				switch ($.trim(responsedata)) {
					case 'valid':
						$(otpType + "NotVerified").html("");
						$('#verify' + otpType + '').html("Verified").prop("disabled", "true").parent().addClass('not-allowed');
						$('#send' + otpType + '').prop("disabled", "true").parent().addClass('not-allowed');
						$('#verified' + field + '').val('1');
						$('#' + otpType + '-error').hide();
						$('#' + otpType + '-success').html($('#' + otpType + '-success').data('type') + " OTP has been Verified.");
						if ($('#verifiedmobileNo' + EventType + '').val() == '1') {
							$("#mobOtpNotVerified" + EventType + "").html("");
							$("#mobileNo" + EventType + ",#mobOtp" + EventType).prop("readonly", "true");
						}
						break;
					case 'invalid':
						$('#' + otpType + '-error').html("Please enter valid OTP");
						$('#' + otpType + '-error').show();
						break;
					case 'success':
						break;
					case 'error':
						break;
					default:
						break;
				}
			})
		}
	}
	
	$('.terms-popup').click(function (event) {
		$('.terms-popup').addClass("show-modal");
		$('#termsconditions-modal').modal('show');
	});
	
	$('#btnAllEventEventRegister').click(function (event) {
		var status = $("#callOfTheBlueAllEvent").valid();
		if ($("#verifiedmobileNoAllEvent").val() == '1') {
			$("#mobOtpNotVerifiedAllEvent").html("");
			if (status) {
				contest = $("input[name='contestType']:checked").val();
				email = $('#emailAllEvent').val();
				name = $('#nameAllEvent').val();
				lastname = $('#lastnameAllEvent').val();
				mobile = $('#mobileNoAllEvent').val();
				owner = $("input[name='owner']:checked").val();
				if (contest == "cotbTrackEvent" || contest == "cotbFameEvent") {
					bikeModel = $('#bikeModel').val();
					modelYear = $('#modelYear').val();
				} else {
					bikeModel = "";
					modelYear = "";
				}
				if ((contest == "cotbBreakfastEvent" || contest == "cotbFameEvent") && owner == "no") {
					$('#owner-error').html("You must be a Yamaha Owner to participate!");
					return;
				} else {}
				if ($("input[name='groupExists']:checked").val() == 'yes' && $("input[name='ridingInGroup']:checked").val() == 'yes') {
					if (validateGroupName()) {
						groupDetail = "With '" + $('#groupName').val() + "'";
					} else {
						groupDetail = '';
						return;
					}
				} else if ($("input[name='groupExists']:checked").val() == 'yes' && $("input[name='ridingInGroup']:checked").val() == 'no') {
					if (validateGroupName()) {
						groupDetail = "Without '" + $('#groupName').val() + "'";
					} else {
						groupDetail = '';
						return;
					}
				} else {
					groupDetail = '';
				}
				city = $('#cityAllEvent').val();
				formType = "registerAllEvent";
				var $btn = $(this).button('loading');
				$('#register .error-message').html('');
				$.ajax({
					method: "POST",
					url: "calloftheblue-registerlogin.html",
					data: {
						contestName: contest,
						comment: groupDetail,
						email: email,
						owner: owner,
						name: name,
						lastname: lastname,
						mobileNo: mobile,
						city: city,
						bikeModel: bikeModel,
						modelYear: modelYear,
						formType: formType,
						AJAX: 1
					},
					success: function (response) {
						response = $.trim(response);
						if (contest != 'cotbRegisterAndWin') {
							$('#result').html("<h1 class='response-heading'><span>" + response + "</span></h1>");
						} else {
							$('#result').html(response);
						}
						$("#callOfTheBlueAllEvent")[0].reset();
						$('#AllEvent-modal').modal('hide');
						$('#result-modal').modal('show');
						$("#mobileNoAllEvent,#mobOtpAllEvent").removeAttr("readonly");
						$('#mobOtpAllEvent-success').html('');
						$("#verifiedmobileNo").val("");
						$('#verifymobOtpAllEvent').html("Verify");
					},
					complete: function () {
						$btn.button('reset');
					}
				});
			}
		} else if ($("#mobileNoAllEvent").val() != "" && $("#verifiedmobileNoAllEvent").val() != '1') {
			$("#mobOtpNotVerifiedAllEvent").html("Click Get OTP to verify Mobile No.");
			if ($("#mobOtpAllEvent").val() == "") {
				$("#mobOtpAllEvent-error").html("Please verify OTP to proceed").show();
			}
			$("#verifymobOtpAllEvent").trigger("click");
		}
	});
	
	$("#callOfTheBlueAllEvent").validate({
		rules: {
			nameAllEvent: {
				required: true,
				letterswithspaceonly: true
			},
			lastnameAllEvent: {
				required: true,
				letterswithspaceonly: true
			},
			mobileNoAllEvent: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 12,
				numbersonly: true
			},
			emailAllEvent: {
				required: true,
				customemail: true
			},
			cityAllEvent: {
				required: true
			},
			contestType: {
				required: true
			},
			mobOtpAllEvent: {
				required: true,
				number: true
			},
			agreeAllEvent: {
				required: true
			},
			owner: {
				required: true
			},
			groupExists: {
				required: true
			},
			ridingInGroup: {
				required: true
			},
			modelYear: {
				required: true
			},
			bikeModel: {
				required: true
			},
		},
		messages: {
			nameAllEvent: {
				required: "Please enter First Name"
			},
			lastnameAllEvent: {
				required: "Please enter Last Name"
			},
			mobileNoAllEvent: {
				required: "Please enter Mobile No"
			},
			emailAllEvent: {
				required: "Please enter Email"
			},
			cityAllEvent: {
				required: "Please select City",
			},
			contestType: {
				required: "Please Select Contest Type",
			},
			mobOtpAllEvent: {
				required: "Please enter valid OTP"
			},
			agreeAllEvent: {
				required: "Please agree on the Terms and Conditions"
			},
			owner: {
				required: "Please Select Ownership Type"
			},
			groupExists: {
				required: "Please select Riding Group Ownership"
			},
			ridingInGroup: {
				required: "Please select the appropriate option"
			},
			modelYear: {
				required: "Please Enter Bike Year"
			},
			bikeModel: {
				required: "Please Select Bike Model"
			},
		}
	});
	
	$('#btnContestRegister').click(function (event) {
		var status = $("#register").valid();		
		var fileUpload = validateUploadFile();
			console.log(fileUpload);						//return false;
		if ($("#verifiedmobileNo").val() == '1') {
			
			$("#mobOtpNotVerified").html("");
			if (status && fileUpload) {
				contest = $('.contestName').val();
				email = $('#email').val();
				name = $('#name').val();
				lastname = $('#lastname').val();
				mobile = $('#mobileNo').val();
				state = $('#state').val();
				city = $('#city').val();
				comment = $('#comment').val();
				formType = "register";
				var $btn = $(this).button('loading');
						/*console.log(status);
						console.log(fileUpload);
						console.log($btn);
						return false;*/
				$.ajax({
					method: "POST",
					url: "insertregistration1.php",
					data: new FormData($('#register').get(0)),
					contentType: false,
					processData: false,
					success: function (response) {
						response = $.trim(response);
						$('#result').html("<h1 class='response-heading'><span>" + response + "</span></h1>");
						$("#register")[0].reset();
						$("#uploadFileField").html("");
						$("#verifiedmobileNo").val("");
						$('#signup-modal').modal('hide');
						$('#result-modal').modal('show');
					},
					complete: function () {
						$("#register")[0].reset();
						$btn.button('reset');
					}
				});
			}
		} else if ($("#mobileNo").val() != "" && $("#verifiedmobileNo").val() != '1') {
			$("#mobOtpNotVerified").html("Click Get OTP to verify Mobile No.");
			$("#verifymobOtp").trigger("click");
		}
	});
	
	$("#register").validate({
		rules: {
			name: {
				required: true,
				letterswithspaceonly: true
			},
			lastname: {
				required: true,
				letterswithspaceonly: true
			},
			mobileNo: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 12,
				numbersonly: true
			},
			email: {
				required: true,
				customemail: true
			},
			state: {
				required: true
			},
			city: {
				required: true
			},
			otp: {
				required: true,
				number: true
			},
			comment: {
				required: true,
				wordCount: ['10', '200']
			},
			fileType: {
				required: true
			},
			"file[]": {
				required: true
			},
			"video[]": {
				required: true
			},
			link: {
				required: true
			},
			"image[]": {
				accept: "image/*",
				extension: "jpg|JPG|png|PNG|jpeg|JPEG"
			},
			agree: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Please enter First Name"
			},
			lastname: {
				required: "Please enter Last Name"
			},
			mobileNo: {
				required: "Please enter Mobile No"
			},
			email: {
				required: "Please enter Email"
			},
			state: {
				required: "Please select state",
			},
			city: {
				required: "Please enter city",
			},
			otp: {
				required: "Please enter valid OTP"
			},
			comment: {
				required: "Please Enter Description"
			},
			"file[]": {
				required: "Please add selected"
			},
			"video[]": {
				required: "Please select Video File"
			},
			link: {
				required: "Please Enter Link of Video File"
			},
			fileType: {
				required: "Please Select File Type"
			},
			"image[]": {
				required: "Please select Image File",
				accept: "The Image must be jpg or png.",
				extension: "The Image must be jpg or png."
			},
			agree: {
				required: "Please agree on the Terms and Conditions"
			}
		}
	});

	function validateUploadFile() {
		if ($("input[name=imgFile]").val() == '' && $("input[name=vidFile]").val() == '') {
			$('label[name=file-error]').html("Please Upload Image or Video or Enter the Video Link").show();
			return false;
		} else if ($('label[name=file-error]').html() != "Please Upload Image or Video with Size less than 10 MB") {
			$('label[name=file-error]').html("");
			return true;
		} else {
			return false();
		}
	}
	$('#vidFile').change(function (e) {
		$('label[name=file-error]').html("");
		$("#uploadFileField label").html("");
		$("#uploadFileField div").html("");
		$("#uploadFileField label").html("Uploaded File");
		$("#uploadFileField div").html(this.files[0].name);
		$("#fileType").val('video');
		var videoSize = this.files[0].size;
		if (videoSize > 10000000) {
			$('label[name=file-error]').html("Please Upload Image or Video with Size less than 10 MB").show();
		}
		$("#uploadFileField").show();
	});
	$('#imgFile').change(function (e) {
		$('label[name=file-error]').html("");
		$("#uploadFileField label").html("");
		$("#uploadFileField div").html("");
		$("#uploadFileField label").html("Uploaded File");
		$("#uploadFileField div").html(this.files[0].name);
		$("#fileType").val('image');
		$("#uploadFileField").show();
	});
	$("#slider").click(function () {
		var slider = $(this)
		if (slider.hasClass('registration-slide')) {
			slider.animate({
				'right': '0px'
			}, "slow").removeClass('registration-slide');
		} else {
			slider.animate({
				'right': '-362px'
			}, "slow").addClass('registration-slide');
		}
	});
	$('.scroll-action').click(function (ev) {
		var myContext = $(this);
		ev.preventDefault();
		var url = myContext.attr('href');
		url = url.split('#');
		$('body, html').animate({
			scrollTop: $('#' + url[1]).offset().top - 50
		}, 500);
	});
});

$('.blue-campaign .navbar-nav li').click(function () {
	$(this).addClass('active').siblings('li').removeClass('active');
});
$(".event4").on("click", function () {
	$('#accesories-modal').modal('show');
});
$("#image_gallery").on("click", function () {
	$("#videos").addClass('hidden');
	$("#images").removeClass('hidden');
	$("#image_gallery").removeClass('text-white').addClass('text-blue');
	$("#video_gallery").removeClass('text-blue').addClass('text-white');
});
$("#video_gallery").on("click", function () {
	$("#images").addClass('hidden');
	$("#videos").removeClass('hidden');
	$("#video_gallery").removeClass('text-white').addClass('text-blue');
	$("#image_gallery").removeClass('text-blue').addClass('text-white');
});
window.jQuery(function ($) {
	"use strict";
	$('time').countDown({
		with_separators: false
	});
	$('.alt-1').countDown({
		css_class: 'countdown-alt-1'
	});
	$('.alt-2').countDown({
		css_class: 'countdown-alt-2'
	});
});

