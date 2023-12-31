/**
 * @name mortgageCalculator
 * @version 1.0 [March 29, 2015]
 * @author Vitaliy Kirenkov
 */

;(function ($, window, document, undefined) {
	"use strict";

	var 
		pluginName = "mortgageCalculator",
		defaults = {
			flatPriceSlider 		: 	'.apartment_price-slider',
			flatPriceInput 			: 	'.apartment_price-input',
			flatPriceMin 			: 	500000,
			flatPriceMax 			: 	100000000,
			flatPriceCurrent 		: 	null,

			firstPaymentSlider 		: 	'.first_payment-slider',
			firstPaymentInput 		: 	'.first_payment-input',
			firstPaymentMin 		: 	250000,
			firstPaymentMax 		: 	50000000,
			firstPaymentCurrent 	: 	0,

			credSumSlider 			: 	'.credit_sum-slider',
			credSumInput 			: 	'.credit_sum-input',
			credSumCheckbox 		: 	'.credit_sum-checkbox',
			credSumMin 				: 	1000000,
			credSumMax 				: 	15000000,
			credSumCurrent 			: 	8000000,

			credDurationSlider 		: 	'.credit_duration-slider',
			credDurationInput 		: 	'.credit_duration-input',
			credDurationCheckbox 	: 	'.credit_duration-checkbox',
			credDurationMin 		: 	12,
			credDurationMax 		: 	60,
			credDurationCurrent 	: 	36,

			credRateSlider 			: 	'.credit_rate-slider',
			credRateInput 			: 	'.credit_rate-input',
			credRateMin 			: 	5,
			credRateMax 			: 	30,
			credRateCurrent 		: 	12,

			monthPaymentSlider 		: 	'.monthly_payment-slider',
			monthPaymentInput 		: 	'.monthly_payment-input',
			monthPaymentCheckbox 	: 	'.monthly_payment-checkbox',
			monthPaymentMin 		: 	5000,
			monthPaymentMax 		: 	1000000,
			monthPaymentCurrent 	: 	488432
		};

	function MortgageCalculator (element, options){
		this.element = element;

		this.settings = $.extend({}, defaults, options);

		this._settings = this.settings;

		for(var key in this._settings) {
			var val = this._settings[key];
			if (typeof val == 'string' || val instanceof String) {
				this._settings[key] = $(val, element);
			}
		}

		this.init();
	}

	$.extend(MortgageCalculator.prototype, {
		recursionFlag: false,

		logN: function(x, base){
			return Math.log(x)/Math.log(base);
		},
		calcAnnuitet: function(rate, duration){
			var rate = rate/1200;
			return (rate*Math.pow(1 + rate, duration))/(Math.pow(1 + rate, duration) - 1);
		},
		calcDuration: function(summ, monthly, rate){
			var rate = rate/1200;
			if(monthly - summ * rate <= 0) return 1000000;
			return this.logN(monthly/(monthly - summ * rate), 1 + rate);
		},
		reCalcSum: function(){
			this._settings.credSumSlider.slider("value", this._settings.monthPaymentSlider.slider("value")/this.calcAnnuitet(this._settings.credRateSlider.slider("value"), this._settings.credDurationSlider.slider("value")));
		},
		reCalcDuration: function(){
			this._settings.credDurationSlider.slider("value", this.calcDuration(this._settings.credSumSlider.slider("value"), this._settings.monthPaymentSlider.slider("value"), this._settings.credRateSlider.slider("value")));
		},
		reCalcMonthPayment: function(){
			this._settings.monthPaymentSlider.slider("value", this._settings.credSumSlider.slider("value")*this.calcAnnuitet(this._settings.credRateSlider.slider("value"), this._settings.credDurationSlider.slider("value")));
		},
		checkDisables: function(){
			!parseInt(this._settings.flatPriceInput.val()) ? this._settings.firstPaymentSlider.slider('disable') : this._settings.firstPaymentSlider.slider('enable');
			!parseInt(this._settings.flatPriceInput.val()) || this._settings.credDurationCheckbox.prop('checked') ? this._settings.credDurationSlider.slider('disable') : this._settings.credDurationSlider.slider('enable');
			!parseInt(this._settings.flatPriceInput.val()) || this._settings.credSumCheckbox.prop('checked') ? this._settings.credSumSlider.slider('disable') : this._settings.credSumSlider.slider('enable');
			!parseInt(this._settings.flatPriceInput.val()) ? this._settings.credRateSlider.slider('disable') : this._settings.credRateSlider.slider('enable');
			!parseInt(this._settings.flatPriceInput.val()) || this._settings.monthPaymentCheckbox.prop('checked') ? this._settings.monthPaymentSlider.slider('disable') : this._settings.monthPaymentSlider.slider('enable');
		},

		sliderInit: function(sliderSelector, sliderSelectorVal, valMin, valMax, valCurrent, onchange, onslide){
			if(typeof onslide == "function" && typeof onchange != "function") onchange = onslide;

			sliderSelector
				.slider({
					range: 'min',
					min: valMin,
					max: valMax,
					step: (valMin >= 1000000 ? 1000 : 1  ),
					value: valCurrent != null ? valCurrent : Math.floor(valMin + (valMax-valMin)/2),
					slide: function( event, ui ) {
						if(typeof onslide=="function"){
							onslide(event, ui);
						}
						sliderSelectorVal.val(ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
					},
					change: function( event, ui ){
					   
				        let autoSum=$('.apartment_price-input').next('.div-control').find('.div-control-value').html();
				        let firstPrice=$('.first_payment-input').next('.div-control').find('.div-control-value').html();
		        	    let percenttime= $('.credit_duration-slider .ui-slider-range').attr('style');
    		         
				        let percent= $('.first_payment-slider .ui-slider-range').attr('style');
				        let percentautoSum= $('.apartment_price-slider .ui-slider-range').attr('style');
	
				        let timeMounth=$('.credit_duration-input').next('.div-control').find('.div-control-value').html();
					   	let taxSum=$('.credit_sum-input').next('.div-control').find('.div-control-value').html();
					   	let paymentMounth=$('.monthly_payment-input').next('.div-control').find('.div-control-value').html();
					   	let totalSum;
					   
					   	autoSum=parseFloat(autoSum.split(' ').join(''));
			   		   	firstPrice=parseFloat(firstPrice.split(' ').join(''));
	   		   		   	timeMounth=parseFloat(timeMounth.split(' ').join(''));
   	   		   		   	taxSum=parseFloat(taxSum.split(' ').join(''));
  	   		   		   	paymentMounth=parseFloat(paymentMounth.split(' ').join(''));
  	   		   		   	
	   			        percent = parseInt(percent.match(/\d+/))*50/100;
	   			        if(percent<20){
	   			            percent+=5;
	   			        }
	   			        percentautoSum = parseInt(percentautoSum.match(/\d+/));
	   			        percenttime = parseInt(percenttime.match(/\d+/));
				        firstPrice=Math.round((autoSum*percent)/100);
			            if(percentautoSum==0){
	   			            percentautoSum=0.5;
	   			        }
				        autoSum=Math.round((100000000*percentautoSum)/100);
			          
					    timeMounth=((48*percenttime)/100)+12;
					    
					   // console.log(sliderSelectorVal.val);
					    
					    paymentMounth=Math.round((autoSum-firstPrice)/timeMounth+(autoSum-firstPrice)*0.004);
					    totalSum = (paymentMounth*timeMounth) + +firstPrice;
					    
					    taxSum=Math.round(totalSum*0.36);
					    
					   // taxSum=Math.round((totalSum/(20/100+1)*(20/100))*0.36);
	
					   
					   	$('.apartment_price-input').next('.div-control').find('.div-control-value').html(autoSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
					   	
					    $('.credit_duration-input').next('.div-control').find('.div-control-value').html(timeMounth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
				
					    $('.monthly_payment-input').next('.div-control').find('.div-control-value').html(paymentMounth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
					    
					    $('.first_payment-input').next('.div-control').find('.div-control-value').html(firstPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
					    
					    $('.credit_sum-input').next('.div-control').find('.div-control-value').html(taxSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
					   
					   
						if(typeof onchange=="function"){
							onchange(event, ui);
						}
						sliderSelectorVal.val(ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
					}
				});

			sliderSelectorVal
				.val(sliderSelector.slider('value').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
				.change(function(){
					if (!isNaN($(this).val())) {
						var newVal = sliderSelectorVal.val().toString().replace(/\s/g, '');
						sliderSelector.slider("value", newVal);
					} else {
						sliderSelector.slider("value", valCurrent != null ? valCurrent : Math.floor(valMin + (valMax-valMin)/2));
					}
				});
		},

		cb: function(event, ui, cbInner){
			if(this.recursionFlag) return;
			this.recursionFlag = true;
			cbInner(event, ui);
			this.recursionFlag = false;
		},

		init: function (){
			this.sliderInit(this._settings.flatPriceSlider, this._settings.flatPriceInput, this.settings.flatPriceMin, this.settings.flatPriceMax, this.settings.flatPriceCurrent, null, $.proxy(function(event, ui){
				this.cb(event, ui, $.proxy(function(){
					if(this._settings.credSumCheckbox.prop('checked') || this._settings.monthPaymentCheckbox.prop('checked')){
						this._settings.firstPaymentSlider.slider("value", ui.value - this._settings.credSumSlider.slider("value"));
					} else {
						this._settings.credSumSlider.slider("value", ui.value - this._settings.firstPaymentSlider.slider("value"));
					}
					this.reCalcMonthPayment();
				}, this));
			}, this));

			this.sliderInit(this._settings.firstPaymentSlider, this._settings.firstPaymentInput, this.settings.firstPaymentMin, this.settings.firstPaymentMax, this.settings.firstPaymentCurrent, null, $.proxy(function(event, ui){
				this.cb(event, ui, $.proxy(function(){
				    this._settings.firstPaymentSlider.slider('option', 'step', 5);
					if(this._settings.credSumCheckbox.prop('checked') || this._settings.monthPaymentCheckbox.prop('checked')){
						this._settings.flatPriceSlider.slider("value", ui.value + this._settings.credSumSlider.slider("value"));
					} else {
						this._settings.credSumSlider.slider("value", this._settings.flatPriceSlider.slider("value") - ui.value);
					}
					this.reCalcMonthPayment();
				}, this));
			}, this));

			this.sliderInit(this._settings.credSumSlider, this._settings.credSumInput, this.settings.credSumMin, this.settings.credSumMax, this.settings.credSumCurrent, null, $.proxy(function(event, ui){
				this.cb(event, ui, $.proxy(function(){
					this._settings.firstPaymentSlider.slider("value", this._settings.flatPriceSlider.slider("value") - ui.value);

					if(this._settings.monthPaymentCheckbox.prop('checked')){
						this.reCalcDuration();
					} else {
						this.reCalcMonthPayment();
					}
				}, this));
			}, this));

			this.sliderInit(this._settings.credDurationSlider, this._settings.credDurationInput, this.settings.credDurationMin, this.settings.credDurationMax, this.settings.credDurationCurrent, null, $.proxy(function(event, ui){
				this.cb(event, ui, $.proxy(function(){
				    this._settings.credDurationSlider.slider('option', 'step', 12);
					if(this._settings.monthPaymentCheckbox.prop('checked')){
						this.reCalcSum();
					} else {
						this.reCalcMonthPayment();
					}
				}, this));
			}, this));

			this.sliderInit(this._settings.credRateSlider, this._settings.credRateInput, this.settings.credRateMin, this.settings.credRateMax, this.settings.credRateCurrent, null, $.proxy(function(event, ui){
				this.cb(event, ui, $.proxy(function(){
					if(this._settings.monthPaymentCheckbox.prop('checked') && this._settings.credSumCheckbox.prop('checked')){
						this.reCalcDuration();
					} else if (this._settings.monthPaymentCheckbox.prop('checked')){
						this.reCalcSum();
					} else {
						this.reCalcMonthPayment();
					}
				}, this));
			}, this));

			this.sliderInit(this._settings.monthPaymentSlider, this._settings.monthPaymentInput, this.settings.monthPaymentMin, this.settings.monthPaymentMax, this.settings.monthPaymentCurrent, null, $.proxy(function(event, ui){
				this.cb(event, ui, $.proxy(function(){
					if(this._settings.credSumCheckbox.prop('checked')){
						this.reCalcDuration();
					} else {
						this.reCalcSum();
					}
				}, this));
			}, this));

			$("input[type=checkbox]", this.element).on("change", $.proxy(function(e){
				var _thatCheckbox = $(e.currentTarget);

				if(_thatCheckbox.prop('checked')){
					$('input[type=checkbox]', this.element).prop('checked', false);
					_thatCheckbox.prop('checked', true);
				}
				this.checkDisables();
			}, this));

			this.checkDisables();
			this.reCalcMonthPayment();

			this._settings.credRateSlider.slider('option', 'step', 1);
		}
	});

	$.fn[pluginName] = function (options) {
		return this.each(function() {
			if ( !$.data(this, "plugin_" + pluginName) ) {
				$.data(this, "plugin_" + pluginName, new MortgageCalculator(this, options));
			}
		});
	};

})(jQuery, window, document); 