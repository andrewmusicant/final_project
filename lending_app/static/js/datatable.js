$(document).ready(function() {
    $('#myTable').DataTable({
      "order": [[ 2, "desc" ]],
      "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]]
    } );
} );
