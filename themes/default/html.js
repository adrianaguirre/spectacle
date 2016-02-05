module.exports = function(data) {
  return {
    '200.html': data.defaultTemplate(),
    'index.html': [
      '<!doctype html>',
        '<html>',
          '<head>',
            '<meta charset="utf-8"/>',
            '<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>',
            '<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,400italic,300,300italic,600,600italic,700,700italic,800,800italic" rel="stylesheet" type="text/css">',
            '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
          '</head>',
          '<body>',
            '<div id="root"></div>',
            '<script src="' + data.main + '"></script>',
          '</body>',
        '</html>'
    ].join('')
  }
}