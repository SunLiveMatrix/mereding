var OxO2b1c=["onerror","onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","rdoRGB_Red","rdoRGB_Green","rdoRGB_Blue","onmousemove","onmousedown","onmouseup","{format}","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","UNDEFINED","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","","pnlRecent","all","border","style","0px","backgroundColor","srcElement","display","none","title","innerHTML","backgroundPosition","px ","px","000000","zIndex","01234567879","keyCode","abcdef","01234567879ABCDEF","closeeditordialog","close","returnValue","0123456789ABCDEFabcdef","0","id","pnlGradient_Top","pnlVertical_Top","top","opacity","filters","backgroundImage","url(Load.ashx?type=image\x26file=cpie_GradientPositionDark.gif)","url(Load.ashx?type=image\x26file=cpie_GradientPositionLight.gif)","cancelBubble","clientX","clientY","className","GradientNormal","button","GradientFullScreen","=","; path=/;"," expires=",";","cookie","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=21;var POSITIONADJUSTY=46;var POSITIONADJUSTZ=43;var msg= new Object();window[OxO2b1c[0]]=alert;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();window[OxO2b1c[1]]=window_load;function initialize(){frm[OxO2b1c[3]][OxO2b1c[2]]=btnCancel_Click;frm[OxO2b1c[4]][OxO2b1c[2]]=btnOK_Click;frm[OxO2b1c[6]][OxO2b1c[5]]=Hsb_Changed;frm[OxO2b1c[6]][OxO2b1c[7]]=validateNumber;frm[OxO2b1c[8]][OxO2b1c[5]]=Hsb_Changed;frm[OxO2b1c[8]][OxO2b1c[7]]=validateNumber;frm[OxO2b1c[9]][OxO2b1c[5]]=Hsb_Changed;frm[OxO2b1c[9]][OxO2b1c[7]]=validateNumber;frm[OxO2b1c[10]][OxO2b1c[5]]=Rgb_Changed;frm[OxO2b1c[10]][OxO2b1c[7]]=validateNumber;frm[OxO2b1c[11]][OxO2b1c[5]]=Rgb_Changed;frm[OxO2b1c[11]][OxO2b1c[7]]=validateNumber;frm[OxO2b1c[12]][OxO2b1c[5]]=Rgb_Changed;frm[OxO2b1c[12]][OxO2b1c[7]]=validateNumber;frm[OxO2b1c[13]][OxO2b1c[5]]=Hex_Changed;frm[OxO2b1c[13]][OxO2b1c[7]]=validateHex;frm[OxO2b1c[14]][OxO2b1c[2]]=btnWebSafeColor_Click;frm[OxO2b1c[15]][OxO2b1c[2]]=rdoHsb_Hue_Click;frm[OxO2b1c[16]][OxO2b1c[2]]=rdoHsb_Saturation_Click;frm[OxO2b1c[17]][OxO2b1c[2]]=rdoHsb_Brightness_Click;frm[OxO2b1c[18]][OxO2b1c[2]]=rdoRgb_Red_Click;frm[OxO2b1c[19]][OxO2b1c[2]]=rdoRgb_Green_Click;frm[OxO2b1c[20]][OxO2b1c[2]]=rdoRgb_Blue_Click;pnlGradient_Top[OxO2b1c[2]]=pnlGradient_Top_Click;pnlGradient_Top[OxO2b1c[21]]=pnlGradient_Top_MouseMove;pnlGradient_Top[OxO2b1c[22]]=pnlGradient_Top_MouseDown;pnlGradient_Top[OxO2b1c[23]]=pnlGradient_Top_MouseUp;pnlVertical_Top[OxO2b1c[2]]=pnlVertical_Top_Click;pnlVertical_Top[OxO2b1c[21]]=pnlVertical_Top_MouseMove;pnlVertical_Top[OxO2b1c[22]]=pnlVertical_Top_MouseDown;pnlVertical_Top[OxO2b1c[23]]=pnlVertical_Top_MouseUp;pnlWebSafeColor[OxO2b1c[2]]=btnWebSafeColor_Click;pnlWebSafeColorBorder[OxO2b1c[2]]=btnWebSafeColor_Click;pnlOldColor[OxO2b1c[2]]=pnlOldClick_Click;lblHSB_Hue[OxO2b1c[2]]=rdoHsb_Hue_Click;lblHSB_Saturation[OxO2b1c[2]]=rdoHsb_Saturation_Click;lblHSB_Brightness[OxO2b1c[2]]=rdoHsb_Brightness_Click;lblRGB_Red[OxO2b1c[2]]=rdoRgb_Red_Click;lblRGB_Green[OxO2b1c[2]]=rdoRgb_Green_Click;lblRGB_Blue[OxO2b1c[2]]=rdoRgb_Blue_Click;pnlGradient_Top.focus();} ;function formatString(Ox2b2){if(!Ox2b2){return OxO2b1c[24];} ;for(var i=1;i<arguments[OxO2b1c[25]];i++){Ox2b2=Ox2b2.replace( new RegExp(OxO2b1c[26]+(i-1)+OxO2b1c[27]),arguments[i]);} ;return Ox2b2;} ;function AddValue(Ox11a,Ox4f){Ox4f=Ox4f.toLowerCase();for(var i=0;i<Ox11a[OxO2b1c[25]];i++){if(Ox11a[i]==Ox4f){return ;} ;} ;Ox11a[Ox11a[OxO2b1c[25]]]=Ox4f;} ;function SniffLanguage(Ox11){} ;function LoadLanguage(){msg[OxO2b1c[28]]=OxO2b1c[29];msg[OxO2b1c[30]]=OxO2b1c[31];msg[OxO2b1c[32]]=OxO2b1c[33];msg[OxO2b1c[34]]=OxO2b1c[35];msg[OxO2b1c[36]]=OxO2b1c[37];msg[OxO2b1c[38]]=OxO2b1c[39];msg[OxO2b1c[40]]=OxO2b1c[40];msg[OxO2b1c[41]]=OxO2b1c[42];msg[OxO2b1c[43]]=OxO2b1c[44];msg[OxO2b1c[45]]=OxO2b1c[46];msg[OxO2b1c[47]]=OxO2b1c[48];msg[OxO2b1c[49]]=OxO2b1c[50];msg[OxO2b1c[51]]=OxO2b1c[52];msg[OxO2b1c[53]]=OxO2b1c[54];msg[OxO2b1c[55]]=OxO2b1c[50];msg[OxO2b1c[56]]=OxO2b1c[57];msg[OxO2b1c[58]]=OxO2b1c[59];msg[OxO2b1c[60]]=OxO2b1c[50];msg[OxO2b1c[61]]=OxO2b1c[62];msg[OxO2b1c[63]]=OxO2b1c[64];msg[OxO2b1c[65]]=OxO2b1c[66];msg[OxO2b1c[67]]=OxO2b1c[68];msg[OxO2b1c[69]]=OxO2b1c[57];msg[OxO2b1c[70]]=OxO2b1c[71];msg[OxO2b1c[72]]=OxO2b1c[73];msg[OxO2b1c[74]]=OxO2b1c[75];msg[OxO2b1c[39]]=OxO2b1c[76];} ;function localize(){} ;function window_load(){frm=frmColorPicker;LoadLanguage();localize();initialize();var hex=OxO2b1c[77];if(hex==OxO2b1c[77]){hex=OxO2b1c[78];} ;if(hex[OxO2b1c[25]]==7){hex=hex.substr(1,6);} ;frm[OxO2b1c[13]][OxO2b1c[79]]=hex;Hex_Changed();hex=Form_Get_Hex();SetBg(pnlOldColor,hex);frm[OxO2b1c[82]][ new Number(GetCookie(OxO2b1c[81])||0)][OxO2b1c[80]]=true;ColorMode_Changed();var Ox2a8=GetCookie(OxO2b1c[83])||OxO2b1c[84];var Ox2b8=msg[OxO2b1c[74]];for(var i=1;i<33;i++){if(Ox2a8[OxO2b1c[25]]/6>=i){hex=Ox2a8.substr((i-1)*6,6);var Ox2b9=HexToRgb(hex);var title=formatString(msg.RecentTooltip,hex,Ox2b9[0],Ox2b9[1],Ox2b9[2]);SetBg(document[OxO2b1c[86]][OxO2b1c[85]+i],hex);SetTitle(document[OxO2b1c[86]][OxO2b1c[85]+i],title);document[OxO2b1c[86]][OxO2b1c[85]+i][OxO2b1c[2]]=pnlRecent_Click;} else {document[OxO2b1c[86]][OxO2b1c[85]+i][OxO2b1c[88]][OxO2b1c[87]]=OxO2b1c[89];} ;} ;} ;function pnlRecent_Click(){frm[OxO2b1c[13]][OxO2b1c[79]]=event[OxO2b1c[91]][OxO2b1c[88]][OxO2b1c[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function pnlOldClick_Click(){frm[OxO2b1c[13]][OxO2b1c[79]]=pnlOldColor[OxO2b1c[88]][OxO2b1c[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function rdoHsb_Hue_Click(){frm[OxO2b1c[15]][OxO2b1c[80]]=true;ColorMode_Changed();} ;function rdoHsb_Saturation_Click(){frm[OxO2b1c[16]][OxO2b1c[80]]=true;ColorMode_Changed();} ;function rdoHsb_Brightness_Click(){frm[OxO2b1c[17]][OxO2b1c[80]]=true;ColorMode_Changed();} ;function rdoRgb_Red_Click(){frm[OxO2b1c[18]][OxO2b1c[80]]=true;ColorMode_Changed();} ;function rdoRgb_Green_Click(){frm[OxO2b1c[19]][OxO2b1c[80]]=true;ColorMode_Changed();} ;function rdoRgb_Blue_Click(){frm[OxO2b1c[20]][OxO2b1c[80]]=true;ColorMode_Changed();} ;function Hide(){for(var i=0;i<arguments[OxO2b1c[25]];i++){arguments[i][OxO2b1c[88]][OxO2b1c[92]]=OxO2b1c[93];} ;} ;function Show(){for(var i=0;i<arguments[OxO2b1c[25]];i++){arguments[i][OxO2b1c[88]][OxO2b1c[92]]=OxO2b1c[84];} ;} ;function SetValue(){for(var i=0;i<arguments[OxO2b1c[25]];i+=2){arguments[i][OxO2b1c[79]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxO2b1c[25]];i+=2){arguments[i][OxO2b1c[94]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxO2b1c[25]];i+=2){arguments[i][OxO2b1c[95]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxO2b1c[25]];i+=2){arguments[i][OxO2b1c[88]][OxO2b1c[90]]=OxO2b1c[73]+arguments[i+1];} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxO2b1c[25]];i+=3){arguments[i][OxO2b1c[88]][OxO2b1c[96]]=arguments[i+1]+OxO2b1c[97]+arguments[i+2]+OxO2b1c[98];} ;} ;function ColorMode_Changed(){for(var i=0;i<6;i++){if(frm[OxO2b1c[82]][i][OxO2b1c[80]]){ColorMode=i;} ;} ;SetCookie(OxO2b1c[81],ColorMode,60*60*24*365);Hide(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background,pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);switch(ColorMode){case 0:Show(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background);Hsb_Changed();break ;;case 1:Show(pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO2b1c[78],pnlGradientRgb_Overlay2,OxO2b1c[99]);pnlGradientRgb_Overlay1[OxO2b1c[88]][OxO2b1c[100]]=5;pnlGradientRgb_Overlay2[OxO2b1c[88]][OxO2b1c[100]]=6;Hsb_Changed();break ;;case 2:Show(pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO2b1c[99],pnlGradientRgb_Overlay2,OxO2b1c[78]);pnlGradientRgb_Overlay1[OxO2b1c[88]][OxO2b1c[100]]=6;pnlGradientRgb_Overlay2[OxO2b1c[88]][OxO2b1c[100]]=5;Hsb_Changed();break ;;case 3:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,0,pnlGradientRgb_Invert,256,0);Rgb_Changed();break ;;case 4:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,0,256,pnlGradientRgb_Invert,0,256);Rgb_Changed();break ;;case 5:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,256,pnlGradientRgb_Invert,256,256);Rgb_Changed();break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(){var Ox2b9=HexToRgb(frm[OxO2b1c[13]].value);Ox2b9=RgbToWebSafeRgb(Ox2b9);frm[OxO2b1c[13]][OxO2b1c[79]]=RgbToHex(Ox2b9);Hex_Changed();} ;function checkWebSafe(){var Ox2b9=Form_Get_Rgb();if(RgbIsWebSafe(Ox2b9)){Hide(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} else {Ox2b9=RgbToWebSafeRgb(Ox2b9);SetBg(pnlWebSafeColor,RgbToHex(Ox2b9));Show(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} ;} ;function validateNumber(){var Ox2ce=String.fromCharCode(event.keyCode);if(IgnoreKey()){return ;} ;if(OxO2b1c[101].indexOf(Ox2ce)!=-1){return ;} ;event[OxO2b1c[102]]=0;} ;function validateHex(){if(IgnoreKey()){return ;} ;var Ox2ce=String.fromCharCode(event.keyCode);if(OxO2b1c[103].indexOf(Ox2ce)!=-1){event[OxO2b1c[102]]=Ox2ce.toUpperCase().charCodeAt(0);return ;} ;if(OxO2b1c[104].indexOf(Ox2ce)!=-1){return ;} ;event[OxO2b1c[102]]=0;} ;function IgnoreKey(){var Ox2ce=String.fromCharCode(event.keyCode);var Ox2d1= new Array(0,8,9,13,27);if(Ox2ce==null){return true;} ;for(var i=0;i<5;i++){if(event[OxO2b1c[102]]==Ox2d1[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){(top[OxO2b1c[105]]||top[OxO2b1c[106]])();} ;function btnOK_Click(){var hex= new String(frm[OxO2b1c[13]].value);try{window[OxO2b1c[107]]=hex;} catch(e){} ;recent=GetCookie(OxO2b1c[83])||OxO2b1c[84];for(var i=0;i<recent[OxO2b1c[25]];i+=6){if(recent.substr(i,6)==hex){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxO2b1c[25]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxO2b1c[13]][OxO2b1c[79]]+recent;SetCookie(OxO2b1c[83],recent,60*60*24*365);(top[OxO2b1c[105]]||top[OxO2b1c[106]])();} ;function SetGradientPosition(x,y){x=x-POSITIONADJUSTX+5;y=y-POSITIONADJUSTY+5;x-=7;y-=27;x=x<0?0:x>255?255:x;y=y<0?0:y>255?255:y;SetBgPosition(pnlGradientPosition,x-5,y-5);switch(ColorMode){case 0:var Ox2d5= new Array(0,0,0);Ox2d5[1]=x/255;Ox2d5[2]=1-(y/255);frm[OxO2b1c[8]][OxO2b1c[79]]=Math.round(Ox2d5[1]*100);frm[OxO2b1c[9]][OxO2b1c[79]]=Math.round(Ox2d5[2]*100);Hsb_Changed();break ;;case 1:var Ox2d5= new Array(0,0,0);Ox2d5[0]=x/255;Ox2d5[2]=1-(y/255);frm[OxO2b1c[6]][OxO2b1c[79]]=Ox2d5[0]==1?0:Math.round(Ox2d5[0]*360);frm[OxO2b1c[9]][OxO2b1c[79]]=Math.round(Ox2d5[2]*100);Hsb_Changed();break ;;case 2:var Ox2d5= new Array(0,0,0);Ox2d5[0]=x/255;Ox2d5[1]=1-(y/255);frm[OxO2b1c[6]][OxO2b1c[79]]=Ox2d5[0]==1?0:Math.round(Ox2d5[0]*360);frm[OxO2b1c[8]][OxO2b1c[79]]=Math.round(Ox2d5[1]*100);Hsb_Changed();break ;;case 3:var Ox2b9= new Array(0,0,0);Ox2b9[1]=255-y;Ox2b9[2]=x;frm[OxO2b1c[11]][OxO2b1c[79]]=Ox2b9[1];frm[OxO2b1c[12]][OxO2b1c[79]]=Ox2b9[2];Rgb_Changed();break ;;case 4:var Ox2b9= new Array(0,0,0);Ox2b9[0]=255-y;Ox2b9[2]=x;frm[OxO2b1c[10]][OxO2b1c[79]]=Ox2b9[0];frm[OxO2b1c[12]][OxO2b1c[79]]=Ox2b9[2];Rgb_Changed();break ;;case 5:var Ox2b9= new Array(0,0,0);Ox2b9[0]=x;Ox2b9[1]=255-y;frm[OxO2b1c[10]][OxO2b1c[79]]=Ox2b9[0];frm[OxO2b1c[11]][OxO2b1c[79]]=Ox2b9[1];Rgb_Changed();break ;;} ;} ;function Hex_Changed(){var hex=Form_Get_Hex();var Ox2b9=HexToRgb(hex);var Ox2d5=RgbToHsb(Ox2b9);Form_Set_Rgb(Ox2b9);Form_Set_Hsb(Ox2d5);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Rgb_Changed(){var Ox2b9=Form_Get_Rgb();var Ox2d5=RgbToHsb(Ox2b9);var hex=RgbToHex(Ox2b9);Form_Set_Hsb(Ox2d5);Form_Set_Hex(hex);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Hsb_Changed(){var Ox2d5=Form_Get_Hsb();var Ox2b9=HsbToRgb(Ox2d5);var hex=RgbToHex(Ox2b9);Form_Set_Rgb(Ox2b9);Form_Set_Hex(hex);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Form_Set_Hex(hex){frm[OxO2b1c[13]][OxO2b1c[79]]=hex;} ;function Form_Get_Hex(){var hex= new String(frm[OxO2b1c[13]].value);for(var i=0;i<hex[OxO2b1c[25]];i++){if(OxO2b1c[108].indexOf(hex.substr(i,1))==-1){hex=OxO2b1c[99];frm[OxO2b1c[13]][OxO2b1c[79]]=hex;alert(formatString(msg.BadNumber,OxO2b1c[99],OxO2b1c[78]));break ;} ;} ;while(hex[OxO2b1c[25]]<6){hex=OxO2b1c[109]+hex;} ;return hex;} ;function Form_Get_Hsb(){var Ox2d5= new Array(0,0,0);Ox2d5[0]= new Number(frm[OxO2b1c[6]].value)/360;Ox2d5[1]= new Number(frm[OxO2b1c[8]].value)/100;Ox2d5[2]= new Number(frm[OxO2b1c[9]].value)/100;if(Ox2d5[0]>1||isNaN(Ox2d5[0])){Ox2d5[0]=1;frm[OxO2b1c[6]][OxO2b1c[79]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox2d5[1]>1||isNaN(Ox2d5[1])){Ox2d5[1]=1;frm[OxO2b1c[8]][OxO2b1c[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox2d5[2]>1||isNaN(Ox2d5[2])){Ox2d5[2]=1;frm[OxO2b1c[9]][OxO2b1c[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox2d5;} ;function Form_Set_Hsb(Ox2d5){SetValue(frm.txtHSB_Hue,Math.round(Ox2d5[0]*360),frm.txtHSB_Saturation,Math.round(Ox2d5[1]*100),frm.txtHSB_Brightness,Math.round(Ox2d5[2]*100));} ;function Form_Get_Rgb(){var Ox2b9= new Array(0,0,0);Ox2b9[0]= new Number(frm[OxO2b1c[10]].value);Ox2b9[1]= new Number(frm[OxO2b1c[11]].value);Ox2b9[2]= new Number(frm[OxO2b1c[12]].value);if(Ox2b9[0]>255||isNaN(Ox2b9[0])||Ox2b9[0]!=Math.round(Ox2b9[0])){Ox2b9[0]=255;frm[OxO2b1c[10]][OxO2b1c[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox2b9[1]>255||isNaN(Ox2b9[1])||Ox2b9[1]!=Math.round(Ox2b9[1])){Ox2b9[1]=255;frm[OxO2b1c[11]][OxO2b1c[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox2b9[2]>255||isNaN(Ox2b9[2])||Ox2b9[2]!=Math.round(Ox2b9[2])){Ox2b9[2]=255;frm[OxO2b1c[12]][OxO2b1c[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox2b9;} ;function Form_Set_Rgb(Ox2b9){frm[OxO2b1c[10]][OxO2b1c[79]]=Ox2b9[0];frm[OxO2b1c[11]][OxO2b1c[79]]=Ox2b9[1];frm[OxO2b1c[12]][OxO2b1c[79]]=Ox2b9[2];} ;function SetupCursors(){var Ox2d5=Form_Get_Hsb();var Ox2b9=Form_Get_Rgb();if(RgbToYuv(Ox2b9)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(event[OxO2b1c[91]]!=null){if(event[OxO2b1c[91]][OxO2b1c[110]]==OxO2b1c[111]){return ;} ;if(event[OxO2b1c[91]][OxO2b1c[110]]==OxO2b1c[112]){return ;} ;} ;var x;var y;var z;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox2d5[i]*=255;} ;} ;switch(ColorMode){case 0:x=Ox2d5[1];y=Ox2d5[2];z=Ox2d5[0]==0?1:Ox2d5[0];break ;;case 1:x=Ox2d5[0]==0?1:Ox2d5[0];y=Ox2d5[2];z=Ox2d5[1];break ;;case 2:x=Ox2d5[0]==0?1:Ox2d5[0];y=Ox2d5[1];z=Ox2d5[2];break ;;case 3:x=Ox2b9[2];y=Ox2b9[1];z=Ox2b9[0];break ;;case 4:x=Ox2b9[2];y=Ox2b9[0];z=Ox2b9[1];break ;;case 5:x=Ox2b9[0];y=Ox2b9[1];z=Ox2b9[2];break ;;} ;y=255-y;z=255-z;SetBgPosition(pnlGradientPosition,x-5,y-5);pnlVerticalPosition[OxO2b1c[88]][OxO2b1c[113]]=(z+27)+OxO2b1c[98];} ;function SetupGradients(){var Ox2d5=Form_Get_Hsb();var Ox2b9=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox2d5[0])));break ;;case 1:var b= new Array();for(var i=0;i<3;i++){b[i]=Math.round(Ox2d5[2]*255);} ;SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox2d5[0])),pnlVerticalHsbSaturation_Hue,RgbToHex(HsbToRgb( new Array(Ox2d5[0],1,Ox2d5[2]))),pnlVerticalHsbSaturation_White,RgbToHex(b));pnlGradientRgb_Overlay1[OxO2b1c[115]][0][OxO2b1c[114]]=(100-Math.round(Ox2d5[1]*100));break ;;case 2:SetBg(pnlVerticalHsbBrightness_Hue,RgbToHex(HsbToRgb( new Array(Ox2d5[0],Ox2d5[1],1))));pnlGradientRgb_Overlay1[OxO2b1c[115]][0][OxO2b1c[114]]=(100-Math.round(Ox2d5[2]*100));break ;;case 3:pnlGradientRgb_Invert[OxO2b1c[115]][3][OxO2b1c[114]]=100-Math.round((Ox2b9[0]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(0xFF,Ox2b9[1],Ox2b9[2])),pnlVerticalRgb_End,RgbToHex( new Array(0x00,Ox2b9[1],Ox2b9[2])));break ;;case 4:pnlGradientRgb_Invert[OxO2b1c[115]][3][OxO2b1c[114]]=100-Math.round((Ox2b9[1]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox2b9[0],0xFF,Ox2b9[2])),pnlVerticalRgb_End,RgbToHex( new Array(Ox2b9[0],0x00,Ox2b9[2])));break ;;case 5:pnlGradientRgb_Invert[OxO2b1c[115]][3][OxO2b1c[114]]=100-Math.round((Ox2b9[2]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox2b9[0],Ox2b9[1],0xFF)),pnlVerticalRgb_End,RgbToHex( new Array(Ox2b9[0],Ox2b9[1],0x00)));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;pnlGradientPosition[OxO2b1c[88]][OxO2b1c[116]]=OxO2b1c[117];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;pnlGradientPosition[OxO2b1c[88]][OxO2b1c[116]]=OxO2b1c[118];} ;function pnlGradient_Top_Click(){event[OxO2b1c[119]]=true;SetGradientPosition(event[OxO2b1c[120]]-5,event[OxO2b1c[121]]-5);pnlGradient_Top[OxO2b1c[122]]=OxO2b1c[123];} ;function pnlGradient_Top_MouseMove(){event[OxO2b1c[119]]=true;if(event[OxO2b1c[124]]!=1){return ;} ;SetGradientPosition(event[OxO2b1c[120]]-5,event[OxO2b1c[121]]-5);} ;function pnlGradient_Top_MouseDown(){event[OxO2b1c[119]]=true;SetGradientPosition(event[OxO2b1c[120]]-5,event[OxO2b1c[121]]-5);pnlGradient_Top[OxO2b1c[122]]=OxO2b1c[125];} ;function pnlGradient_Top_MouseUp(){event[OxO2b1c[119]]=true;SetGradientPosition(event[OxO2b1c[120]]-5,event[OxO2b1c[121]]-5);pnlGradient_Top[OxO2b1c[122]]=OxO2b1c[123];} ;function Document_MouseUp(){event[OxO2b1c[119]]=true;pnlGradient_Top[OxO2b1c[122]]=OxO2b1c[123];} ;function SetVerticalPosition(z){var z=z-POSITIONADJUSTZ;if(z<27){z=27;} ;if(z>282){z=282;} ;pnlVerticalPosition[OxO2b1c[88]][OxO2b1c[113]]=z+OxO2b1c[98];z=1-((z-27)/255);switch(ColorMode){case 0:if(z==1){z=0;} ;frm[OxO2b1c[6]][OxO2b1c[79]]=Math.round(z*360);Hsb_Changed();break ;;case 1:frm[OxO2b1c[8]][OxO2b1c[79]]=Math.round(z*100);Hsb_Changed();break ;;case 2:frm[OxO2b1c[9]][OxO2b1c[79]]=Math.round(z*100);Hsb_Changed();break ;;case 3:frm[OxO2b1c[10]][OxO2b1c[79]]=Math.round(z*255);Rgb_Changed();break ;;case 4:frm[OxO2b1c[11]][OxO2b1c[79]]=Math.round(z*255);Rgb_Changed();break ;;case 5:frm[OxO2b1c[12]][OxO2b1c[79]]=Math.round(z*255);Rgb_Changed();break ;;} ;} ;function pnlVertical_Top_Click(){SetVerticalPosition(event[OxO2b1c[121]]-5);event[OxO2b1c[119]]=true;} ;function pnlVertical_Top_MouseMove(){if(event[OxO2b1c[124]]!=1){return ;} ;SetVerticalPosition(event[OxO2b1c[121]]-5);event[OxO2b1c[119]]=true;} ;function pnlVertical_Top_MouseDown(){SetVerticalPosition(event[OxO2b1c[121]]-5);event[OxO2b1c[119]]=true;} ;function pnlVertical_Top_MouseUp(){SetVerticalPosition(event[OxO2b1c[121]]-5);event[OxO2b1c[119]]=true;} ;function SetCookie(name,Ox4f,Ox56){var Ox57=name+OxO2b1c[126]+escape(Ox4f)+OxO2b1c[127];if(Ox56){var Ox58= new Date();Ox58.setSeconds(Ox58.getSeconds()+Ox56);Ox57+=OxO2b1c[128]+Ox58.toUTCString()+OxO2b1c[129];} ;document[OxO2b1c[130]]=Ox57;} ;function GetCookie(name){var Ox5a=document[OxO2b1c[130]].split(OxO2b1c[129]);for(var i=0;i<Ox5a[OxO2b1c[25]];i++){var Ox5b=Ox5a[i].split(OxO2b1c[126]);if(name==Ox5b[0].replace(/\s/g,OxO2b1c[84])){return unescape(Ox5b[1]);} ;} ;} ;function GetCookieDictionary(){var Ox12b={};var Ox5a=document[OxO2b1c[130]].split(OxO2b1c[129]);for(var i=0;i<Ox5a[OxO2b1c[25]];i++){var Ox5b=Ox5a[i].split(OxO2b1c[126]);Ox12b[Ox5b[0].replace(/\s/g,OxO2b1c[84])]=unescape(Ox5b[1]);} ;return Ox12b;} ;function RgbIsWebSafe(Ox2b9){var hex=RgbToHex(Ox2b9);for(var i=0;i<3;i++){if(OxO2b1c[131].indexOf(hex.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox2b9){var Ox2ef= new Array(Ox2b9[0],Ox2b9[1],Ox2b9[2]);if(RgbIsWebSafe(Ox2b9)){return Ox2ef;} ;var Ox2f0= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox25=1;Ox25<6;Ox25++){if(Ox2ef[i]>Ox2f0[Ox25-1]&&Ox2ef[i]<Ox2f0[Ox25]){if(Ox2ef[i]-Ox2f0[Ox25-1]>Ox2f0[Ox25]-Ox2ef[i]){Ox2ef[i]=Ox2f0[Ox25];} else {Ox2ef[i]=Ox2f0[Ox25-1];} ;break ;} ;} ;} ;return Ox2ef;} ;function RgbToYuv(Ox2b9){var Ox2f2= new Array();Ox2f2[0]=(Ox2b9[0]*0.299+Ox2b9[1]*0.587+Ox2b9[2]*0.114)/255;Ox2f2[1]=(Ox2b9[0]*-0.169+Ox2b9[1]*-0.332+Ox2b9[2]*0.500+128)/255;Ox2f2[2]=(Ox2b9[0]*0.500+Ox2b9[1]*-0.419+Ox2b9[2]*-0.0813+128)/255;return Ox2f2;} ;function RgbToHsb(Ox2b9){var Ox2f4= new Array(Ox2b9[0],Ox2b9[1],Ox2b9[2]);var Ox2f5= new Number(1);var Ox2f6= new Number(0);var Ox2f7= new Number(1);var Ox2d5= new Array(0,0,0);var Ox2f8= new Array();for(var i=0;i<3;i++){Ox2f4[i]=Ox2b9[i]/255;if(Ox2f4[i]<Ox2f5){Ox2f5=Ox2f4[i];} ;if(Ox2f4[i]>Ox2f6){Ox2f6=Ox2f4[i];} ;} ;Ox2f7=Ox2f6-Ox2f5;Ox2d5[2]=Ox2f6;if(Ox2f7==0){return Ox2d5;} ;Ox2d5[1]=Ox2f7/Ox2f6;for(var i=0;i<3;i++){Ox2f8[i]=(((Ox2f6-Ox2f4[i])/6)+(Ox2f7/2))/Ox2f7;} ;if(Ox2f4[0]==Ox2f6){Ox2d5[0]=Ox2f8[2]-Ox2f8[1];} else {if(Ox2f4[1]==Ox2f6){Ox2d5[0]=(1/3)+Ox2f8[0]-Ox2f8[2];} else {if(Ox2f4[2]==Ox2f6){Ox2d5[0]=(2/3)+Ox2f8[1]-Ox2f8[0];} ;} ;} ;if(Ox2d5[0]<0){Ox2d5[0]+=1;} else {if(Ox2d5[0]>1){Ox2d5[0]-=1;} ;} ;return Ox2d5;} ;function HsbToRgb(Ox2d5){var Ox2b9=HueToRgb(Ox2d5[0]);var Ox120=Ox2d5[2]*255;for(var i=0;i<3;i++){Ox2b9[i]=Ox2b9[i]*Ox2d5[2];Ox2b9[i]=((Ox2b9[i]-Ox120)*Ox2d5[1])+Ox120;Ox2b9[i]=Math.round(Ox2b9[i]);} ;return Ox2b9;} ;function RgbToHex(Ox2b9){var hex= new String();for(var i=0;i<3;i++){Ox2b9[2-i]=Math.round(Ox2b9[2-i]);hex=Ox2b9[2-i].toString(16)+hex;if(hex[OxO2b1c[25]]%2==1){hex=OxO2b1c[109]+hex;} ;} ;return hex.toUpperCase();} ;function HexToRgb(hex){var Ox2b9= new Array();for(var i=0;i<3;i++){Ox2b9[i]= new Number(OxO2b1c[132]+hex.substr(i*2,2));} ;return Ox2b9;} ;function HueToRgb(Ox2fd){var Ox2fe=Ox2fd*360;var Ox2b9= new Array(0,0,0);var Ox2ff=(Ox2fe%60)/60;if(Ox2fe<60){Ox2b9[0]=255;Ox2b9[1]=Ox2ff*255;} else {if(Ox2fe<120){Ox2b9[1]=255;Ox2b9[0]=(1-Ox2ff)*255;} else {if(Ox2fe<180){Ox2b9[1]=255;Ox2b9[2]=Ox2ff*255;} else {if(Ox2fe<240){Ox2b9[2]=255;Ox2b9[1]=(1-Ox2ff)*255;} else {if(Ox2fe<300){Ox2b9[2]=255;Ox2b9[0]=Ox2ff*255;} else {if(Ox2fe<360){Ox2b9[0]=255;Ox2b9[2]=(1-Ox2ff)*255;} ;} ;} ;} ;} ;} ;return Ox2b9;} ;function CheckHexSelect(){if(window[OxO2b1c[133]]&&window[OxO2b1c[134]]&&frm[OxO2b1c[13]]){var Oxdc=OxO2b1c[73]+frm[OxO2b1c[13]][OxO2b1c[79]];if(Oxdc[OxO2b1c[25]]==7){if(window[OxO2b1c[135]]!=Oxdc){window[OxO2b1c[135]]=Oxdc;window.do_select(Oxdc);} ;} ;} ;} ;setInterval(CheckHexSelect,10);