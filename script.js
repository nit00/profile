document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  var instance = M.Sidenav.getInstance(elem);

instance.open();

instance.close();