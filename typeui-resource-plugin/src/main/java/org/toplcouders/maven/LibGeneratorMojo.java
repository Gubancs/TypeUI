package org.toplcouders.maven;

import java.io.File;
import java.io.FileFilter;
import java.util.List;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.toplcouders.maven.utils.FileUtils;

/**
 * Custom TypeUI plugin for generate resources. Generate the TypeScript
 * declartions into a single file.
 * 
 * 
 * @goal generate-lib
 * @requiresProject false
 * @author Gabor Kokeny
 */
public class LibGeneratorMojo extends AbstractMojo {

	/**
	 * The source directory that contains your .ts files
	 * 
	 * @parameter expression="${run.sourceDirectory}"
	 */
	private String sourceDirectory;

	/**
	 * The full qualifaied name of the destination file. The generated
	 * typescript definitions will be write to this output file.
	 * 
	 * @parameter expression="${run.outputFile}"
	 */
	private String outputFile;

	public LibGeneratorMojo() {
		super();
	}

	public void execute() throws MojoExecutionException, MojoFailureException {
		getLog().info(
				"********************************************************************************");
		getLog().info("***** Exectue javascript resource generator plugin");
		getLog().info(
				"********************************************************************************");
		getLog().info(" - Source directory: " + sourceDirectory);
		getLog().info(" - Output file :" + outputFile);

		if (outputFile == null || outputFile.isEmpty()) {
			throw new MojoFailureException(
					"The output file cannot be null or empty string");
		}

		final File out = new File(outputFile);

		if (out.exists()) {
			out.delete();
		}

		final File sourceDir = FileUtils.getDirectoryWitchCheck(
				sourceDirectory, "sourceDirectory");

		final FileFilter filter = FileUtils.newFileNameFilter("*d.ts");
		final List<File> sourceFiles = FileUtils.find(sourceDir, filter);

		for (File file : sourceFiles) {
			getLog().info(
					String.format("Found TypeScript definition file: %s",
							file.getName()));

			try {
				byte[] data = org.apache.commons.io.FileUtils
						.readFileToByteArray(file);
				org.apache.commons.io.FileUtils.writeByteArrayToFile(out, data,
						true);
			} catch (Exception e) {
				getLog().error("Could not read file into byte array", e);
			}
		}

	}

}