function convertHTML(str) {
	htmlEntities={
		'&':'&amp;',
		'<':'&lt;',
		'>':'&gt;',
		'\"':'&quot;',
		'\'':'&apos;'
	};

	return str.split('').map(function(entity){
		return htmlEntities[entity] || entity;
	}).join('');
}

convertHTML('Dolce & Gabbana');
