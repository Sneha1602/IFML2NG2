package ifml.generator.ng2.core

import IFML.Core.IFMLAction
import IFML.Core.IFMLModel
import IFML.Core.ViewElement
import ifml.generator.ng2.m2t.dynamic.app.views.ViewContainerGenerator
import ifml.generator.ng2.m2t.boilerplate.index.IndexGenerator
import ifml.generator.ng2.m2t.boilerplate.npm.NpmPackageGenerator
import ifml.generator.ng2.m2t.dynamic.app.RoutesGenerator
import IFML.Core.impl.ViewContainerImpl
import org.w3c.dom.Document
import ifml.generator.ng2.m2t.dynamic.app.services.NoolsServiceGenerator
import org.eclipse.uml2.uml.Model
import ifml.generator.ng2.m2t.dynamic.app.data.ExportClassGenerator
import org.eclipse.uml2.uml.internal.impl.ClassImpl
import ifml.generator.ng2.m2t.dynamic.app.dynamic.NavbarGenerator
import ifml.generator.ng2.m2t.dynamic.app.dynamic.SearchComponentGenerator
import IFML.Extensions.impl.ListImpl
import ifml.generator.ng2.m2t.dynamic.app.helper.PipeGenerator
import ifml.generator.ng2.m2t.dynamic.app.MainGenerator
import ifml.generator.ng2.m2t.dynamic.app.context.ContextServiceGenerator
import org.eclipse.emf.common.util.EList
import java.util.ArrayList

class GeneratorCore {

	// Instance Methods
	def generateCode(IFMLModel ifmlModel, Model umlModel, Document adaptModel, String adaptXsd) {
		if(new ModelValidator().validate(ifmlModel) && new ModelValidator().validateAdaptFile(adaptModel, adaptXsd)){
			// Extract model elements 
			val appName = ifmlModel.name.toFirstUpper;
			val viewElements = ifmlModel.interactionFlowModel.interactionFlowModelElements.filter(typeof(ViewElement));
			val windows = viewElements.filter(typeof(ViewContainerImpl));
			
			val classes = umlModel.allOwnedElements.filter(typeof(ClassImpl));
			
			//Replace the names of view elements in the adapt Model with IDs
			var insertedAdaptModel = new IFMLReferencer().insertIDReference(adaptModel, ifmlModel);			
						
			// Dynamic Generation
			// Export Classes from uml model
			classes.forEach[ c |
				new ExportClassGenerator().generateFile(c);
			]
			// View Controller
			windows.forEach [ w |
				// ViewController
				new ViewContainerGenerator().generateCode(w);
				// 
				w.viewElements.filter(typeof(ListImpl)).forEach[ l |
					new PipeGenerator().generateFile(l);
				]
			]
			// Dynamic Components
			
			new SearchComponentGenerator().generateCode(windows);
			new NavbarGenerator().generateCode(windows);
			// App
			new RoutesGenerator().generateFile(windows);
			new MainGenerator().generateFile(adaptModel);
			// Services
			new NoolsServiceGenerator().generateFile(insertedAdaptModel);
			
			// Context Service 
			new ContextServiceGenerator().generateFiles(adaptModel);
			
			// Boilerplate Generation
			// generate index.html
			new IndexGenerator().generateFile(appName);
			// generate package.json
			new NpmPackageGenerator().generateFile(appName);
		}
	}
}
