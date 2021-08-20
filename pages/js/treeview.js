'user stict';

//Table content
$(document).ready( function () {
  $('#treeview-table').DataTable({
    language: {
      paginate: {
        next: '<i class="fas fa-chevron-right"></i>',
        previous: '<i class="fas fa-chevron-left"></i>'  
      }
    }
  });
} );