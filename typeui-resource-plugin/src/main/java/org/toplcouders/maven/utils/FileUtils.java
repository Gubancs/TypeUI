package org.toplcouders.maven.utils;

import java.io.File;
import java.io.FileFilter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.apache.maven.plugin.MojoFailureException;

public class FileUtils {

	public static File getDirectoryWitchCheck(String directoryPath,
			String paramName) throws MojoFailureException {
		return FileUtils.getDirectoryWitchCheck(directoryPath, paramName, true);
	}
	public static File getDirectoryWitchCheck(String directoryPath,
			String paramName, boolean required) throws MojoFailureException {
		if (directoryPath == null || directoryPath.isEmpty()) {
			throw new MojoFailureException(
					String.format(
							"%s directory cannot be null or empty string,please check the configuration in your pom.xml",
							paramName));
		}

		File dir = new File(directoryPath);

		if (!dir.exists() && required) {
			throw new MojoFailureException(
					String.format(
							"%s diectroy '%s' does not exists, please check the configuration in your pom.xml",
							paramName, directoryPath));
		}

		if (dir.exists() && !dir.isDirectory()) {
			throw new MojoFailureException(
					String.format(
							"'%s' is not a directory, please check the configuration in your pom.xml",
							directoryPath));
		}

		return dir;
	}

	public static List<File> find(File directory, FileFilter fileFilter) {
		return Collections.unmodifiableList(collectFiles(directory, fileFilter));
	}
	
	private static List<File> collectFiles(File directory, FileFilter fileFilter) {
		final List<File> files = new ArrayList<File>();

		for (File file : directory.listFiles(fileFilter)) {
			if (file.isDirectory()) {
				files.addAll(collectFiles(file, fileFilter));
			} else {
				files.add(file);
			}
		}
		return files;
	}

	public static FileFilter newFileNameFilter(String wildcard) {
		FileFilter fileFilter = new FileFilter() {
			@Override
			public boolean accept(File file) {
				boolean isMatch = FilenameUtils.wildcardMatch(file.getName(),
						wildcard);
				return file.isDirectory() || (isMatch);
			}
		};
		return fileFilter;
	}
}
