"use strict";

class App{
	constructor(){
		this.dart = [
			{
				"id": 1,
				"name": "SLARIST GRIP-X",
				"description": "SILVER BRASS",
				"photo": "img/pin003.png",
				"Items":[
					{
						"packinclude": "80% Tungsten Barrels",
						"name": "spinach"
					},
					{
						"packinclude": "Aluminum Shafts",
						"name": "butternut squash"
					},
					{
						"packinclude": "Polyester Flights (2 sets)",
						"name": "sliced okra"
					},
					{
						"packinclude": "Robson Dart Case",
						"name": "fatty minced pork"
					}
				
				],
				"price": "1000",
				
			},
			{
				"id": 2,
				"name": "WINDSOR",
				"description": "SILVER BRASS",
				"photo": "img/pin9.png",
				"Items":[
					{
						"packinclude": "WINDSOR",
					
					},
					{
						"packinclude": "Colormaster Shafts",
						
					},
					{
						"packinclude": "Polyester Flights (2 sets)",
						
					},
					{
						"packinclude": "Robson Dart Case",
						
					}
				],
				"price": "1000",
				
			},
			{
				"id": 3,
				"name": "Contura",
				"description": "GOLDEN BRASS",
				"photo": "img/pin005.png",
				"Items":[
					{
						"packinclude": "CONTURA",
						
					},
					{
						"packinclude": "Colormaster Shafts",
											},
					{
						"packinclude": "Polyester Flights (2 sets)",
						
					},
					{
						"packinclude": "Robson Dart Case",
						
					}
				],
				"price": "32",
				
			},

			{
				"id": 4,
				"name": "ESSEX",
				"description": "GOLDEN BRASS",
				"photo": "img/pin004.png",
				"Items":[
					{
						"packinclude": "ESSEX",
						
					},
					{
						"packinclude": "Colormaster Shafts",
											},
					{
						"packinclude": "Polyester Flights (2 sets)",
						
					},
					{
						"packinclude": "Robson Dart Case",
						
					}
				],
				"price": "1500",
				
			},
			
						
		];
		this.state = [
			{
				"bind": {
					"procedures":[],
					"Items_packinclude":[],
					"Items_name":[]
				}
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createdart(){



		let id = document.getElementById('dart_id');
		let name = document.getElementById('dart_name');
		let description = document.getElementById('dart_description');
		let photo = document.getElementById('dart_photo');
		let preparationtime = document.getElementById('dart_preparationtime');
		let cookingtime = document.getElementById('dart_cookingtime');
		let price = document.getElementById('price');
		
		let dummyItems = [];
		for(let i=0;i<this.state[0].bind.Items_packinclude.length;i++){
			dummyItems.push({
				"packinclude" : this.state[0].bind.Items_packinclude[i],
				"name" : this.state[0].bind.Items_name[i]
			});
		}
		let Items = dummyItems;

		let dummyProcedure = [];
		for(let i=0;i<this.state[0].bind.procedures.length;i++){
			dummyProcedure.push(this.state[0].bind.procedures[i]);
		}
		let procedure = dummyProcedure;

		let dart = {			
			"id": id.value,
			"name": name.value,
			"description": description.value,
			"photo": photo.value,
			"Items":Items,
			"preparationtime": preparationtime.value,
			"cookingtime": cookingtime.value,
			"price": price.value,
			"procedure": procedure
		};


		this.dart.push(dart);

		//Clear Fields
		this.state[0].bind.procedures = this.state[0].bind.Items_packinclude = this.state[0].bind.Items_name = [];
		id.value = name.value = description.value = photo.value = preparationtime.value = cookingtime.value = price.value = ''; 
	}	

	deletedart(key){
		let r = this.dart;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.dart.splice(i,1);
				break;
			}
		}		
		this.dartLayout();
	}


	dartUpdateNow(id){

		let dartDummy = {
			"id" :  id,
			"name" : $('#dart_updatename').val(),
			"photo" : $('#dart_updatephoto').val(),
			"description" : $('#dart_updatedescription').val(),
			"price" : $('#dart_updateprice').val()
		}

		let m = this.dart;
		for(let i=0;i<m.length;i++){
			if(m[i].id == id){
				m[i] = dartDummy;
				break;
			}
		}

		this.dartLayout();
	}
	



	finddartByID(id){
		let r = this.dart;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	

	finddartByName(name){
		let objects = [];
		let r = this.dart;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}

	binddartNewProcedures(val,id){
		let bind = this.state[0].bind.procedures;
		bind[id] = val;
		// console.log(bind);
	}	

	binddartNewItems(val,id,obj){
		let bind = null;
		if(obj === "packinclude"){
			bind = this.state[0].bind.Items_packinclude;
		}
		bind[id] = val;
		// console.log(bind);
	}	
}

class Component extends App {
	constructor(){
		
		super();
	}

	dartLayout(){
		let html = `
			
			<header id="header" role="banner">
        <div class="container">
            <div id="navbar" class="navbar navbar-default">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#" onclick="component.dartLayout()"></a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#home" onclick="component.dartLayout()">Home</i></a></li>
                        <li><a href="#add" onclick="component.dartCreate()">Add Item</a></li>
                        <li><a href="#view" onclick="component.dartList()">View Item</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>


    		<section id="portfolio">
        <div class="container">
            <div class="box">
                
                
                <div id="dartRecent"></div>
				<div id="dartView"></div>
				<div id="dartList"></div>
				<div id="dartCreate"></div>
				<div id="dartUpdate"></div>



            </div><!--/.box-->
        </div><!--/.container-->
    </section>	



			
				
    			
				

				<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12" style="padding-left: 30px;">
								<h5>Robson Sportscraft</h5>
								<p>Shop for the best selection of Pins & More. We have the right pins at the right price for you.</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="black-text">Links</h5>
								<ul>
									<li>
										<a class="black-text text-lighten-3" href="#" onclick="component.dartLayout()">
											<!-- <i class="material-icons left">dashboard</i> -->
											Home</a></li>
											<li><a class="black-text text-lighten-3" href="#" onclick="component.dartList()">
												<!-- <i class="material-icons left">assignment</i> -->
												darts</a></li>
												<li><a class="black-text text-lighten-3" href="#" onclick="component.dartCreate()">
													<!-- <i class="material-icons left">dashboard</i> -->
													Create</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="footer-copyright" style="padding-left: 20px;">
										
											© Copyright Bocoy. All rights reserved 2016.
											

									</div>
								</footer>	

							
		`;

		this.reRender(`
			${html}

			`,document.getElementById("app"));
		this.dartRecent();	
	}

	dartRecent(){
		
		let html = `
<div class="center gap">
                    <h2>Latest Item</h2>
                    <p class="lead">Welcome to Robson Sportscraft shop. check all our latest item</p>
                </div><!--/.center-->			<div class="row">
		`;

		let r = this.dart;
		let count = 0;
		for(let i=(r.length-1);i>=0;i--){
			if(count++ === 3)break;
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.dartView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.render(`		
			${html}
			`,document.getElementById("dartRecent"));
	}


dartView(id){
		let r = this.finddartByID(id);

		let html = `

	<div class="modal fade" id="confirm-update" data-backdrop="false" data-dismiss="modal"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h6 style="color:red" class="modal-title">Update Item</h6>
        </div>
        <div class="modal-body">
          

		          <div class="form-group">
		      <label for="dart_name">Item name:</label>
		      <input type="text" class="validate" id="dart_updatename" placeholder="${r.name}">
		    </div>
		    <div class="form-group">
		      <label for="dart_photo">Photo:</label>
		      <input type="text" class="validate" id="dart_updatephoto" placeholder="${r.photo}">
		    </div>

		<div class="form-group">
		      <label for="dart_description">Description</label>
		      <textarea rows="15"  placeholder="${r.description}" id="dart_updatedescription" class="validate"></textarea>
		    </div>
		    <div class="form-group">
		      <label for="dart_name">Price:</label>
		      <input type="number" class="validate" id="dart_updateprice" placeholder="${r.price}">
		    </div>
		</div>


        </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="component.dartUpdateNow(${r.id})" >Update</button>
            	
            </div>
      </div>
      </div>
    </div>
</div>

		<div class="modal fade" id="confirm-delete" data-backdrop="false" data-dismiss="modal"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h6 style="color:red" class="modal-title">Delete Confirmation</h6>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete ${r.name}?</p>
        </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" onclick="component.deletedart(${r.id})" >Delete</button>
            	
            </div>
      </div>
      </div>
    </div>
</div>


			<br><br>
			<h5 class="center-align">${r.name}</h5>
			<div class="row">				
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${r.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p style="color:red; font-size: 18px;">₱ ${r.price}</p>
								<hr>
								<p><b>Description:</b> <br>${r.description}</p>
								
								

							</div>

							<div class="card-action" style="text-align: right;">	
<button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete">Delete</button>
<button class="btn btn-primary" data-toggle="modal" data-target="#confirm-update">Update</button>

							</div>
						</div>					
					</div>				
				</div>			
			</div>




		`;


		html += `
			<div class="row">				
				<div class="col s6 m6">
					<h6>PACKAGE INCLUDES</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.Items.length;i++){
			let ri = r.Items[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons check">check</i>
							<span class="title">${ri.packinclude}</span>
							
							
						</li>
			`;
		}

		html += `				
					</ul>
				</div>
				
		`;

		

		html += `
						
			</div>
		`;

		this.reRender(`		
			${html}			
			`,document.getElementById("dartView"));
		$('#dartView').show();
		$('#dartRecent').hide();
		$('#dartList').hide();
		$('#dartCreate').hide();
	}



	dartList(){
		let html = `
			<br/><br/>
		  	<nav>
	    		<div class="nav-wrapper white">
					<form>
						<div class="input-field">			
							<input onkeyup="component.dartListItems(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
			<br/>
		`;

		html += `
			<div class="row" id="dartListItems">
		`;
		let r = this.dart;
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<a href="#" onclick="component.dartView(${r[i].id})" ><img src="${r[i].photo}"></a>
							
						</div>
						<div class="card-content">
							<p style="font-weight:bold;font-size:13px;color:#52b6ec">${r[i].name}</p>
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.dartView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("dartList"));
		$('#dartList').show();
		$('#dartView').hide();
		$('#dartRecent').hide();
		$('#dartCreate').hide();		
	}

	dartListItems(name){
		let html = ``;
		let r = this.finddartByName(name);
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">

							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.dartView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("dartListItems"));
		$('#dartList').show();
		$('#dartView').hide();
		$('#dartRecent').hide();	
		$('#dartCreate').hide();
	}

	dartCreate(){
		let html = `


			<section id="pricing">
        <div class="container">
            <div class="box">
                <div class="center gap">
                    <h2>Add New Item</h2>
                    <p class="lead">
                    	Please complete and fill out all the fields.
                    </p>
                </div><!--/.center-->
             
                <div class="row">
				<form class="col s12">
<div class="col-sm-6">
				
		<div class="form-group">
      <label for="dart_name">Item name:</label>
      <input type="text" class="validate" id="dart_name" placeholder="Enter the name of the item.">
    </div>
    <div class="form-group">
      <label for="dart_photo">Photo:</label>
      <input type="text" class="validate" id="dart_photo" placeholder="Enter the full url of the photo.">
    </div>

<div class="form-group">
      <label for="dart_description">Description</label>
      <textarea rows="15" placeholder="Enter description of the item" id="dart_description" class="validate"></textarea>
    </div>
    <div class="form-group">
      <label for="dart_name">Price:</label>
      <input type="number" class="validate" id="price" placeholder="₱ ">
    </div>
</div>
<div class="col-sm-6">
    <div class="form-group">
<h6>PACKAGE INCLUDES</h6>
<button onclick="component.dartNewItems()" class="btn-floating waves-effect waves-light">
<i class="material-icons">add</i>
</button>
<div class="col-md-12" id="dartNewItems"></div>

							</div>
</div>
<div class="input-field col s6">
<div style="display:none;">
							<input disabled value="${this.dart.length+1}" id="dart_id" type="text" class="validate"></div>
<input id="price" type="hidden" class="validate">
<input id="dart_cookingtime" type="hidden" class="validate">
<input id="dart_preparationtime" type="hidden" class="validate">
						</div>
<div class="form-group col-md-7">
				<button onclick="component.createdart()" class="btn waves-effect waves-light">Save</button>
				<button type="reset" class="btn waves-effect waves-light">Clear</button>	
				</div>
				</form>
			</div>	  
            </div><!--/.box-->
        </div><!--/.container-->
    </section>	


					

					
		`;

		this.reRender(`
			${html}
			`,document.getElementById("dartCreate"));
		$('#dartCreate').show();
		$('#dartList').hide();
		$('#dartView').hide();
		$('#dartRecent').hide();

		this.state[0].bind.procedures = [];		
		this.state[0].bind.Items_packinclude = [];		
		this.state[0].bind.Items_name = [];		
	}






	



	dartNewProcedures(){
		let bind = this.state[0].bind.procedures;
		bind.push("");		
		
		let html = ``;
		for(let i=0;i<bind.length;i++){
			let decode_bind = `onkeyup="component.binddartNewProcedures(this.value,${i})"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind} value="${bind[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("dartNewProcedures"));
	}

	dartNewItems(obj){
		let bind_packinclude = this.state[0].bind.Items_packinclude;
		bind_packinclude.push("");		

		let html = ``;
		for(let i=0;i<bind_packinclude.length;i++){
			let decode_bind_packinclude = `onkeyup="component.binddartNewItems(this.value,${i},'packinclude')"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_packinclude} value="${bind_packinclude[i]}" type="text" />					
					</div>
				</div>	
					
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("dartNewItems"));
	}	


}

let component = new Component();
component.dartLayout();


