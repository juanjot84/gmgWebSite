<?php include("includes/head.php"); ?>

<body id="page-top" class="index">


<?php include("includes/nav.php"); ?>

    

    <div class="container-fluid" style="padding: 1%;background: yellow;margin-top: -21px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="BUSCAR..." style="padding: 25.6px;">
                      <span class="input-group-btn">
                        <button class="btn btn-default botonbuscar" style="color: #333; background-color: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 0;" type="button"><i style="font-size: 1.5em;" class="fa fa-search" aria-hidden="true"></i></button>
                      </span>
                    </div>
                </div>
                <div class="col-md-6" style="text-align: right;">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;"><i class="fa fa-plus-square-o" aria-hidden="true"></i> AGREGAR NUEVO</button>
                      </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 2%; padding-bottom: 1%;">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">

                  <!-- Table -->
                  <h2 class="tituloseccion">Alta Restaurant</h2>

                    <h5 class="titulosalta"> Datos de acceso</h5>

                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-user" aria-hidden="true"></i></span>
                      <input type="text" class="form-control" placeholder="Nombre de usuario (Email)" aria-describedby="sizing-addon3">
                    </div></p>

                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      <input type="text" class="form-control" placeholder="Contraseña" aria-describedby="sizing-addon3">
                    </div></p>
                    
                    <h5 class="titulosalta"> Nombre</h5>

                    <p><div class="input-group input-group-sm">
                      <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
                      <input type="text" class="form-control" placeholder="Nombre del restaurant" aria-describedby="sizing-addon3">
                    </div></p>

                    <h5 class="titulosalta"> Acepta reserva</h5>

                    <p>
                        <label class="radio-inline"><input type="radio" name="optradio">Si</label>
                        <label class="radio-inline"><input type="radio" name="optradio">No</label>
                    </p>

                    <h5 class="titulosalta"> Restaurante destacado</h5>

                    <p>
                        <label class="radio-inline"><input type="radio" name="optradio">Si</label>
                        <label class="radio-inline"><input type="radio" name="optradio">No</label>
                    </p>

                    <h5 class="titulosalta"> Contacto Administrativo</h5>

                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-male" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Nombre" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p> 
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Celular" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Mail" aria-describedby="sizing-addon3">
                        </div>
                    </p>

                    <h5 class="titulosalta"> Dirección fiscal</h5>

                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-road" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Calle y altura" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p> 
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-map-signs" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Departamento" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        Marcar en Google Maps <br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13401.403859122534!2d-68.8526042!3d-32.8888878!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1504296277826" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </p>

                    <h5 class="titulosalta"> Polo gastronómico</h5>

                    <p>
                        <div class="form-group">
                          <label for="sel1">Seleccionar polo:</label>
                          <select class="form-control" id="sel1">
                            <option>Peatonal Sarmiento</option>
                            <option>Calle Sarmiento</option>
                            <option>Calle Belgrano</option>
                            <option>Av. Arístides Villanueva</option>
                            <option>Av. Juan B. Justo</option>
                            <option>Alameda</option>
                            <option>Barrio Bombal</option>
                            <option>Av. San Martín Sur</option>
                            <option>Panamericana</option>
                            <option>Chacras de Coria</option>
                            <option>Cacheuta</option>
                            <option>Alta Montaña</option>
                            <option>Potrerillos</option>
                            <option>Valle de Uco</option>
                          </select>
                        </div>
                    </p>

                    <h5 class="titulosalta"> Datos de contacto</h5>

                    <p> 
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Teléfono" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Mail" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Facebook" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Instagram" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Twitter" aria-describedby="sizing-addon3">
                        </div>
                    </p>
                    <p>
                        <div class="input-group input-group-sm">
                          <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-tripadvisor" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" placeholder="Tripadvisor" aria-describedby="sizing-addon3">
                        </div>
                    </p>

                    <h5 class="titulosalta"> Abierto</h5>

                    <p>
                        <strong>Lunes </strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Martes </strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Miércoles </strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Jueves </strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Viernes </strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Sábados </strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Domingos</strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>
                    <p>
                        <strong>Feriados </strong>
                        <div class="row">
                            
                            <div class="col-md-3">
                             
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                            
                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Desde</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>

                            <div class="col-md-3">
                            
                                <select class="form-control" id="sel1">
                                    <option>Hasta</option>
                                    <option>0:00</option>
                                    <option>0:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                </select>
                            </div>
                        </div>
                    </p>

                    <h5 class="titulosalta"> Nivel de precio</h5>

                    <p>
                        <div class="form-group">
                          <label for="sel1">Seleccionar rango:</label>
                          <select class="form-control" id="sel1">
                            <option>$ | valor inicial | valor final</option>
                            <option>$$ | valor inicial | valor final</option>
                            <option>$$$ | valor inicial | valor final</option>
                            <option>$$$$ | valor inicial | valor final</option>
                            <option>$$$$$ | valor inicial | valor final</option>
                          </select>
                        </div>
                    </p>

                    <h5 class="titulosalta"> Indicar medio de pago</h5>

                    <p>
                        <div class="form-group">
                          
                          <select class="form-control" id="sel1">
                            <option>Efectivo</option>
                            <option>Tarjeta de débito</option>
                            <option>Tarjeta de crédito</option>
                            <option>Cheque</option>
                            <option>Cuenta corriente corporativa</option>
                          </select>
                        </div>
                    </p>

                    <h5 class="titulosalta"> Tipo de cocina</h5>

                    <p>
                        <div class="form-group">
                          
                          <select class="form-control" id="sel1">

                            <option>Fusión</option>
                            <option>De autor</option>
                            <option>Gourmet</option>
                            <option>Molecular</option>
                            <option>Vanguardia</option>
                            <option>Tecnoemocional</option>
                            <option>Alta Cocina</option>
                            <option>Contemporánea</option>
                            <option>Tradicional</option>
                            <option>Casera</option>
                            <option>Regional</option>
                            <option>Criolla</option>
                            <option>Argentina</option>
                            <option>Autóctona</option>
                            <option>Saludable</option>
                            <option>Vegetariana</option>
                            <option>Vegana</option>
                            <option>Paleolítica</option>
                            <option>Sin gluten</option>
                            <option>Italiana</option>
                            <option>Peruana</option>
                            <option>Española</option>
                            <option>Mediterránea</option>
                            <option>Griega</option>
                            <option>Francesa</option>
                            <option>Árabe</option>
                            <option>Armenia</option>
                            <option>Alemana</option>
                            <option>Mexicana</option>
                            <option>Tex Mex</option>
                            <option>Asiática</option>
                            <option>Coreana</option>
                            <option>China</option>
                            <option>Japonesa</option>
                            <option>India</option>
                            <option>Thailandesa</option>
                            <option>Estadounidense</option>
                            <option>"Americana"</option><
                            <option>Nikkei</option>
                            <option>Chifa</option>
                            <option>Judía</option>
                            <option>Kosher</option>
                            <option>Halal</option>
                            <option>Slow Food</option>
                            <option>De mercado</option>
                            <option>De proximidad</option>
                            <option>Estacional</option>
                            <option>Orgánica</option>
                            <option>Artesanal</option>
                            <option>Fast Food</option>
                            <option>Otra</option>
                          </select>
                        </div>
                    </p>

                    <h5 class="titulosalta"> Indicar especialidad</h5>

                    <p>
                        <div class="form-group">
                          
                          <select class="form-control" id="sel1">
                            <option>Pescados</option>
                            <option>Mariscos</option>
                            <option>Carnes</option>
                            <option>Parrilla</option>
                            <option>Sándwiches</option>
                            <option>Lomitos</option>
                            <option>Tapas</option>
                            <option>Fondue</option>
                            <option>Pizza</option>
                            <option>Pastas</option>
                            <option>Picadas</option>
                            <option>Fuegos</option>
                            <option>Ceviche</option>
                            <option>Platos regionales</option>
                          </select>
                        </div>
                    </p>

                    <h5 class="titulosalta"> Descuento</h5>

                        <p>
                            <div class="row">
                                <div class="col-md-2">
                                    Lunes
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Martes
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Miércoles
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Jueves
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Viernes
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Sábados
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Domingos
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    Feriados
                                </div>
                                <div class="col-md-10">
                                    <select class="form-control" id="sel1">
                                        <option>0%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                    </select>
                                </div>
                            </div>
                        </p>

                    <h5 class="titulosalta"> Duración de la reserva</h5>

                    <p>
                       Indicar la duración de la reserva (el tiempo en que un cubierto vuelve a estar disponible para que pueda reservarse nuevamente) <br>
 
                        <select class="form-control" id="sel1">
                            <option>0</option>
                            <option>15 minutos</option>
                            <option>30 minutos</option>
                            <option>60 minutos</option>
                            <option>Indefinido</option>
                        </select>
                    </p>


                    <h5 class="titulosalta"> Indicar cubiertos disponibles</h5>

                        <p>Mínimo 10% de cubiertos disponibles / máximo 100%</p>

                        <div class="row">
                            <div class="col-md-6">
                                <p>Lunes</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p>Martes</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p>Miércoles</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p>Jueves</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p>Viernes</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p>Sábados</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p>Domigo</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p>Feriados</p>                                
                                <p>
                                    <div class="input-group input-group-sm">
                                      <input type="text" class="form-control" placeholder="Cantidad" aria-describedby="sizing-addon3">
                                    </div>
                                </p>
                            </div>
                        </div>

                    <h5 class="titulosalta"> Palabras de búsqueda</h5>

                        <p>Cargar palabras claves, separadas por coma (,)</p>

                            <div class="form-group">
                              <label for="comment">Tags:</label>
                              <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>

                    <h5 class="titulosalta"> Descripción</h5>

                        <p>Texto con un máxio de 500 caracteres incluyendo espacios</p>

                            <div class="form-group">
                              <label for="comment">Descripción:</label>
                              <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>
                </div>

                <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="padding: 17px;"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                      </span>
                </div>
            </div>
        </div>
    </div>

    

    
    <?php include("includes/footer.php"); ?>
    

    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>

    <!-- Contact Form JavaScript -->
    <script src="../js/jqBootstrapValidation.js"></script>
    <script src="../js/contact_me.js"></script>

    <!-- Theme JavaScript -->
    <script src="../js/agency.min.js"></script>

    <script type="text/javascript">
        

    $(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    });

</script>

</body>

</html>
