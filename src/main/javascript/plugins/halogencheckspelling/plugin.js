/**
 * Halogen Spell Check plug-in for CKeditor 3.0
  * Requires dialog
 */

CKEDITOR.plugins.add('halogencheckspelling', {

	init: function (editor) {

		var commandName = 'halogencheckspellingcmd';
			
		editor.ui.addButton(commandName, {
			label: editor.lang.wsc.toolbar,
			icon: this.path+'spell-check.gif',
			click : function( value )
			 { 
				var loaded=false; 
				var basePath = CKEDITOR.basePath;
				var base = CKEDITOR.basePath.replace("/ckeditor",""); 
				var script = base + 'util/spellChecker_cfg_function.jsp';
				CKEDITOR.scriptLoader.load( script, 
						function( success )
 							{
 									 if(success) {
 										 loaded=true;
 									 }
								},
								this,
								false
							);
				    var url=base+'css/spellChecker.css';
					var resourceId = document.getElementById(url);
									if(resourceId == null) {
												var link = new CKEDITOR.dom.element( 'link' );
												link.setAttributes(
												{
														rel		: 'stylesheet',
														type	: 'text/css',
														href	: url,
														id    : url 
												});

												link.appendTo( CKEDITOR.document.getHead() );		
									};
						
				 var language=null;
				 if($('languages')){
					 language=HALOGEN_TO_SPELL_CHECKER_LANGUAGE_MAP[$('languages').options[$('languages').selectedIndex].value];
				 }else{
					 language= CK_EDITOR_TO_SPELL_CHECKER_LANGUAGE_MAP[editor.config.language];
				 }
				 if(!language){
					 alert('SpellChecker: Unsupported language!');
					 return;
				 }
				 var url = CKEDITOR.basePath.replace("/common/ckeditor/", "");
	           	var launch = function () {
		            		if(loaded) { 
		            			var config=getSpellCheckerConfig();
		    					config.url=url;
		    					config.language=language;
    							config.elements=[editor.name];
    							var spellChecker=new HalogenSpellChecker(config);
		            			spellChecker.show();
		              	} else {
		              		setTimeout(launch,100);
		              	}	
		         };
		         launch();
			 }
		});
	}
});