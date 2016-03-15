var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(document).ready(function(){
  display_section('android');
  sectionHeight();

  $('img').load(sectionHeight);
});

fixScale = function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }
};

function nav_tag_link(type){
$("#"+type+" section h1,#"+type+" section h2").each(function(){
      $("#"+type+" nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
      $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
      $("#"+type+" nav ul li:first-child a").parent().addClass("active");
  });
    $('#'+type+" nav ul").append('<li class="tag-h2"><a href="#contribute"> Contribute </a></li>');
      $("#"+type+" nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 175;
    $("html, body").animate({scrollTop: position}, 400);
    $("#"+type+" nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });
}

  function display_section(type){
     document.getElementById(type).style.display="block";
     $("#android nav ul").text("");
     $("#windows nav ul").text("");
     $("#ios nav ul").text("");
     document.getElementById('Contribute_section_android').innerHTML="";
    document.getElementById('Contribute_section_windows').innerHTML="";
    document.getElementById('Contribute_section_ios').innerHTML="";
     if(type=='ios')
     {
      nav_tag_link('ios');
      document.getElementById('android').style.display="none";
      document.getElementById('windows').style.display="none";
     }
     else
     if (type=='android')
      {
        nav_tag_link('android');
        document.getElementById('ios').style.display="none";
        document.getElementById('windows').style.display="none";
      }
    else
    {
      nav_tag_link('windows');
      document.getElementById('ios').style.display="none";
      document.getElementById('android').style.display="none";
    }
    var contribute="<a id='contribute' class='anchor' href='#contribute' aria-hidden='true'></a>\
            <h2><i class='fa fa-github'></i> Contribute <a href='#contribute'><span class='octicon octicon-link'></span></a></h2>\
            <p>It is awesome to see that you want to contribute in this wiki, which would directly help the community. Project/Tools which are no longer maintained are not included in this wiki. List of awesome contributors to this wiki is given below. Please follow one of the ways from below to include tool or resource in this wiki-</p>\
            <ul>\
               <li>\
                  <p>Tweet the resource to <a href='https://twitter.com/exploitprotocol' target='_blank'>@exploitprotocol</a></p>\
               </li>\
               <li>\
                  <p>Shoot an email to <strong><a href='mailto:aditya@manifestsecurity.com'>aditya@manifestsecurity.com</a></strong></p>\
               </li>\
               <li>\
                  <p>Create a pull request or an issue to <a href='https://github.com/exploitprotocol/mobile-security-wiki/tree/gh-pages' target='_blank'>Mobile Security Wiki Repository</a> gh-pages branch. Please add content in index.html in gh-pages branch if creating an pull request.</p>\
               </li>\
            </ul>\
            <p>Please let me know if you have any suggestions</p>\
            <p>Below is the list of awesome people who contributed to this wiki. I would like to specially thanks <a href='https://twitter.com/h3xstream' target='_blank'>Philippe Arteau</a>, <a href='https://codingeass.github.io/' target='_blank'>Amandeep Gupta</a> and <a href='https://twitter.com/hslatman' target='_blank'>Herman Slatman</a> who contributed a lot to this website. </p>\
            <ul>\
               <li><a href='https://twitter.com/c0d3xpl0it' target='_blank'>Pralhad Chaskar</a></li>\
               <li><a href='http://anantshri.info' target='_blank'>Anant Shrivastava</a></li>\
               <li><a href=''>Michael Freeman</a></li>\
               <li><a href=''>Esteban</a></li>\
               <li><a href='http://prakharbhardwaj.in/' target='_blank'>Prakhar Bhardwaj</a></li>\
               <li><a href='https://www.facebook.com/thomas.blessen' target='_blank'>Blessen Thomas</a></li>\
               <li><a href='https://twitter.com/hslatman' target='_blank'>Herman Slatman</a></li>\
               <li><a href='http://delhi.securitycompass.com' target='_blank'>Abhineet Jayaraj</a></li>\
               <li><a href='https://www.blackhat.com/eu-14/speakers/Sagi-Kedmi.html' target='_blank'>Sagi Kedmi</a></li>\
               <li><a href='http://in.linkedin.com/in/ankitsrivastav9nov' target='_blank'>Ankit Kumar</a></li>\
               <li><a href='http://www.parbhatpuri.com/' target='_blank'>Parbhat Puri</a></li>\
               <li><a href='https://blog.fortinet.com/author/ruchna-nigam' target='_blank'>Ruchna Nigam</a></li>\
               <li><a href='https://twitter.com/Abhinav_Sejpal' target='_blank'>Abhinav Sejpal</a></li>\
               <li><a href='https://twitter.com/specter_labs' target='_blank'>Shane Hartman</a></li>\
               <li><a href='https://twitter.com/h3xstream' target='_blank'>Philippe Arteau</a></li>\
               <li><a href='https://twitter.com/vbisbest' target='_blank'>Ray Kelly</a></li>\
               <li><a href='https://shankaraman.wordpress.com/' target='_blank'>Shankar Raman </a></li>\
               <li><a href='https://twitter.com/clviper' target='_blank'>Cláudio André</a></li>\
               <li><a href="">Yogesh Sharma</a></li>
            </ul>";
      document.getElementById('Contribute_section_'+type).innerHTML=contribute;
  }
