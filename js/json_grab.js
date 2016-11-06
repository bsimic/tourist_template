(function($) {
    var infoModal = $('#myModal');
    $('#myBtn').on('click', function(){
        $.ajax({ 
          type: "GET", 
          url: 'data_apartments.json',
          dataType: 'json',
          success: function(data){ 
            htmlData = '<ul><li>title: '+apartment.name+'</li><li>age: '+apartment.adress+'</li></ul>';
            infoModal.find('.modal-body').html(htmlData);
            modal.modal('show');
          }
        });

        return false;
    });
})(jQuery);
