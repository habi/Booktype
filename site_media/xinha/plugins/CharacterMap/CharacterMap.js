/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
/* This file is part of version 0.96beta2 released Fri, 20 Mar 2009 11:01:14 +0100 */
Xinha.loadStyle("CharacterMap.css","CharacterMap");function CharacterMap(c){this.editor=c;var a=c.config;var b=this;a.registerButton({id:"insertcharacter",tooltip:Xinha._lc("Insert special character","CharacterMap"),image:c.imgURL("images/tango/16x16/apps/accessories-character-map.png"),textMode:false,action:function(){b.show()}});a.addToolbarElement("insertcharacter","createlink",-1)}Xinha.Config.prototype.CharacterMap={mode:"popup"};CharacterMap._pluginInfo={name:"CharacterMap",version:"2.0",developer:"Laurent Vilday",developer_url:"http://www.mokhet.com/",c_owner:"Xinha community",sponsor:"",sponsor_url:"",license:"Creative Commons Attribution-ShareAlike License"};CharacterMap._isActive=false;CharacterMap.prototype.addEntity=function(b,f){var e=this.editor;var d=this;var c=document.createElement("a");Xinha._addClass(c,"entity");c.innerHTML=b;c.href="javascript:void(0)";Xinha._addClass(c,(f%2)?"light":"dark");c.onclick=function(){if(Xinha.is_ie){e.focusEditor()}e.insertHTML(b);return false};this.dialog.main.appendChild(c);c=null};CharacterMap.prototype.onGenerateOnce=function(){this._prepareDialog()};CharacterMap.prototype._prepareDialog=function(){var a=this;var e=this.editor;var c="<h1><l10n>Insert special character</l10n></h1>";this.dialog=new Xinha.Dialog(e,c,"CharacterMap",{width:300},{modal:false});Xinha._addClass(this.dialog.rootElem,"CharacterMap");if(e.config.CharacterMap&&e.config.CharacterMap.mode=="panel"){this.dialog.attachToPanel("right")}var d=["&Yuml;","&scaron;","&#064;","&quot;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&times;","&Oslash;","&divide;","&oslash;","&fnof;","&circ;","&tilde;","&ndash;","&mdash;","&lsquo;","&rsquo;","&sbquo;","&ldquo;","&rdquo;","&bdquo;","&dagger;","&Dagger;","&bull;","&hellip;","&permil;","&lsaquo;","&rsaquo;","&euro;","&trade;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&reg;","&times;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;","&OElig;","&oelig;","&Scaron;"];for(var b=0;b<d.length;b++){this.addEntity(d[b],b)}this.ready=true};CharacterMap.prototype.show=function(){if(!this.ready){var a=this;window.setTimeout(function(){a.show()},100);return}this.dialog.toggle()};CharacterMap.prototype.hide=function(){this.dialog.hide()};