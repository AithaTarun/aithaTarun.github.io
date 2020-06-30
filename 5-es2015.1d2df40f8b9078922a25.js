(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return z}));var r=i("tyNb"),n=i("3Pt+"),c=i("fXoL"),o=i("ceC1"),s=i("ofXK");const b=function(e){return[e]};let p=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","100px",3,"src","alt"]],template:function(e,t){1&e&&(c.Mb(0,"a",0),c.Mb(1,"div",1),c.Mb(2,"h4",2),c.gc(3),c.Lb(),c.Mb(4,"p",3),c.gc(5),c.Lb(),c.Lb(),c.Mb(6,"span",4),c.Kb(7,"img",5),c.Lb(),c.Lb()),2&e&&(c.Xb("routerLink",c.Zb(5,b,t.index)),c.zb(3),c.hc(t.recipe.name),c.zb(2),c.hc(t.recipe.description),c.zb(2),c.Yb("alt",t.recipe.name),c.Xb("src",t.recipe.imagePath,c.dc))},directives:[r.e,r.d],styles:[""]}),e})();function a(e,t){if(1&e&&c.Kb(0,"app-recipe-item",4),2&e){const e=t.index;c.Xb("recipe",t.$implicit)("index",e)}}let d=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.router=t,this.route=i,this.recipes=[]}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(e=>{this.recipes=e}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(o.a),c.Jb(r.c),c.Jb(r.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success","my-2",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"button",2),c.Ub("click",(function(){return t.onNewRecipe()})),c.gc(3,"New Recipe"),c.Lb(),c.Lb(),c.Lb(),c.Kb(4,"hr"),c.Mb(5,"div",0),c.Mb(6,"div",1),c.fc(7,a,1,2,"app-recipe-item",3),c.Lb(),c.Lb()),2&e&&(c.zb(7),c.Xb("ngForOf",t.recipes))},directives:[s.h,p],styles:[""]}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipes"]],features:[c.yb([])],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Kb(2,"app-recipe-list"),c.Lb(),c.Mb(3,"div",2),c.Kb(4,"router-outlet"),c.Lb(),c.Lb())},directives:[d,r.g],styles:[""]}),e})();var l=i("IzEk"),m=i("lJxs"),g=i("qXBG");let h=(()=>{class e{constructor(e,t){this.authService=e,this.router=t}canActivate(e,t){return this.authService.userSubject.pipe(Object(l.a)(1),Object(m.a)(e=>!!e||this.router.createUrlTree(["/auth"])))}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(g.a),c.Qb(r.c))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Mb(0,"h3"),c.gc(1," Please select a Recipe !\n"),c.Lb())},styles:[""]}),e})();class f{constructor(e,t,i,r){this.name=e,this.description=t,this.imagePath=i,this.ingredients=r}}function L(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div",21),c.Mb(1,"div",22),c.Kb(2,"input",23),c.Lb(),c.Mb(3,"div",24),c.Kb(4,"input",25),c.Lb(),c.Mb(5,"div",24),c.Mb(6,"button",5),c.Ub("click",(function(){c.cc(e);const i=t.index;return c.Wb().onDeleteIngredient(i)})),c.gc(7,"X"),c.Lb(),c.Lb(),c.Lb()}2&e&&c.Xb("formGroupName",t.index)}let M=(()=>{class e{constructor(e,t,i){this.route=e,this.recipeService=t,this.router=i,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}initForm(){let e="",t="",i="",r=new n.c([]);if(this.editMode){const c=this.recipeService.getRecipe(this.id);if(e=c.name,t=c.imagePath,i=c.description,c.ingredients)for(let e of c.ingredients)r.push(new n.g({name:new n.e(e.name,n.t.required),amount:new n.e(e.amount,[n.t.required,n.t.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new n.g({name:new n.e(e,n.t.required),imagePath:new n.e(t,n.t.required),description:new n.e(i,n.t.required),ingredients:r})}onSubmit(){console.log(this.recipeForm),new f(this.recipeForm.value.name,this.recipeForm.value.description,this.recipeForm.value.imagePath,this.recipeForm.value.ingredients),this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}get controls(){return this.recipeForm.get("ingredients").controls}onAddIngredient(){this.recipeForm.get("ingredients").push(new n.g({name:new n.e(null,n.t.required),amount:new n.e(null,[n.t.required,n.t.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}onDeleteAllIngredients(){this.recipeForm.get("ingredients").clear()}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(r.a),c.Jb(o.a),c.Jb(r.c))},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-edit"]],decls:41,vars:4,consts:[[1,"row","ml-3"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"row","mt-2","mb-3"],["type","submit",1,"btn","btn-outline-success","mr-3",3,"disabled"],["type","button",1,"btn","btn-outline-danger",3,"click"],[1,"row"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","size","80","formControlName","name",1,"form-control"],["for","imagePath",1,"font-weight-bold"],["type","text","id","imagePath","size","80","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description",1,"font-weight-bold"],["id","description","rows","6","cols","80","formControlName","description",1,"form-control"],[1,"row",2,"margin-left","0.5px"],["formArrayName","ingredients",1,"col-xs-12"],["type","button",1,"btn","btn-outline-warning",3,"click"],["class","row","style","margin-top: 10px",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-outline-info",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","size","50","formControlName","name",1,"form-control"],[1,"col-xs-2","ml-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(e,t){if(1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"form",2),c.Ub("ngSubmit",(function(){return t.onSubmit()})),c.Mb(3,"div",3),c.Mb(4,"div",1),c.Mb(5,"button",4),c.gc(6,"Save"),c.Lb(),c.Mb(7,"button",5),c.Ub("click",(function(){return t.onCancel()})),c.gc(8,"Cancel"),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"div",6),c.Mb(10,"div",1),c.Mb(11,"div",7),c.Mb(12,"label",8),c.gc(13,"Name"),c.Lb(),c.Kb(14,"input",9),c.Lb(),c.Lb(),c.Lb(),c.Mb(15,"div",6),c.Mb(16,"div",1),c.Mb(17,"div",7),c.Mb(18,"label",10),c.gc(19,"Image URL"),c.Lb(),c.Kb(20,"input",11,12),c.Lb(),c.Lb(),c.Lb(),c.Mb(22,"div",6),c.Mb(23,"div",1),c.Kb(24,"img",13),c.Lb(),c.Lb(),c.Mb(25,"div",6),c.Mb(26,"div",1),c.Mb(27,"div",7),c.Mb(28,"label",14),c.gc(29,"Description"),c.Lb(),c.Kb(30,"textarea",15),c.Lb(),c.Lb(),c.Lb(),c.Mb(31,"div",16),c.Mb(32,"div",17),c.Mb(33,"button",18),c.Ub("click",(function(){return t.onDeleteAllIngredients()})),c.gc(34,"Delete All Ingredients"),c.Lb(),c.fc(35,L,8,1,"div",19),c.Kb(36,"hr"),c.Mb(37,"div",6),c.Mb(38,"div",1),c.Mb(39,"button",20),c.Ub("click",(function(){return t.onAddIngredient()})),c.gc(40,"Add Ingredient"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e){const e=c.bc(21);c.zb(2),c.Xb("formGroup",t.recipeForm),c.zb(3),c.Xb("disabled",!t.recipeForm.valid),c.zb(19),c.Xb("src",e.value,c.dc),c.zb(11),c.Xb("ngForOf",t.controls)}},directives:[n.u,n.m,n.h,n.a,n.l,n.f,n.d,s.h,n.i,n.p],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var w=i("3V6w");function y(e,t){if(1&e&&(c.Mb(0,"li",9),c.gc(1),c.Lb()),2&e){const e=t.$implicit;c.zb(1),c.jc(" ",e.name," - ",e.amount," ")}}let x=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(o.a),c.Jb(r.a),c.Jb(r.c))},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-detail"]],decls:28,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],[1,"dropdown"],["type","button","data-toggle","dropdown",1,"btn","btn-primary","dropdown-toggle"],["appDropdown","",1,"dropdown-menu"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Kb(2,"img",2),c.Lb(),c.Lb(),c.Mb(3,"div",0),c.Mb(4,"div",1),c.Mb(5,"h1"),c.gc(6),c.Lb(),c.Lb(),c.Lb(),c.Mb(7,"div",0),c.Mb(8,"div",1),c.Mb(9,"div",3),c.Mb(10,"button",4),c.gc(11," Manage Recipe "),c.Lb(),c.Mb(12,"div",5),c.Mb(13,"a",6),c.Ub("click",(function(){return t.onAddToShoppingList()})),c.gc(14,"To Shopping List"),c.Lb(),c.Mb(15,"a",6),c.Ub("click",(function(){return t.onEditRecipe()})),c.gc(16,"Edit Recipe"),c.Lb(),c.Mb(17,"a",6),c.Ub("click",(function(){return t.onDeleteRecipe()})),c.gc(18,"Delete Recipe"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(19,"div",0),c.Mb(20,"div",1),c.gc(21),c.Lb(),c.Lb(),c.Kb(22,"br"),c.Kb(23,"br"),c.Mb(24,"div",0),c.Mb(25,"div",1),c.Mb(26,"ul",7),c.fc(27,y,2,2,"li",8),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(2),c.Yb("alt",t.recipe.name),c.Xb("src",t.recipe.imagePath,c.dc),c.zb(4),c.hc(t.recipe.name),c.zb(15),c.ic(" ",t.recipe.description," "),c.zb(6),c.Xb("ngForOf",t.recipe.ingredients))},directives:[w.a,s.h],styles:[""]}),e})();var S=i("GXvH");let F=(()=>{class e{constructor(e,t){this.dataStorageService=e,this.RecipesService=t}resolve(e,t){const i=this.RecipesService.getRecipes();return 0===i.length?this.dataStorageService.fetchRecipes():i}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(S.a),c.Qb(o.a))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const R=[{path:"",component:u,canActivate:[h],children:[{path:"",component:v},{path:"new",component:M},{path:":id",component:x,resolve:[F]},{path:":id/edit",component:M,resolve:[F]}]}];let k=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[r.f.forChild(R)],r.f]}),e})();var I=i("PCNd");let z=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[r.f,k,I.a,n.r]]}),e})()}}]);