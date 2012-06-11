var fs = require('fs');
var jasmine = require('jasmine-node');

var mmd = fs.readFileSync('mmd.js', 'utf-8');
eval(mmd);

describe('mmd', function() {
	
	describe('when defining a module without dependencies', function() {
	
		it('should not throw an error', function() {
			expect(function() {
				define('a', function() { return {} });
			}).not.toThrow();
		});
	
	});
	
	describe('when requiring an empty list of modules', function() {
		
		var requireSpy;
		
		beforeEach(function() {
			requireSpy = jasmine.createSpy('require');
			require([], requireSpy);
		});
		
		it('should call the callback', function() {
			expect(requireSpy).toHaveBeenCalled();
		});		
		
	});
		
	describe('when requiring a previously defined module', function() {
		
		var requireSpy, factorySpy, module;
		
		beforeEach(function() {
			requireSpy = jasmine.createSpy('require');
			factorySpy = jasmine.createSpy('define');
			
			module = {};
			define('module', function() { 
				factorySpy();
				return module; 
			});
			require(['module'], requireSpy);
		});
		
		it('should call the factory of the module', function() {
			expect(factorySpy).toHaveBeenCalled();
		});
		
		it('should call the callback', function() {
			expect(requireSpy).toHaveBeenCalled();
		});
		
		it('should pass the required module to the callback', function() {
			expect(requireSpy).toHaveBeenCalledWith(module);
		});			
		
	});	

	describe('when requiring a list of previously defined modules', function() {
		
		var requireSpy, module1, module2;
		
		beforeEach(function() {
			requireSpy = jasmine.createSpy('require');
			
			module1 = {};
			module2 = {};
			define('module1', function() { 
				return module1; 
			});
			define('module2', function() { 
				return module2; 
			});
			require(['module1', 'module2'], requireSpy);
		});
		
		it('should pass the required modules to the callback in the correct order', function() {
			expect(requireSpy.argsForCall[0][0]).toBe(module1);
			expect(requireSpy.argsForCall[0][1]).toBe(module2);
		});			
		
	});	
	
	describe('when requiring a module which is dependent on another previously defined module', function() {
	
		it('should pass the module dependency to the module factory', function() {
		
			var a = {}, spy = jasmine.createSpy('define');
		
			define('a', function() { return a; });
			define('b', ['a'], spy);
			require(['b'], function() {});
			
			expect(spy).toHaveBeenCalledWith(a);
		
		});
	
	});
	
});

jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());
jasmine.getEnv().execute();