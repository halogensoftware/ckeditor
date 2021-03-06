﻿/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	config.removePlugins = 'resize,elementspath';
	config.extraPlugins = 'wsc,halogenemailtemplatemergefields,halogencheckspelling';
	config.font_defaultLabel = 'Arial';
    config.fontSize_defaultLabel = '11';
    config.pasteFromWordRemoveFontStyles = false;
    config.pasteFromWordRemoveStyles = false;
	config.skin='halogen';
	config.toolbarCanCollapse = true;

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

    config.toolbar_HalogenERecPolicy =
        [
            ['Bold','Italic','Underline'],['BulletedList','NumberedList'],['Link'],
            ['Font','FontSize'],['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],['Table']
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

	//CW admin side CKEditor toolbar
	config.toolbar_CWAdmin =
	[
		['Source','-','Preview','Maximize','-','Bold','Italic','Underline','Subscript','Superscript'],
		['TextColor','BGColor'],['NumberedList','BulletedList','Outdent','Indent'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','HorizontalRule'],
		['Link','Unlink'], ['Image','SpecialChar'],
		'/',
		['Font','FontSize']
	];

	// Make dialogs simpler.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
