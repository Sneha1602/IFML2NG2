package ifml.generator.ng2.m2t.dynamic.app.context;

import ifml.generator.ng2.m2t.general.AbstractFileGenerator
import java.util.LinkedList
import org.w3c.dom.NamedNodeMap

//helper class for providing the generating function 2 Parameters in 1
class Parameters{
	public var providerName = new String;
	public var propertyList = new LinkedList<NamedNodeMap>;	
	
	new (String prov, LinkedList<NamedNodeMap> list){
		providerName = prov;
		propertyList = list;
	}
}

class ContextProviderGenerator extends AbstractFileGenerator<Parameters> {
	
	//Fitting two parameters in the generating function
	def generateFiles(String providerName, LinkedList<NamedNodeMap> propertyList){
		var parameters = new Parameters(providerName, propertyList);
		
		this.generateFile(parameters);
	}
	
// Overridden Parent methods
	override protected fileContents(Parameters param) {
		
		var providerName = param.providerName;		
		var propertyList = param.propertyList;
		var typeList = new LinkedList;
		
		//create a list of properties to import
		for(prop: propertyList){
			var propType = prop.getNamedItem("type").nodeValue.toFirstUpper;
			if(propType != "String" && propType != "Number" && propType != "Boolean" && !typeList.contains(propType)){
				typeList.add(propType);
			}
		}
				
		'''
			// Generated by ContextProviderGenerator
			
			// Contains Objects that push new data to the Context Controller
			
			// Code for API/Library access has to be inserted in the file:"«providerName.toFirstLower».service.ts" 
			// in the folder: static/app/context/providers/
		
			import { Injectable } from '@angular/core';
			import { Observable } from 'rxjs';
			import { BehaviorSubject } from 'rxjs/Rx';
			
«««			Import the properties in the list
			«FOR type: typeList»
				import { «type» } from '../types/«type»';
			«ENDFOR»
			
			// PROTECTED REGION ID general ENABLED START
			// PROTECTED REGION END
			
			@Injectable()
			export class «providerName.toFirstUpper»Service {
				
«««				Subjects for the properties are created
				«FOR prop: propertyList»
					«var propName = prop.getNamedItem("name").nodeValue.toFirstLower»
					«var propType = prop.getNamedItem("type").nodeValue.toFirstUpper»
					private «propName»: «
						if(propType == "String" || propType == "Number" || propType == "Boolean"){
							propType.toFirstLower
						}else{
							propType
						}»;
					private _«propName»Subject: BehaviorSubject<«
											if(propType == "String" || propType == "Number" || propType == "Boolean"){
												propType.toFirstLower
											}else{
												propType
											}»> = new BehaviorSubject(«IF propType=="String"»"init"«ELSEIF propType=="Boolean"»false«ELSE»0«ENDIF»);
					public «propName»Subject: Observable<«
											if(propType == "String" || propType == "Number" || propType == "Boolean"){
												propType.toFirstLower
											}else{
												propType
											}»> = this._«propName»Subject.asObservable();
				«ENDFOR»
				
				// PROTECTED REGION ID «providerName.toFirstLower» ENABLED START
				// PROTECTED REGION END
				
				constructor(){
«««					Here is the place where code for EventListeners is inserted (manual inserting is done in /static/app/context/providers/[providerfile])
					// PROTECTED REGION ID constructor ENABLED START
					// PROTECTED REGION END
				}
				
«««				Add callback functions for the properties
				«FOR prop: propertyList»
					«var propName = prop.getNamedItem("name").nodeValue.toFirstLower»
					get«propName.toFirstUpper»(){
						
«««						Here can be some code for the timer be inserted (manual inserting is done in /static/app/context/providers/[providerfile])
						// PROTECTED REGION ID «propName.toFirstLower» ENABLED START
						// PROTECTED REGION END
						
						this._«propName»Subject.next(this.«propName»);
					}
				«ENDFOR»
				
				// PROTECTED REGION ID addMethods ENABLED START
				// PROTECTED REGION END
			}
		'''
	}
	
	override protected fileName(Parameters param) {		
		var providerName = param.providerName;
		
		'''«providerName.toFirstLower».service.ts'''
	}
	
	override protected folderName(Parameters param) {
		'''app/context/providers/'''
	}
}