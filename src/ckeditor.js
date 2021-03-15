/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';

import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

// custom start 

import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Font from '@ckeditor/ckeditor5-font/src/font';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

// Core plugin that provides the API for the management of special characters and their categories.
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
// A plugin that combines a basic set of special characters.
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     // <--- ADDED
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

// custom end

export default class ClassicEditor extends ClassicEditorBase {}

function SpecialCharactersEmoji( editor ) {
	editor.plugins.get( 'SpecialCharacters' ).addItems( 'Emoji', [
		{ title: 'smiley face', character: '😊' },
		{ title: 'rocket', character: '🚀' },
		{ title: 'wind blowing face', character: '🌬️' },
		{ title: 'floppy disk', character: '💾' },
		{ title: 'heart', character: '❤️' }
	] );
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,

	// custom start
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	CKFinderUploadAdapter,
	IndentBlock,
	ListStyle,
	TodoList,
	Font,
	HorizontalLine,
	SpecialCharacters,
	SpecialCharactersEmoji,
	SpecialCharactersEssentials,
	PageBreak,
	Alignment,
	CodeBlock,
	Highlight
	// custom end
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',                                               // <--- ADDED
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'alignment',  
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'indent',
			'outdent',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'subscript',
			'superscript',
			'|',
			'code',
			'codeBlock',
			'specialCharacters',
			'pageBreak',
			'|',
			'highlight',
			'ckfinder',
			'imageUpload',
			'horizontalLine',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	ckfinder: {
		// Define the CKFinder configuration (if necessary).
		options: {
			resourceType: 'Images'
		},
		// Open the file manager in the pop-up window.
		openerMethod: 'popup',
		// Upload the images to the server using the CKFinder QuickUpload command.
		uploadUrl: 'https://ckeditor.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	indentBlock: {
		// offset: 1.3,
		// unit: 'em'
		classes: [
			'custom-block-indent-a', // First step - smallest indentation.
			'custom-block-indent-b',
			'custom-block-indent-c'  // Last step - biggest indentation.
		]
	},
	codeBlock: {
		languages: [
			{ language: 'plaintext', label: 'Plain text' }, // The default language.
			{ language: 'cmd', label: 'CMD' },
			{ language: 'cmdbash', label: 'Bash' },
			{ language: 'adminbash', label: 'Bash Admin' },
			{ language: 'mbash', label: 'Bash MacOS' },
			{ language: 'ubash', label: 'Bash Ubuntu' },
			{ language: 'ucentos', label: 'Bash CentOS' },
			{ language: 'uredhat', label: 'Bash Red Hat' },
			{ language: 'blade', label: 'Blade Laravel' },
			{ language: 'scripthtml', label: '.html' },
			{ language: 'scriptphp', label: '.php' },
			{ language: 'scriptjs', label: '.js' },
			{ language: 'scriptjava', label: '.java' },
			{ language: 'scriptkotlin', label: '.kt' },
			{ language: 'vue', label: '.vue' },
			{ language: 'env', label: '.env' },
			{ language: 'conf', label: '.conf' },
			{ language: 'c', label: 'C' },
			{ language: 'cs', label: 'C#' },
			{ language: 'cpp', label: 'C++' },
			{ language: 'css', label: 'CSS' },
			{ language: 'diff', label: 'Diff' },
			{ language: 'html', label: 'HTML' },
			{ language: 'java', label: 'Java' },
			{ language: 'kotlin', label: 'Kotlin' },
			{ language: 'javascript', label: 'JavaScript' },
			{ language: 'vuejs', label: 'Vue.js' },
			{ language: 'reactjs', label: 'React' },
			{ language: 'php', label: 'PHP' },
			{ language: 'python', label: 'Python' },
			{ language: 'ruby', label: 'Ruby' },
			{ language: 'typescript', label: 'TypeScript' },
			{ language: 'xml', label: 'XML' },
			{ language: 'ojson', label: 'JSONObject' },
			{ language: 'ajson', label: 'JSONArray' },
			{ language: 'sql', label: 'SQL' },
			{ language: 'swift', label: 'Swift' }

		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
