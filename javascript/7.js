$(window).load(function(){$("body").on("click",".scroll_animation_btn",scroll_animation)});
$(document).ready(function(){featured_press_image_swiper=new Swiper(".featured_press_swiper",{allowSwipeToPrev:true,allowSwipeToNext:true,prevButton:"#featured_press_swiper_prev_btn",nextButton:"#featured_press_swiper_next_btn"});$("body").on("click",".mobile_hamburger",function(){var browser_width=window.innerWidth;if(browser_width<=991){$(".overlay_container_effect").addClass("show");$("body").addClass("overflow-hidden");if($(".main_nav_block .nav_option_block").hasClass("open_mobile_dropdown")){$(".overlay_container_effect").removeClass("show");
$("body").removeClass("overflow-hidden")}$(".nav_option_block").toggleClass("open_mobile_dropdown");$(".header_block").toggleClass("dropdown_is_open");$("#side_bar").removeClass("open");$(".page_side_bar_block").removeClass("open_dropdown")}});$("body").on("click",".apply_btn_nav",function(){fbq("trackCustom","ApplyButton")});$("body").on("click",".nav_option_block >li",function(){$(this).toggleClass("open")});$("body").on("click",".overlay_container_effect",function(){$(this).toggleClass("show");
$(".nav_option_block").removeClass("open_mobile_dropdown");$("#side_bar").removeClass("open");$(".page_side_bar_block").removeClass("open_dropdown");$("#sub_navigation").removeClass("open_dropdown");$("body").removeClass("overflow-hidden")});if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))$("#side_bar").addClass("for_m");$(window).resize(function(){var window_browser_width=window.innerWidth;initialize_swiper_on_resize();if(window_browser_width>=991){$(".page_data_carrier .page_side_bar_block").removeClass("open_dropdown");
$("#side_bar").removeClass("open");$("body").removeClass("overflow-hidden")}if(window_browser_width>=921){$(".nav_option_block").removeClass("open_mobile_dropdown");$(".nav_option_block li").removeClass("open");$("body").removeClass("overflow-hidden");if($(".page_data_carrier .page_side_bar_block").hasClass("open_dropdown")&&$("#side_bar").hasClass("open"))$("body").addClass("overflow-hidden")}if(window_browser_width>=920){$(".overlay_container_effect").removeClass("show");if($(".page_data_carrier .page_side_bar_block").hasClass("open_dropdown")&&
$("#side_bar").hasClass("open"))$(".overlay_container_effect").addClass("show")}});$("#newsletter_footer").on("submit",function(){var form=$(this);var button=form.find('input[type="submit"]');var email_field=form.find('input[name="email_address"]');email_field.css("border","1px solid #CCC");if(!validateEmail($.trim(email_field.val())))email_field.css("border","1px solid #f7941e");else{button.addClass("disabled").attr("disabled",true);$.post(form.attr("action"),form.serialize(),function(data){if(data.status){form.hide();
form.siblings("p").hide();form[0].reset();$("#newsletter_confirmation").show();ga("send","event","Newsletter","Newsletter Subscription","/main/footer_subscription");goog_report_conversion_newsletter("http://www.codingdojo.com");fbq("track","Lead")}button.removeClass("disabled").attr("disabled",false)},"json")}return false});$("tr[name='cohort_date']").each(function(){var today=new Date;var cohort_date=new Date($(this).attr("data-deadline"));if(cohort_date<today){$(this).addClass("cohort_full");$(this).find(".progress-bar").attr("aria-valuenow",
"100").css("width","100%");$(this).find(".availability_status").attr("href","javascript:void(0)").removeClass("available").text("FULL")}});$(".privacy").on("click",function(){$.fancybox.open({width:702,height:"auto",autoSize:false,wrapCSS:"tuition_pop_up",href:"#terms_of_service",closeBtn:false,helpers:{overlay:{closeClick:false}}});return false});$("#close_button").on("click",function(){$.fancybox.close();return false});var url_path=window.location.pathname;var url_path_data=url_path.split("/");
image_swiper=new Swiper(".hiring_partners .swiper-container",{allowSwipeToPrev:true,allowSwipeToNext:true,prevButton:"#prev_btn",nextButton:"#next_btn"});initialize_swiper_on_resize()});
function scroll_animation(){var sidebar_btn=$(this);var sidebar_section_target=sidebar_btn.attr("data-target-section");var browser_current_width=window.innerWidth;if(sidebar_section_target=="enrollment_block")$("html, body").animate({scrollTop:$("body ."+sidebar_section_target).offset().top-80},"slow");else if(browser_current_width<=991)$("html, body").animate({scrollTop:$("body ."+sidebar_section_target).offset().top-58},"slow");else $("html, body").animate({scrollTop:$("body ."+sidebar_section_target).offset().top-
56},"slow")}function initialize_swiper_on_resize(){var url_path=window.location.pathname;var url_path_data=url_path.split("/");if(url_path_data[1]==""){if($(window).outerWidth()<=920){image_swiper.params.allowSwipeToPrev=true;image_swiper.params.allowSwipeToNext=true}}else if($(window).outerWidth()<=1120){image_swiper.params.allowSwipeToPrev=true;image_swiper.params.allowSwipeToNext=true}}
$(document).ready(function(){var hash=window.location.hash;var tour_dates=$("#date_to_attend_selectpicker li.group_date");tour_dates.detach();var campus_address_information=[{campus_location:"Seattle",street_address:"10777 Main Street",city_address:"Bellevue, WA 98004"},{campus_location:"Silicon Valley",street_address:"1920 Zanker Road",city_address:"San Jose, CA 95112"},{campus_location:"Washington DC",street_address:"1775 Greensboro Station",city_address:"McLean, VA 22102"},{campus_location:"Chicago",
street_address:"213 West Institute",city_address:"Chicago, IL 60610"},{campus_location:"Los Angeles",street_address:"175 E Olive Ave",city_address:"Burbank, CA 91502"},{campus_location:"Dallas",street_address:"900 Jackson Street",city_address:"Dallas, TX 75202"},{campus_location:"Tulsa",street_address:"36 E Cameron Street",city_address:"Tulsa, OK 74103"},{campus_location:"East Bay",street_address:"6001 Shellmound St. Suite 200",city_address:"Emeryville, CA 94608"}];$("body").on("click",".campus_tour_button, .campus_tour_signup, .campus_tour_button_mobile",
function(){var modal_wrap_css="campus_tour_pop_up";$.fancybox.open({href:"#campus_tour_modal",wrapCSS:modal_wrap_css,beforeShow:function(){$.ajax({url:"/pages/get_nearest_campus_location",data:"",type:"POST",dataType:"json",success:function(nearest_campus){if(nearest_campus!="")if(nearest_campus=="washington-dc")$("#dc_campus").trigger("click");else if(nearest_campus=="san-jose")$("#sanjose_campus").trigger("click");else if(nearest_campus=="los-angeles")$("#la_campus").trigger("click");else if(nearest_campus==
"orange-county")$("#orange_county_campus").trigger("click");else $("#"+nearest_campus+"_campus").trigger("click");else $("#seattle_campus").trigger("click")}})},afterShow:function(){$("#campus_tour_form_modal").find(".form-control").css("border","2px solid #A9A9A9").removeClass("error_data")},afterClose:function(){$("body").removeClass("overflow-hidden")}});$("body").toggleClass("overflow-hidden")});$("body").on("change",".campuses",function(){var selected_campus_tour_location=$(this).val();var current_campus=
$(this).attr("data-selected-campus");var current_campus_direction_url=$(this).attr("data-selected-campus-direction");var current_campus_index=$(this).closest("li").index();$(".campus_locations_information").find(".campus_street_address").text(campus_address_information[current_campus_index].street_address);$(".campus_locations_information").find(".campus_number_address").text(campus_address_information[current_campus_index].city_address);$(".campus_locations_information ul").find(".campus_address").text("Coding Dojo "+
current_campus);$(".campus_locations_information").find(".campus_directions").attr("href",current_campus_direction_url);$("body").find("#campus_locations li .content_block").removeClass("active_campus");$("body").find("#campus_locations li."+selected_campus_tour_location+"_campus_block .content_block").addClass("active_campus");$("#date_to_attend_selectpicker .open_house_dates").removeAttr("checked");$(".campus_locations_information").removeClass("hidden");tour_dates.detach();if(current_campus=="Seattle")add_tour_dates("seattle");
else if(current_campus=="Silicon Valley")add_tour_dates("silicon_valley");else if(current_campus=="Los Angeles")add_tour_dates("los_angeles");else if(current_campus=="Dallas")add_tour_dates("dallas");else if(current_campus=="Chicago")add_tour_dates("chicago");else if(current_campus=="Washington DC"){add_tour_dates("dc");$(".campus_locations_information ul").find(".campus_address").text("Coding Dojo Tysons Corner, VA")}else if(current_campus=="Tulsa")add_tour_dates("tulsa");else if(current_campus==
"Berkeley"||current_campus=="East Bay")add_tour_dates("berkeley")});function add_tour_dates(add_class){var date_count=0;tour_dates.each(function(){if($(this).hasClass(add_class)&&date_count<=3){$("#date_to_attend_selectpicker").append($(this));date_count++}});$("#date_to_attend_selectpicker").find(".first_option input[type=radio]").prop("checked",true)}$("#campus_tour_form_modal").on("submit",function(){if($("#campus_tour_phone_number").val()!="")check_phone_number(true);else submit_form();return false});
function check_campus_tour_form_errors(form_action_type){var form=$("#campus_tour_form_modal");var textFields=form_action_type=="submit_campus_tour_form"?form.find("input[type=text].required_field, input[type=email], select"):form.find("input[type=text].required_field, input[type=email]");var radio_field=$("#date_to_attend_selectpicker").find("input[type=radio]");var error_count=0;textFields.each(function(){if($.trim($(this).val())==""||$(this).val()==0){$(this).addClass("error_data");error_count++}else{$(this).css("border",
"2px solid #CCC");$(this).removeClass("error_data")}});if($("#campus_tour_phone_number").val()!="")if(has_valid_phone_number===false){$("#campus_tour_phone_number").addClass("error_data");error_count++}if(!radio_field.is(":checked")&&radio_field.length>0){error_count++;radio_field.siblings("label").addClass("error_data")}else radio_field.siblings("label").css("border","2px solid #CCC").removeClass("error_data");return error_count}function submit_form(){var form=$("#campus_tour_form_modal");form.find("[type=submit]").val("Reserving ...").attr("disabled",
true);form.find(".form-control").css("border","2px solid #A9A9A9").removeClass("error_data");var error_count=check_campus_tour_form_errors("submit_campus_tour_form");if(error_count==0){var date=$("#date_to_attend_selectpicker .open_house_dates:checked").attr("data-selected-date");ga("send","event","Campus Tours","Campus Tour Reservation","/visit_our_campus");window.uetq=window.uetq||[];window.uetq.push({"ec":"event","ea":"campustour","el":"","ev":"1"});fbq("track","Lead",{content_name:"campus_tour",
content_category:"signup"});fbq("track","CompleteRegistration");qp("track","GenerateLead");goog_report_conversion_campus_tour("http://www.codingdojo.com");$.ajax({url:form.attr("action"),data:form.serialize(),type:"POST",dataType:"json",error:function(data){send_open_house_applications_to_CRM(form.serialize()+"&event_type=open_house");var references_urls=$('input[name="reference_url"]').val();var source_url="";var landing_page_url="";if(references_urls!=""){var new_reference_urls=references_urls.split(",");
$.each(new_reference_urls,function(index,value){var url=value.split("via");if(url[0]){source_url+=url[1]+",";landing_page_url+=url[0]+","}})}$.ajax({url:"https://docs.google.com/a/village88.com/forms/d/1GiHG4kpdX0bPsAQqL_v7rY2qpjuxNGgP_a4Q6uhRuBk/formResponse",data:form.serialize()+"&entry.84289868="+date+"&entry.1277865214="+source_url+"&entry.44688186="+landing_page_url+"&submit=Submit",type:"POST",dataType:"json",error:function(data){form.find("[type=submit]").val("Reserve Seat").attr("disabled",
false);form[0].reset();var modal_wrap_css="campus_tour_success_pop_up";$.fancybox.open({href:"#campus_tour_modal_success",wrapCSS:modal_wrap_css})}})}})}else form.find("[type=submit]").val("Reserve Seat").attr("disabled",false)}var has_valid_phone_number=false;function check_phone_number(process_on_success){var phone_number=$("#campus_tour_phone_number").val();var submit_button=$('#campus_tour_form_modal input[type="submit"]');submit_button.attr("disabled",true).css("opacity","0.6");$("#campus_tour_phone_number").css({"background-image":"url(assets/img/fancybox_loading@2x.gif)",
"background-position":"98%","background-repeat":"no-repeat","background-size":"20px","padding-right":"33px"});$.post("/main/check_phone_number",{phone_number:phone_number,codingdojo:$('input[name="codingdojo"]').val()},function(data){if(data.status){has_valid_phone_number=true;$("#campus_tour_phone_number").removeClass("error_data").css("border","1px solid #CCC");if(process_on_success)submit_form()}else{has_valid_phone_number=false;$("#campus_tour_phone_number").addClass("error_data")}submit_button.removeAttr("disabled").css("opacity",
"1");$("#campus_tour_phone_number").css("background-size","0px")},"json")}$("#campus_tour_phone_number").on("blur",function(){if($(this).val()!="")check_phone_number()});$("#campus_tour_form_modal").on("keydown","#campus_tour_phone_number",function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190,32,189,109,107,187])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()})});
function send_open_house_applications_to_CRM(post_data){var crm_url="http://crm.localhost.com";switch(window.location.host){case "www.codingdojo.com":crm_url="https://letsrock.codingdojo.com";break;case "newdb.codingdojo.com":crm_url="http://letsrock2.codingdojo.com";break}var post_url=crm_url+"/main/grab_open_house_and_workshop_applications";$.post(post_url,post_data,function(data){if(data!=true)$.post("/applications/save_bridging_error",{application_id:"",request_page:"visit_our_campus",request_url:post_url,
request_data:JSON.stringify(post_data),codingdojo:$('input[name="codingdojo"]').val()},function(data){},"json")},"json")}function validateEmail(email){var regular_expression=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return regular_expression.test(email)}
$(document).ready(function(){$("body").on("blur",'input[type="email"], input[type="text"], input[type="number"], textarea',function(){var this_input=$(this);var this_input_val=this_input.val();if(this_input_val!="")this_input.css("border","1px solid #A9A9A9").removeClass("error");return false});$.ajax({url:"/pages/get_nearest_campus_location/",data:"",type:"POST",dataType:"json",success:function(data){$(".cp_location option:selected").removeAttr("selected");$(".cp_location").find('option[value="'+
data+'"]').prop("selected",true)}});$(".course_packet_form").on("submit",function(){var url_path=window.location.pathname;var error_count=0;var form=$(this);form.find(".cta_blue_button").val("Sending...").attr("disabled",true);var full_name=form.find(".packet_name");var email_address=form.find(".packet_email");var location=form.find(".cp_location").val();var packet_type_value=form.find(".packet_type").val();var packet_file_name="Master";var packet_pdf_file="master_course_packet.pdf";var google_report_conversion_url=
"http://www.codingdojo.com";var modal_wrap_css="home_cp_class";switch(packet_type_value){case "master":break;case "online":packet_file_name="Online";packet_pdf_file="online_course_packet.pdf";google_report_conversion_url="http://www.codingdojo.com/online-bootcamp";modal_wrap_css="remote_bootcamp_class";break;case "onsite":packet_file_name="Onsite";packet_pdf_file="onsite_course_packet.pdf";google_report_conversion_url="http://www.codingdojo.com/onsite-boot-camp";modal_wrap_css="onsite_bootcamp_class";
break;default:alert("Sorry an error occurred. Please reload the page.");return false}if($.trim(full_name.val())!="")full_name.css("border","1px solid #A9A9A9");else{error_count++;full_name.css("border","1px solid #f7941e")}if($.trim(email_address.val())!="")email_address.css("border","1px solid #A9A9A9");else{error_count++;email_address.css("border","1px solid #f7941e")}if(error_count==0)$.post(form.attr("action"),form.serialize()+"&file_name="+packet_file_name+"&url="+url_path,function(data){if(data.status){var success_download=
function(){if(packet_type_value=="dev")packet_file_name="Dev Accelerators";ga("send","event","Request course packet","Course Packet | "+packet_file_name,url_path);if(packet_type_value!="master"){ga("send","event","Request course packet","Course Packet | Program Pages","/programs");qp("track","GenerateLead");window.uetq=window.uetq||[];window.uetq.push({"ec":"Course Packet","ea":"Download","el":"All Program","ev":"1"})}goog_report_conversion(google_report_conversion_url);window.uetq=window.uetq||[];
window.uetq.push({"ec":"program-page","ea":"coursepacket","el":"","ev":"1"});fbq("track","Lead",{content_name:"coursepacket",content_category:"downloads"});$.fancybox.open({href:"#course_packet_modal",wrapCSS:modal_wrap_css,afterClose:function(){form[0].reset()},beforeShow:function(){$("#thank_you_message").find("a").attr("href","/files/"+packet_pdf_file)}});form.find(".cta_blue_button").val("Get Course Packet").attr("disabled",false)};var references_urls=form.find(".reference_url").val();var source_url=
"";var landing_page_url="";if(references_urls!=""){var new_reference_urls=references_urls.split(",");$.each(new_reference_urls,function(index,value){var url=value.split("via");if(url[0]){source_url+=url[1]+",";landing_page_url+=url[0]+","}})}if(packet_type_value=="dev")packet_file_name="DEV "+stack_name.toUpperCase();$.ajax({url:"https://docs.google.com/a/village88.com/forms/d/1PgrbR1cF4nqo-A3m8fLL_87UbH2SAxEHm5ZdNwBI0rc/formResponse",data:"entry.792517761="+full_name.val()+"&entry.1959099750="+email_address.val()+
"&entry.1694590677="+packet_file_name+"&entry.1729915858="+url_path+"&entry.1121755441="+source_url+"&entry.337447723="+landing_page_url+"&entry.1213454994="+location,type:"POST",dataType:"json",async:true,success:function(){success_download()},error:function(e){success_download()}})}},"json");else form.find(".cta_blue_button").val("Get Course Packet").attr("disabled",false);return false})});var ctr=0;var mobile_ctr=0;set_interval_item(5E3);mobile_set_active_item(5E3);var interval;var mobile_interval;
$(document).ready(function(){$("body").on("mouseenter",".stacks_item.active, .desktop_stacks_list .stacks_description_container",function(){clearInterval(interval)});$("body").on("mouseleave",".stacks_item.active",function(){ctr=$(this).index();set_interval_item(5E3)});$("body").on("mouseleave",".stacks_description_container",function(){ctr=$(".stacks_item.active").index();set_interval_item(5E3)});$("body").on("click",".desktop_stacks_list .stacks_item",function(){clearInterval(interval);ctr=$(this).index();
$(this).addClass("active").siblings().removeClass("active")});$("body").on("click",".mobile_stacks_list .mobile_stacks_item",function(){clearInterval(mobile_interval);populate_mobile_stacks($(this))});sticky_sidebar(".header_block",".side_bar_menu","#footer");$(document).on("scroll",detect_section);change_image_src($("body img"));$(window).resize(function(){change_image_src($("body img"));initialize_swiper_on_resize();$(window).trigger("resize.px.parallax")});$("body").on("click",".page_side_bar_block",
function(){var browser_width=window.innerWidth;if(browser_width<=991){$(this).toggleClass("open_dropdown");$(this).find(".side_bar_menu").toggleClass("open");$(this).find(".removeClass").removeClass("sticky_sidebar");$(".overlay_container_effect").toggleClass("show");$("body").toggleClass("overflow-hidden")}});$(window).scroll(function(){var structure_count=0;var first_load=false;if($("#side_bar .side_bar_link.active").attr("data-target-section")=="curriculum_structure_wrapper"){$(".ninja_wrapper, .ninja_img.dark, .jump_ninja_wrapper").removeClass("disable_animation");
first_load=true;if(first_load&&structure_count<=7)setInterval(function(){$($(".curriculum_structure_wrapper .curriculum_structure_details ul li")[structure_count++]).find("p").addClass("normal_font")},200)}})});
function(){$(".mobile_stacks_item:eq("+mobile_ctr+")").addClass("active").siblings().removeClass("active");populate_mobile_stacks($(".mobile_stacks_item:eq("+mobile_ctr+")"));mobile_ctr>=$(".mobile_stacks_item ").length-1?mobile_ctr=0:mobile_ctr++;$(window).trigger("resize.px.parallax")},interval_time)}
function populate_mobile_stacks(mobile_stacks_item){var difficulty=mobile_stacks_item.attr("data-difficulty");var data_id=mobile_stacks_item.attr("data-id");var data_salary_rate=mobile_stacks_item.attr("data-salary-rate");var stack_content=mobile_stacks_item.closest(".upper_container").find(".stack_content");mobile_stacks_item.siblings().removeClass("active");mobile_stacks_item.addClass("active");$(".individual_stack_content").hide().fadeIn();stack_content.attr("data-id",data_id);$(".mobile_individual_content").find(".stacks_description_container").hide();
$(".mobile_individual_content").find(".stacks_description_container[data-id="+data_id+"]").show();stack_content.find(".diffulty_status_title").text(difficulty);stack_content.find(".salary_rate").text(data_salary_rate)}
function detect_section(){var scrollPos=$(document).scrollTop();$("#side_bar li.side_bar_link:not(.cta_btn)").each(function(){var currLink=$(this);var refElement=$("."+currLink.attr("data-target-section"));if(refElement.position().top<=scrollPos&&refElement.position().top+refElement.height()>scrollPos){$(".page_side_bar_block >ul li").removeClass("active");currLink.addClass("active")}})}
function sticky_sidebar(header_wrapper_class,sidebar,footer_wrapper_class){var browser_width=window.innerWidth;var y_scroll_height_main=$(this).scrollTop();var header_block_height_main=$("body").find(header_wrapper_class).innerHeight();if(browser_width>=992)if(y_scroll_height_main>=header_block_height_main)$("body").find(sidebar).addClass("sticky_sidebar");else $("body").find(sidebar).removeClass("sticky_sidebar");$(window).scroll(function(){var current_browser_width=window.innerWidth;var y_scroll_height=
$(this).scrollTop();var header_block_height=$("body").find(header_wrapper_class).innerHeight();var footer_block=$("body").find(footer_wrapper_class).offset().top;var window_height=$(window).height();if(current_browser_width>=992)if(y_scroll_height>=header_block_height)$("body").find(sidebar).addClass("sticky_sidebar");else $("body").find(sidebar).removeClass("sticky_sidebar");else if(current_browser_width<=991)if(y_scroll_height>=header_block_height)$("body").find(".page_side_bar_block").addClass("sticky_sidebar");
else $("body").find(".page_side_bar_block").removeClass("sticky_sidebar")})}
function change_image_src(image_to_target){var active_browser_width=window.innerWidth;image_to_target.each(function(){var this_img=$(this);var img_src=this_img.attr("data-src");var screen_size=this_img.attr("class");this_img.attr("src",img_src);if(this_img.hasClass("mobile_assets"))this_img.attr("src","");if(active_browser_width<=1104)if(this_img.hasClass("1104_px"))this_img.attr("src",img_src).siblings().attr("src","");if(active_browser_width<=991)if(this_img.hasClass("991_px"))this_img.attr("src",
img_src).siblings().attr("src","");if(active_browser_width<=720){if(this_img.hasClass("720_px"))this_img.attr("src",img_src);if(this_img.hasClass("desktop_assets"))this_img.attr("src","")}});image_swiper=new Swiper(".swiper-container",{allowSwipeToPrev:true,allowSwipeToNext:true,prevButton:"#prev_btn",nextButton:"#next_btn"})}function initialize_swiper_on_resize(){if($(window).outerWidth()<=1120){image_swiper.params.allowSwipeToPrev=true;image_swiper.params.allowSwipeToNext=true}};