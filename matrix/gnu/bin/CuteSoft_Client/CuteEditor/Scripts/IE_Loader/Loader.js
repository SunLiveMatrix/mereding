var OxO9116=["undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","document","length","element \x27","\x27 not found","returnValue","preventDefault","cancelBubble","stopPropagation","onchange","oninitialized","command","commandui","commandvalue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Load.ashx?type=image\x26file=t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","none","/Load.ashx?type=image\x26file=t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","//TODO: event not found? throw error ?","all","UNSELECTABLE","on","tabIndex","-1","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","head","script","language","javascript","type","text/javascript","src","caller","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Load.ashx?type=theme\x26theme=","\x26file=all.png","/Images/blank2020.gif","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","onmousedown","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Load.ashx?type=scripts\x26file=IE_Implementation\x26culture=","Culture","/Load.ashx?type=scripts\x26file=EditorExtension\x26culture=","CuteEditorImplementation","function","POST","\x26getModified=1\x26_temp=","loadScript","status","responseText","GET","\x26modified=","Failed to load impl code!","block","contentEditable","body","cursor","InitializeCode","no-drop","CuteEditorInitialize"];function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxO9116[0]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxO9116[0]){return  new ActiveXObject(OxO9116[1]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Oxa5f,Ox288,Ox235,Oxa60){var Oxe7=CreateXMLHttpRequest();function Oxa61(){if(Oxe7[OxO9116[2]]!=4){return ;} ;Oxe7[OxO9116[3]]= new Function();var Ox290=Oxe7;Oxe7=null;Ox235(Ox290);} ;Oxe7[OxO9116[3]]=Oxa61;Oxe7.open(Oxa5f,Ox288,true);Oxe7.send(Oxa60||OxO9116[4]);} ;function Window_GetElement(Ox1a8,Ox9a,Ox240){var Ox29=Ox1a8[OxO9116[5]].getElementById(Ox9a);if(Ox29){return Ox29;} ;var Ox31=Ox1a8[OxO9116[5]].getElementsByName(Ox9a);if(Ox31[OxO9116[6]]>0){return Ox31.item(0);} ;if(Ox240){throw ( new Error(OxO9116[7]+Ox9a+OxO9116[8]));} ;return null;} ;function Event_PreventDefault(Ox245){Ox245=Event_GetEvent(Ox245);Ox245[OxO9116[9]]=false;if(Ox245[OxO9116[10]]){Ox245.preventDefault();} ;} ;function Event_CancelBubble(Ox245){Ox245=Event_GetEvent(Ox245);Ox245[OxO9116[11]]=true;if(Ox245[OxO9116[12]]){Ox245.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox245){Ox245=Event_GetEvent(Ox245);Event_PreventDefault(Ox245);return Event_CancelBubble(Ox245);} ;function CuteEditor_AddMainMenuItems(Ox66a){} ;function CuteEditor_AddDropMenuItems(Ox66a,Ox671){} ;function CuteEditor_AddTagMenuItems(Ox66a,Ox673){} ;function CuteEditor_AddVerbMenuItems(Ox66a,Ox673){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox26b){return Ox26b;} ;function CuteEditor_FilterHTML(editor,Ox283){return Ox283;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxO9116[13],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxO9116[14],null);} ;function CuteEditor_FireCommand(editor,Ox4d,Ox4e,Ox4f){var Ox13e=window.CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f);if(Ox13e==true){return true;} ;var Ox67c={};Ox67c[OxO9116[15]]=Ox4d;Ox67c[OxO9116[16]]=Ox4e;Ox67c[OxO9116[17]]=Ox4f;Ox67c[OxO9116[9]]=true;CuteEditor_FireEvent(editor,OxO9116[18],Ox67c);if(Ox67c[OxO9116[9]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox67e,Ox67f){if(Ox67f==null){Ox67f={};} ;var Ox680=editor.getAttribute(Ox67e);if(Ox680){if( typeof (Ox680)==OxO9116[19]){editor[OxO9116[20]]= new Function(OxO9116[21],Ox680);} else {editor[OxO9116[20]]=Ox680;} ;editor._fireEventFunction(Ox67f);} ;} ;function CuteEditor_GetEditor(element){for(var Ox43=element;Ox43!=null;Ox43=Ox43[OxO9116[22]]){if(Ox43.getAttribute(OxO9116[23])==OxO9116[24]){return Ox43;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Oxa63){var editor=CuteEditor_GetEditor(element);if(editor[OxO9116[25]]){return ;} ;if(element.getAttribute(OxO9116[26])==OxO9116[24]){var Ox142=element.GetValue();if(Ox142==OxO9116[27]){Ox142=OxO9116[4];} ;var Ox201=element.GetText();if(Ox201==OxO9116[27]){Ox201=OxO9116[4];} ;element.SetSelectedIndex(0);editor.ExecCommand(Oxa63,false,Ox142,Ox201);} else {if(!editor[OxO9116[25]]&&element[OxO9116[28]]){var Ox142=element[OxO9116[28]];if(Ox142==OxO9116[27]){Ox142=OxO9116[4];} ;element[OxO9116[29]]=0;editor.ExecCommand(Oxa63,false,Ox142,Ox201);} else {element[OxO9116[29]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox740){var Oxba=null;while(src!=null){if(src[OxO9116[30]]==OxO9116[31]){Oxba=src;break ;} ;src=src[OxO9116[22]];} ;var Ox1e4=Oxba[OxO9116[32]].item(0);Oxba[OxO9116[35]][OxO9116[34]][OxO9116[33]]=OxO9116[4];Ox1e4[OxO9116[36]]=OxO9116[37]+Ox740+OxO9116[38];Oxba[OxO9116[39]]= new Function(OxO9116[40]+Ox740+OxO9116[41]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox740){var Oxba=null;while(src!=null){if(src[OxO9116[30]]==OxO9116[31]){Oxba=src;break ;} ;src=src[OxO9116[22]];} ;var Ox1e4=Oxba[OxO9116[32]].item(0);Oxba[OxO9116[35]][OxO9116[34]][OxO9116[33]]=OxO9116[42];Ox1e4[OxO9116[36]]=OxO9116[37]+Ox740+OxO9116[43];Oxba[OxO9116[39]]= new Function(OxO9116[44]+Ox740+OxO9116[41]);} ;function Event_GetEvent(Ox245){Ox245=Event_FindEvent(Ox245);if(Ox245==null){Debug_Todo(OxO9116[45]);} ;return Ox245;} ;function Element_GetAllElements(p){var arr=[];for(var i=0;i<p[OxO9116[46]][OxO9116[6]];i++){arr.push(p[OxO9116[46]].item(i));} ;return arr;} ;function Element_SetUnselectable(element){element.setAttribute(OxO9116[47],OxO9116[48]);element.setAttribute(OxO9116[49],OxO9116[50]);var arr=Element_GetAllElements(element);var len=arr[OxO9116[6]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxO9116[47],OxO9116[48]);arr[i].setAttribute(OxO9116[49],OxO9116[50]);} ;} ;function Frame_GetContentWindow(Ox349){if(Ox349[OxO9116[51]]){return Ox349[OxO9116[51]];} ;if(Ox349[OxO9116[52]]){if(Ox349[OxO9116[52]][OxO9116[53]]){return Ox349[OxO9116[52]][OxO9116[53]];} ;} ;var Ox1a8;if(Ox349[OxO9116[54]]){Ox1a8=window[OxO9116[55]][Ox349[OxO9116[54]]];if(Ox1a8){return Ox1a8;} ;} ;var len=window[OxO9116[55]][OxO9116[6]];for(var i=0;i<len;i++){Ox1a8=window[OxO9116[55]][i];if(Ox1a8[OxO9116[56]]==Ox349){return Ox1a8;} ;if(Ox1a8[OxO9116[5]]==Ox349[OxO9116[52]]){return Ox1a8;} ;} ;Debug_Todo(OxO9116[57]);} ;function Array_IndexOf(arr,Ox247){for(var i=0;i<arr[OxO9116[6]];i++){if(arr[i]==Ox247){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox247){return Array_IndexOf(arr,Ox247)!=-1;} ;function clearArray(Ox24a){for(var i=0;i<Ox24a[OxO9116[6]];i++){Ox24a[i]=null;} ;} ;function Event_FindEvent(Ox245){if(Ox245&&Ox245[OxO9116[10]]){return Ox245;} ;if(window[OxO9116[21]]){return window[OxO9116[21]];} ;return Event_FindEvent_FindEventFromWindows();} ;function include(Oxc9,Ox288){var Ox289=document.getElementsByTagName(OxO9116[58]).item(0);var Ox28a=document.getElementById(Oxc9);if(Ox28a){Ox289.removeChild(Ox28a);} ;var Ox28b=document.createElement(OxO9116[59]);Ox28b.setAttribute(OxO9116[60],OxO9116[61]);Ox28b.setAttribute(OxO9116[62],OxO9116[63]);Ox28b.setAttribute(OxO9116[64],Ox288);Ox28b.setAttribute(OxO9116[54],Oxc9);Ox289.appendChild(Ox28b);} ;function Event_FindEvent_FindEventFromCallers(){var Ox18f=Event_GetEvent[OxO9116[65]];for(var i=0;i<100;i++){if(!Ox18f){break ;} ;var Ox245=Ox18f[OxO9116[66]][0];if(Ox245&&Ox245[OxO9116[10]]){return Ox245;} ;Ox18f=Ox18f[OxO9116[65]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox24e(window);function Ox24e(Ox1a8){if(Ox1a8==null){return null;} ;if(Ox1a8[OxO9116[21]]){return Ox1a8[OxO9116[21]];} ;if(Array_Contains(arr,Ox1a8)){return null;} ;arr.push(Ox1a8);var Ox24f=[];if(Ox1a8[OxO9116[67]]!=Ox1a8){Ox24f.push(Ox1a8.parent);} ;if(Ox1a8[OxO9116[68]]!=Ox1a8[OxO9116[67]]){Ox24f.push(Ox1a8.top);} ;if(Ox1a8[OxO9116[69]]){Ox24f.push(Ox1a8.opener);} ;for(var i=0;i<Ox1a8[OxO9116[55]][OxO9116[6]];i++){Ox24f.push(Ox1a8[OxO9116[55]][i]);} ;for(var i=0;i<Ox24f[OxO9116[6]];i++){try{var Ox245=Ox24e(Ox24f[i]);if(Ox245){return Ox245;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox245){Ox245=Event_GetEvent(Ox245);if(Ox245[OxO9116[70]]){return Ox245[OxO9116[70]];} ;if(Ox245[OxO9116[71]]){return Ox245[OxO9116[71]];} ;Debug_Todo(OxO9116[72]);return null;} ;function Event_GetFromElement(Ox245){Ox245=Event_GetEvent(Ox245);if(Ox245[OxO9116[73]]){return Ox245[OxO9116[73]];} ;if(Ox245[OxO9116[74]]){return Ox245[OxO9116[74]];} ;return null;} ;function Event_GetToElement(Ox245){Ox245=Event_GetEvent(Ox245);if(Ox245[OxO9116[75]]){return Ox245[OxO9116[75]];} ;if(Ox245[OxO9116[74]]){return Ox245[OxO9116[74]];} ;return null;} ;function Event_GetKeyCode(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[76]];} ;function Event_GetClientX(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[77]];} ;function Event_GetClientY(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[78]];} ;function Event_GetOffsetX(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[79]];} ;function Event_GetOffsetY(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[80]];} ;function Event_IsLeftButton(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[81]]==1;} ;function Event_IsCtrlKey(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[82]];} ;function Event_IsAltKey(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[83]];} ;function Event_IsShiftKey(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxO9116[84]];} ;function CuteEditor_BasicInitialize(editor){var Ox709= new Function(OxO9116[85]);var Oxa67= new Function(OxO9116[86]);var Oxa68= new Function(OxO9116[87]);var Oxa69=editor.GetScriptProperty(OxO9116[88]);var Oxa6a=editor.GetScriptProperty(OxO9116[89]);var Oxa6b=Oxa69+OxO9116[90]+Oxa6a+OxO9116[91];var Oxa6c=Oxa69+OxO9116[92];var images=editor.getElementsByTagName(OxO9116[93]);var len=images[OxO9116[6]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxO9116[94])&&!img.getAttribute(OxO9116[95])){img.setAttribute(OxO9116[95],img.getAttribute(OxO9116[94]));} ;var Ox135=img.getAttribute(OxO9116[96]);var Ox671=img.getAttribute(OxO9116[97]);if(!(Ox135||Ox671)){continue ;} ;var Oxa6d=img.getAttribute(OxO9116[98]);if(parseInt(Oxa6d)>=0){img[OxO9116[34]][OxO9116[99]]=OxO9116[100];img[OxO9116[34]][OxO9116[101]]=OxO9116[100];img[OxO9116[64]]=Oxa6c;img[OxO9116[34]][OxO9116[102]]=OxO9116[103]+Oxa6b+OxO9116[104];img[OxO9116[34]][OxO9116[105]]=OxO9116[106]+(Oxa6d*20)+OxO9116[107];img[OxO9116[34]][OxO9116[33]]=OxO9116[4];} ;if(img[OxO9116[108]]!=OxO9116[109]){img[OxO9116[108]]=OxO9116[110];img[OxO9116[111]]= new Function(OxO9116[112]);img[OxO9116[113]]= new Function(OxO9116[114]);img[OxO9116[115]]= new Function(OxO9116[116]);img[OxO9116[117]]= new Function(OxO9116[118]);} ;if(!img[OxO9116[119]]){img[OxO9116[119]]=Event_CancelEvent;} ;if(!img[OxO9116[120]]){img[OxO9116[120]]=Event_CancelEvent;} ;if(Ox135){var Ox18f=img.getAttribute(OxO9116[121])==OxO9116[24]?Oxa67:Ox709;if(img[OxO9116[39]]==null){img[OxO9116[39]]=Ox18f;} ;if(img[OxO9116[122]]==null){img[OxO9116[122]]=Ox18f;} ;} else {if(Ox671){if(img[OxO9116[39]]==null){img[OxO9116[39]]=Oxa68;} ;} ;} ;} ;var Ox776=Window_GetElement(window,editor.GetScriptProperty(OxO9116[123]),true);var Ox777=Window_GetElement(window,editor.GetScriptProperty(OxO9116[124]),true);var Ox772=Window_GetElement(window,editor.GetScriptProperty(OxO9116[125]),true);Ox772[OxO9116[108]]+=OxO9116[126];Ox776[OxO9116[108]]+=OxO9116[127];Ox777[OxO9116[108]]+=OxO9116[127];Element_SetUnselectable(Ox776);Element_SetUnselectable(Ox777);} ;function CuteEditor_ButtonOver(element){if(!element[OxO9116[128]]){element[OxO9116[119]]=Event_CancelEvent;element[OxO9116[113]]=CuteEditor_ButtonOut;element[OxO9116[115]]=CuteEditor_ButtonDown;element[OxO9116[117]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxO9116[128]]=true;} ;element[OxO9116[129]]=true;element[OxO9116[108]]=OxO9116[130];} ;function CuteEditor_ButtonOut(){var element=this;element[OxO9116[108]]=OxO9116[110];element[OxO9116[129]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxO9116[108]]=OxO9116[131];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxO9116[129]]){element[OxO9116[108]]=OxO9116[130];} else {element[OxO9116[108]]=OxO9116[132];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxO9116[128]]){element[OxO9116[119]]=Event_CancelEvent;element[OxO9116[113]]=CuteEditor_ColorPicker_ButtonOut;element[OxO9116[115]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxO9116[128]]=true;} ;element[OxO9116[129]]=true;element[OxO9116[34]][OxO9116[133]]=OxO9116[134];element[OxO9116[34]][OxO9116[135]]=OxO9116[136];element[OxO9116[34]][OxO9116[137]]=OxO9116[138];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxO9116[129]]=false;element[OxO9116[34]][OxO9116[133]]=OxO9116[139];element[OxO9116[34]][OxO9116[135]]=OxO9116[4];element[OxO9116[34]][OxO9116[137]]=OxO9116[138];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxO9116[34]][OxO9116[133]]=OxO9116[140];element[OxO9116[34]][OxO9116[135]]=OxO9116[4];element[OxO9116[34]][OxO9116[137]]=OxO9116[138];} ;function CuteEditor_ButtonCommandOver(element){element[OxO9116[129]]=true;if(element[OxO9116[141]]){element[OxO9116[108]]=OxO9116[142];} else {element[OxO9116[108]]=OxO9116[130];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxO9116[129]]=false;if(element[OxO9116[143]]){element[OxO9116[108]]=OxO9116[144];} else {if(element[OxO9116[141]]){element[OxO9116[108]]=OxO9116[142];} else {element[OxO9116[108]]=OxO9116[110];} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxO9116[108]]=OxO9116[131];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxO9116[141]]){element[OxO9116[108]]=OxO9116[142];return ;} ;if(element[OxO9116[129]]){element[OxO9116[108]]=OxO9116[130];} else {if(element[OxO9116[143]]){element[OxO9116[108]]=OxO9116[144];} else {element[OxO9116[108]]=OxO9116[110];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxO9116[6]];i++){var Ox18f=CuteEditorGlobalFunctions[i];var name=Ox18f+OxO9116[4];name=name.substr(8,name.indexOf(OxO9116[145])-8).replace(/\s/g,OxO9116[4]);if(!window[name]){window[name]=Ox18f;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxO9116[147]][OxO9116[146]];var danapos=danaurl.indexOf(OxO9116[148]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxO9116[149],danapos+10);var pluspos2=danaurl.indexOf(OxO9116[150],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxO9116[150];} ;function CuteEditor_GetScriptProperty(name){var Ox142=this[OxO9116[151]][name];if(Ox142&&__danainfo){if(name==OxO9116[88]){return Ox142+__danainfo;} ;var Ox382=this[OxO9116[151]][OxO9116[88]];if(Ox142.substr(0,Ox382.length)==Ox382){return Ox382+__danainfo+Ox142.substring(Ox382.length);} ;} ;return Ox142;} ;function CuteEditor_SetScriptProperty(name,Ox142){if(Ox142==null){this[OxO9116[151]][name]=null;} else {this[OxO9116[151]][name]=String(Ox142);} ;} ;function CuteEditorInitialize(Oxa7a,Oxa7b){var editor=Window_GetElement(window,Oxa7a,true);editor[OxO9116[151]]=Oxa7b;editor[OxO9116[152]]=CuteEditor_GetScriptProperty;var Ox772=Window_GetElement(window,editor.GetScriptProperty(OxO9116[125]),true);var editwin=Frame_GetContentWindow(Ox772);var editdoc=editwin[OxO9116[5]];var Oxa7c=false;var Oxa7d;var Oxa7e=false;var Oxa7f=editor.GetScriptProperty(OxO9116[88])+OxO9116[153]+editor.GetScriptProperty(OxO9116[154]);var Oxb07=editor.GetScriptProperty(OxO9116[88])+OxO9116[155]+editor.GetScriptProperty(OxO9116[154]);function Oxa80(){if( typeof (window[OxO9116[156]])==OxO9116[157]){return ;} ;try{LoadXMLAsync(OxO9116[158],Oxa7f+OxO9116[159]+ new Date().getTime(),Oxa81);} catch(x){include(OxO9116[160],Oxa7f);var Oxb08=setInterval(function (){if(window[OxO9116[156]]){clearInterval(Oxb08);if(Oxa7c){Oxa83();} ;} ;} ,100);} ;} ;function Oxa81(Ox290){var Ox889= new Date().getTime();if(Ox290[OxO9116[161]]!=200){} else {Ox889=Ox290[OxO9116[162]];} ;LoadXMLAsync(OxO9116[163],Oxa7f+OxO9116[164]+Ox889,Oxa82);} ;function Oxa82(Ox290){if(Ox290[OxO9116[161]]!=200){alert(OxO9116[165]);return ;} ;CuteEditorInstallScriptCode(Ox290.responseText,OxO9116[156]);if(Oxa7c){Oxa83();} ;} ;function Oxa83(){if(Oxa7e){return ;} ;for(var Ox183=editor;Ox183&&Ox183[OxO9116[34]];Ox183=Ox183[OxO9116[22]]){if(Ox183[OxO9116[34]][OxO9116[33]]==OxO9116[42]){setTimeout(Oxa83,100);return ;} ;} ;Oxa7e=true;Ox772[OxO9116[34]][OxO9116[33]]=OxO9116[166];editdoc[OxO9116[168]][OxO9116[167]]=true;window.CuteEditorImplementation(editor);try{editor[OxO9116[34]][OxO9116[169]]=OxO9116[4];} catch(x){} ;try{editdoc[OxO9116[168]][OxO9116[34]][OxO9116[169]]=OxO9116[4];} catch(x){} ;var Oxa84=editor.GetScriptProperty(OxO9116[170]);if(Oxa84){editor.Eval(Oxa84);} ;} ;function Oxa85(){if(!window[OxO9116[5]][OxO9116[168]].contains(editor)){return ;} ;try{Ox772=Window_GetElement(window,editor.GetScriptProperty(OxO9116[125]),true);editwin=Frame_GetContentWindow(Ox772);editdoc=editwin[OxO9116[5]];x=editdoc[OxO9116[168]];} catch(x){setTimeout(Oxa85,100);return ;} ;if(!editdoc[OxO9116[168]]){setTimeout(Oxa85,100);return ;} ;if(!Oxa7c){Oxa7c=true;setTimeout(Oxa85,100);return ;} ;if( typeof (window[OxO9116[156]])==OxO9116[157]){Oxa83();} else {try{editdoc[OxO9116[168]][OxO9116[34]][OxO9116[169]]=OxO9116[171];} catch(x){} ;} ;} ;CuteEditor_BasicInitialize(editor);Oxa80();Oxa85();} ;function CuteEditorInstallScriptCode(Ox9c5,Ox9c6){eval(Ox9c5);window[Ox9c6]=eval(Ox9c6);} ;window[OxO9116[172]]=CuteEditorInitialize;