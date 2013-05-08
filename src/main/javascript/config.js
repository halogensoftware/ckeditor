/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config
	
	config.removePlugins = 'elementspath';
	config.extraPlugins = 'wsc,halogenemailtemplatemergefields,halogencheckspelling';
	
	config.toolbar_HalogenGeneral =
		[
		    ['Bold','Italic','Underline'],['BulletedList','NumberedList'],['Link'],['halogencheckspellingcmd']
		];
	
	config.toolbar_HalogenJobReq =
		[
		    ['Bold','Italic','Underline'],['BulletedList','NumberedList'],['Link'],['halogencheckspellingcmd'],
		    ['Outdent','Indent'],['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		    '/',
		    ['Font','FontSize','TextColor']
		];

	config.toolbar_HalogenEmail =
		[
		    ['Bold','Italic','Underline'],['BulletedList','NumberedList'],['Link'],['halogencheckspellingcmd'],
		    ['Outdent','Indent'],['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		    '/',
		    ['Font','FontSize','TextColor']
		];


    var emailtemplateExtraTools = [
	[ '-','halogenemailtemplatemergefields']
	];

    config.toolbar_HalogenEmailTags = config.toolbar_HalogenEmail.concat(emailtemplateExtraTools);
	
	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Se the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	
	config.contentsCss = '/epm-web/common/ckeditor/emailTagCombo.css';
};
