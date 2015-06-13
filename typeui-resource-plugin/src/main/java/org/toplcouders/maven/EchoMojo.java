package org.toplcouders.maven;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;

/**
 * Custom TypeUI plugin for generate resources. This plugin generate javascript
 * and typescript d.ts files from your .ts files.
 * 
 * 
 * @goal echo
 * @requiresProject false
 * @author Gabor Kokeny
 */
public class EchoMojo extends AbstractMojo {

	/**
	 * Any Object to print out.
	 * 
	 * @parameter expression="${run.message}" default-value="Hello World..."
	 */
	private String message;

	@Override
	public void execute() throws MojoExecutionException, MojoFailureException {

		getLog().info("MOJO echo executed " + message);
	}

}
