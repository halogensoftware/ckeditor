CKEDITOR.plugins.add( 'halogenemailtemplatemergefields',
{   
   requires : ['richcombo'], //, 'styles' ],
   init : function( oEditor )
   {
      var cfg = oEditor.config;
      var lng = oEditor.lang.format;
      
      oEditor.ui.addRichCombo( 'halogenemailtemplatemergefields',
         {
            label : CKEDITOR.lang.insertTags?CKEDITOR.lang.insertTags:"Insert tags",
            title :CKEDITOR.lang.insertTags?CKEDITOR.lang.insertTags:"Insert tags",
            voiceLabel : CKEDITOR.lang.insertTags?CKEDITOR.lang.insertTags:"Insert tags",
            className : 'cke_format',
            multiSelect : false,

            panel :
            {
               css : [ cfg.contentsCss, CKEDITOR.getUrl( CKEDITOR.skin.path() + 'editor.css' ) ],
               voiceLabel : lng.panelVoiceLabel
            },

            init : function()
            {
            	 var cfg = oEditor.config;
            	 if(cfg && cfg.tokenselector && cfg.tokenselector.init) {
							 	 	cfg.tokenselector.init.call(this,this,oEditor);
				 } else {
               		this.startGroup( "Tags" );
               		// index and tags are defined in mergefields.jsp
               		for (var i=0;i<cfg.totalTags;i++){
                	  this.add(cfg.tags[i][0], unescape(cfg.tags[i][1]), unescape(cfg.tags[i][2]));
              	 	}
             	 }
            	 
            },

            onClick : function( value ,isMarked)
            {         
               oEditor.focus();
               oEditor.fire( 'saveSnapshot' );
               oEditor.insertHtml(unescape(value));
               oEditor.fire( 'saveSnapshot' );
               CKEDITOR.tools.setTimeout( function()
						{
							this.unmarkAll();	
							this.setValue('');
						},
					0, this );
            }
         });
   }
});
