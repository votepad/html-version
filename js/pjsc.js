$(document).ready(function(){
   alert(25);
   
});

                           /* JUDGE 
									var judge_list_counter = $(".judge-list li").length;
                                    $('#add-judge-btn').on("click", function(){
                                       var name = $("#name-judge").val();
                                       if (name != '') {
                                          judge_list_counter++;
                                          var temp = "<li><div class='panel panel-default animated fadeInDown' style='border-color:#5d9cec;'><div id='judge_" + judge_list_counter + "' role='tab' class='panel-heading'><h4 class='panel-title'><a id='judge_name_" + judge_list_counter + "' data-toggle='collapse' data-parent='#accordion' href='#judge_description_" + judge_list_counter + "' aria-expanded='false' aria-controls='judge_description_" + judge_list_counter + "' class='collapsed'>" + name + "</a><button type='button' class='pull-right delete-judge' title='Удалить члена жюри' id='delete-judge_" + judge_list_counter + "'><em class='fa fa-times'></em></button></h4></div><div id='judge_description_" + judge_list_counter + "' role='tabpanel' aria-labelledby='headingTwo' class='panel-collapse collapse in'><div class='panel-body'> <input name='judge_email_" + judge_list_counter + "' type='email' placeholder='Укажите e-mail члена жюри' class='form-control peopleinfo-input' required> <input name='judge_status_" + judge_list_counter + "' type='text' placeholder='Укажите кем является член жюри' class='form-control peopleinfo-input' required> <p>Загрузите фотографию члена жюри (не обязательно)</p> <input name='judge_photo_" + judge_list_counter + "' type='file' class='form-control peopleinfo-input'> </div></div></div></li>";
                                          $('.judge-list').append(temp);
                                          $("#name-judge").val('');
                                       }
                                    });
									$('.judge-list').on('click', '.delete-judge', function(){
										var number = $(this).attr('id');
										number = number.substr(number.lastIndexOf('_')+1,number.length);
										var i;
										for(i=parseInt(number)+1; i<=judge_list_counter; i++)
										{
											var liElem = $('.judge-list li:nth-child('+i+')');
											var setHTML = liElem.html();
											setHTML = setHTML.replace("id=\"judge_"+i+"\"","id=\"judge_"+(i-1)+"\"");
											setHTML = setHTML.replace("id=\"judge_name_"+i+"\"","id=\"judge_name_"+(i-1)+"\"");
											setHTML = setHTML.replace("href=\"#judge_description_"+i+"\"","href=\"#judge_description_"+(i-1)+"\""); 
											setHTML = setHTML.replace("aria-controls=\"judge_description_"+i+"\"","aria-controls=\"judge_description_"+(i-1)+"\"");
											setHTML = setHTML.replace("id=\"delete-judge_"+i+"\"","id=\"delete-judge_"+(i-1)+"\"");
											setHTML = setHTML.replace("id=\"judge_description_"+i+"\"","id=\"judge_description_"+(i-1)+"\"");
											setHTML = setHTML.replace("name=\"judge_status_"+i+"\"","name=\"judge_status_"+(i-1)+"\""); //
											setHTML = setHTML.replace("name=\"judge_email_"+i+"\"","name=\"judge_email_"+(i-1)+"\"");
											setHTML = setHTML.replace("name=\"judge_photo_"+i+"\"","name=\"judge_photo_"+(i-1)+"\"");
											liElem.html(setHTML);
										}
										judge_list_counter--;
										$('.judge-list li').remove(':nth-child(' + number + ')');
									});
									
									var stage_list_counter = $(".stage-list li").length;
                                    $('#add-stage-btn').on("click", function(){
                                       var name = $("#name-stage").val();
                                       if (name != '') {
                                          stage_list_counter++;
                                          var temp = "<li><div class='panel panel-default animated fadeInDown' style='border-color:#5d9cec;'><div id='stage_" + stage_list_counter + "' role='tab' class='panel-heading'><h4 class='panel-title'><a id='stage_name_" + stage_list_counter + "' data-toggle='collapse' data-parent='#accordion' href='#stage_description_" + stage_list_counter + "' aria-expanded='false' aria-controls='stage_description_" + stage_list_counter + "' class='collapsed'>" + name + "</a><button type='button' class='pull-right delete-stage' title='Удалить члена жюри' id='delete-stage_" + stage_list_counter + "'><em class='fa fa-times'></em></button></h4></div><div id='stage_description_" + stage_list_counter + "' role='tabpanel' aria-labelledby='headingTwo' class='panel-collapse collapse in'><div class='panel-body'> <input name='stage_description_" + stage_list_counter + "' type='text' placeholder='Описание этапа' class='form-control peopleinfo-input' required> </div></div></div></li>";
                                          $('.stage-list').append(temp);
                                          $("#name-stage").val('');
                                       }
                                    });
									$('.stage-list').on('click', '.delete-stage', function(){
										var number = $(this).attr('id');
										number = number.substr(number.lastIndexOf('_')+1,number.length);
										var i;
										for(i=parseInt(number)+1; i<=stage_list_counter; i++)
										{
											var liElem = $('.stage-list li:nth-child('+i+')');
											var setHTML = liElem.html();
											setHTML = setHTML.replace("id=\"stage_"+i+"\"","id=\"stage_"+(i-1)+"\"");
											setHTML = setHTML.replace("id=\"stage_name_"+i+"\"","id=\"stage_name_"+(i-1)+"\"");
											setHTML = setHTML.replace("href=\"#stage_description_"+i+"\"","href=\"#stage_description_"+(i-1)+"\""); 
											setHTML = setHTML.replace("aria-controls=\"stage_description_"+i+"\"","aria-controls=\"stage_description_"+(i-1)+"\"");
											setHTML = setHTML.replace("id=\"delete-stage_"+i+"\"","id=\"delete-stage_"+(i-1)+"\"");
											setHTML = setHTML.replace("id=\"stage_description_"+i+"\"","id=\"stage_description_"+(i-1)+"\"");
											setHTML = setHTML.replace("name=\"stage_description_"+i+"\"","name=\"stage_description_"+(i-1)+"\"");
											liElem.html(setHTML);
										}
										stage_list_counter--;
										$('.stage-list li').remove(':nth-child(' + number + ')');
									});