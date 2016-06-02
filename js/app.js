"use strict";

var PrgmType = '';

var EduType = '';

var View = {
	renderOne: function()	{
		$('div.one img:first-child').removeClass('off').addClass('on');
		$('div.one img:nth-child(2)').removeClass('on').addClass('off');
	},
	renderTwo: function()	{
		$('div.two img:first-child').removeClass('off').addClass('on');
		$('div.two img:nth-child(2)').removeClass('on').addClass('off');
	},
	renderThree: function()	{
		$('div.three img:first-child').removeClass('off').addClass('on');
		$('div.three img:nth-child(2)').removeClass('on').addClass('off');
	},
	renderFour: function()	{
		$('div.four img:first-child').removeClass('off').addClass('on');
		$('div.four img:nth-child(2)').removeClass('on').addClass('off');
	},

	resetImgArea: function()	{
		$('div.one img:first-child').removeClass().addClass('off');
		$('div.one img:nth-child(2)').removeClass().addClass('on');
		$('div.two img:first-child').removeClass().addClass('off');
		$('div.two img:nth-child(2)').removeClass().addClass('of');
		$('div.three img:first-child').removeClass().addClass('off');
		$('div.three img:nth-child(2)').removeClass().addClass('on');
		$('div.four img:first-child').removeClass().addClass('off');
		$('div.four img:nth-child(2)').removeClass().addClass('on');
	},

	renderImgArea: function()	{
		if (PrgmType == 'PROGRAM TYPE' && EduType =='EDUCATION LEVEL') {
			View.renderOne();
			View.renderTwo();
			View.renderThree();
			View.renderFour();
		} else if (PrgmType == 'SCHOLARSHIP' && EduType == 'EDUCATION LEVEL') {
			View.renderOne();
			View.renderThree();
			View.renderFour();
		} else if (PrgmType == 'LOAN PROGRAM' && EduType == 'EDUCATION LEVEL') {
			View.renderTwo();
			View.renderThree();
			View.renderFour();
		} else if (PrgmType == 'PROGRAM TYPE' && EduType == 'K-12') {
			View.renderOne();
			View.renderThree();
			View.renderFour();
		} else if (PrgmType == 'PROGRAM TYPE' && EduType == 'HIGH SCHOOL') {
			View.renderTwo();
			View.renderThree();
			View.renderFour();
		} else if (PrgmType == 'SCHOLARSHIP' && EduType =='K-12') {
			View.renderOne();
			View.renderThree();
		} else if (PrgmType == 'LOAN PROGRAM' && EduType =='K-12') {
			View.renderTwo();
			View.renderThree();
		} if (PrgmType == 'SCHOLARSHIP' && EduType =='HIGH SCHOOL') {
			View.renderOne();
			View.renderFour();
		} else if (PrgmType == 'LOAN PROGRAM' && EduType =='HIGH SCHOOL') {
			View.renderThree();
			View.renderFour();
		};
	}
}

var Method = {
	setValuePrgmType: function()	{
		var value = $('select.programType').val();
		PrgmType = value;
	},
	setValueEduType: function()	{
		var value = $('select.educationLevel').val();
		EduType = value;
	},
	resetPrgmEduValues: function()	{
		PrgmType = '';
		EduType = '';
	}
}

$(function() {
	$('.search').on('click', function(e)	{
		e.preventDefault();
		View.resetImgArea();
		Method.resetPrgmEduValues();
		var valuePrgm = Method.setValuePrgmType();
		var valueEdu = Method.setValueEduType();
		console.log(PrgmType, EduType);
		View.renderImgArea();
	});
});
