$(document).ready(function () {
    // alert("SELAMAT DATANG")
    var strHtml2='<form>'+
                ' <div class="form-group">'+
                    '<label for="NamaPegawai">Nama Pegawai</label>'+
                    '<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nama Pegawai">'+
                    '</div>'+
                    '<div class="form-group">'+
                    '<label for="exampleInputPassword1">Password</label>'+
                    '<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
                    '</div>'+
                    '<div class="form-group">'+
                    '<label for="exampleInputFile">File input</label>'+
                    '<input type="file" id="exampleInputFile">'+
                    '<p class="help-block">Example block-level help text here.</p>'+
                    '</div>'+
                    '<button type="submit" class="btn btn-danger">Submit</button>'+
                '</form>';
    
            var strHtml3='<form>+'
                ' <div class="form-group">'+
                '<label for="exampleInputEmail1">Email address</label>'+
                '<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">'+
                '</div>'+
                '<div class="form-group">'+
                '<label for="exampleInputPassword1">Password</label>'+
                '<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
                '</div>'+
                '<div class="form-group">'+
                '<label for="exampleInputFile">File input</label>'+
                '<input type="file" id="exampleInputFile">'+
                '<p class="help-block">Example block-level help text here.</p>'+
                '</div>'+
                '<div class="checkbox">'+
                '<label>'+
                '    <input type="checkbox"> Check me out'+
                '</label>'+
                '</div>'+
                '<button type="submit" class="btn btn-danger">Submit</button>'+
            '</form>';

       $('#idBtnCreateNew').click(function () {
            $('#idModal').modal('show') 
            $('#idMdlBody').append(strHtml2) ;   


  });
});