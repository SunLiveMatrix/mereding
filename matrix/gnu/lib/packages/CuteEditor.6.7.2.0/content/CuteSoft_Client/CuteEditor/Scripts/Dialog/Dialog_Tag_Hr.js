var OxOe2c0=["inp_width","eenheid","alignment","hrcolor","hrcolorpreview","shade","sel_size","width","style","value","px","%","size","align","color","backgroundColor","noShade","noshade","","onclick"];var inp_width=Window_GetElement(window,OxOe2c0[0],true);var eenheid=Window_GetElement(window,OxOe2c0[1],true);var alignment=Window_GetElement(window,OxOe2c0[2],true);var hrcolor=Window_GetElement(window,OxOe2c0[3],true);var hrcolorpreview=Window_GetElement(window,OxOe2c0[4],true);var shade=Window_GetElement(window,OxOe2c0[5],true);var sel_size=Window_GetElement(window,OxOe2c0[6],true);UpdateState=function UpdateState_Hr(){} ;SyncToView=function SyncToView_Hr(){if(element[OxOe2c0[8]][OxOe2c0[7]]){if(element[OxOe2c0[8]][OxOe2c0[7]].search(/%/)<0){eenheid[OxOe2c0[9]]=OxOe2c0[10];inp_width[OxOe2c0[9]]=element[OxOe2c0[8]][OxOe2c0[7]].split(OxOe2c0[10])[0];} else {eenheid[OxOe2c0[9]]=OxOe2c0[11];inp_width[OxOe2c0[9]]=element[OxOe2c0[8]][OxOe2c0[7]].split(OxOe2c0[11])[0];} ;} ;sel_size[OxOe2c0[9]]=element[OxOe2c0[12]];alignment[OxOe2c0[9]]=element[OxOe2c0[13]];hrcolor[OxOe2c0[9]]=element[OxOe2c0[14]];if(element[OxOe2c0[14]]){hrcolor[OxOe2c0[8]][OxOe2c0[15]]=element[OxOe2c0[14]];} ;if(element[OxOe2c0[16]]){shade[OxOe2c0[9]]=OxOe2c0[17];} else {shade[OxOe2c0[9]]=OxOe2c0[18];} ;} ;SyncTo=function SyncTo_Hr(element){if(sel_size[OxOe2c0[9]]){element[OxOe2c0[12]]=sel_size[OxOe2c0[9]];} ;if(hrcolor[OxOe2c0[9]]){element[OxOe2c0[14]]=hrcolor[OxOe2c0[9]];} ;if(alignment[OxOe2c0[9]]){element[OxOe2c0[13]]=alignment[OxOe2c0[9]];} ;if(shade[OxOe2c0[9]]==OxOe2c0[17]){element[OxOe2c0[16]]=true;} else {element[OxOe2c0[16]]=false;} ;if(inp_width[OxOe2c0[9]]){element[OxOe2c0[8]][OxOe2c0[7]]=inp_width[OxOe2c0[9]]+eenheid[OxOe2c0[9]];} ;} ;hrcolor[OxOe2c0[19]]=hrcolorpreview[OxOe2c0[19]]=function hrcolor_onclick(){SelectColor(hrcolor,hrcolorpreview);} ;